import { Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {[
            {
              title: "Product",
              submenu: [
                { item: "Features", link: "#features" },
                { item: "Solutions", link: "#solutions" },
                { item: "Pricing", link: "#pricing" },
                { item: "Security", link: "#seucrity" },
              ],
            },
            {
              title: "Solutions",
              submenu: [
                { item: "For Schools", link: "#schools" },
                { item: "For Students", link: "#students" },
                { item: "For Institutions", link: "#institutions" },
                { item: "For Universities", link: "#universities" },
              ],
            },
            {
              title: "Resources",
              submenu: [
                { item: "Blogs", link: "#blogs" },
                { item: "Help Center", link: "#help-center" },
                { item: "Guides", link: "#guides" },
                { item: "Webinars", link: "#webinars" },
              ],
            },
            {
              title: "Company",
              submenu: [
                { item: "About VamVam Uniport", link: "#about" },
                { item: "Careers", link: "#careers" },
                { item: "Contact", link: "#contact" },
                { item: "Partners", link: "#partners" },
              ],
            },
            {
              title: "Legal",
              submenu: [
                { item: "Privacy Policy", link: "#privacy-policy" },
                { item: "Terms of Service", link: "#terms-of-ervice" },
                { item: "Compliance", link: "#compliance" },
                { item: "Cookies Policy", link: "#cookies-policy" },
              ],
            },
          ].map((item, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">{item.title}</h4>
              <ul className="space-y-3">
                {item.submenu.map((submenu, idx) => (
                  <li                       key={idx}
>
                    {" "}
                    <a
                      href={submenu.link}
                      className="hover:text-yellow-500 transition-colors"
                    >
                      {submenu.item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white mb-4 flex items-center justify-center space-x-2">
              <Phone />
              <span>Download VamVam Uniport</span>
            </h4>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.vamvam.uniport"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                //   className="h-12"
                   width={160}
  height={60}
                />
              </a>
              <a
                href="https://apps.apple.com/app/vamvam-uniport"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                //   className="h-12"
                 width={160}
  height={60}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
              VamVam Uniport
            </p>
            <p className="text-sm text-gray-500">
              © 2026 Nishang Systems. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#facebook"
              className="hover:text-primary-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#linkeedIn"
              className="hover:text-primary-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" w-5 h-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>{" "}
            </a>
            <a
              href="#twitter"
              className="hover:text-primary-500 transition-colors"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className=" w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="#instagram"
              className="hover:text-primary-500 transition-colors"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a
              href="#twitter"
              className="hover:text-primary-500 transition-colors"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className=" w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="#twitter"
              className="hover:text-primary-500 transition-colors"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className=" w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="#instagram"
              className="hover:text-primary-500 transition-colors"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a
              href="#youtube"
              className="hover:text-primary-500 transition-colors"
            >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
