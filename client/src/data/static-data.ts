import type { Service, TeamMember, Post } from "@shared/schema";

export const SERVICES: Service[] = [
  {
    id: 5, slug: "audit-assurance", icon: "ShieldCheck",
    title: { ka: "აუდიტი და გარანტია", en: "Audit & Assurance", ru: "Аудит и гарантии", tr: "Denetim ve Güvence" } as any,
    description: { ka: "აუდიტი ბევრად მეტია, ვიდრე ფორმალობა. ეს რეალური აუცილებლობაა ბიზნესის დასაცავად და წასახალისებლად.", en: "Audit is much more than a formality. It is a real necessity to protect and encourage business.", ru: "Аудит — это гораздо больше, чем формальность. Это реальная необходимость для защиты и стимулирования бизнеса.", tr: "Denetim bir formaliteden çok daha fazlasıdır." } as any,
    fullContent: { ka: "აუდიტი ბევრად მეტია, ვიდრე ფორმალობა. ეს რეალური აუცილებლობაა ბიზნესის დასაცავად და წასახალისებლად. ჩვენი აუდიტისა და გარანტიის სერვისები უზრუნველყოფს დამოუკიდებელ, ობიექტურ შეფასებას.", en: "Audit is much more than a formality. It is a real necessity to protect and encourage business. Our audit and assurance services provide independent, objective assessments that help organizations improve their operations and instill confidence among stakeholders.", ru: "Аудит — это гораздо больше, чем формальность. Наши услуги аудита и гарантий обеспечивают независимую, объективную оценку.", tr: "Denetim bir formaliteden çok daha fazlasıdır. Denetim ve güvence hizmetlerimiz bağımsız, objektif değerlendirmeler sağlar." } as any,
  },
  {
    id: 6, slug: "financial-services", icon: "TrendingUp",
    title: { ka: "ფინანსური მომსახურება", en: "Financial Services", ru: "Финансовые услуги", tr: "Finansal Hizmetler" } as any,
    description: { ka: "ACG უზრუნველყოფს სრულ მომსახურებას ნებისმიერი ზომის კლიენტებისთვის — სტარტაპებიდან მსხვილ კომპანიებამდე.", en: "ACG provides comprehensive services for clients of all sizes — from startups to large private and public companies.", ru: "ACG обеспечивает полный спектр услуг для клиентов любого масштаба.", tr: "ACG, start-up'lardan büyük şirketlere kadar her ölçekteki müşteriye kapsamlı hizmet sunmaktadır." } as any,
    fullContent: { ka: "ACG უზრუნველყოფს სრულ მომსახურებას ნებისმიერი ზომის კლიენტებისთვის — სტარტაპებიდან მსხვილ კერძო და საჯარო კომპანიებამდე. ჩვენი ფინანსური მომსახურების გუნდი დაგეხმარებათ ფინანსების ეფექტურად მართვასა და მდგრადი ზრდის დაგეგმვაში.", en: "ACG provides comprehensive services for clients of all sizes — from startups to large private and public companies. Our financial services team will help you manage finances effectively and plan sustainable growth.", ru: "ACG обеспечивает полный спектр услуг для клиентов любого масштаба. Наша команда поможет вам эффективно управлять финансами.", tr: "ACG kapsamlı hizmet sunmaktadır. Finansal hizmetler ekibimiz finanslarınızı etkin yönetmenize yardımcı olacaktır." } as any,
  },
  {
    id: 4, slug: "loan-purpose-verification", icon: "Search",
    title: { ka: "სესხის მიზნობრიობის დადასტურება", en: "Loan Purpose Verification", ru: "Подтверждение целевого использования кредита", tr: "Kredi Amaç Doğrulaması" } as any,
    description: { ka: "სესხის მიზნობრიობისა და სახსრების გამოყენების დამოუკიდებელი შემოწმება და დადასტურება.", en: "Independent verification and confirmation of loan purpose and fund utilization.", ru: "Независимая проверка и подтверждение целевого использования кредитных средств.", tr: "Kredi amacı ve fon kullanımının bağımsız doğrulaması." } as any,
    fullContent: { ka: "ჩვენ ვთავაზობთ სესხის მიზნობრიობის დადასტურების სრულ მომსახურებას ბანკებს, ფინანსურ ინსტიტუტებსა და მსესხებლებს.", en: "We provide comprehensive loan purpose verification services to banks, financial institutions, and borrowers. Our team conducts thorough audits to confirm that loan funds are being used according to their intended purpose.", ru: "Мы предоставляем комплексные услуги по подтверждению целевого использования кредита для банков и финансовых учреждений.", tr: "Bankalara ve borçlulara kapsamlı kredi amaç doğrulama hizmetleri sunuyoruz." } as any,
  },
  {
    id: 7, slug: "consulting", icon: "Briefcase",
    title: { ka: "საკონსულტაციო მომსახურება", en: "Consulting Services", ru: "Консалтинговые услуги", tr: "Danışmanlık Hizmetleri" } as any,
    description: { ka: "ჩვენი პროფესიონალები სხვადასხვა მულტიდისციპლინური გამოცდილებით გთავაზობენ ეფექტურ გადაწყვეტილებებს.", en: "Our professionals with diverse multidisciplinary experience offer effective solutions.", ru: "Наши профессионалы с разнообразным опытом предлагают эффективные решения.", tr: "Çeşitli deneyime sahip profesyonellerimiz etkili çözümler sunmaktadır." } as any,
    fullContent: { ka: "ჩვენი პროფესიონალები სხვადასხვა მულტიდისციპლინური გამოცდილებით გთავაზობენ ეფექტურ გადაწყვეტილებებს. ჩვენ ვაწვდით სტრატეგიულ ხელმძღვანელობას ბიზნეს-სტრუქტურის, ზრდის სტრატეგიებისა და ოპერაციული ეფექტურობის საკითხებში.", en: "Our professionals with diverse multidisciplinary experience offer effective solutions. We provide strategic guidance on business structure, growth strategies, and operational efficiency.", ru: "Наши профессионалы предлагают эффективные решения. Мы предоставляем стратегическое руководство по вопросам бизнес-структуры и операционной эффективности.", tr: "Profesyonellerimiz etkili çözümler sunmaktadır. İş yapısı ve operasyonel verimlilik konularında stratejik rehberlik sağlıyoruz." } as any,
  },
  {
    id: 8, slug: "legal-services", icon: "Scale",
    title: { ka: "სამართლებრივი მომსახურება", en: "Legal Services", ru: "Юридические услуги", tr: "Hukuk Hizmetleri" } as any,
    description: { ka: "ჩვენი იურიდიული გუნდი გეხმარებათ მარეგულირებელ მოთხოვნებში ნავიგაციასა და კანონმდებლობასთან შესაბამისობის უზრუნველყოფაში.", en: "Since business and legal issues are more closely intertwined today than ever, we strive to resolve them for you.", ru: "Поскольку бизнес и юридические вопросы сегодня тесно переплетены, мы стремимся решить их для вас.", tr: "İş ve hukuki konular bugün her zamankinden daha sıkı iç içe geçtiğinden, bunları sizin için çözmeye çalışıyoruz." } as any,
    fullContent: { ka: "ვინაიდან ბიზნესი და იურიდიული საკითხები დღეს მჭიდროდ არის გადაჯაჭვული, ჩვენ ვცდილობთ მათ გადაჭრას. ჩვენი იურიდიული გუნდი გეხმარებათ მარეგულირებელ მოთხოვნებში ნავიგაციასა და კანონმდებლობასთან შესაბამისობის უზრუნველყოფაში.", en: "Since business and legal issues are more closely intertwined today than ever, we strive to resolve them for you. Our legal team helps you navigate regulatory requirements and ensure compliance with legislation.", ru: "Поскольку бизнес и юридические вопросы тесно переплетены, мы стремимся решить их. Наша юридическая команда поможет вам ориентироваться в нормативных требованиях.", tr: "İş ve hukuki konular iç içe geçtiğinden bunları sizin için çözmeye çalışıyoruz. Hukuk ekibimiz düzenleyici gerekliliklerde yol almanıza yardımcı olur." } as any,
  },
  {
    id: 9, slug: "property-valuation", icon: "Home",
    title: { ka: "ქონების შეფასება", en: "Property Valuation", ru: "Оценка имущества", tr: "Mülk Değerleme" } as any,
    description: { ka: "ჩვენი სერტიფიცირებული შემფასებლები უზრუნველყოფენ სრულ ქონების შეფასებას.", en: "Our certified appraisers provide comprehensive property valuation services.", ru: "Наши сертифицированные оценщики обеспечивают комплексные услуги по оценке имущества.", tr: "Sertifikalı değerleme uzmanlarımız kapsamlı mülk değerleme hizmetleri sunmaktadır." } as any,
    fullContent: { ka: "ჩვენი სერტიფიცირებული შემფასებლები უზრუნველყოფენ სრულ ქონების შეფასებას საბაზრო ღირებულების, სადაზღვევო მიზნებისა და ფინანსური ანგარიშგებისთვის.", en: "Our certified appraisers provide comprehensive property valuation services for market value, insurance purposes, and financial reporting.", ru: "Наши сертифицированные оценщики обеспечивают комплексные услуги по оценке имущества для рыночной стоимости и страховых целей.", tr: "Sertifikalı değerleme uzmanlarımız piyasa değeri ve sigorta amaçlı kapsamlı mülk değerleme hizmetleri sunar." } as any,
  },
  {
    id: 10, slug: "consulting-services", icon: "Briefcase",
    title: { ka: "კონსულტაცია", en: "Consulting", ru: "Консультации", tr: "Danışmanlık" } as any,
    description: { ka: "ჩვენ ვთავაზობთ ბიზნეს-კონსულტაციას სხვადასხვა სფეროში.", en: "We offer business consulting across various fields.", ru: "Мы предлагаем бизнес-консультации в различных областях.", tr: "Çeşitli alanlarda iş danışmanlığı sunuyoruz." } as any,
    fullContent: { ka: "ჩვენ ვთავაზობთ ბიზნეს-კონსულტაციას სხვადასხვა სფეროში, მათ შორის ფინანსების, მართვის, სტრატეგიის განვითარებასა და ოპერაციული პროცესების ოპტიმიზაციაში.", en: "We offer business consulting across various fields, including finance, management, strategy development, and operational process optimization.", ru: "Мы предлагаем бизнес-консультации в различных областях, включая финансы, управление и стратегическое развитие.", tr: "Finans, yönetim ve strateji geliştirme dahil çeşitli alanlarda iş danışmanlığı sunuyoruz." } as any,
  },
  {
    id: 11, slug: "tax-disputes-consulting", icon: "FileText",
    title: { ka: "საგადასახადო დავების კონსულტაცია", en: "Tax Disputes Consulting", ru: "Консультации по налоговым спорам", tr: "Vergi Uyuşmazlıkları Danışmanlığı" } as any,
    description: { ka: "გამოცდილი საგადასახადო ექსპერტები დაგეხმარებიან გადასახადებთან დაკავშირებული დავების გადაჭრაში.", en: "Experienced tax experts help you resolve tax-related disputes.", ru: "Опытные налоговые эксперты помогут вам разрешить налоговые споры.", tr: "Deneyimli vergi uzmanları vergiyle ilgili uyuşmazlıkları çözmenize yardımcı olur." } as any,
    fullContent: { ka: "ჩვენი გამოცდილი საგადასახადო ექსპერტები დაგეხმარებიან გადასახადებთან დაკავშირებული დავების გადაჭრაში, მათ შორის საგადასახადო ორგანოებთან მოლაპარაკებებში და სასამართლო წარმომადგენლობაში.", en: "Our experienced tax experts help you resolve tax-related disputes, including negotiations with tax authorities and court representation.", ru: "Наши опытные налоговые эксперты помогут разрешить налоговые споры, включая переговоры с налоговыми органами.", tr: "Deneyimli vergi uzmanlarımız vergi idaresiyle müzakereler de dahil olmak üzere vergi uyuşmazlıklarını çözmenize yardımcı olur." } as any,
  },
  {
    id: 12, slug: "blockchain-web3", icon: "Globe",
    title: { ka: "ბლოქჩეინი და Web3", en: "Blockchain & Web3", ru: "Блокчейн и Web3", tr: "Blockchain ve Web3" } as any,
    description: { ka: "ბლოქჩეინ ტექნოლოგიებისა და Web3 ეკოსისტემის ექსპერტული კონსულტაცია.", en: "Expert consulting on blockchain technologies and Web3 ecosystem.", ru: "Экспертные консультации по блокчейн-технологиям и экосистеме Web3.", tr: "Blockchain teknolojileri ve Web3 ekosistemi konusunda uzman danışmanlık." } as any,
    fullContent: { ka: "ჩვენ გთავაზობთ ექსპერტულ კონსულტაციას ბლოქჩეინ ტექნოლოგიებზე, კრიპტოვალუტებზე, NFT-ებზე, ჭკვიან კონტრაქტებზე და Web3 ეკოსისტემის განვითარებაზე.", en: "We offer expert consulting on blockchain technologies, cryptocurrencies, NFTs, smart contracts, and Web3 ecosystem development.", ru: "Мы предлагаем экспертные консультации по блокчейн-технологиям, криптовалютам, NFT и разработке экосистемы Web3.", tr: "Blockchain teknolojileri, kripto para birimleri, NFT'ler ve Web3 ekosistemi geliştirme konusunda uzman danışmanlık sunuyoruz." } as any,
  },
  {
    id: 13, slug: "accounting-legislation", icon: "Scale",
    title: { ka: "ბუღალტრული აღრიცხვის კანონმდებლობა", en: "Accounting Legislation", ru: "Законодательство о бухгалтерском учёте", tr: "Muhasebe Mevzuatı" } as any,
    description: { ka: "ბუღალტრული აღრიცხვის კანონმდებლობის ცვლილებებზე კონსულტაცია და მხარდაჭერა.", en: "Consulting and support on changes in accounting legislation.", ru: "Консультации и поддержка по изменениям в законодательстве о бухгалтерском учёте.", tr: "Muhasebe mevzuatındaki değişiklikler konusunda danışmanlık ve destek." } as any,
    fullContent: { ka: "ჩვენ ვთავაზობთ კონსულტაციასა და მხარდაჭერას ბუღალტრული აღრიცხვის კანონმდებლობის ცვლილებებზე, IFRS სტანდარტებსა და ფინანსური ანგარიშგების მოთხოვნებზე.", en: "We offer consulting and support on changes in accounting legislation, IFRS standards, and financial reporting requirements.", ru: "Мы предлагаем консультации по изменениям в законодательстве о бухгалтерском учёте, стандартам МСФО и требованиям финансовой отчётности.", tr: "Muhasebe mevzuatı değişiklikleri, UFRS standartları ve finansal raporlama gereklilikleri konusunda danışmanlık sunuyoruz." } as any,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 2,
    name: { ka: "მურმან კობახიძე", en: "Murman Kobakhidze", ru: "Мурман Кобахидзе", tr: "Murman Kobakhidze" } as any,
    role: { ka: "დირექტორი, აუდიტორი", en: "Director, Auditor", ru: "Директор, Аудитор", tr: "Direktör, Denetçi" } as any,
    bio: { ka: "დაბადების თარიღი: 11.10.1965\n\nმოქალაქეობა: საქართველო\n\nტელ: 555 119965\n\nგანათლება:\n- გორის ეკონომიური ინსტიტუტი, საბუღალტრო აღრიცხვა და სამეურნეო საქმიანობის ანალიზი.\n- 2014-2019 საჯარო სექტორის აუდიტორი\n\nსამუშაო გამოცდილება:\n- 1994-2007 ქ. ქუთაისის მერიის საფინანსო საქალაქო სამმართველო, საბიუჯეტო სახაზინო განყოფილების უფროსი.\n- 2014-2024 სსიპ კოლეჯი იბერია, ფინანსური მენეჯერი.\n- 2014-დღემდე სსიპ კოლეჯი იბერია, პედაგოგი.\n- 2013-დღემდე შპს ორისაუდიტი, დირექტორი.\n- 2020-დღემდე შპს აუდიტ ენდ ქონსალთინგ გრუპი, აუდიტორი.\n\nენები: ქართული (მშობლიური), რუსული (კარგად), ინგლისური (საშუალოდ)", en: "Date of Birth: 11.10.1965\n\nCitizenship: Georgia\n\nTel: 555 119965\n\nEducation:\n- Gori Economic Institute, Accounting and Business Activity Analysis.\n- 2014-2019 Public Sector Auditor.\n\nWork Experience:\n- 1994-2007 Kutaisi City Hall Finance Department, Head of Budget Treasury Division.\n- 2014-2024 LEPL College Iberia, Financial Manager.\n- 2014-present LEPL College Iberia, Lecturer.\n- 2013-present LLC Orisauditi, Director.\n- 2020-present LLC Audit and Consulting Group Audit Firm, Auditor.\n\nLanguages: Georgian (native), Russian (good), English (intermediate)", ru: "Дата рождения: 11.10.1965\n\nГражданство: Грузия\n\nТел: 555 119965\n\nОбразование:\n- Горийский экономический институт, бухгалтерский учёт.\n- 2014-2019 Аудитор государственного сектора.\n\nОпыт работы:\n- 1994-2007 Мэрия г. Кутаиси, начальник бюджетно-казначейского отдела.\n- 2020-н.в. ООО Аудиторская фирма Audit and Consulting Group, аудитор.\n\nЯзыки: Грузинский (родной), Русский (хорошо), Английский (средний)", tr: "Doğum Tarihi: 11.10.1965\n\nVatandaşlık: Gürcistan\n\nTel: 555 119965\n\nEğitim:\n- Gori Ekonomi Enstitüsü, Muhasebe ve İş Faaliyetleri Analizi.\n- 2014-2019 Kamu Sektörü Denetçisi.\n\nİş Deneyimi:\n- 1994-2007 Kutaisi Belediyesi Mali Müdürlüğü, Bütçe Hazine Bölümü Başkanı.\n- 2020-günümüze Audit and Consulting Group Denetim Firması LLC, Denetçi.\n\nDiller: Gürcüce (anadil), Rusça (iyi), İngilizce (orta)" } as any,
    imageUrl: "/murman-kobakhidze.jpg",
    email: "murmankobaxidze@gmail.com",
    linkedinUrl: null,
  },
  {
    id: 3,
    name: { ka: "თეიმურაზ გვეტაძე", en: "Teimuraz Gvetadze", ru: "Теймураз Гветадзе", tr: "Teimuraz Gvetadze" } as any,
    role: { ka: "აუდიტორი", en: "Auditor", ru: "Аудитор", tr: "Denetçi" } as any,
    bio: { ka: "დაბადების თარიღი: 24.07.1990\nმოქალაქეობა: საქართველო\nტელ: 599-69-69-50\n\nგანათლება:\n- 2007-2011 აკაკი წერეთლის სახელობის უნივერსიტეტი, მენეჯმენტი, ბაკალავრი\n- 2012-2014 აკაკი წერეთლის სახელობის უნივერსიტეტი, საბანკო და საფინანსო, მაგისტრი\n- 2015-2018 საქართველოს ტექნიკური უნივერსიტეტი, ფინანსები, დოქტორი\n- ACCA სერტიფიცირების პროგრამა I, II და III ეტაპები\n\nსამუშაო გამოცდილება:\n- შპს ბიზნესმატიანე 2007-2013 ბუღალტერი / მთავარი ბუღალტერი\n- სს მისო კრისტალი 2015-2018 შიდა აუდიტორი\n- აკაკი წერეთლის სახელმწიფო უნივერსიტეტი 2025-დღემდე ასისტენტ-პროფესორი\n- ქუთაისის საერთაშორისო უნივერსიტეტი 2025-დღემდე მოწვეული სპეციალისტი\n- შპს აუდიტ ენდ ქონსალთინგ გრუპი 2020-დღემდე აუდიტორი\n\nენები: ქართული (მშობლიური), რუსული (კარგად), ინგლისური (კარგად)", en: "Date of Birth: 24.07.1990\nCitizenship: Georgia\nPhone: 599-69-69-50\n\nEducation:\n- 2007-2011 Akaki Tsereteli State University, Management, Bachelor\n- 2012-2014 Akaki Tsereteli State University, Banking and Finance, Master\n- 2015-2018 Georgian Technical University, Finance, PhD\n- ACCA Certification Program Stages I, II and III\n\nWork Experience:\n- Businessmatiane LLC 2007-2013 Accountant / Chief Accountant\n- MISO Crystal JSC 2015-2018 Internal Auditor\n- Akaki Tsereteli State University 2025-present Assistant Professor\n- Kutaisi International University 2025-present Invited Specialist\n- Audit and Consulting Group LLC 2020-present Auditor\n\nLanguages: Georgian (native), Russian (good), English (good)", ru: "Дата рождения: 24.07.1990\nГражданство: Грузия\n\nОбразование:\n- 2007-2011 Государственный университет Акакия Церетели, Менеджмент\n- 2015-2018 Грузинский технический университет, Финансы, Доктор\n- Программа сертификации ACCA I, II и III этапы\n\nОпыт работы:\n- АО МИСО Кристал 2015-2018 Внутренний аудитор\n- Государственный университет Акакия Церетели 2025-настоящее время\n- ООО Аудит энд Консалтинг Групп 2020-настоящее время Аудитор\n\nЯзыки: Грузинский (родной), Русский (хорошо), Английский (хорошо)", tr: "Doğum Tarihi: 24.07.1990\nVatandaşlık: Gürcistan\n\nEğitim:\n- 2007-2011 Akaki Tsereteli Devlet Üniversitesi, Yönetim\n- 2015-2018 Gürcistan Teknik Üniversitesi, Finans, Doktora\n- ACCA Sertifikasyon Programı I, II ve III Aşamalar\n\nİş Deneyimi:\n- Audit and Consulting Group LLC 2020-günümüze Denetçi\n\nDiller: Gürcüce (anadil), Rusça (iyi), İngilizce (iyi)" } as any,
    imageUrl: "/teimuraz-gvetadze.png",
    email: "temuri.gvetadze@gmail.com",
    linkedinUrl: null,
  },
  {
    id: 4,
    name: { ka: "გურამი კობახიძე", en: "Gurami Kobakhidze", ru: "Гурами Кобахидзе", tr: "Gurami Kobakhidze" } as any,
    role: { ka: "აუდიტორი", en: "Auditor", ru: "Аудитор", tr: "Denetçi" } as any,
    bio: { ka: "დაბადების თარიღი: 12.04.1988\n\nმოქალაქეობა: საქართველო\n\nტელ: 577 123401\n\nგანათლება:\n- 2007-2011 ქუთაისის ა. წერეთლის სახელობის სახელმწიფო უნივერსიტეტი. სპეციალობა: ფინანსები საბანკო და სადაზღვეო საქმე.\n- ACCA სერტიფიცირების პროგრამა I ეტაპი.\n\nსამუშაო გამოცდილება:\n- 2010-2014 შპს აქტივი აუდიტ ფირმა, ბუღალტერი.\n- 2014-2019 შპს მემტექს ჯორჯია ტექსტილის ფაბრიკა, ფინანსური მენეჯერი.\n- 2020-დღემდე შპს აუდიტ ენდ ქონსალთინგ გრუპი, აუდიტორი.\n- 2023-დღემდე შპს კა-2 სამშენებლო ორგანიზაცია, მთავარი ბუღალტერი.\n\nენები: ქართული (მშობლიური), რუსული (საშუალოდ), ინგლისური (კარგად)", en: "Date of Birth: 12.04.1988\n\nCitizenship: Georgia\n\nTel: 577 123401\n\nEducation:\n- 2007-2011 Kutaisi Akaki Tsereteli State University. Specialization: Finance, Banking and Insurance.\n- ACCA Certification Program, Stage I.\n\nWork Experience:\n- 2010-2014 LLC Aktivi Audit Firm, Accountant.\n- 2014-2019 LLC Memteks Georgia Textile Factory, Financial Manager.\n- 2020-present LLC Audit and Consulting Group Audit Firm, Auditor.\n- 2023-present LLC Ka-2 Construction Organization, Chief Accountant.\n\nLanguages: Georgian (native), Russian (intermediate), English (good)", ru: "Дата рождения: 12.04.1988\n\nГражданство: Грузия\n\nТел: 577 123401\n\nОбразование:\n- 2007-2011 Кутаисский государственный университет Акакия Церетели. Специализация: Финансы, Банковское дело и Страхование.\n\nОпыт работы:\n- 2010-2014 ООО Аудиторская фирма Aktivi, Бухгалтер.\n- 2014-2019 ООО Memteks Georgia, Финансовый менеджер.\n- 2020-н.в. ООО Аудиторская фирма Audit and Consulting Group, Аудитор.\n\nЯзыки: Грузинский (родной), Русский (средний), Английский (хорошо)", tr: "Doğum Tarihi: 12.04.1988\n\nVatandaşlık: Gürcistan\n\nTel: 577 123401\n\nEğitim:\n- 2007-2011 Kutaisi Akaki Tsereteli Devlet Üniversitesi. Uzmanlık: Finans, Bankacılık ve Sigortacılık.\n\nİş Deneyimi:\n- 2010-2014 Aktivi Denetim Firması LLC, Muhasebeci.\n- 2014-2019 Memteks Georgia Tekstil Fabrikası LLC, Mali Müdür.\n- 2020-günümüze Audit and Consulting Group Denetim Firması LLC, Denetçi.\n\nDiller: Gürcüce (anadil), Rusça (orta), İngilizce (iyi)" } as any,
    imageUrl: "/gurami-kobakhidze.png",
    email: "guramikobakhidze@gmail.com",
    linkedinUrl: null,
  },
  {
    id: 5,
    name: { ka: "გიორგი ლაღიძე", en: "Giorgi Laghidze", ru: "Гиорги Лагидзе", tr: "Giorgi Laghidze" } as any,
    role: { ka: "IT სპეციალისტი / პორტფოლიო მენეჯერი", en: "IT Specialist / Portfolio Manager", ru: "IT-специалист / Менеджер портфолио", tr: "IT Uzmanı / Portföy Yöneticisi" } as any,
    bio: { ka: "გიორგი ლაღიძე არის IT სპეციალისტი და პორტფოლიო მენეჯერი.", en: "Giorgi Laghidze is an IT specialist and portfolio manager.", ru: "Гиорги Лагидзе — IT-специалист и менеджер портфолио.", tr: "Giorgi Laghidze bir IT uzmanı ve portföy yöneticisidir." } as any,
    imageUrl: "/giorgi-laghidze.png",
    email: null,
    linkedinUrl: "https://meetgiorgi.com/",
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    slug: "new-tax-regulations-2025",
    title: { ka: "ახალი საგადასახადო რეგულაციები 2025", en: "New Tax Regulations 2025", ru: "Новые налоговые правила 2025" } as any,
    summary: { ka: "მნიშვნელოვანი ცვლილებები მოგების გადასახადის კანონმდებლობაში.", en: "Significant changes in the profit tax legislation.", ru: "Существенные изменения в законодательстве о налоге на прибыль." } as any,
    content: { ka: "2025 წლიდან ძალაში შედის ახალი საგადასახადო რეგულაციები...", en: "From 2025, new tax regulations will come into force...", ru: "С 2025 года вступят в силу новые налоговые правила..." } as any,
    coverImageUrl: "https://images.unsplash.com/photo-1554224155-98406852d0aa?w=800&h=400&fit=crop",
    publishedAt: new Date("2026-01-24"),
  },
];
