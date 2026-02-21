import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTeam } from "@/hooks/use-content";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
  const { data: team, isLoading } = useTeam();
  const { t, getText } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="bg-[#A1C9F5]/20 py-24">
        <div className="container text-center max-w-3xl">
          <h2 className="text-sm font-bold text-[#4F8FE2] tracking-widest uppercase mb-3">{t("ourPeople")}</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#020654]" data-testid="text-team-title">{t("meetThePartners")}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t("teamDescription")}
          </p>
        </div>
      </div>

      <div className="container py-24">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => <div key={i} className="h-96 bg-slate-100 rounded-xl animate-pulse" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team?.map((member) => (
              <div key={member.id} className="group" data-testid={`card-team-${member.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[3/4]">
                  <img 
                    src={member.imageUrl} 
                    alt={getText(member.name)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020654]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <div className="flex gap-4 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-[#4F8FE2] text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="bg-white/20 hover:bg-[#4F8FE2] text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#020654]">{getText(member.name)}</h3>
                <p className="text-[#4F8FE2] font-medium mb-3 uppercase tracking-wider text-xs">{getText(member.role)}</p>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {getText(member.bio)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
