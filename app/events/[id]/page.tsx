import { Metadata } from "next";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.messnightlife.com";

function formatPrice(price: number, currency: string): string {
  const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    ILS: "₪",
    JPY: "¥",
    CAD: "C$",
    AUD: "A$",
  };

  const symbol = currencySymbols[currency] || currency + " ";
  const formattedPrice = price % 1 === 0 ? price.toString() : price.toFixed(2);

  // Put symbol before or after based on currency
  if (currency === "ILS" || currency === "EUR") {
    return `${formattedPrice}${symbol}`;
  }
  return `${symbol}${formattedPrice}`;
}

interface Event {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time?: string;
  location: string;
  venue_name: string;
  venue_address?: string;
  image_url?: string;
  media_urls?: string[];
  price?: number;
  currency?: string;
  category?: string;
  organizer?: {
    username: string;
    full_name?: string;
  };
}

async function getEvent(id: string): Promise<Event | null> {
  try {
    const res = await fetch(`${API_URL}/api/v1/events/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return {
      title: "Event Not Found - Mess",
    };
  }

  const eventDate = new Date(event.start_time).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const imageUrl = event.image_url || event.media_urls?.[0];
  const description = event.description
    ? event.description.slice(0, 150)
    : `${eventDate} at ${event.venue_name || event.location}`;

  return {
    title: `${event.title} - Mess`,
    description,
    openGraph: {
      title: event.title,
      description,
      type: "website",
      url: `https://messnightlife.com/events/${id}`,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: event.title }] : [],
      siteName: "Mess",
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function EventPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.start_time);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const imageUrl = event.image_url || event.media_urls?.[0];
  const deepLink = `nightlife://events/${id}`;
  const locationDisplay = event.venue_name || event.location;
  const addressDisplay = event.venue_address || event.location;

  return (
    <main className="min-h-screen bg-black">
      {/* Header Image */}
      <div className="relative w-full aspect-[16/10] max-h-[50vh]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
            <span className="text-7xl">🎉</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-lg mx-auto px-5 -mt-16 relative z-10 pb-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6">
          {event.title}
        </h1>

        {/* Event Info Cards */}
        <div className="space-y-3 mb-8">
          {/* Date & Time */}
          <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur rounded-xl p-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">{formattedDate}</p>
              <p className="text-cyan-400 text-sm">{formattedTime}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur rounded-xl p-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">{locationDisplay}</p>
              {addressDisplay !== locationDisplay && (
                <p className="text-gray-400 text-sm">{addressDisplay}</p>
              )}
            </div>
          </div>

          {/* Price */}
          {event.price !== undefined && event.price > 0 && (
            <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">
                  {formatPrice(Number(event.price), event.currency || "USD")}
                </p>
                <p className="text-gray-400 text-sm">Ticket price</p>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        {event.description && (
          <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
            {event.description}
          </p>
        )}

        {/* Open in App Button */}
        <a
          href={deepLink}
          className="block w-full bg-cyan-500 hover:bg-cyan-400 text-black text-center py-4 rounded-xl font-semibold text-lg transition-colors"
        >
          Open in App
        </a>

        {/* Download Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">Don't have the app?</p>
          <div className="flex gap-3">
            <a
              href="https://apps.apple.com/app/mess-nightlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mess.nightlife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-10 text-center">
          <span className="text-xl font-bold text-cyan-400">Mess</span>
        </div>
      </div>
    </main>
  );
}
