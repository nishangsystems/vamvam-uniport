"use client";

import Button from "../components/ui/Button";
import { ScrollAnimation } from "../components/animations/ScrollAnimation";
import { StaggeredAnimation } from "../components/animations/StaggeredAnimation";
import {
  Award,
  BookOpen,
  Building,
  Building2,
  CircleCheckBig,
  CreditCard,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Pause,
  Phone,
  Play,
  Quote,
  Settings,
  SquareUserRound,
  Star,
  UserCheck,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { useRef, useState } from "react";
import SoftwarePreview from "../components/SoftwarePreview";
import DashboardDemo from "../components/DashboardDemo";
import Features from "../components/Features";
import PlatformAccess from "../components/PlatformAccess";
import appImage from "../assets/app-preview.png";
import AnimatedBackground from "@/components/animations/background/AnimatedBackground";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ContactFormModal from "@/components/ContactFormModal";

const HomePage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "student" | "parent" | "teacher" | "admin"
  >("student");
  const [activeTabTestimony, setActiveTabTestimony] = useState<
    "school" | "student"
  >("school");

  // Get solutions items as array
  const solutionsItems = t("home.solutions.items", {
    returnObjects: true,
  }) as any[];
  // Get resources items as array
  const resourcesItems = t("home.resources.items", {
    returnObjects: true,
  }) as any[];
  // Get testimonials items as array
  const testimonialsItems = t("home.testimonials.items", {
    returnObjects: true,
  }) as any[];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Hero Section - Fade In */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
        <AnimatedBackground variant="orbs" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <ScrollAnimation animation="slide-bottom" className="flex-1">
              <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t("home.hero.title")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-1 mb-12 mt-8">
                <Button className="w-full md:w-auto">
                  <Download /> {t("home.hero.download")}
                </Button>
                <Button variant="secondary" className="w-full md:w-auto">
                  <Play /> {t("home.hero.demo")}
                </Button>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {t("home.hero.trusted")}{" "}
                </span>
                <StaggeredAnimation
                  animation="slide-bottom"
                  staggerDelay={0.1}
                  className="flex gap-3 items-center mt-4"
                >
                  {["BIAKA", "HIMS", "ST LOUIS", "DEX", "DAJA", "GRACIOUS"].map(
                    (name, idx) => (
                      <span
                        key={idx}
                        className="text-gray-400 dark:text-gray-500 hover:text-yellow-600 transition-colors cursor-pointer"
                      >
                        {name}
                      </span>
                    ),
                  )}
                </StaggeredAnimation>
              </div>
            </ScrollAnimation>

            <div className="relative flex-1">
              <ScrollAnimation animation="scale">
                <div className="flex">
                  <div className="animate-[floatUp_2.5s_ease-in-out_infinite]">
                    <Image
                      src="/images/app-preview.png"
                      alt="App Preview"
                      width={500}
                      height={800}
                      className="rounded-md h-full w-full object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* What is VamVam Uniport Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        <AnimatedBackground variant="particles" />

        <div className="max-w-7xl px-6 mx-auto py-20">
          <div className="text-center mb-20">
            <ScrollAnimation>
              <h1 className=" font-medium text-4xl md:text-5xl mb-6 dark:text-gray-300 text-gray-900">
                {t("home.about.title")}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t("home.about.description")}
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8">
            <div className="space-y-6">
              <StaggeredAnimation animation="slide-left" staggerDelay={0.1}>
                {[
                  {
                    title: t("home.about.features.centralized.title"),
                    desc: t("home.about.features.centralized.desc"),
                  },
                  {
                    title: t("home.about.features.efficiency.title"),
                    desc: t("home.about.features.efficiency.desc"),
                  },
                  {
                    title: t("home.about.features.accessibility.title"),
                    desc: t("home.about.features.accessibility.desc"),
                  },
                  {
                    title: t("home.about.features.solution.title"),
                    desc: t("home.about.features.solution.desc"),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 mb-6">
                    <div>
                      <CircleCheckBig color="#B87F00" />
                    </div>
                    <div>
                      <h2 className="font-medium text-xl mb-2 text-gray-500 dark:text-dark text-secondary-50">
                        {item.title}
                      </h2>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
              <div className="mt-12">
                <Button onClick={() => setIsModalOpen(true)}>
                  {" "}
                  {t("home.about.SeeHowItWorks")}
                </Button>
              </div>
            </div>

            <ScrollAnimation
  animation="slide-right"
  className="relative w-full max-w-2xl rounded-3xl overflow-hidden flex-1 aspect-video group"
>
  <video
    ref={videoRef}
    controls={false}
    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    onEnded={() => setIsPlaying(false)}
  >
    <source src="/videos/demo.mp4" type="video/mp4" />
    {t("home.about.browserDoesNotSupport")}
  </video>
  
  {/* Custom Play/Pause Button - appears on hover or always visible */}
  <div 
    className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
    onClick={toggleVideoPlayback}
  >
    <div className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
      {isPlaying ? (
        <Pause className="text-primary-600 ml-0" size={44} />
      ) : (
        <Play className="text-primary-600 ml-1" size={44} />
      )}
    </div>
  </div>
  
  {/* Optional: Video title overlay (shown when video is not playing) */}
  {!isPlaying && (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
        <p className="text-2xl mb-2 font-bold">{t("home.about.videoTitle")}</p>
        <p className="text-lg">{t("home.about.videoSubtitle")}</p>
      </div>
    </div>
  )}
</ScrollAnimation>

          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <SoftwarePreview />
      </section>
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {" "}
        <DashboardDemo />
      </section>

      {/* Powerful Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <Features />
      </section>

      {/* Flexible Access Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <PlatformAccess />
      </section>

      {/* Account Types Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {t("home.accountTypes.title")}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-secondary-100 text-lg">
                {t("home.accountTypes.subtitle")}
              </h4>
            </ScrollAnimation>
          </div>
          <div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveTab("student")}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium cursor-pointer  ${activeTab === "student" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <GraduationCap size={20} />{" "}
                {t("home.accountTypes.student.title")}
              </button>
              <button
                onClick={() => setActiveTab("teacher")}
                className={`space-x-3 transition-all  text-black shadow-lg inline-flex items-center gap-2 px-4 py-3 rounded-2xl  font-medium cursor-pointer ${activeTab === "teacher" ? "bg-gradient-to-r from-green-500 to-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <UserCheck size={20} />
                {t("home.accountTypes.teacher.title")}
              </button>
              <button
                onClick={() => setActiveTab("parent")}
                className={`inline-flex items-center gap-2 px-4 py-3  rounded-2xl p-8 shadow-2xl font-medium cursor-pointer   ${activeTab === "parent" ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <Users size={20} />
                {t("home.accountTypes.parent.title")}
              </button>

              <button
                onClick={() => setActiveTab("admin")}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-2xl shadow-lg  transition-all font-medium cursor-pointer   ${activeTab === "admin" ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white " : "bg-gray-200 text-gray-700"}`}
              >
                <Building2 size={20} /> {t("home.accountTypes.admin.title")}
              </button>
            </div>
            <ScrollAnimation animation="fade" threshold={0.1}>
              {activeTab === "student" && (
                <div className=" mt-20">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex-1">
                      <div className="inline-flex bg-blue-500 p-4 rounded-xl mb-4">
                        <GraduationCap size={40} />
                      </div>
                      <h2 className="text-3xl font-medium mb-4">
                        {t("home.accountTypes.student.title")}
                      </h2>
                      <p className="text-secondary-200 text-lg mb-8">
                        {t("home.accountTypes.student.subtitle")}
                      </p>
                      <div className="space-y-5">
                        {(
                          t("home.accountTypes.student.features", {
                            returnObjects: true,
                          }) as string[]
                        ).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CircleCheckBig className="text-blue-500" />
                            <p className="text-secondary-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-3xl bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 p-10">
                        <div className="rounded-xl bg-white p-4">
                          <div className="flex items-center gap-2">
                            <div className="inline-flex bg-blue-500 p-4 rounded-xl mb-4">
                              <GraduationCap size={40} />
                            </div>
                            <div className="w-full space-y-0.5">
                              <div className="h-3.5 w-[60%] bg-secondary rounded-xs"></div>
                              <div className="h-2.5 w-[40%] bg-primary rounded-xs"></div>
                            </div>
                          </div>
                          <div className="h-0.5 w-full bg-gray-300 my-3"></div>
                          <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="rounded-md bg-gray-50 p-3 animate-[bounce_8s_ease-in-out_infinite]"
                              >
                                <div className="rounded-md bg-gray-200 w-15 h-15 mb-2"></div>
                                <div className="h-2.5 w-full bg-secondary rounded-sm mb-1"></div>
                                <div className="h-1.5 w-full bg-primary rounded-sm"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "teacher" && (
                <div className=" mt-20">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex-1">
                      <div className="inline-flex bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl mb-4">
                        <Users size={40} />
                      </div>
                      <h2 className="text-3xl font-medium mb-4">
                        {t("home.accountTypes.teacher.title")}
                      </h2>
                      <p className="text-secondary-200 text-lg mb-8">
                        {t("home.accountTypes.teacher.subtitle")}
                      </p>
                      <div className="space-y-5">
                        {(
                          t("home.accountTypes.teacher.features", {
                            returnObjects: true,
                          }) as string[]
                        ).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CircleCheckBig className="text-blue-500" />
                            <p className="text-secondary-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl ">
                        <div className="rounded-xl bg-white p-4">
                          <div className="flex items-center gap-2">
                            <div className="inline-flex bg-green-500 p-4 rounded-full mb-4">
                              <Users size={40} />
                            </div>
                            <div className="w-full space-y-0.5">
                              <div className="h-3.5 w-[60%] bg-secondary rounded-xs"></div>
                              <div className="h-2.5 w-[40%] bg-primary rounded-xs"></div>
                            </div>
                          </div>
                          <div className="h-0.5 w-full bg-gray-300 my-3"></div>
                          <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="rounded-md bg-gray-50 p-3 animate-[bounce_8s_ease-in-out_infinite]"
                              >
                                <div className="rounded-md bg-gray-200 w-15 h-15 mb-2"></div>
                                <div className="h-2.5 w-full bg-secondary rounded-sm mb-1"></div>
                                <div className="h-1.5 w-full bg-primary rounded-sm"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "parent" && (
                <div className=" mt-20">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex-1">
                      <div className="inline-flex  bg-gradient-to-r from-purple-500 to-purple-600  p-4 rounded-xl mb-4">
                        <Users size={40} />
                      </div>
                      <h2 className="text-3xl font-medium mb-4">
                        {t("home.accountTypes.parent.title")}
                      </h2>
                      <p className="text-secondary-200 text-lg mb-8">
                        {t("home.accountTypes.parent.subtitle")}
                      </p>
                      <div className="space-y-5">
                        {(
                          t("home.accountTypes.parent.features", {
                            returnObjects: true,
                          }) as string[]
                        ).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CircleCheckBig className="text-blue-500" />
                            <p className="text-secondary-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600  rounded-3xl p-8 shadow-2xl ">
                        <div className="rounded-xl bg-white p-4">
                          <div className="flex items-center gap-2">
                            <div className="inline-flex w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full mb-4">
                              <Users size={40} />
                            </div>
                            <div className="w-full space-y-0.5">
                              <div className="h-3.5 w-[60%] bg-secondary rounded-xs"></div>
                              <div className="h-2.5 w-[40%] bg-primary rounded-xs"></div>
                            </div>
                          </div>
                          <div className="h-0.5 w-full bg-gray-300 my-3"></div>
                          <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="rounded-md bg-gray-50 p-3 animate-[bounce_8s_ease-in-out_infinite]"
                              >
                                <div className="rounded-md bg-gray-200 w-15 h-15 mb-2"></div>
                                <div className="h-2.5 w-full bg-secondary rounded-sm mb-1"></div>
                                <div className="h-1.5 w-full bg-primary rounded-sm"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "admin" && (
                <div className=" mt-20">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex-1">
                      <div className="inline-flex bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-4 shadow-2xl mb-4">
                        <Users size={40} />
                      </div>
                      <h2 className="text-3xl font-medium mb-4">
                        {t("home.accountTypes.admin.title")}
                      </h2>
                      <p className="text-secondary-200 text-lg mb-8">
                        {t("home.accountTypes.admin.subtitle")}
                      </p>
                      <div className="space-y-5">
                        {(
                          t("home.accountTypes.admin.features", {
                            returnObjects: true,
                          }) as string[]
                        ).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CircleCheckBig className="text-blue-500" />
                            <p className="text-secondary-200">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br  bg-gradient-to-br from-primary-600 to-primary-500  rounded-3xl p-8 shadow-2xl ">
                        <div className="rounded-xl bg-white p-4">
                          <div className="flex items-center gap-2">
                            <div className="inline-flex  bg-gradient-to-br from-primary-600 to-primary-500  p-4 rounded-full mb-4">
                              <Users size={40} />
                            </div>
                            <div className="w-full space-y-0.5">
                              <div className="h-3.5 w-[60%] bg-secondary rounded-xs"></div>
                              <div className="h-2.5 w-[40%] bg-primary rounded-xs"></div>
                            </div>
                          </div>
                          <div className="h-0.5 w-full bg-gray-300 my-3"></div>
                          <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="rounded-md bg-gray-50 p-3 animate-[bounce_8s_ease-in-out_infinite]"
                              >
                                <div className="rounded-md bg-gray-200 w-15 h-15 mb-2"></div>
                                <div className="h-2.5 w-full bg-secondary rounded-sm mb-1"></div>
                                <div className="h-1.5 w-full bg-primary rounded-sm"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-center mt-20">
                <div className="inline-flex rounded-full bg-gray-50 px-8 py-2.5">
                  {t("home.accountTypes.all_four_supported")}
                  <span className="text-blue-500 mx-1">
                    {" "}
                    {t("home.accountTypes.on_premise")}
                  </span>
                  {t("home.accountTypes.and")}
                  <span className="text-blue-500 mx-1">
                    {" "}
                    {t("home.accountTypes.online_cloud")}
                  </span>
                  {t("home.accountTypes.deployments")}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div id="solutions" className="text-center mb-20">
            <h1 className="text-primary text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t("home.solutions.title")}
            </h1>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("home.solutions.subtitle")}
            </h4>
          </div>

          {/* Main solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {solutionsItems.map((solution, idx) => {
              const iconMap: Record<string, any> = {
                Users,
                BookOpen,
                Award,
                Settings,
                CreditCard,
              };
              const SolutionIcon = iconMap[solution.icon] || Users;
              const isLeftCard = idx % 2 === 0;

              return (
                <ScrollAnimation
                  key={idx}
                  animation={isLeftCard ? "slide-left" : "slide-right"}
                  threshold={0.3}
                  className="h-full"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div
                      className={`inline-block  flex items-center justify-center mb-6 bg-gradient-to-br ${isLeftCard ? " from-yellow-500 to-yellow-600" : "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800"} rounded-2xl p-4 mb-4`}
                    >
                      <SolutionIcon className="text-white" size={40} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-2xl mb-3 text-gray-900 dark:text-white">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        {solution.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4 mb-4 text-primary">
                      {solution.features.map(
                        (feature: string, fIdx: number) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                            <p className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                    <div className="h-px w-full bg-muted"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 mt-4 ">
                      👉 Problem it solves:
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      {solution.problemSolved}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Bottom Line Section */}
          <ScrollAnimation animation="scale" threshold={0.3}>
            <div className="text-center p-12 mb-20 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl shadow-2xl">
              <h2 className="text-4xl mb-2">
                {t("home.solutions.bottomLineTitle")}
              </h2>
              <p className="md:max-w-3xl text-xl mx-auto">
                {t("home.solutions.bottomLine")}
              </p>
            </div>
          </ScrollAnimation>

          {/* Resource Types Section */}
          <div id="resources">
            <div className="text-center mb-20">
              <ScrollAnimation animation="slide-left" threshold={0.3}>
                <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {t("home.resources.title")}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animation="slide-right"
                threshold={0.3}
                delay={0.2}
              >
                <h4 className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {t("home.resources.subtitle")}
                </h4>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {resourcesItems.map((resource, idx) => {
                const iconMap: Record<string, any> = {
                  SquareUserRound,
                  Users,
                  Building,
                  MessageSquare,
                  Wallet,
                  Database,
                };
                const ResourceIcon = iconMap[resource.icon] || SquareUserRound;

                return (
                  <ScrollAnimation
                    key={idx}
                    animation="scale"
                    threshold={0.3}
                    delay={idx * 0.05}
                    className="h-full"
                  >
                    <div className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4">
                        <ResourceIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {resource.subtitle}
                        </p>
                      </div>
                      <div className="space-y-2 mb-4">
                        {resource.features.map(
                          (feature: string, fIdx: number) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <div className="text-primary-600 mr-1.5 mt-0.5 text-xs"></div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                {feature}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700"></div>
                      <div className="h-px w-full bg-muted">
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                          {resource.note}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
            {/* <div className="flex justify-center items-center mt-20">
              <div className="inline-block bg-gray-900 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center ">
                <h2 className="text-gray-100 dark:text-white text-lg mb-4">
                  {t("home.resources.access")}
                </h2>
                <Button className="mt-2"> {t("home.resources.cta")}</Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <AnimatedBackground variant="waves" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                {t("home.trusted.title")}
              </h2>
              <p className=" text-gray-600 mb-8 text-center">
                {t("home.trusted.subtitle")}
              </p>
              <div className="flex items-center justify-center gap-12 mt-8">
                <div className="text-center">
                  <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                    10+
                  </h1>
                  <p className="text-gray-600">
                    {t("home.trusted.institutions")}
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                    20,000+
                  </h1>
                  <p className="text-gray-600">{t("home.trusted.students")}</p>
                </div>
                <div className="text-center">
                  <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                    98%
                  </h1>
                  <p className="text-gray-600">
                    {t("home.trusted.satisfaction")}
                  </p>
                </div>
              </div>
            </div>
            <StaggeredAnimation
              animation="slide-left"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { initials: "B", title: "BIAKA" },
                { initials: "H", title: "HIMS" },
                { initials: "S", title: "ST LOUIS" },
                { initials: "D", title: "DEX" },
                { initials: "D", title: "DAJA" },
                { initials: "G", title: "GRACIOUS" },
                { initials: "B", title: "BAPTIST SCHOOL" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all group cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center text-white text-xl">
                      {item.initials}
                    </div>
                    <p className="text-secondary-200 text-lg group-hover:text-primary-600 transition-colors font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
            <div className="text-gray-600 mt-12 text-center">
              From primary schools to universities across Cameroon, Nigeria, and
              beyond
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <AnimatedBackground variant="orbs" />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
              {t("home.testimonials.title")}
            </h1>
            <p className="text-secondary-200 text-xl">
              {t("home.testimonials.subtitle")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="inline-flex justify-center items-center bg-white rounded-full p-2">
              <button
                onClick={() => setActiveTabTestimony("school")}
                className={`font-medium px-8 py-3 ${activeTabTestimony === "school" ? "px-8 py-3 rounded-full transition-all bg-gradient-to-r from-primary-600 to-primary-500 text-black" : "text-secondary-200"}`}
              >
                {t("home.testimonials.schoolTab")}
              </button>
              <button
                onClick={() => setActiveTabTestimony("student")}
                className={`font-medium px-8 py-3 ${activeTabTestimony === "student" ? "px-8 py-3 rounded-full transition-all bg-gradient-to-r from-primary-600 to-primary-500 text-black" : "text-secondary-200"}`}
              >
                {t("home.testimonials.studentTab")}
              </button>
            </div>
          </div>
          <div>
            {activeTabTestimony === "school" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {testimonialsItems.map((item, index) => (
                  <div
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    key={index}
                  >
                    <Quote size={48} className="text-primary-500" />
                    <div className="flex gap-1 my-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`${
                            i <= Math.floor(item.rating)
                              ? "fill-primary-500 text-primary-500"
                              : i === Math.ceil(item.rating) &&
                                  item.rating % 1 !== 0
                                ? "fill-primary-500/50 text-primary-500"
                                : "fill-gray-200 text-gray-200"
                          }`}
                          size={20}
                        />
                      ))}
                    </div>

                    <p className="text-secondary-100 leading-relaxed italic text-md mb-6">
                      {item.desc}
                    </p>

                    <div className="h-[0.4px] w-full bg-gray-100 my-4"></div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-gray-900">{item.name}</p>
                        <p className="text-sm text-secondary-200">
                          {item.title}
                        </p>
                        <p className="text-sm text-primary-600 font-medium">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 bg-bg-dark rounded-3xl  ">
            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-3">
              <div>
                <h1 className="text-white text-3xl font-medium mb-4">
                  {t("home.testimonials.videoTitle")}
                </h1>
                <p className="text-gray-300 mb-6">
                  {t("home.testimonials.videoDesc")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      10+
                    </h1>
                    <p className="text-gray-400 text-sm">
                      {t("home.trusted.institutions")}
                    </p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      20,000+
                    </h1>
                    <p className="text-sm text-gray-400">
                      {t("home.trusted.students")}
                    </p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      98%
                    </h1>
                    <p className="text-gray-400 text-sm">Engagement Boost</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden aspect-video">
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                                                  {t("home.about.browserDoesNotSupport.")}

                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="text-primary-600 ml-1" size={44} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">
              {t("home.contact.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("home.contact.subtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center mb-8">
              <div className="flex justify-center">
                <MessageCircle
                  className="text-green-500"
                  size={70}
                  strokeWidth={2}
                />
              </div>
              <h2 className="text-3xl mb-4 text-gray-900 dark:text-white">
                {t("home.contact.whatsappTitle")}
              </h2>
              <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                {t("home.contact.whatsappDesc")}
              </h4>
              <Button size="lg" variant="success">
                <MessageCircle /> {t("home.contact.button")}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  type: t("home.contact.cards.phone.type"),
                  title: "+237 679 135 426",
                  description: t("home.contact.cards.phone.description"),
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: "text-green-500",
                  iconBg: "bg-green-100 dark:bg-green-900/30 ",
                  href: "tel:+237xxxxxxxxx",
                },
                {
                  icon: Mail,
                  type: t("home.contact.cards.email.type"),
                  title: "sale@nishangSystems.org",
                  description: t("home.contact.cards.email.description"),
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: "text-blue-600 dark:text-blue-400",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30 ",
                  href: "mailto:sale@nishangSystems.org",
                },
                {
                  icon: MapPin,
                  type: t("home.contact.cards.office.type"),
                  title: "Bunduma, Buea, Cameroon",
                  description: t("home.contact.cards.office.description"),
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: " text-yellow-600 dark:text-yellow-400",
                  iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
                  href: "https://www.google.com/maps/search/?api=1&query=Bunduma+Buea+Cameroon",
                },
                {
                  icon: MessageCircle,
                  type: "WhatsApp",
                  description: t("home.contact.cards.whatsapp.description"),
                  desc2: t("home.contact.cards.whatsapp.desc2"),
                  bg: "bg-gradient-to-br from-green-500 to-green-600",
                  iconColor: "text-white",
                  iconBg: "bg-white/20 backdrop-blur-sm ",
                  href: "https://wa.me/237679135426",
                },
              ].map((contact, index) => {
                const isExternal =
                  contact.type === "Office" || contact.type === "WhatsApp";

                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all mt-12 text-center space-y-2 ${contact.bg}`}
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl justify-center ${contact.iconBg}`}
                    >
                      <contact.icon
                        className={`${contact.iconColor}`}
                        size={40}
                      />
                    </div>
                    <h2 className="font-medium text-xl text-gray-900 dark:text-white ">
                      {contact.type}
                    </h2>
                    <h2 className="font-medium text-gray-600 dark:text-gray-400 text-sm break-all ">
                      {contact.title}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {contact.description}
                    </p>
                    {contact.desc2 && (
                      <p className="text-primary-400 text-xs font-medium">
                        {contact.desc2}
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HomePage;
