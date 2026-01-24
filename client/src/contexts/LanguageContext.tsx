import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "ka" | "en" | "ru";

export interface I18nString {
  ka: string;
  en: string;
  ru: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  getText: (obj: I18nString | string | unknown) => string;
}

const translations = {
  ka: {
    home: "მთავარი",
    services: "სერვისები",
    team: "გუნდი",
    insights: "სიახლეები",
    contact: "კონტაქტი",
    getConsultation: "მიიღეთ კონსულტაცია",
    heroTitle: "ექსპერტული აუდიტი და",
    heroTitleHighlight: "სტრატეგიული კონსულტაცია",
    heroDescription: "ჩვენ გთავაზობთ სიზუსტეს, სიცხადეს და შორსმჭვრეტელობას, რათა თქვენს ბიზნესს დავეხმაროთ რთული ფინანსური გარემოს ნავიგაციასა და მდგრადი ზრდის მიღწევაში.",
    exploreServices: "სერვისების ნახვა",
    yearsExperience: "წლიანი გამოცდილება",
    corporateClients: "კორპორატიული კლიენტი",
    successfulAudits: "წარმატებული აუდიტი",
    consultants: "კონსულტანტი",
    ourExpertise: "ჩვენი ექსპერტიზა",
    comprehensiveSolutions: "კომპლექსური ფინანსური გადაწყვეტილებები",
    viewAllServices: "ყველა სერვისის ნახვა",
    learnMore: "გაიგეთ მეტი",
    whyChooseUs: "რატომ ჩვენ",
    partnerYouCanTrust: "პარტნიორი, რომელსაც შეგიძლიათ ენდოთ",
    trustDescription: "ჩვენ გვჯერა გრძელვადიანი პარტნიორობის შექმნის გამჭვირვალობის, ექსპერტიზისა და გაზომვადი შედეგების საფუძველზე.",
    strategicInsight: "სტრატეგიული ხედვა",
    strategicInsightDesc: "მონაცემებზე დაფუძნებული გადაწყვეტილებები მდგრადი ზრდისთვის.",
    globalCompliance: "გლობალური შესაბამისობა",
    globalComplianceDesc: "საერთაშორისო რეგულაციების ექსპერტული ნავიგაცია.",
    riskMitigation: "რისკების შერბილება",
    riskMitigationDesc: "ფინანსური საფრთხეების პროაქტიული იდენტიფიკაცია.",
    readyToElevate: "მზად ხართ თქვენი ფინანსური სტრატეგიის გასაუმჯობესებლად?",
    scheduleConsultation: "დანიშნეთ კონსულტაცია ჩვენს უფროს პარტნიორებთან და აღმოაჩინეთ, როგორ შეგვიძლია დაგეხმაროთ.",
    getStartedToday: "დაიწყეთ დღეს",
    ourPeople: "ჩვენი ხალხი",
    meetThePartners: "გაიცანით პარტნიორები",
    teamDescription: "ჩვენი გუნდი აერთიანებს ათწლეულების გამოცდილებას წამყვანი ფირმებიდან.",
    insightsAndNews: "სიახლეები და ახალი ამბები",
    insightsDescription: "ექსპერტული პერსპექტივები მარეგულირებელ ცვლილებებზე და ფინანსურ სტრატეგიებზე.",
    readArticle: "წაიკითხეთ სტატია",
    ourServices: "ჩვენი სერვისები",
    servicesDescription: "კომპლექსური აუდიტი, საგადასახადო და საკონსულტაციო გადაწყვეტილებები.",
    viewDetails: "დეტალების ნახვა",
    contactUs: "დაგვიკავშირდით",
    contactDescription: "მზად ხართ საუბრის დასაწყებად? ჩვენ აქ ვართ დასახმარებლად.",
    sendMessage: "გაგზავნეთ შეტყობინება",
    formDescription: "შეავსეთ ფორმა და ჩვენი გუნდი მალე დაგიკავშირდებათ.",
    fullName: "სრული სახელი",
    emailAddress: "ელ. ფოსტა",
    phoneOptional: "ტელეფონი (არასავალდებულო)",
    companyOptional: "კომპანია (არასავალდებულო)",
    howCanWeHelp: "როგორ შეგვიძლია დაგეხმაროთ?",
    tellUsRequirements: "გვითხარით თქვენი მოთხოვნილებების შესახებ...",
    sendingMessage: "იგზავნება...",
    messageSent: "შეტყობინება გაიგზავნა",
    thankYouMessage: "გმადლობთ დაკავშირებისთვის. 24 საათში გიპასუხებთ.",
    error: "შეცდომა",
    contactInformation: "საკონტაქტო ინფორმაცია",
    headquarters: "მთავარი ოფისი",
    emailUs: "მოგვწერეთ",
    callUs: "დაგვირეკეთ",
    officeHours: "სამუშაო საათები",
    company: "კომპანია",
    servicesFooter: "სერვისები",
    contactFooter: "კონტაქტი",
    allRightsReserved: "ყველა უფლება დაცულია",
    privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
    termsOfService: "მომსახურების პირობები",
    serviceNotFound: "სერვისი ვერ მოიძებნა",
    backToServices: "სერვისებზე დაბრუნება",
    brandDescription: "ვართ ლიდერები აუდიტში, საგადასახადო სტრატეგიასა და ბიზნეს კონსულტაციაში წინსვლაზე ორიენტირებული საწარმოებისთვის.",
    auditAssurance: "აუდიტი და უზრუნველყოფა",
    taxConsultancy: "საგადასახადო კონსულტაცია",
    financialAdvisory: "ფინანსური კონსულტაცია",
    riskManagement: "რისკების მართვა",
    corporateFinance: "კორპორატიული ფინანსები",
    recently: "ახლახანს",
    mondayFriday: "ორშაბათი - პარასკევი: 9:00 - 18:00",
    saturdaySunday: "შაბათი - კვირა: დაკეტილია",
    integrityQuote: "მთლიანობა ჩვენი პრაქტიკის საფუძველია.",
    modernBuilding: "თანამედროვე კორპორატიული შენობა",
    ourTeamAlt: "ჩვენი გუნდი",
    mapPlaceholder: "რუკის ინტეგრაცია",
    generalEmail: "ზოგადი",
    supportEmail: "მხარდაჭერა",
    mainPhone: "მთავარი",
    faxPhone: "ფაქსი",
    clientSuccess: "კლიენტის წარმატება",
  },
  en: {
    home: "Home",
    services: "Services",
    team: "Team",
    insights: "Insights",
    contact: "Contact",
    getConsultation: "Get a Consultation",
    heroTitle: "Expert Audit &",
    heroTitleHighlight: "Strategic Consulting",
    heroDescription: "We provide precision, clarity, and foresight to help your business navigate complex financial landscapes and achieve sustainable growth.",
    exploreServices: "Explore Services",
    yearsExperience: "Years Experience",
    corporateClients: "Corporate Clients",
    successfulAudits: "Successful Audits",
    consultants: "Consultants",
    ourExpertise: "Our Expertise",
    comprehensiveSolutions: "Comprehensive Financial Solutions",
    viewAllServices: "View All Services",
    learnMore: "Learn more",
    whyChooseUs: "Why Choose Us",
    partnerYouCanTrust: "A Partner You Can Trust",
    trustDescription: "We believe in building long-term partnerships based on transparency, expertise, and measurable results.",
    strategicInsight: "Strategic Insight",
    strategicInsightDesc: "Data-driven decisions for sustainable growth.",
    globalCompliance: "Global Compliance",
    globalComplianceDesc: "Expert navigation of international regulations.",
    riskMitigation: "Risk Mitigation",
    riskMitigationDesc: "Proactive identification of financial threats.",
    readyToElevate: "Ready to elevate your financial strategy?",
    scheduleConsultation: "Schedule a consultation with our senior partners today and discover how we can help optimize your business performance.",
    getStartedToday: "Get Started Today",
    ourPeople: "Our People",
    meetThePartners: "Meet the Partners",
    teamDescription: "Our team brings together decades of experience from top-tier firms, united by a passion for excellence and client success.",
    insightsAndNews: "Insights & News",
    insightsDescription: "Expert perspectives on regulatory changes, market trends, and financial strategies.",
    readArticle: "Read Article",
    ourServices: "Our Services",
    servicesDescription: "Comprehensive audit, tax, and advisory solutions tailored to your unique business challenges.",
    viewDetails: "View Details",
    contactUs: "Contact Us",
    contactDescription: "Ready to start a conversation? We're here to help you navigate your financial future.",
    sendMessage: "Send Message",
    formDescription: "Fill out the form below and our team will get back to you shortly.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneOptional: "Phone (Optional)",
    companyOptional: "Company (Optional)",
    howCanWeHelp: "How can we help?",
    tellUsRequirements: "Tell us about your requirements...",
    sendingMessage: "Sending Message...",
    messageSent: "Message Sent",
    thankYouMessage: "Thank you for contacting us. We will respond within 24 hours.",
    error: "Error",
    contactInformation: "Contact Information",
    headquarters: "Headquarters",
    emailUs: "Email Us",
    callUs: "Call Us",
    officeHours: "Office Hours",
    company: "Company",
    servicesFooter: "Services",
    contactFooter: "Contact",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    serviceNotFound: "Service Not Found",
    backToServices: "Back to Services",
    brandDescription: "Leading the way in audit assurance, tax strategy, and business consulting for forward-thinking enterprises.",
    auditAssurance: "Audit & Assurance",
    taxConsultancy: "Tax Consultancy",
    financialAdvisory: "Financial Advisory",
    riskManagement: "Risk Management",
    corporateFinance: "Corporate Finance",
    recently: "Recently",
    mondayFriday: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    saturdaySunday: "Saturday - Sunday: Closed",
    integrityQuote: "Integrity is the foundation of our practice.",
    modernBuilding: "Modern Corporate Building",
    ourTeamAlt: "Our Team",
    mapPlaceholder: "Map Integration",
    generalEmail: "General",
    supportEmail: "Support",
    mainPhone: "Main",
    faxPhone: "Fax",
    clientSuccess: "Client Success",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    team: "Команда",
    insights: "Инсайты",
    contact: "Контакт",
    getConsultation: "Получить консультацию",
    heroTitle: "Экспертный аудит и",
    heroTitleHighlight: "Стратегический консалтинг",
    heroDescription: "Мы обеспечиваем точность, ясность и дальновидность, чтобы помочь вашему бизнесу ориентироваться в сложных финансовых условиях.",
    exploreServices: "Изучить услуги",
    yearsExperience: "Лет опыта",
    corporateClients: "Корпоративных клиентов",
    successfulAudits: "Успешных аудитов",
    consultants: "Консультантов",
    ourExpertise: "Наша экспертиза",
    comprehensiveSolutions: "Комплексные финансовые решения",
    viewAllServices: "Все услуги",
    learnMore: "Узнать больше",
    whyChooseUs: "Почему мы",
    partnerYouCanTrust: "Партнер, которому можно доверять",
    trustDescription: "Мы верим в построение долгосрочных партнерств, основанных на прозрачности, экспертизе и измеримых результатах.",
    strategicInsight: "Стратегическое видение",
    strategicInsightDesc: "Решения на основе данных для устойчивого роста.",
    globalCompliance: "Глобальное соответствие",
    globalComplianceDesc: "Экспертная навигация международных регуляций.",
    riskMitigation: "Снижение рисков",
    riskMitigationDesc: "Проактивное выявление финансовых угроз.",
    readyToElevate: "Готовы улучшить свою финансовую стратегию?",
    scheduleConsultation: "Запланируйте консультацию с нашими старшими партнерами и узнайте, как мы можем помочь.",
    getStartedToday: "Начните сегодня",
    ourPeople: "Наши люди",
    meetThePartners: "Познакомьтесь с партнерами",
    teamDescription: "Наша команда объединяет десятилетия опыта из ведущих фирм.",
    insightsAndNews: "Инсайты и новости",
    insightsDescription: "Экспертные перспективы по регуляторным изменениям и финансовым стратегиям.",
    readArticle: "Читать статью",
    ourServices: "Наши услуги",
    servicesDescription: "Комплексные решения по аудиту, налогам и консультированию.",
    viewDetails: "Подробнее",
    contactUs: "Свяжитесь с нами",
    contactDescription: "Готовы начать разговор? Мы здесь, чтобы помочь вам.",
    sendMessage: "Отправить сообщение",
    formDescription: "Заполните форму, и наша команда свяжется с вами.",
    fullName: "Полное имя",
    emailAddress: "Электронная почта",
    phoneOptional: "Телефон (необязательно)",
    companyOptional: "Компания (необязательно)",
    howCanWeHelp: "Чем мы можем помочь?",
    tellUsRequirements: "Расскажите о ваших требованиях...",
    sendingMessage: "Отправка...",
    messageSent: "Сообщение отправлено",
    thankYouMessage: "Спасибо за обращение. Мы ответим в течение 24 часов.",
    error: "Ошибка",
    contactInformation: "Контактная информация",
    headquarters: "Главный офис",
    emailUs: "Напишите нам",
    callUs: "Позвоните нам",
    officeHours: "Рабочие часы",
    company: "Компания",
    servicesFooter: "Услуги",
    contactFooter: "Контакт",
    allRightsReserved: "Все права защищены",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
    serviceNotFound: "Услуга не найдена",
    backToServices: "Назад к услугам",
    brandDescription: "Лидеры в области аудита, налоговой стратегии и бизнес-консалтинга для перспективных предприятий.",
    auditAssurance: "Аудит и гарантии",
    taxConsultancy: "Налоговый консалтинг",
    financialAdvisory: "Финансовый консалтинг",
    riskManagement: "Управление рисками",
    corporateFinance: "Корпоративные финансы",
    recently: "Недавно",
    mondayFriday: "Понедельник - Пятница: 9:00 - 18:00",
    saturdaySunday: "Суббота - Воскресенье: Закрыто",
    integrityQuote: "Честность — основа нашей практики.",
    modernBuilding: "Современное корпоративное здание",
    ourTeamAlt: "Наша команда",
    mapPlaceholder: "Интеграция карты",
    generalEmail: "Общий",
    supportEmail: "Поддержка",
    mainPhone: "Основной",
    faxPhone: "Факс",
    clientSuccess: "Успех клиента",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved && (saved === "ka" || saved === "en" || saved === "ru")) {
        return saved;
      }
    }
    return "ka";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const getText = (obj: I18nString | string | unknown): string => {
    if (typeof obj === "string") return obj;
    if (obj && typeof obj === "object" && language in obj) {
      return (obj as I18nString)[language] || "";
    }
    return "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
