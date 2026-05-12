import { Cloud, RefreshCw, Server, Shield, Wifi, WifiOff } from "lucide-react";
import { ScrollAnimation } from "./animations/ScrollAnimation"
import { StaggeredAnimation } from "./animations/StaggeredAnimation"

const PlatformAccess = () => {
    return (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Flexible Access – Web, Mobile, Online & On-Premise
              </h1>
              <h4 className="text-secondary text-lg">
                VamVam Uniport adapts to your needs with multiple access options
                and deployment flexibility
              </h4>""
          </div>
          <div className="flex flex-wrap justify-between gap-16 mb-8 opacity-100">
            <ScrollAnimation animation="slide-left" className="flex-1">
              <div className="mb-6">
                <h2 className="font-medium text-text-dark text-3xl mb-6 text-gray-900">
                  Flexible Deployment Options
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  VamVam Uniport is built to work in any environment, giving you
                  complete control over how and where your data is stored.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-1">
                  <div className="flex gap-4">
                    <div>
                      <div className="inline-flex p-2 rounded-xl bg-blue-300/60">
                        <Cloud className="text-blue-800" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Online (Cloud)
                      </h4>
                      <p className="text-muted text-sm">
                        Full access with automatic updates and highest
                        performance. Perfect for institutions with reliable
                        internet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-1">
                  <div className="flex gap-4">
                    <div>
                      <div className="inline-flex p-2 rounded-xl bg-purple-200">
                        <Server className="text-purple-700" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">On-Premise</h4>
                      <p className="text-muted text-sm">
                        Full control over your data with local hosting. Perfect
                        for institutions requiring maximum security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animation="slide-right"
              className="flex-1 rounded-xl bg-bg-dark flex items-center justify-center py-16"
            >
              <div className="relative flex items-center justify-center w-full max-w-xl">
                <svg
                  className="absolute w-full h-40 pointer-events-none"
                  viewBox="0 0 500 160"
                  fill="none"
                >
                  <path
                    d="M0 110 C140 10, 260 10, 310 110"
                    stroke="#E6A500"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    className="animate-dash z-40"
                  />
                </svg>
                <div className="bg-icon-gold flex flex-col items-center p-6 text-white rounded-xl animate-[floatUp_2.5s_ease-in-out_infinite]">
                  <Cloud size={42} strokeWidth={2.5} />
                  <span>Cloud</span>
                </div>
                <div className="mx-4 z-10">
                  <RefreshCw
                    className="text-primary-300 animate-[spin_4s_linear_infinite]"
                    size={32}
                    strokeWidth={2}
                  />
                </div>
                <div className="bg-card-bg flex flex-col items-center p-6 text-white rounded-xl animate-[floatDown_2.5s_ease-in-out_infinite] z-10">
                  <Server size={42} strokeWidth={2.5} />
                  <span>Server</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Synchronization Section */}
          <ScrollAnimation animation="scale">
            <div className=" bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center space-y-4 mb-8">
                <div className="inline-flex p-4 rounded-full bg-black/10">
                  <RefreshCw size={32} strokeWidth={2} />
                </div>
                <h2 className="text-3xl font-medium">
                  Seamless Synchronization
                </h2>
                <p className="md:max-w-3xl mx-auto text-lg">
                  Data automatically syncs between your Online and On-Premise
                  servers whenever internet is available
                </p>
              </div>
              <StaggeredAnimation
                animation="slide-bottom"
                staggerDelay={0.1}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                {[
                  { icon: WifiOff, text: "Work fully offline when needed" },
                  { icon: Shield, text: "Complete data ownership" },
                  { icon: RefreshCw, text: "Automatic two-way sync" },
                  { icon: Wifi, text: "Sync when online" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex flex-col justify-center items-center py-7 px-12 rounded-xl bg-black/7 text-center"
                  >
                    <item.icon size={35} strokeWidth={1.8} />
                    <p className="mt-2">{item.text}</p>
                  </div>
                ))}
              </StaggeredAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    )
}

export default PlatformAccess;