import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "100+", label: t("aboutStatClients") },
    { value: "40+", label: t("aboutStatProjects") },
    { value: "3", label: t("aboutStatOffices") },
    { value: "855+", label: t("aboutStatConsultations") },
  ];

  return (
    <div className="min-h-screen bg-[#020654] flex flex-col">
      <Navbar />

      <div className="text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4F8FE2]/5 pattern-grid-lg opacity-10" />
        <motion.div
          className="container relative z-10 text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
            data-testid="text-about-title"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            {t("aboutTitle")}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-300 leading-relaxed"
            data-testid="text-about-subtitle"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            {t("aboutSubtitle")}
          </motion.p>
        </motion.div>
      </div>

      <div className="container pb-16">
        <div className="bg-[#0a1045]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white border border-[#4F8FE2]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6" data-testid="text-who-we-are">
                {t("aboutWhoWeAre")}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8" data-testid="text-who-we-are-desc">
                {t("aboutWhoWeAreDesc")}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10">
                  <img
                    src="/assets/Integra_International_Primary_White_1769239697208.jpg"
                    alt="Integra International"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10 flex items-center">
                  <span className="text-sm font-bold text-white">TPA Global</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8" data-testid="text-integra-desc">
                {t("aboutIntegraDesc")}
              </p>

              <h3 className="text-xl font-serif font-bold mb-4 text-[#6db3f2]" data-testid="text-mission-title">
                {t("aboutMission")}
              </h3>
              <p className="text-slate-300 leading-relaxed" data-testid="text-mission-desc">
                {t("aboutMissionDesc")}
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="rounded-2xl overflow-hidden" variants={fadeRight} transition={{ duration: 0.7 }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt={t("aboutMeetingAlt")}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                className="bg-[#4F8FE2]/10 border border-[#4F8FE2]/20 rounded-2xl p-6 flex items-center gap-4"
                variants={fadeRight}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#4F8FE2] text-2xl">→</span>
                <p className="text-white font-serif font-bold text-lg">{t("aboutJoinSuccess")}</p>
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 flex items-center gap-4"
                variants={fadeRight}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/assets/Integra_International_Primary_White_1769239697208.jpg"
                  alt="ACG Consulting"
                  className="h-12 w-auto"
                />
                <div>
                  <span className="text-white font-bold text-lg">ACG</span>
                  <span className="block text-slate-400 text-sm">CONSULTING</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#4F8FE2]/10 border border-[#4F8FE2]/20 rounded-2xl p-6"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <Award className="h-8 w-8 text-[#4F8FE2] mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">{t("aboutExcellence")}</h4>
              <p className="text-slate-400 text-sm">{t("aboutExcellenceDesc")}</p>
            </motion.div>
            <motion.div
              className="bg-[#4F8FE2]/10 border border-[#4F8FE2]/20 rounded-2xl p-6"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <Users className="h-8 w-8 text-[#4F8FE2] mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">{t("aboutPartnership")}</h4>
              <p className="text-slate-400 text-sm">{t("aboutPartnershipDesc")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#4F8FE2]/10 py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                data-testid={`about-stat-${i}`}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-[#4F8FE2]">{stat.value}</p>
                <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
