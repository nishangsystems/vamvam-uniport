"use client";
import { ExternalLink, Maximize2, Minimize, Share2 } from "lucide-react";
import { useState } from "react";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { StaggeredAnimation } from "./animations/StaggeredAnimation";
import AnimatedBackground from "./animations/background/AnimatedBackground";
import { useTranslation } from "react-i18next";

export default function SoftwarePreview() {
      const { t } = useTranslation();
  const [fullscreen, setFullscreen] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    try {
      // Mobile native share (best UX if supported)
      if (navigator.share) {
        await navigator.share({
          title: t("preview.title"),
          url,
        });
      } else {
        // fallback: copy to clipboard
        await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  // 🔗 Open external dashboard
  const handleOpenExternal = () => {
    window.open("https://srv542037.hstgr.cloud:7004/admin/dashboard", "_blank");
  };

  return (
    <div>
      <ScrollAnimation animation="slide-bottom" className="py-24 ">
        <AnimatedBackground variant="waves" />
        <div className=" max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t("preview.title")}
            </h1>{" "}
            <h4 className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ">
                           {t("preview.subtitle")}

            </h4>
          </div>
          <ScrollAnimation animation="scale" className="py-24 ">
            <div
              className={`rounded-2xl border border-white/10 bg-black ${
                fullscreen ? "fixed inset-0 z-50 rounded-none" : ""
              }`}
            >
              <div className="flex items-center justify-between px-4 py-2 rounded-2xl   bg-black/70 text-white text-sm">
                {/* <span>Live System Preview</span> */}
                <span></span>

                <div className="flex items-center gap-2">
                  <button
                    className="transform hover:scale-110 transition-transform duration-200 hover:bg-gray-300/40 rounded-lg p-2"
                    onClick={() => setFullscreen((prev) => !prev)}
                  >
                    {fullscreen ? (
                      <Minimize className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* External link */}
                  <button
                    className="transform hover:scale-110 transition-transform duration-200 hover:bg-gray-300/40 rounded-lg p-2"
                    onClick={handleOpenExternal}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  {/* Share */}
                  <button
                    className="transform hover:scale-110 transition-transform duration-200 hover:bg-gray-300/40 rounded-lg p-2"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <iframe
                src="https://srv542037.hstgr.cloud:7004/admin/dashboard"
                className={`w-full ${fullscreen ? "h-screen" : "h-[500px]"}`}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </ScrollAnimation>

          <StaggeredAnimation className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                key: "reports",
              },
              {
                key: "security",
              },
              {
                key: "multiCampus",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                  {t(`preview.cards.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t(`preview.cards.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </StaggeredAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
