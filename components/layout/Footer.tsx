import { Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Product",
              submenu: [
                { item: "Features", link: "#features" },
                { item: "Solutions", link: "#solutions" },
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
              title: "Legal",
              submenu: [
                {
                  item: "Privacy Policy",
                  link: "https://nishangsystems.org/vamvam-privacy-policy/",
                },
                {
                  item: "Terms of Service",
                  link: "https://nishangsystems.org/vamvam-privacy-policy/",
                },
              ],
            },
          ].map((item, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">{item.title}</h4>
              <ul className="space-y-3">
                {item.submenu.map((submenu, idx) => (
                  <li key={idx}>
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
                href="https://play.google.com/store/apps/details?id=com.vam.vam&hl=en"
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
                href="https://apps.apple.com/us/app/vamvam-uniport/id6736696941"
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
              href="https://www.tiktok.com/@nishang.systems?_r=1&_t=ZS-96NxOxov0VR"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M19.59 6.69a4.1 4.1 0 0 1-3.01-1.38l-.01-.01a4.08 4.08 0 0 1-1.17-2.86V2h-3.2v12.53a2.76 2.76 0 0 1-2.74 2.77 2.76 2.76 0 0 1-2.74-2.77c0-1.53 1.23-2.77 2.74-2.77.29 0 .57.05.83.13V9.16a6.01 6.01 0 0 0-5.13 1.79 5.98 5.98 0 0 0-1.48 4.09 5.99 5.99 0 0 0 5.78 6.03 6.01 6.01 0 0 0 5.78-6.03V9.67c.87.64 1.92 1.03 3.06 1.07V7.66c-.08-.01-.25-.01-.43-.01z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mbah-isaac-ishang-034732274/"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@nishang2434"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube w-5 h-5"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
