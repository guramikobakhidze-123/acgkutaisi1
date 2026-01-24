import { Link } from "wouter";
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
            <span className="font-serif text-xl font-bold tracking-tight">
              Apex Audit
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading the way in audit assurance, tax strategy, and business consulting for forward-thinking enterprises.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-white">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
            <li><Link href="/team" className="hover:text-primary-foreground transition-colors">Our Team</Link></li>
            <li><Link href="/insights" className="hover:text-primary-foreground transition-colors">Insights & News</Link></li>
            <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-white">Services</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Audit & Assurance</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Tax Consultancy</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Financial Advisory</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Risk Management</span></li>
            <li><span className="cursor-pointer hover:text-primary-foreground transition-colors">Corporate Finance</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-white">Contact</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary-foreground shrink-0" />
              <span>
                1200 Financial District Blvd,<br />
                Suite 400, New York, NY 10005
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-foreground shrink-0" />
              <span>+1 (212) 555-0123</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary-foreground shrink-0" />
              <span>contact@apexaudit.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Apex Audit & Consulting. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
