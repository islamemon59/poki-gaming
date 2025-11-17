import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  useDynamicTitle("Terms & Conditions");
  return (
    <div
      className="min-h-screen px-6 py-10 bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2b0000 100%)",
      }}
    >
      <Helmet>
        <meta
          name="description"
          content="Welcome to innliv.com. By using our website, games, or services, you agree to these Terms and Conditions. Please read them carefully before continuing."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://innliv.com/terms-and-condition" />
      </Helmet>
      {/* Header + Logo */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
        >
          <img className="w-34" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Content */}
      <main className="relative z-10 px-6 lg:px-20 max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-tight">
          Terms & <span className="text-red-500">Conditions</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8 text-gray-200 leading-relaxed">
          <p>
            Welcome to{" "}
            <Link
              to="https://innliv.com/"
              className="text-red-500 font-semibold"
            >
              innliv.com
            </Link>
            . By using our website, games, or services, you agree to these Terms
            and Conditions. Please read them carefully before continuing.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            1. Acceptance of These Terms
          </h2>
          <p>
            By creating an account, downloading our games, or using our
            services, you acknowledge that you have read and accepted these
            Terms. If you disagree, please stop using our services immediately.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            2. The Nature of Our Services
          </h2>
          <p>
            <span>innliv.com</span> develops and publishes games for
            entertainment. While we strive for excellence, occasional glitches
            or downtime may occur. You agree that you use our services at your
            own risk.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            3. Your Account and Responsibilities
          </h2>
          <p>
            You are responsible for maintaining your account security and
            activity. Misuse, harassment, or illegal actions may result in
            suspension or termination without notice.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            4. Ownership of Content and Intellectual Property
          </h2>
          <p>
            All game content, graphics, and code belong to{" "}
            <span>innliv.com</span> or its partners. You are granted a personal,
            non-transferable license for entertainment use only. Unauthorized
            reproduction or distribution is prohibited.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            5. Virtual Items and Purchases
          </h2>
          <p>
            Purchases within our services are final and non-refundable. Virtual
            items are licensed for your use, not sold as property. Prices may
            change, and fraudulent activity can lead to account suspension.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            6. Advertising and Third-Party Links
          </h2>
          <p>
            Our services may display ads or link to third-party sites. We are
            not responsible for their content or policies. Any interaction with
            third parties is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            7. Cookies and Data Practices
          </h2>
          <p>
            We use cookies to enhance performance and personalize experiences.
            By using our platform, you consent to their use as described in our
            Privacy Policy. Data transmission always carries some risk, and
            while we follow industry standards, <span>innliv.com</span> is not
            liable for breaches beyond reasonable control.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            8. Security Measures
          </h2>
          <p>
            We employ strong security practices, but no system is infallible. By
            using our platform, you accept responsibility for protecting your
            credentials and acknowledge that no service can guarantee absolute
            safety.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            9. Disclaimer of Warranties
          </h2>
          <p>
            Our services are provided “as is.” We make no guarantees of
            uninterrupted access, performance, or satisfaction. Use our services
            at your own discretion.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            10. Limitation of Liability
          </h2>
          <p>
            <span>innliv.com</span> is not liable for any direct, indirect, or
            consequential damages arising from your use of our services. All
            payments and purchases are final and non-refundable.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            11. Termination of Services
          </h2>
          <p>
            We reserve the right to terminate or suspend accounts for violations
            of these Terms or harmful activity. You may also discontinue your
            use at any time.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            12. Right to Withdraw
          </h2>
          <p>
            Refunds or withdrawals may be subject to platform policies. Once
            digital content is delivered or credited to your account, the
            transaction becomes final and non-refundable.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            13. Changes to These Terms
          </h2>
          <p>
            We may update these Terms periodically. Continued use of our
            services means you accept the new version.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            14. Entire Agreement
          </h2>
          <p>
            These Terms, along with our Privacy Policy, form the complete
            agreement between you and <span>innliv.com</span>.
          </p>

          <h2 className="text-2xl font-bold text-red-500 mt-10">
            15. Closing Note
          </h2>
          <p>
            These Terms exist to protect our community and ensure fair play. By
            using our platform, you help us maintain a safe and enjoyable gaming
            environment. Thank you for being part of <span>innliv.com</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition-all"
          >
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
