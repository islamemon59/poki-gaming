import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import Meta from "../../../Components/Meta/Meta";

const PrivacyPolicy = () => {
  useDynamicTitle("Privacy Policy");
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#1a1a1a] text-white px-6 py-10"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2b0000 100%)",
      }}
    >
      <Meta description={"Keeping your information safe is not just something we have to do — it’s how we operate. This Privacy Policy explains what information we collect, why we collect it, how we use it, and how we protect it."}>
      </Meta>
      {/* Header + Logo */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
        >
          <img className="w-34" src={logo} alt="Logo" />
        </Link>
      </div>

      <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-tight">
        Privacy <span className="text-red-500">Policy</span>
      </h1>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 lg:p-12 border border-red-600/20">
        {/* Intro */}
        <section className="mb-8 space-y-4 text-gray-200 leading-relaxed">
          <p>
            At{" "}
            <Link
              to="https://innliv.com/"
              className="text-red-500 font-semibold underline transition-all duration-300"
            >
              innliv.com
            </Link>
            , we truly value your trust when you play our games and use our
            services. Keeping your information safe is not just something we
            have to do — it’s how we operate. This Privacy Policy explains what
            information we collect, why we collect it, how we use it, and how we
            protect it.
          </p>
          <p>
            By using our website, games, or services, you agree to the terms of
            this policy. We want you to know your data is safe and handled with
            respect. If you don’t agree, please refrain from using our services.
          </p>
        </section>

        {/* Sections */}
        <hr className="border-red-800/40 my-6" />

        {/* Why We Collect Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Why We Collect Data
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We collect user data for essential technical reasons that allow our
            systems to function properly. Without it, features like secure
            account logins, saving progress, and syncing between devices simply
            wouldn’t work. This data helps with support requests, system
            performance tracking, and improving gameplay experience.
          </p>
          <p className="mt-3 text-gray-300">
            Data is also used for threat detection, fraud prevention, and
            delivering updates or announcements. It’s all part of keeping the
            platform secure and efficient.
          </p>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            How We Use Your Data
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Data is used to authenticate accounts, track progress, fix errors,
            and improve features. We analyze system metrics to ensure stability
            and optimize performance. The collected data fuels backend
            reliability, personalized experience, and ongoing product
            improvement.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Children’s Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our Service does not address anyone under the age of 18
            (“Children”).
            <br />
            <br />
            We do not knowingly collect personally identifiable information from
            anyone under the age of 18. If you are a parent or guardian and you
            are aware that your Children has provided us with Personal Data,
            please contact us. If we become aware that we have collected
            Personal Data from children without verification of parental
            consent, we take steps to remove that information from our servers.
          </p>
        </section>

        {/* Advertising */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Advertising</h2>
          <p className="text-gray-300 leading-relaxed">
            We may display online advertisements and we may share aggregated and
            non-identifying information about our customers that we or our
            advertisers collect through your use of the Website and Services. We
            do not share personally identifiable information about individual
            customers with advertisers. In some instances, we may use this
            aggregated and non-identifying information to deliver tailored
            advertisements to the intended audience.
            <br />
            <br />
            We may also permit certain third-party companies to help us tailor
            advertising that we think may be of interest to users and to collect
            and use other data about User activities on the Website. These
            companies may deliver ads that might place cookies and otherwise
            track User behavior.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Cookies</h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies to understand user behavior and improve our services.
            Some cookies are from third parties for analytics and advertising.
            You can disable cookies in your browser, but some features may not
            function properly without them.
          </p>
        </section>

        {/* Third Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Third Party Services
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We work with partners for hosting, analytics, payments, and ads.
            These services may require limited data access. We ensure compliance
            with privacy laws and recommend reviewing their own privacy
            policies.
          </p>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Security</h2>
          <p className="text-gray-300 leading-relaxed">
            Protecting your information is our top priority. We use encryption,
            firewalls, and access controls. Although no system is 100% secure,
            we take all reasonable steps to safeguard your data.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy over time. Any significant changes will be
            announced via our website or email. Continued use means you accept
            the new terms.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions, feel free to{" "}
            <Link
              to="/contact-us"
              className="text-red-500 underline hover:text-white transition-all duration-300 font-semibold"
            >
              contact us
            </Link>{" "}
            at <span>innliv.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
