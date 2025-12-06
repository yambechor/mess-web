import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Mess",
  description: "Terms of Service for Mess Nightlife App",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: December 6, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Mess mobile application ("App"), you agree to be bound by these
              Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
              We reserve the right to modify these Terms at any time, and your continued use of the App
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              Mess is a nightlife event discovery and ticketing platform that allows users to discover
              events, purchase tickets, and connect with event organizers. Organizers can create and
              manage events, sell tickets, and engage with attendees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You must be at least 18 years old to create an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You agree to provide accurate and complete information when creating your account</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the App for any unlawful purpose</li>
              <li>Post false, misleading, or fraudulent content</li>
              <li>Harass, abuse, or threaten other users</li>
              <li>Upload content that infringes intellectual property rights</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Use automated systems to access the App without permission</li>
              <li>Create multiple accounts or impersonate others</li>
              <li>Post spam or unauthorized commercial communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Event Listings and Tickets</h2>
            <h3 className="text-lg font-medium text-white mb-2">For Attendees:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Ticket purchases are final unless the event is cancelled by the organizer</li>
              <li>Refund policies are determined by individual event organizers</li>
              <li>You must present a valid ticket (QR code) for entry to events</li>
              <li>Tickets are non-transferable unless explicitly allowed by the organizer</li>
            </ul>
            <h3 className="text-lg font-medium text-white mb-2">For Organizers:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You are responsible for the accuracy of event information</li>
              <li>You must have the right to host events at the listed venue</li>
              <li>You are responsible for fulfilling ticket purchases and managing refunds</li>
              <li>Platform fees apply to ticket sales as specified in your organizer agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Payments and Fees</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All payments are processed securely through Stripe</li>
              <li>Prices are displayed in the currency specified by the event organizer</li>
              <li>Service fees may apply to ticket purchases</li>
              <li>Organizers receive payouts minus platform commission as per their agreement</li>
              <li>We are not responsible for any bank fees or currency conversion charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Content and Intellectual Property</h2>
            <p className="mb-4">
              <strong>Your Content:</strong> You retain ownership of content you post but grant us a
              license to use, display, and distribute it in connection with our services.
            </p>
            <p>
              <strong>Our Content:</strong> The App, including its design, features, and content, is
              owned by Mess and protected by intellectual property laws. You may not copy, modify, or
              distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimers</h2>
            <p className="mb-4">
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The App will be uninterrupted or error-free</li>
              <li>The accuracy of event information provided by organizers</li>
              <li>The quality or safety of events listed on the platform</li>
              <li>That organizers will fulfill their obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MESS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL. OUR TOTAL LIABILITY SHALL
              NOT EXCEED THE AMOUNT YOU PAID TO US IN THE PAST 12 MONTHS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mess and its officers, directors, employees, and
              agents from any claims, damages, or expenses arising from your use of the App, violation
              of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Termination</h2>
            <p>
              We may suspend or terminate your account at any time for violations of these Terms or
              for any other reason at our discretion. Upon termination, your right to use the App
              ceases immediately. Provisions that by their nature should survive termination will
              remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of the App shall be resolved through
              binding arbitration in accordance with applicable arbitration rules. You agree to waive
              your right to a jury trial and to participate in class action lawsuits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              jurisdiction where Mess is incorporated, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions
              will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:legal@messnightlife.com" className="text-cyan-400 hover:underline">
                legal@messnightlife.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center space-x-6">
          <a href="/privacy" className="text-cyan-400 hover:underline">
            Privacy Policy
          </a>
          <a href="/" className="text-cyan-400 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
