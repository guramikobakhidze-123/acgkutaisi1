import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Shield, Users, Briefcase } from "lucide-react";
import { useServices } from "@/hooks/use-content";

export default function Home() {
  const { data: services, isLoading } = useServices();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* abstract modern corporate architecture background */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Corporate Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="font-serif text-5xl md:text-7xl font-bold leading-tight"
            >
              Expert Audit & <br/>
              <span className="text-blue-400">Strategic Consulting</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
            >
              We provide precision, clarity, and foresight to help your business navigate complex financial landscapes and achieve sustainable growth.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90">
                  Get a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Corporate Clients", value: "500+" },
              { label: "Successful Audits", value: "1,200+" },
              { label: "Consultants", value: "50+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Comprehensive Financial Solutions</h3>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="group text-lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading ? (
              [1, 2, 3].map(i => <div key={i} className="h-80 bg-slate-200 rounded-xl animate-pulse" />)
            ) : services?.slice(0, 3).map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <div className="group h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer">
                  <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    {/* Simplified icon logic - in production use a map */}
                    <Briefcase className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-4 text-slate-900">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* diverse corporate team meeting in modern office */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl text-white max-w-xs shadow-xl hidden md:block">
                <p className="font-serif text-2xl font-bold mb-2">"Integrity is the foundation of our practice."</p>
                <p className="text-blue-200 text-sm">— Sarah Jenkins, CEO</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">A Partner You Can Trust</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in building long-term partnerships based on transparency, expertise, and measurable results. Our team of certified professionals brings decades of combined experience across various industries.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Strategic Insight", desc: "Data-driven decisions for sustainable growth." },
                  { title: "Global Compliance", desc: "Expert navigation of international regulations." },
                  { title: "Risk Mitigation", desc: "Proactive identification of financial threats." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Shield className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to elevate your financial strategy?</h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Schedule a consultation with our senior partners today and discover how we can help optimize your business performance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-2xl">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
