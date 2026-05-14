import { Cloud, RefreshCw, Server, Shield, Wifi, WifiOff } from "lucide-react";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { StaggeredAnimation } from "./animations/StaggeredAnimation";
import { useTranslation } from "react-i18next";

const PlatformAccess = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-gray-900/5 dark:from-primary-500/10 dark:to-gray-700/10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t("platform.title")}
          </h1>
          <h4 className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("platform.subtitle")}
          </h4>
        </div>
        <div className="flex flex-wrap justify-between gap-16 mb-8 opacity-100">
          <ScrollAnimation animation="slide-left" className="flex-1">
            <div className="mb-6">
              <h2 className="text-3xl mb-6 text-gray-900">
                {t("platform.deploymentTitle")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t("platform.deploymentDesc")}
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
                      {t("platform.online.title")}
                    </h4>
                    <p className="text-muted text-sm">
                      {t("platform.online.desc")}
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
                    <h4 className="font-semibold text-lg mb-2">
                      {" "}
                      {t("platform.onPremise.title")}
                    </h4>
                    <p className="text-muted text-sm">
                      {" "}
                      {t("platform.onPremise.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animation="slide-right"
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl flex-1 bg-bg-dark flex items-center justify-center py-16"
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
              <div className="bg-icon-gold flex flex-col items-center p-6 text-white rounded-2xl animate-[floatUp_2.5s_ease-in-out_infinite]">
                <Cloud size={42} strokeWidth={2.5} />
                <span>{t("platform.cloud")}</span>
              </div>
              <div className="mx-4 z-10">
                <RefreshCw
                  className="text-primary-300 animate-[spin_4s_linear_infinite]"
                  size={32}
                  strokeWidth={2}
                />
              </div>
              <div className=" bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center p-6 text-white  animate-[floatDown_2.5s_ease-in-out_infinite] z-10">
                <Server size={42} strokeWidth={2.5} />
                <span>{t("platform.server")}</span>
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
                {t("platform.sync.title")}
              </h2>
              <p className="md:max-w-3xl mx-auto text-lg">
                {t("platform.sync.desc")}
              </p>
            </div>
            <StaggeredAnimation
              animation="slide-bottom"
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                { icon: WifiOff, key: "offline" },
                { icon: Shield, key: "ownership" },
                { icon: RefreshCw, key: "autoSync" },
                { icon: Wifi, key: "onlineSync" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="h-full inline-flex flex-col justify-center items-center py-7 px-12 rounded-xl bg-black/10 text-center"
                >
                  <item.icon size={35} strokeWidth={1.8} />
                  {t(`platform.sync.${item.key}`)}
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default PlatformAccess;
