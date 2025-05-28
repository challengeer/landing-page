import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Challengeer',
  description: 'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.',
};

const date = new Date("2025-05-25").toLocaleDateString();

export default function PrivacyPolicy() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-8 md:py-16 w-full items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <div className="max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last Updated: {date}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to Challengeer. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this privacy policy carefully. By using our app, you consent to the practices described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            When you sign up, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Display name</li>
            <li>Username</li>
            <li>Profile picture</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">2.2 Authentication Information</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Google Sign-In credentials</li>
            <li>Firebase authentication tokens</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">2.3 Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            With your permission, we may access your device's contacts to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Find friends who are using the app</li>
            <li>Provide contact-based recommendations</li>
            <li>Improve social connections within the app</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">2.4 Usage Information</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Challenge participation data</li>
            <li>Activity streaks</li>
            <li>Challenge completion dates</li>
            <li>User interactions and social connections</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">2.5 Device and Technical Information</h3>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Push notification tokens (FCM tokens)</li>
            {/* <li>Device identifiers</li>
            <li>IP address</li>
            <li>App usage statistics</li> */}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use the collected information for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Providing and maintaining the app's functionality</li>
            <li>User authentication and account management</li>
            <li>Sending push notifications</li>
            <li>Facilitating social connections and friend recommendations</li>
            <li>Improving user experience and app performance</li>
            {/* <li>Analyzing app usage patterns</li> */}
            <li>Ensuring app security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>We use secure storage methods for sensitive information</li>
            <li>Authentication tokens are stored securely on your device</li>
            <li>Profile pictures and other media are stored securely</li>
            <li>We implement appropriate security measures to protect your personal information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Google Sign-In for authentication</li>
            <li>Firebase for backend services and storage</li>
            <li>Push notification services (Firebase Cloud Messaging)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. User Rights and Choices</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Access your personal information</li>
            <li>Update your profile information</li>
            {/* <li>Delete your account</li> */}
            {/* <li>Control push notification settings</li> */}
            {/* <li>Manage contact synchronization</li> */}
            {/* <li>Export your data</li> */}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Sharing and Disclosure</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Other users (as part of the social features)</li>
            <li>Service providers who assist in app operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Email: [Your Contact Email]</li>
            <li>Website: https://challengeer.app</li>
          </ul>
        </section> */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Consent</h2>
          <p className="text-gray-600 dark:text-gray-300">
            By using Challengeer, you consent to our privacy policy and agree to its terms.
          </p>
        </section>
      </div>
    </div>
  );
} 