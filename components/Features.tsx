import {
  Building2,
  DollarSign,
  GraduationCap,
  LayoutDashboard,
  Smartphone,
  UserPlus,
} from "lucide-react";

import { ScrollAnimation } from "./animations/ScrollAnimation";
import { StaggeredAnimation } from "./animations/StaggeredAnimation";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Building2,
      title: t("features.multiCampus.title"),
      desc: t("features.multiCampus.desc"),
      color: "gold",
    },
    {
      icon: UserPlus,
      title: t("features.admission.title"),
      desc: t("features.admission.desc"),
      color: "dark",
    },
    {
      icon: GraduationCap,
      title: t("features.records.title"),
      desc: t("features.records.desc"),
      color: "gold",
    },
    {
      icon: Smartphone,
      title: t("features.mobile.title"),
      desc: t("features.mobile.desc"),
      color: "dark",
    },
    {
      icon: DollarSign,
      title: t("features.finance.title"),
      desc: t("features.finance.desc"),
      color: "gold",
    },
    {
      icon: LayoutDashboard,
      title: t("features.dashboard.title"),
      desc: t("features.dashboard.desc"),
      color: "gold",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* HEADER */}
      <div className="text-center mb-20">
        <ScrollAnimation animation="slide-left">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {t("features.title")}
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-right" delay={0.2}>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </ScrollAnimation>
      </div>

      {/* FEATURES GRID */}
      <StaggeredAnimation
        animation="scale"
        staggerDelay={0.1}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div
              className={`inline-flex items-center justify-center mb-6 rounded-xl w-16 h-16 ${
                feature.color === "gold"
                  ? "bg-gradient-to-br from-primary-500 to-primary-600"
                  : "bg-gradient-to-br from-gray-700 to-gray-900"
              }`}
            >
              <feature.icon className="text-white w-8 h-8" />
            </div>

            <h4 className="text-xl mb-3 text-gray-900 dark:text-white">
              {feature.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </StaggeredAnimation>

      {/* CTA */}
      <ScrollAnimation animation="slide-bottom" className="text-center mt-20">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("features.ready")}
        </p>

        <Button size="lg" className="mt-4">
          {t("features.cta")}
        </Button>
      </ScrollAnimation>
    </div>
  );
};

export default Features;