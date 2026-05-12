import { ExternalLink, Maximize2, Minimize, Share2 } from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "./animations/AnimatedBackground";

export default function SoftwarePreview() {
  const [fullscreen, setFullscreen] = useState(false);
 

  const handleShare = async () => {
    const url = window.location.href;

    try {
      // Mobile native share (best UX if supported)
      if (navigator.share) {
        await navigator.share({
          title: "Live System Preview",
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
      <AnimatedBackground variant="waves" />
      <div className=" max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h1 className="text-5xl text-secondary-50 mb-6 font-medium">
            See VamVam Uniport in Action
          </h1>{" "}
          <h4 className="text-xl/7 text-secondary-100 md:max-w-4xl mx-auto">
            Experience the power of our financial reporting and management
            system
          </h4>
        </div>
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
      </div>
    </div>
  );
}
