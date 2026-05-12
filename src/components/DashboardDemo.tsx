// components/motion/DashboardDemo.tsx
import { useEffect, useState } from "react";
import AnimatedBackground from "./animations/AnimatedBackground";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import Button from "./ui/Button";

export default function DashboardDemo() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://srv542037.hstgr.cloud:7004/admin/dashboard")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  // const stats = [
  //   { label: "Students", value: data?.students ?? "1,240" },
  //   { label: "Revenue", value: data?.revenue ?? "$48K" },
  //   { label: "Courses", value: data?.courses ?? "32" },
  //   { label: "Pending", value: data?.pending ?? "14" },
  // ];

  useEffect(() => {
    console.log("data", data)
  }, [data])

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <AnimatedBackground variant="grid" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-4">
                <Users />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Total Students
              </p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl text-gray-900 dark:text-white">
                  2,847
                </h3>
                <span className="text-sm text-green-600">+12%</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                <Users />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Total Revenue
              </p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl text-gray-900 dark:text-white">
                  XAF 45,678,900
                </h3>
                <span className="text-sm text-green-600">+23%</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Users />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Active Courses
              </p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl text-gray-900 dark:text-white">124</h3>
                <span className="text-sm text-green-600">+8%</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
                <Users />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Pending Payments
              </p>
              <div className="flex items-end justify-between">
                <h3 className="text-3xl text-gray-900 dark:text-white">356</h3>
                <span className="text-sm text-red-600">-5%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Real-Time Dashboard Analytics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Monitor your institution's performance at a glance with live data
            visualization
          </p>
        </div>
        <div className="flex justify-center">

        <Button>
             <div
            className="w-2 h-2 bg-black rounded-full"
            style={{ transform: "scale(1.09774)" }}
          ></div>
          <span className="font-medium">Live Data (Demo Mode)</span>
        </Button>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <TrendingUp
              size={24}
              stroke-width="2"
              className="lucide lucide-trending-up w-12 h-12 text-primary-600 mx-auto mb-4"
            />
            <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
              Performance tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Monitor key metrics and trends in real-time
            </p>
          </div>
          <div className="text-center">
            <Users
              size={24}
              stroke-width="2"
              className="lucide lucide-trending-up w-12 h-12 text-primary-600 mx-auto mb-4"
            />
            <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
              Student Insights

            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Track enrollment, attendance, and engagement


            </p>
          </div>
          <div className="text-center">
            <DollarSign
              size={24}
              stroke-width="2"
              className="lucide lucide-trending-up w-12 h-12 text-primary-600 mx-auto mb-4"
            />
            <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
              Financial Overview

            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Complete visibility into revenue and payments





            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
