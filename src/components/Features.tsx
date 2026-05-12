import { Building2, DollarSign, GraduationCap, LayoutDashboard, Smartphone, UserPlus } from "lucide-react"
import { ScrollAnimation } from "./animations/ScrollAnimation"
import { StaggeredAnimation } from "./animations/StaggeredAnimation"
import Button from "./ui/Button"

const Features = () => {
    return (
          <section className="bg-bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollAnimation animation="slide-left">
              <h1 className="text-secondary-50 text-5xl">
                Powerful Features for Modern Education
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-right" delay={0.2}>
              <h4 className="text-secondary-100 mt-2 text-lg">
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
                className="bg-card-bg border border-secondary-100 rounded-xl p-8 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`inline-block ${feature.color === "gold" ? "bg-icon-gold" : "bg-icon-dark"} rounded-2xl p-4 mb-4`}
                >
                  <feature.icon className="text-white" size={40} />
                </div>
                <div>
                  <h4 className="text-secondary-200 text-lg font-semibold mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-secondary-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </StaggeredAnimation>
          <ScrollAnimation
            animation="slide-bottom"
            className="text-center mt-20"
          >
            <h4 className="text-muted text-md mb-1 text-secondary-100">
              Ready to transform your institution?
            </h4>
            <Button size="lg" className="mt-4">
              Get Started with VamVam Uniport
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    )
}

export default Features