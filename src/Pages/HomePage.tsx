import Button from "../components/ui/Button";
import PageSEO from "../components/common/PageSEO";
import { ScrollAnimation } from "../components/animations/ScrollAnimation";
import { StaggeredAnimation } from "../components/animations/StaggeredAnimation";
import {
  Award,
  BookOpen,
  Building2,
  CircleCheckBig,
  Cloud,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Quote,
  RefreshCw,
  Server,
  Settings,
  Shield,
  Smartphone,
  SquareUserRound,
  Star,
  UserCheck,
  UserPlus,
  Users,
  Video,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useState } from "react";

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
      <section className="bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <ScrollAnimation animation="slide-left" className="flex-1">
              <h1 className="text-white text-6xl font-medium mb-5">
                Connect, Learn, and Grow Together with VamVam Uniport
              </h1>
              <h4 className="text-secondary text-lg">
                The all-in-one platform that makes education engaging, seamless,
                and effective for schools, teachers, and students. Real-time
                collaboration, interactive tools, and powerful insights — all in
                one place.
              </h4>
            <div className="flex flex-col md:flex-row gap-3 mb-12 mt-8">
  <Button size="lg" className="w-full md:w-auto">
    <Download /> Download
  </Button>
  <Button variant="secondary" size="lg" className="w-full md:w-auto">
    <Play /> Watch 2-Min Demo
  </Button>
</div>
              <div className="bg-bg-light h-0.5"></div>
              <div className="mt-5">
                <span className="text-secondary text-sm">
                  Trusted by leading institutions
                </span>
                <StaggeredAnimation
                  animation="slide-bottom"
                  staggerDelay={0.1}
                  className="flex gap-3 items-center mt-4"
                >
                  {["BIAKA", "HIMS", "ST LOUIS", "DEX", "DAJA", "GRACIOUS"].map(
                    (name, idx) => (
                      <h4 key={idx} className="text-muted">
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
      <section>
        <div className="max-w-7xl px-6 mx-auto py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-5xl mb-6 font-medium">
                What is VamVam Uniport?
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-2xl/10 text-text-muted md:mx-64">
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
                  <div key={idx} className="flex gap-4">
                    <div>
                      <CircleCheckBig color="#B87F00" />
                    </div>
                    <div>
                      <h2 className="font-medium text-xl mb-2">{item.title}</h2>
                      <p className="text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
              <div className="mt-12">
                <Button size="lg">See How It Works</Button>
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

      {/* Powerful Features Section */}
      <section className="bg-bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-primary text-5xl">
                Powerful Features for Modern Education
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-muted mt-2 text-lg">
                Everything you need to run your institution smoothly, all in one
                platform
              </h4>
            </ScrollAnimation>
          </div>
          <StaggeredAnimation
            animation="scale"
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Building2,
                title: "Multi-Campus Support",
                desc: "Works for schools that have more than one campus, all under one system",
                color: "gold",
              },
              {
                icon: UserPlus,
                title: "Online Admission and Registration",
                desc: "Students can apply and register online without physical lines.",
                color: "dark",
              },
              {
                icon: GraduationCap,
                title: "Students Records & Academic Progress",
                desc: "Teachers and Administrators can record grades, track GPA and manage transcripts in one place",
                color: "gold",
              },
              {
                icon: Smartphone,
                title: "Mobile App for Students",
                desc: "Students can login, see their grades, announcements, class schedule and more from their phones.",
                color: "dark",
              },
              {
                icon: DollarSign,
                title: "Financial Management",
                desc: "School can track fees, payments, and generate financial reports",
                color: "gold",
              },
              {
                icon: LayoutDashboard,
                title: "Dashboard for Everyone",
                desc: "Separate dashboards for students, teachers, parents, finance staff and administrators",
                color: "gold",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-card-bg border border-muted rounded-xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`inline-block ${feature.color === "gold" ? "bg-icon-gold" : "bg-icon-dark"} rounded-2xl p-4 mb-4`}
                >
                  <feature.icon className="text-white" size={40} />
                </div>
                <div>
                  <h4 className="text-primary text-lg font-semibold mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </StaggeredAnimation>
          <ScrollAnimation
            animation="slide-bottom"
            className="text-center mt-20"
          >
            <h4 className="text-muted text-md mb-1">
              Ready to transform your institution?
            </h4>
            <Button size="lg" className="mt-4">
              Get Started with VamVam Uniport
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Flexible Access Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-5xl mb-4">
                Flexible Access – Web, Mobile, Online & On-Premise
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-secondary text-lg">
                VamVam Uniport adapts to your needs with multiple access options
                and deployment flexibility
              </h4>
            </ScrollAnimation>
          </div>
          <div className="flex flex-wrap justify-between gap-16 mb-8">
            <ScrollAnimation animation="slide-left" className="flex-1">
              <div className="mb-3">
                <h2 className="text-2xl font-medium text-text-dark mb-3">
                  Flexible Deployment Options
                </h2>
                <p className="text-muted">
                  VamVam Uniport is built to work in any environment, giving you
                  complete control over how and where your data is stored.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-1">
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
                <div className="rounded-xl p-6 transition duration-300 ease-in-out hover:-translate-y-1">
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
            <div className="bg-primary-gradient rounded-3xl p-4 md:p-12">
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

      {/* Account Types Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-5xl mb-4">
                Built for Everyone Four Powerful Account Types
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-secondary text-lg">
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
                      <p className="text-muted text-lg mb-8">
                        Learning made engaging and organized
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
                            Join live interactive classes with one tap
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
                            Access recorded lectures and materials anytime
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
                            Submit assignments and receive instant feedback
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
                            Collaborate with classmates in real-time group rooms
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
                            Track personal academic progress and performance
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CircleCheckBig className="text-blue-500" />{" "}
                          <p className="text-muted">
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

      <section className="bg-gradient-to-br from-[var(--color-bg-dark)] via-[var(--color-bg-dark-2)] to-[var(--color-bg-dark-3)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h1 className="text-5xl mb-4 text-primary">
              Complete Solutions for Every Need
            </h1>
            <h4 className="text-secondary text-lg">
              VamVam Uniport brings the entire university or school system into
              one digital platform
            </h4>
          </div>

          {/* Main solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Users,
                iconBg: "bg-icon-gold",
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
                iconBg: "bg-icon-gold",
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
                iconBg: "bg-icon-gold",
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
                iconBg: "bg-icon-gold",
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
                  <div className="bg-card-bg border border-muted rounded-xl p-8 h-full">
                    <div
                      className={`inline-block ${solution.iconBg} rounded-2xl p-4 mb-4`}
                    >
                      <solution.icon className="text-white" size={40} />
                    </div>
                    <div>
                      <h4 className="text-primary text-lg font-semibold mb-4">
                        {solution.title}
                      </h4>
                      <p className="text-muted text-lg mb-4">
                        {solution.subtitle}
                      </p>
                    </div>
                    <div className="space-y-4 mb-4">
                      {solution.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                          <p className="text-primary">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-px w-full bg-muted"></div>
                    <p className="text-muted text-xs mt-4 mb-2">
                      👉 Problem it solves:
                    </p>
                    <p className="text-primary">{solution.problemSolved}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Bottom Line Section */}
          <ScrollAnimation animation="scale" threshold={0.3}>
            <div className="flex justify-center items-center rounded-xl bg-primary-400 mb-20">
              <div className="text-center p-8">
                <h2 className="text-2xl font-bold mb-2">Bottom Line</h2>
                <p className="text-lg">
                  VamVam Uniport is solving one big problem: bringing the entire
                  university or school system into one digital platform.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Resource Types Section */}
          <div>
            <div className="text-center mb-20">
              <ScrollAnimation animation="slide-left" threshold={0.3}>
                <h1 className="text-5xl mb-4">
                  Built for Everyone Four Powerful Account Types
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animation="slide-right"
                threshold={0.3}
                delay={0.2}
              >
                <h4 className="text-secondary text-lg">
                  VamVam Uniport provides a dedicated, role-specific experience
                  for every member of the education ecosystem
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
                      <h4 className="text-primary text-lg font-semibold mb-2">
                        {resource.title}
                      </h4>
                      <p className="text-muted text-sm mb-2">
                        {resource.subtitle}
                      </p>
                    </div>
                    <div className="space-y-2 mb-4">
                      {resource.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                          <p className="text-primary text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-px w-full bg-muted"></div>
                    <p className="text-muted mt-2 text-xs italic">
                      {resource.note}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="flex justify-center items-center mt-20">
              <div className="bg-card-bg p-8 flex-col justify-ceenter items-center rounded-xl text-center">
                <h2 className="text-lg text-white">
                  Access all these resources from anywhere, anytime
                </h2>
                <Button size="lg" className="mt-2">
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[0.5px] border-secondary">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div>
              <p className="text-muted text-center">
                Join hundreds of institutions transforming education with VamVam
                Uniport
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="text-center">
                  <h1 className="text-primary-400 text-5xl font-medium mb-1">
                    500+
                  </h1>
                  <p className="text-muted">Institutions worldwide</p>
                </div>
                <div className="text-center">
                  <h1 className="text-primary-400 text-5xl font-medium mb-1">
                    1M+
                  </h1>
                  <p className="text-muted">Students daily</p>
                </div>
                <div className="text-center">
                  <h1 className="text-primary-400 text-5xl font-medium mb-1">
                    98%
                  </h1>
                  <p className="text-muted">Satisfaction rate</p>
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
                  className="flex items-center justify-center bg-white rounded-2xl p-5 hover:bg-primary-50 hover:scale-115 transition-transform duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-center py-2.5  rounded-full bg-primary-400 mb-3 text-lg text-white font-semibold ">
                      {item.initials}
                    </div>
                    <p className="text-muted text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-muted mt-5 text-center">
              From primary schools to universities across Cameroon, Nigeria, and
              beyond
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-20">
            <h1 className="text-center text-5xl mb-4">
              Real Voices from Schools and Students
            </h1>
            <p className="text-muted text-center">
              See how VamVam Uniport is making a difference in education
            </p>
          </div>
          <div className="inset-0 bg-card-bg/10">
            <div className="flex items-center justify-center">
              <div className="inline-flex justify-center items-center bg-white rounded-full p-2">
                <button
                  onClick={() => setActiveTabTestimony("school")}
                  className={`font-medium px-8 py-3 ${activeTabTestimony === "school" ? "bg-primary-gradient rounded-full" : "text-muted"}`}
                >
                  School & Administrators
                </button>
                <button
                  onClick={() => setActiveTabTestimony("student")}
                  className={`font-medium px-8 py-3 ${activeTabTestimony === "student" ? "bg-primary-gradient rounded-full" : "text-muted"}`}
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
                      <Quote size={48} className="text-primary-200" />
                      <div className="flex gap-1 my-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className={`${
                              i <= Math.floor(item.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i === Math.ceil(item.rating) &&
                                    item.rating % 1 !== 0
                                  ? "fill-yellow-400/50 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                            }`}
                            size={20}
                          />
                        ))}
                      </div>

                      <p className="text-secondary italic text-md mb-6">
                        "{item.desc}"
                      </p>

                      <div className="h-[0.4px] w-full bg-primary my-4"></div>

                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-muted">{item.title}</p>
                          <p className="text-sm text-primary-500 font-medium">
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
                <p className="text-primary">
                  Hear directly from educators and students about how VamVam
                  Uniport has transformed their educational experience.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-center">
                    <h1 className="text-primary-400 text-4xl font-medium mb-1">
                      500+
                    </h1>
                    <p className="text-secondary text-sm">Institutions</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-400 text-4xl font-medium mb-1">
                      1M+
                    </h1>
                    <p className="text-secondary text-sm">Students</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-primary-400 text-4xl font-medium mb-1">
                      98%
                    </h1>
                    <p className="text-secondary text-sm">Engagement Boost </p>
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
            <h4 className="text-secondary text-lg md:mx-30">
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
              <h4 className="text-muted text-xl md:max-w-2xl mx-auto">
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
                },
                {
                  icon: Mail,
                  type: "Email",
                  title: "sale@nishangSystems.org",
                  description: "we respond within 24 hours on business days",
                },
                {
                  icon: MapPin,
                  type: "Office",
                  title: "Bunduma, Buea, Cameroon",
                  description: "Visit us during business hours",
                },
                {
                  icon: MessageCircle,
                  type: "WhatsApp",
                  description: "Chat with us now",
                  desc2: "Instant responses",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="bg-card-bg-light rounded-xl p-8 mt-12 text-center space-y-2"
                >
                  <div className="flex justify-center">
                    <contact.icon className="text-primary-400" size={40} />
                  </div>
                  <h2 className="font-medium text-2xl text-white">{contact.type}</h2>
                  <h2 className="font-medium text-muted">{contact.title}</h2>
                  <p className="text-muted text-xs">{contact.description}</p>
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
