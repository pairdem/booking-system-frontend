import { NavLink } from "react-router";

import applepay from "@/assets/icons/applepay.avif";
import bitpay from "@/assets/icons/bitpay.avif";
import discover from "@/assets/icons/discover.avif";
import facebook from "@/assets/icons/facebook.avif";
import googlepay from "@/assets/icons/gpay.avif";
import instagram from "@/assets/icons/instagram.avif";
import mastercard from "@/assets/icons/mastercard.avif";
import paypal from "@/assets/icons/paypal.avif";
import pinterest from "@/assets/icons/pinterest.avif";
import sofort from "@/assets/icons/sofort.avif";
import twitter from "@/assets/icons/twitter.avif";
import visa from "@/assets/icons/visa.avif";

const paymentIcons = [
  { icon: mastercard, link: "#" },
  { icon: bitpay, link: "#" },
  { icon: visa, link: "#" },
  { icon: discover, link: "#" },
  { icon: sofort, link: "#" },
  { icon: googlepay, link: "#" },
  { icon: applepay, link: "#" },
  { icon: paypal, link: "#" },
];

const socialIcons = [
  { icon: facebook, link: "https://facebook.com" },
  { icon: twitter, link: "https://twitter.com" },
  { icon: instagram, link: "https://instagram.com" },
  { icon: pinterest, link: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer className="bg-deepBlue text-sm text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-4">
        {/* Language & Currency */}
        <div className="space-y-6">
          <div>
            <p className="mb-2 font-medium">Language</p>
            <div className="flex w-48 items-center justify-between rounded-lg border px-4 py-2 text-white">
              <select className="w-48 rounded-md bg-deepBlue px-4 py-2 text-white">
                <option>🇬🇧 English (UK)</option>
                <option>🇫🇷 French</option>
              </select>
            </div>
          </div>
          <p className="mb-2 font-medium">Currency</p>
          <div className="flex w-48 items-center justify-between rounded-lg border px-4 py-2 text-white">
            <select className="w-48 rounded-md bg-deepBlue px-4 py-2 text-white">
              <option>U.S. Dollar ($)</option>
              <option>Euro (€)</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-[15px] font-mulish">
          <p className="mb-4 font-medium">Company</p>
          <NavLink to="/about" className={"text-[#FFFFFF99]"}>
            <p>About Us</p>
          </NavLink>
          <NavLink to="/blog" className={"text-[#FFFFFF99]"}>
            <p>Blog</p>
          </NavLink>
          <NavLink to="/pressroom" className={"text-[#FFFFFF99]"}>
            <p>Press Room</p>
          </NavLink>
          <NavLink to="/careers" className={"text-[#FFFFFF99]"}>
            <p>Careers</p>
          </NavLink>
        </div>

        {/* Help */}
        <div className="flex flex-col space-y-[15px]">
          <NavLink to="/help">
            <p className="mb-2 font-medium">Help</p>
          </NavLink>
          <NavLink to="/contact-us" className={"text-[#FFFFFF99] text-[15px]"}>
            <p>Contact us</p>
          </NavLink>
          <NavLink to="/faq" className={"text-[#FFFFFF99]"}>
            <p>FAQs</p>
          </NavLink>
          <NavLink to="/t&c" className={"text-[#FFFFFF99]"}>
            <p>Terms and conditions</p>
          </NavLink>
          <NavLink to="/pp" className={"text-[#FFFFFF99]"}>
            <p>Privacy policy</p>
          </NavLink>
          <NavLink to="/sitemap" className={"text-[#FFFFFF99]"}>
            <p>Sitemap</p>
          </NavLink>
        </div>

        {/* Payment Methods + Company Host */}
        <div className="space-y-6">
          <div>
            <p className="mb-2 font-medium">Payment methods possible</p>
            <div className="grid grid-cols-4 gap-2">
              {paymentIcons.map(({ icon, link }) => (
                <a
                  key={icon}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Payment Method"
                >
                  <img
                    src={icon}
                    alt="payment method"
                    className="h-auto w-10"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 font-medium">Company</p>
            <NavLink to="/host" className="text-[#9DAFC3] hover:underline">
              Host your property with us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex flex-col items-center justify-between bg-extremeBlue px-30 py-4 text-[#9DAFC3] text-xs md:flex-row">
        <p>Copyright 2021 Tour Guide. All Rights Reserved</p>
        <div className="mt-2 flex gap-4 md:mt-0">
          {socialIcons.map(({ icon, link }) => (
            <NavLink
              key={icon}
              to={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon} alt="social icon" className="h-10 w-10" />
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
