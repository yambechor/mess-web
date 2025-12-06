import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">😕</div>
        <h1 className="text-3xl font-bold text-white mb-4">Event Not Found</h1>
        <p className="text-gray-400 mb-8">
          This event may have been removed or the link is incorrect.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-purple-600 transition-all"
        >
          Go to Home
        </Link>
      </div>
    </main>
  );
}
