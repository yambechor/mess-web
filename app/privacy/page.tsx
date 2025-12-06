import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mess",
  description: "Privacy Policy for Mess Nightlife App",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: December 6, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Mess ("we," "our," or "us"). We are committed to protecting your privacy
              and ensuring you have a positive experience when using our mobile application and services.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use the Mess app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Account Information:</strong> Email address, username, password, and profile picture</li>
              <li><strong>Profile Information:</strong> Full name, bio, phone number (optional), and preferences</li>
              <li><strong>Location Data:</strong> With your permission, we collect location data to show nearby events</li>
              <li><strong>Payment Information:</strong> Payment details are processed securely through Stripe and are not stored on our servers</li>
              <li><strong>Content:</strong> Photos, videos, and other content you upload to events or your profile</li>
              <li><strong>Communications:</strong> Messages sent through our in-app chat feature</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you notifications about events, tickets, and updates</li>
              <li>Personalize your experience and show relevant events</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
            <p className="mb-4">We may share your information in the following situations:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>With Event Organizers:</strong> When you purchase tickets, organizers receive your name and email for event management</li>
              <li><strong>Service Providers:</strong> We share data with third parties who perform services on our behalf (payment processing, hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information. This includes encryption of data in transit and at rest, secure
              authentication, and regular security assessments. However, no method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access, update, or delete your personal information through your account settings</li>
              <li>Opt out of promotional communications</li>
              <li>Disable location services through your device settings</li>
              <li>Request a copy of your data</li>
              <li>Request deletion of your account and associated data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed
              to provide you services. We may retain certain information as required by law or for
              legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h2>
            <p>
              Our services are not intended for users under the age of 18. We do not knowingly collect
              personal information from children under 18. If we learn we have collected such information,
              we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Third-Party Services</h2>
            <p className="mb-4">Our app uses the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Firebase:</strong> For authentication and analytics</li>
              <li><strong>Google Maps:</strong> For location and venue information</li>
              <li><strong>AWS:</strong> For cloud hosting and storage</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:privacy@messnightlife.com" className="text-cyan-400 hover:underline">
                privacy@messnightlife.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <a href="/" className="text-cyan-400 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
