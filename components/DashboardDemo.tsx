"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  BookOpen,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import Button from "./ui/Button";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import AnimatedBackground from "./animations/background/AnimatedBackground";
import { useTranslation } from "react-i18next";
import ContactFormModal from "./ContactFormModal";

export default function DashboardDemo() {
  const [data, setData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://srv542037.hstgr.cloud:7004/admin/dashboard")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <ScrollAnimation animation="slide-bottom" className="py-24">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <AnimatedBackground variant="grid" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* TITLE */}
        <ScrollAnimation animation="slide-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t("dashboard.title")}
            </h2>
            <p className=" text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("dashboard.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        {/* STATS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4"><Users className=" w-6 h-6 text-white" /></div> }
            label={t("dashboard.stats.students")}
            value="2,847"
            change="+12%"
          />

          <StatCard
            icon={<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4"><DollarSign className=" w-6 h-6 text-white" /></div>}
            label={t("dashboard.stats.revenue")}
            value="XAF 45,678,900"
            change="+23%"
            color="green"
          />

          <StatCard
            icon={<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4"><BookOpen className=" w-6 h-6 text-white" /></div>}
            label={t("dashboard.stats.courses")}
            value="124"
            change="+8%"
            color="blue"
          />

          <StatCard
            icon={<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4"><Activity className=" w-6 h-6 text-white" /></div>}
            label={t("dashboard.stats.payments")}
            value="356"
            change="-5%"
            color="red"
          />
        </div>

        {/* LIVE BUTTON */}
        <div className="flex justify-center">
          <Button onClick={() => setIsModalOpen(true)}>
            <div
                  className="w-1.5 h-1.5 bg-black rounded-full animate-pulse-scale"
                ></div>
            <span>{t("dashboard.liveDemo")}</span>
          </Button>
        </div>

        {/* FEATURES */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <Feature
            icon={<TrendingUp className=" w-12 h-12 text-primary-600 mx-auto mb-4" />}
            title={t("dashboard.performance.title")}
            desc={t("dashboard.performance.desc")}
          />
          <Feature
            icon={<Users className=" w-12 h-12 text-primary-600 mx-auto mb-4" />}
            title={t("dashboard.students.title")}
            desc={t("dashboard.students.desc")}
          />
          <Feature
            icon={<DollarSign className=" w-12 h-12 text-primary-600 mx-auto mb-4" />}
            title={t("dashboard.finance.title")}
            desc={t("dashboard.finance.desc")}
          />
        </div>
      </div>
       <ContactFormModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </ScrollAnimation>
  );
}

/* helper components */
function StatCard({ icon, label, value, change }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <div className="mb-3">{icon}</div>
      <p className=" dark:text-gray-400 mb-2 text-sm text-gray-500">{label}</p>
      <div className="flex justify-between items-end">
        <h3 className="text-3xl text-gray-900 dark:text-white">{value}</h3>
        <span className="text-green-500 text-sm">{change}</span>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div>
      <div className="text-primary-600 mb-3">{icon}</div>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
    </div>
  );
}