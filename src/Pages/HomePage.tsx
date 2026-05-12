import Button from "../components/ui/Button";
import PageSEO from "../components/common/PageSEO";
import { ScrollAnimation } from "../components/animations/ScrollAnimation";
import { StaggeredAnimation } from "../components/animations/StaggeredAnimation";
import {
  Award,
  BookOpen,
  Building2,
  CircleCheckBig,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Quote,
  Settings,
  SquareUserRound,
  Star,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "../components/animations/AnimatedBackground";
import SoftwarePreview from "../components/SoftwarePreview";
import DashboardDemo from "../components/DashboardDemo";
import Features from "../components/Features";
import PlatformAccess from "../components/PlatformAccess";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "student" | "parent" | "teacher" | "admin"
  >("student");
  const [activeTabTestimony, setActiveTabTestimony] = useState<
    "school" | "student"
  >("school");

  return (
    <>
      <PageSEO
        title="Home"
        description="Welcome to VamVam Uniport - Your trusted university port platform"
      />

      {/* Hero Section - Fade In */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <ScrollAnimation animation="slide-left" className="flex-1">
              <h1 className="text-white text-6xl font-medium mb-5">
                Connect, Learn, and Grow Together with VamVam Uniport
              </h1>
              <h4 className="text-secondary-100 text-lg">
                The all-in-one platform that makes education engaging, seamless,
                and effective for schools, teachers, and students. Real-time
                collaboration, interactive tools, and powerful insights — all in
                one place.
              </h4>
              <div className="flex flex-col md:flex-row gap-3 md:gap-1 mb-12 mt-8">
                <Button className="w-full md:w-auto">
                  <Download /> Download
                </Button>
                <Button variant="secondary" className="w-full md:w-auto">
                  <Play /> Watch 2-Min Demo
                </Button>
              </div>
              <div className="bg-bg-light h-0.5"></div>
              <div className="mt-5">
                <span className="text-secondary-100 text-sm">
                  Trusted by leading institutions
                </span>
                <StaggeredAnimation
                  animation="slide-bottom"
                  staggerDelay={0.1}
                  className="flex gap-3 items-center mt-4"
                >
                  {["BIAKA", "HIMS", "ST LOUIS", "DEX", "DAJA", "GRACIOUS"].map(
                    (name, idx) => (
                      <h4 key={idx} className="text-secondary-200">
                        {name}
                      </h4>
                    ),
                  )}
                </StaggeredAnimation>
              </div>
            </ScrollAnimation>
            <div className="flex gap-3 relative flex-1">
              <div className="animate-[floatUp_2.5s_ease-in-out_infinite]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"
                  alt=""
                  className="rounded-md h-full w-full object-contain"
                />
              </div>
              <div className="animate-[floatDown_2.5s_ease-in-out_infinite]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"
                  alt=""
                  className="rounded-md h-full w-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-[bounce_8s_ease-in-out_infinite]">
                <Button size="lg">Mobile & Web Ready</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is VamVam Uniport Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl px-6 mx-auto py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-5xl text-secondary-50 mb-6 font-medium">
                What is VamVam Uniport?
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-xl/7 text-secondary-100 md:max-w-4xl mx-auto">
                VamVam Uniport is a complete school management system designed
                to solve the common challenges institutions face with manual
                processes, scattered records, and inefficient communication.
              </h4>
            </ScrollAnimation>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8">
            <div className="space-y-6">
              <StaggeredAnimation animation="slide-left" staggerDelay={0.1}>
                {[
                  {
                    title: "Centralized Platform",
                    desc: "Manage student data, admissions, results, and payments all in one secure platform — no more scattered systems or paperwork.",
                  },
                  {
                    title: "Efficient Operations",
                    desc: "Reduce errors and delays with automated processes that help schools operate more efficiently and deliver better experiences.",
                  },
                  {
                    title: "Always Accessible",
                    desc: "Available on web and mobile, ensuring staff and students can access what they need, whenever they need it.",
                  },
                  {
                    title: "Complete Solution",
                    desc: "From admissions to academics, finance to communication — VamVam Uniport brings everything together in one powerful platform.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 mb-6">
                    <div>
                      <CircleCheckBig color="#B87F00" />
                    </div>
                    <div>
                      <h2 className="font-medium text-xl mb-2 text-secondary-50">
                        {item.title}
                      </h2>
                      <p className="text-secondary-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
              <div className="mt-12">
                <Button>See How It Works</Button>
              </div>
            </div>

            <ScrollAnimation
              animation="scale"
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden flex-1 aspect-video"
            >
              <video
                controls
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              >
                <source src="/videos/my-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play className="text-primary-600 ml-1" size={44} />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white dark:bg-gray-900 relative overflow-hidden">
        <SoftwarePreview />
      </section>
      <section>
        {" "}
        <DashboardDemo />
      </section>

      {/* Powerful Features Section */}

      <Features />

      {/* Flexible Access Section */}
      <PlatformAccess />

      {/* Account Types Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="mb-4 text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Built for Everyone Four Powerful Account Types
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-secondary-100 text-lg">
                VamVam Uniport provides a dedicated, role-specific experience
                for every member of the education ecosystem
              </h4>
            </ScrollAnimation>
          </div>
          <div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveTab("student")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${activeTab === "student" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <GraduationCap size={20} /> Student Account
              </button>
              <button
                onClick={() => setActiveTab("parent")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${activeTab === "parent" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <Users size={20} /> Parent Account
              </button>
              <button
                onClick={() => setActiveTab("teacher")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${activeTab === "teacher" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <UserCheck size={20} /> Teacher Account
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${activeTab === "admin" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                <Building2 size={20} /> Admin Account
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
                        Student Account
                      </h2>
                      <p className="text-secondary-200 text-lg mb-8">
                        Learning made engaging and organized
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Join live interactive classes with one tap
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Access recorded lectures and materials anytime
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Submit assignments and receive instant feedback
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Collaborate with classmates in real-time group rooms
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Track personal academic progress and performance
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-secondary-200">
                            Receive important announcements and reminders
                          </p>
                        </div>
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
                  <div className="flex justify-center mt-20">
                    <div className="inline-flex rounded-full bg-gray-50 px-8 py-2.5">
                      All four account types are fully supported on both
                      <span className="text-blue-500 mx-1">Online Cloud</span>
                      and
                      <span className="text-blue-500 mx-1">On-Premise</span>
                      deployments
                    </div>
                  </div>
                </div>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h1 className="text-primary text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Complete Solutions for Every Need
            </h1>
            <h4 className="text-secondary-100 text-lg">
              VamVam Uniport brings the entire university or school system into
              one digital platform
            </h4>
          </div>

          {/* Main solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Users,
                iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-6",
                title: "Student Management Solutions",
                subtitle:
                  "These focus on helping students access everything easily:",
                features: [
                  "View results and grades instantly (no manual checking)",
                  "Course registration directly on the platform",
                  "Timetables and schedules in one place",
                  "Personal student dashboard (academic tracking)",
                ],
                problemSolved:
                  "Removes paperwork, long queues, and confusion about courses or results.",
              },
              {
                icon: BookOpen,
                iconBg: "bg-icon-dark",
                title: "Teaching & Academic Delivery Solutions",
                subtitle: "For lecturers and academic staff:",
                features: [
                  "Upload lecture notes and materials",
                  "Share assignments digitally",
                  "Manage class lists and grading easily",
                ],
                problemSolved:
                  "No more manual distribution of materials or scattered communication.",
              },
              {
                icon: Award,
                iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-6",
                title: "Results & Performance Management",
                subtitle: "Automated and transparent academic tracking:",
                features: [
                  "Automated grading and result publishing",
                  "Continuous assessment tracking",
                  "Academic progress reports",
                ],
                problemSolved:
                  "Faster, more accurate result processing and transparency.",
              },
              {
                icon: Settings,
                iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-6",
                title: "Academic Administration Solutions",
                subtitle: "From broader system capabilities:",
                features: [
                  "Admission and application processing",
                  "Multi-campus or multi-department management",
                  "Student records and transcripts",
                ],
                problemSolved:
                  "Centralizes all school operations in one system.",
              },
              {
                icon: CreditCard,
                iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-6",
                title: "Financial & Payment Integration",
                subtitle: "If enabled in deployment:",
                features: ["Online fee payments", "Financial tracking"],
                problemSolved:
                  "Reduces manual payment handling and improves accountability.",
              },
              {
                icon: CreditCard,
                iconBg: "bg-icon-dark",
                title: "Centralized School Ecosystem",
                subtitle: "Everything is connected:",
                features: ["Students", "Lecturers", "Admin", "Parents"],
                problemSolved:
                  "Removes fragmentation (WhatsApp + paper + Excel + notice boards).",
              },
            ].map((solution, idx) => {
              // Determine if it's a left or right card based on index
              // Even indices (0,2,4) go to left side, odd indices (1,3,5) go to right side
              const isLeftCard = idx % 2 === 0;

              return (
                <ScrollAnimation
                  key={idx}
                  animation={isLeftCard ? "slide-left" : "slide-right"}
                  threshold={0.3}
                  className="h-full"
                >
                  <div className="  h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div
                      className={`inline-block ${solution.iconBg} rounded-2xl p-4 mb-4`}
                    >
                      <solution.icon className="text-white" size={40} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-2xl mb-3 text-gray-900 dark:text-white">
                        {solution.title}
                      </h4>
                      <p className="text-secondary-100 text-lg mb-4">
                        {solution.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4 mb-4 text-primary">
                      {solution.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                          <p className="text-secondary-200">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-px w-full bg-muted"></div>
                    <p className="text-secondary-200 text-xs mt-4 mb-2">
                      👉 Problem it solves:
                    </p>
                    <p className="text-secondary-100">
                      {solution.problemSolved}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Bottom Line Section */}
          <ScrollAnimation animation="scale" threshold={0.3}>
            <div className="text-center p-12 mb-20  bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl shadow-2xl">
              <h2 className="text-4xl  mb-2">Bottom Line</h2>
              <p className="md:max-w-3xl text-xl mx-auto">
                VamVam Uniport is solving one big problem: bringing the entire
                university or school system into one digital platform.
              </p>
            </div>
          </ScrollAnimation>

          {/* Resource Types Section */}
          <div>
            <div className="text-center mb-20">
              <ScrollAnimation animation="slide-left" threshold={0.3}>
                <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Comprehensive Resource Library
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animation="slide-right"
                threshold={0.3}
                delay={0.2}
              >
                <h4 className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Everything your institution needs, organized and accessible
                </h4>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: FileText,
                  title: "Academic Career",
                  subtitle: "These are directly used for learning:",
                  features: [
                    "Lecture notes (PDFs, slides, documents)",
                    "Assignments and coursework",
                    "Past questions and study materials",
                    "Course outlines / syllabus",
                  ],
                  note: "used by students and lecturers for day-to-day academic work.",
                },
                {
                  icon: Video,
                  title: "Digital Content & Media",
                  subtitle: "Interactive learning materials:",
                  features: [
                    "Uploaded videos or recorded lectures",
                    "Audio materials",
                    "Images or diagrams for teaching",
                  ],
                  note: "Helps making learning more interactive, not just text-based",
                },
                {
                  icon: SquareUserRound,
                  title: "Student Information Resources",
                  subtitle: "Comprehensive student data:",
                  features: [
                    "Student profiles",
                    "Academic History (results, GPA, transcripts)",
                    "Course registration records",
                  ],
                  note: "These are data resources used by both students and admin.",
                },
                {
                  icon: SquareUserRound,
                  title: "Staff & Lecturer Resources",
                  subtitle: "Faculty management tools:",
                  features: [
                    "Lecturer profiles",
                    "Teaching schedules",
                    "Course allocations",
                    "Uploaded teaching materials",
                  ],
                  note: "Helps manage who teaches what and when.",
                },
                {
                  icon: SquareUserRound,
                  title: "Administrative Resources",
                  subtitle: "Institutional management:",
                  features: [
                    "Admission records",
                    "Department and faculty data",
                    "Academic calendars",
                    "Class lists",
                  ],
                  note: "Used by school management to run operations.",
                },
                {
                  icon: SquareUserRound,
                  title: "Communication Resources",
                  subtitle: "Stay connected in real-time:",
                  features: [
                    "Announcements",
                    "Notifications",
                    "Messages between users",
                  ],
                  note: "Keep everyone informed in real time.",
                },
                {
                  icon: SquareUserRound,
                  title: "Financial Resources",
                  subtitle: "If enabled:",
                  features: ["Payment records", "Fee structures", "Receipts"],
                  note: "Supports financial tracking and transparency.",
                },
                {
                  icon: SquareUserRound,
                  title: "System Resources",
                  subtitle: "Backend Infrastructure:",
                  features: [
                    "Database for all users and activities",
                    "Access Roles (student, lecturer, admin, parent)",
                    "Permissions and security settings",
                  ],
                  note: "These are what keeps the system running smoothly.",
                },
              ].map((resource, idx) => (
                <ScrollAnimation
                  key={idx}
                  animation="scale"
                  threshold={0.3}
                  delay={idx * 0.05}
                  className="h-full"
                >
                  <div className="bg-card-bg border border-muted rounded-2xl p-5 h-full">
                    <div className="inline-block bg-icon-gold rounded-2xl p-3 mb-4">
                      <resource.icon className="text-white" size={25} />
                    </div>
                    <div>
                      <h4 className="text-secondary-50 text-lg font-semibold mb-2">
                        {resource.title}
                      </h4>
                      <p className="text-secondary-100 text-sm mb-2">
                        {resource.subtitle}
                      </p>
                    </div>
                    <div className="space-y-2 mb-4">
                      {resource.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                          <p className="text-secondary-200 text-sm">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="h-px w-full bg-muted"></div>
                    <p className="text-secondary-200 mt-2 text-xs italic">
                      {resource.note}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="flex justify-center items-center mt-20">
              <div className="inline-block bg-gray-900 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
                <h2 className="text-gray-100 dark:text-white text-lg mb-4">
                  Access all these resources from anywhere, anytime
                </h2>
                <Button className="mt-2">Explore Resources</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <AnimatedBackground variant="waves" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[0.5px] border-secondary">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div>
                <p className="text-secondary-200 text-center">
                  Join hundreds of institutions transforming education with
                  VamVam Uniport
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="text-center">
                    <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                      500+
                    </h1>
                    <p className="text-secondary-200">Institutions worldwide</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                      1M+
                    </h1>
                    <p className="text-secondary-200">Students daily</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-5xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                      98%
                    </h1>
                    <p className="text-secondary-200">Satisfaction rate</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    initials: "B",
                    title: "BIAKA",
                  },
                  {
                    initials: "H",
                    title: "HIMS",
                  },
                  {
                    initials: "S",
                    title: "ST LOUIS",
                  },
                  {
                    initials: "D",
                    title: "DEX",
                  },
                  {
                    initials: "D",
                    title: "DAJA",
                  },
                  {
                    initials: "G",
                    title: "GRACIOUS",
                  },
                  {
                    initials: "B",
                    title: "BAPTIST SCHOOL",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100 transition-all group cursor-pointer"
                  >
                    <div>
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full flex items-center justify-center text-white text-xl">
                        {item.initials}
                      </div>
                      <p className="text-secondary-200 text-lg  group-hover:text-primary-600 transition-colors font-medium">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-secondary-200 mt-5 text-center">
                From primary schools to universities across Cameroon, Nigeria,
                and beyond
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Real Voices from Schools and Students
            </h1>
            <p className="text-secondary-200 text-xl">
              See how VamVam Uniport is making a difference in education
            </p>
          </div>
          <div className="inset-0 bg-card-bg/10">
            <div className="flex items-center justify-center">
              <div className="inline-flex justify-center items-center bg-white rounded-full p-2">
                <button
                  onClick={() => setActiveTabTestimony("school")}
                  className={`font-medium px-8 py-3 ${activeTabTestimony === "school" ? "px-8 py-3 rounded-full transition-all bg-gradient-to-r from-primary-600 to-primary-500 text-black" : "text-secondary-200"}`}
                >
                  School & Administrators
                </button>
                <button
                  onClick={() => setActiveTabTestimony("student")}
                  className={`font-medium px-8 py-3 ${activeTabTestimony === "student" ? "px-8 py-3 rounded-full transition-all bg-gradient-to-r from-primary-600 to-primary-500 text-black" : "text-secondary-200"}`}
                >
                  Student
                </button>
              </div>
            </div>
            <div>
              {activeTabTestimony === "school" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      desc: "VamVam Uniport transformed how we deliver hybrid classes. Student engagement is up 40% and our administrative workload has been cut in half.",
                      name: "Dr. Aisha Bello",
                      title: "Principal",
                      institution: "BIAKA University",
                      rating: 5,
                    },
                    // Add more testimonials here for the other columns
                    {
                      desc: "The analytics and reporting features give us insights we never had before. Decision-making is now data-driven and efficient.",
                      name: "Prof. John Mensah",
                      title: "Dean of Academics",
                      institution: "HIMS College",
                      rating: 3.5,
                    },
                    {
                      desc: "The on-premise deployment option was perfect for our rural campus. We can work offline and sync when connected.",
                      name: "Sarah Kamara",
                      title: "IT Director",
                      institution: "ST LOUIS School",
                      rating: 5,
                    },
                  ].map((item, index) => (
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
                        "{item.desc}"
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
          </div>
          <div className="bg-bg-dark rounded-3xl flex items-center justify-center py-16 px-10 mt-20">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1 ">
                <h1 className="text-white text-3xl font-medium mb-4">
                  Watch Success Stories
                </h1>
                <p className="text-secondary-200">
                  Hear directly from educators and students about how VamVam
                  Uniport has transformed their educational experience.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      500+
                    </h1>
                    <p className="text-secondary-100 text-sm">Institutions</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      1M+
                    </h1>
                    <p className="text-secondary-100 text-sm">Students</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-500 text-4xl font-medium mb-1">
                      98%
                    </h1>
                    <p className="text-secondary-100 text-sm">
                      Engagement Boost{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden flex-1 aspect-video">
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                >
                  <source src="/videos/my-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
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
      </section>
      <section className="bg-bg-dark ">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-white text-5xl font-medium mb-5">
              Ready to Bring VamVam Uniport to Your Institution?
            </h1>
            <h4 className="text-secondary-100 text-lg md:max-w-2xl mx-auto">
              Get in touch with our team to learn how VamVam Uniport can
              transform your educational experience
            </h4>
          </div>
          <div className="md:max-w-5xl mx-auto">
            <div className="bg-card-bg-light rounded-xl p-8 mt-12 text-center space-y-7 text-white">
              <div className="flex justify-center">
                <MessageCircle
                  className="text-green-500"
                  size={70}
                  strokeWidth={2}
                />
              </div>
              <h2 className="font-medium text-3xl">Chat with us on WhatsApp</h2>
              <h4 className="text-secondary-200 text-xl md:max-w-2xl mx-auto">
                Get instant responses to your questions and learn more about
                VamVam Uniport
              </h4>
              <Button size="lg" variant="success">
                <MessageCircle /> Start WhatsApp Chat
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  type: "Phone",
                  title: "+237 xxx xxx xxx",
                  description: "Mon-Fri 6AM-6PM. WAT",
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: "text-green-500",
                  iconBg: "bg-green-100 dark:bg-green-900/30 ",
                },
                {
                  icon: Mail,
                  type: "Email",
                  title: "sale@nishangSystems.org",
                  description: "we respond within 24 hours on business days",
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: "text-blue-600 dark:text-blue-400",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30 ",
                },
                {
                  icon: MapPin,
                  type: "Office",
                  title: "Bunduma, Buea, Cameroon",
                  description: "Visit us during business hours",
                  bg: "bg-white dark:bg-gray-800",
                  iconColor: " text-yellow-600 dark:text-yellow-400",
                  iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
                },
                {
                  icon: MessageCircle,
                  type: "WhatsApp",
                  description: "Chat with us now",
                  desc2: "Instant responses",
                  bg: "bg-gradient-to-br from-green-500 to-green-600",
                  iconColor: "text-white",
                  iconBg: "bg-white/20 backdrop-blur-sm ",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`bg-card-bg-light rounded-xl p-8 mt-12 text-center space-y-2 ${contact.bg}`}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl justify-center ${contact.iconBg}`}
                  >
                    <contact.icon
                      className={`${contact.iconColor}`}
                      size={40}
                    />
                  </div>
                  <h2 className="font-medium text-xl text-white">
                    {contact.type}
                  </h2>
                  <h2 className="font-medium text-secondary-100 ">
                    {contact.title}
                  </h2>
                  <p className="text-secondary-100 text-xs">
                    {contact.description}
                  </p>
                  {contact.desc2 && (
                    <p className="text-primary-400 text-xs font-medium">
                      {contact.desc2}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
