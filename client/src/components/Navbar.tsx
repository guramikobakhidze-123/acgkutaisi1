import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/team", label: t("team") },
    { href: "/insights", label: t("insights") },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img 
              src="/assets/Integra_International_Primary_White_1769239697208.jpg" 
              alt="Integra International" 
              className="h-10 w-auto"
            />
            <div className="hidden sm:block border-l border-slate-300 pl-3">
              <span className="text-sm font-semibold text-[#020654]">ACG</span>
              <span className="block text-xs text-muted-foreground">ქუთაისის ფილიალი</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
                data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-200" />
                )}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30" data-testid="button-cta-consultation">
              {t("getConsultation")}
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      isActive(link.href)
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4" size="lg">{t("getConsultation")}</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
