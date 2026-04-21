import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Briefcase, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const heroFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const { t } = useLanguage();

  const mainServices = [
    { icon: ShieldCheck, titleKey: "auditAssurance", descKey: "auditDescription", href: "/services/audit-assurance" },
    { icon: TrendingUp, titleKey: "financialServices", descKey: "financialDescription", href: "/services/financial-services" },
    { icon: Briefcase, titleKey: "consultingServices", descKey: "consultingDescription", href: "/services/consulting" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/kutaisi-hero.jpg"
            alt={t("modernBuilding")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#020654]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020654]/70 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="space-y-8"
          >
            <motion.h1
              variants={heroFadeIn}
              className="font-serif text-5xl md:text-7xl font-bold leading-tight"
              data-testid="text-hero-title"
            >
              {t("heroTitle")} <br />
              <span className="text-[#4F8FE2]">{t("heroTitleHighlight")}</span>
            </motion.h1>

            <motion.p
              variants={heroFadeIn}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
              data-testid="text-hero-description"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div variants={heroFadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-[#4F8FE2] hover:bg-[#4F8FE2]/90" data-testid="button-hero-consultation">
                  {t("getConsultation")}
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#020654] backdrop-blur-sm" data-testid="button-hero-services">
                  {t("exploreServices")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { label: t("yearsExperience"), value: "25+" },
              { label: t("corporateClients"), value: "500+" },
              { label: t("successfulAudits"), value: "1,200+" },
              { label: t("consultants"), value: "50+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                data-testid={`stat-${i}`}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-[#020654]">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#A1C9F5]/10">
        <div className="container">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="max-w-2xl" variants={fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-sm font-bold text-[#4F8FE2] tracking-widest uppercase mb-3">{t("ourExpertise")}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#020654]">{t("comprehensiveSolutions")}</h3>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link href="/services">
                <Button variant="ghost" className="group text-lg text-[#020654]" data-testid="button-view-all-services">
                  {t("viewAllServices")} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <Link href={service.href}>
                  <div className="group h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer" data-testid={`card-service-${index}`}>
                    <div className="h-14 w-14 bg-[#4F8FE2]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#020654] transition-colors">
                      <service.icon className="h-7 w-7 text-[#4F8FE2] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-4 text-[#020654]">{t(service.titleKey as any)}</h4>
                    <p className="text-slate-500 leading-relaxed mb-8">{t(service.descKey as any)}</p>
                    <div className="flex items-center text-[#4F8FE2] font-medium group-hover:translate-x-2 transition-transform">
                      {t("learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt={t("ourTeamAlt")}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#020654] p-8 rounded-2xl text-white max-w-xs shadow-xl hidden md:block">
                <p className="font-serif text-2xl font-bold mb-2">"{t("integrityQuote")}"</p>
                <p className="text-[#4F8FE2] text-sm">— Sarah Jenkins, CEO</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeRight} transition={{ duration: 0.6 }}>
                <h2 className="text-sm font-bold text-[#4F8FE2] tracking-widest uppercase">{t("whyChooseUs")}</h2>
              </motion.div>
              <motion.h3
                className="text-4xl md:text-5xl font-serif font-bold text-[#020654]"
                variants={fadeRight}
                transition={{ duration: 0.6 }}
              >
                {t("partnerYouCanTrust")}
              </motion.h3>
              <motion.p
                className="text-lg text-slate-600 leading-relaxed"
                variants={fadeRight}
                transition={{ duration: 0.6 }}
              >
                {t("trustDescription")}
              </motion.p>

              <div className="space-y-6">
                {[
                  { title: t("strategicInsight"), desc: t("strategicInsightDesc") },
                  { title: t("globalCompliance"), desc: t("globalComplianceDesc") },
                  { title: t("riskMitigation"), desc: t("riskMitigationDesc") },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    variants={fadeRight}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="mt-1 h-6 w-6 rounded-full bg-[#4F8FE2]/10 flex items-center justify-center shrink-0">
                      <Shield className="h-3.5 w-3.5 text-[#4F8FE2]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#020654]">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#020654] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4F8FE2]/10" />
        <motion.div
          className="container relative z-10 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            {t("readyToElevate")}
          </motion.h2>
          <motion.p
            className="text-slate-300 text-lg mb-10 leading-relaxed"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            {t("scheduleConsultation")}
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-[#4F8FE2] text-white hover:bg-[#4F8FE2]/90 font-semibold shadow-2xl" data-testid="button-cta-start">
                {t("getStartedToday")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
