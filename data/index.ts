
export const navItemsEn = [
  { name: "Up", link: "#up" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const navItemsFa = [
  { name: "بالا", link: "#up" },
  { name: "پروژه‌ها", link: "#projects" },
  { name: "نظرات", link: "#testimonials" },
  { name: "تجربه", link: "#experience" },
  { name: "تماس", link: "#contact" },
];

// export const projects = [
//   {
//     id: 1,
//     title: "tts -  E-commerce web app",
//     des: "A program to shorten existing processes and develop business with the least personnel.",
//     img: "./tts.svg",
//     iconLists: ["./next.svg", "./tail.svg", "./js.svg", "./chart.js.svg"],
//     link: "/ui.yoom.com",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     des: "Portfolio is a collection of professional work samples and personal projects, designed to showcase skills, expertise, and work experience in various fields.",
//     img: "./portfolio.svg",
//     iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg"],
//     link: "/ui.earth.com",
//   },
// ];
export const projects = [
  {
    id: 1,
    title: "tts - E-commerce web app",
    titleFa: "تی‌تی‌اس - اپلیکیشن تجارت الکترونیک",
    des: "A program to shorten existing processes and develop business with the least personnel.",
    desFa: "برنامه‌ای برای کوتاه کردن فرآیندهای موجود و توسعه کسب و کار با کمترین پرسنل.",
    img: "./tts.svg",
    iconLists: ["./next.svg", "./tail.svg", "./js.svg", "./chart.js.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 2,
    title: "Portfolio",
    titleFa: "نمونه کارها",
    des: "Portfolio is a collection of professional work samples and personal projects, designed to showcase skills, expertise, and work experience in various fields.",
    desFa: "نمونه کارها مجموعه‌ای از نمونه‌های کار حرفه‌ای و پروژه‌های شخصی است که برای نمایش مهارت‌ها، تخصص و تجربه کاری در زمینه‌های مختلف طراحی شده است.",
    img: "./portfolio.svg",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg"],
    link: "/ui.earth.com",
  },
];
export const testimonials = [
  {
    id: 1,
    quote:
    "Working with Pedram was a game-changer for our business. His innovative approach and ability to translate complex ideas into functional solutions exceeded our expectations. Pedram's commitment to quality and his attention to detail make him an invaluable asset. I highly recommend him for anyone looking to take their project to the next level.",
    name: "Mohsen Mohamadi",
    title: "CEO  of Romano Company",
    quoteFa: "همکاری با پدرام تجارت و بیزینس را برای ما تغییر داد. رویکرد نوآورانه و توانایی او در تبدیل ایده های پیچیده به راه حل های کاربردی فراتر از انتظارات ما بود. تعهد پدرام به کیفیت و توجه او به جزئیات او را به یک دارایی ارزشمند تبدیل می کند. من او را به شدت به همه توصیه می کنم. به دنبال این هستند که پروژه خود را به سطح بعدی ببرند.",
    nameFa: "محسن محمدی",
    titleFa: "مدیرعامل شرکت رومانو",
  },
  {
    id: 2,
    quote:
    "Pedram consistently delivered above and beyond what was expected. His expertise in both front-end and back-end development is impressive, but what truly sets him apart is his passion for his work. He approaches every project with enthusiasm and creativity, making him an exceptional collaborator.",
    name: "Mehdi Shakiba",
    title: "Team Lead of TETIS",   
    quoteFa: "پدرام همیشه بیشتر و فراتر از انتظار راه حل ارائه می کرد.  چیزی که او را واقعاً متمایز می کند، علاقه او به کارش است. او با اشتیاق و خلاقیت به هر پروژه ای کار میکنه و باعث می شود که یک همکار فوق العاده باشه",
    nameFa: "مهدی شکیبا",
    titleFa: "تیم لید تتیس",
  },
  {
    id: 3,
    quote:
      "Pedram's ability to understand our needs and provide tailored solutions was incredible. His strategic thinking and problem-solving skills helped us overcome several challenges, and his dedication to delivering top-notch work was clear from day one. I would highly recommend Pedram to anyone looking for a professional who truly cares about their project's success.",
    name: "Ashkan ghasemlo",
    title: "CEO  of Patris Company",
    quoteFa: "توانایی پدرام در درک نیازهای ما و ارائه راه حل های متناسب باورنکردنی بود. تفکر استراتژیک و مهارت های حل مسئله او به ما کمک کرد تا بر چندین چالش غلبه کنیم، و تعهد او به ارائه کارهای درجه یک از همان روز اول مشخص بود. من پدرام را به شدت به همه توصیه می کنم. به دنبال حرفه ای است که واقعاً به موفقیت پروژه خود اهمیت می دهد.",
    nameFa: "اشکان قاسم‌لو",
    titleFa: "مدیرعامل شرکت پاتریس"
  },
];

export const workExperience = [
  {
    id: 1,
    title: {
      en: "Frontend Developer",
      fa: "توسعه‌دهنده فرانت‌اند",
    },
    // desc: "Designed and implemented user interfaces with a focus on performance and responsiveness using modern frontend technologies.",
    desc: {
      en: "Designed and implemented user interfaces with a focus on performance and responsiveness using modern frontend technologies.",
      fa: "طراحی و پیاده‌سازی رابط‌های کاربری با تمرکز بر عملکرد و پاسخگویی با استفاده از تکنولوژی‌های مدرن فرانت‌اند.",
    },
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    // title: "Freelance App Developer",
    // desc: "Designed and developed a fully functional e-commerce web app for B2B bussiness, including product catalog, and user authentication. Delivered a seamless shopping experience with a focus on performance, security, and user-friendly interface.",
    title: {
      en: "Freelance App Developer",
      fa: "توسعه‌دهنده اپلیکیشن فریلنس",
    },
    desc: {
      en: "Designed and developed a fully functional e-commerce web app for B2B business, including product catalog, and user authentication. Delivered a seamless shopping experience with a focus on performance, security, and user-friendly interface.",
      fa: "طراحی و توسعه یک اپلیکیشن وب تجارت الکترونیک کاملاً کاربردی برای کسب‌وکارهای B2B،  شامل کاتالوگ محصولات و احراز هویت کاربران. با تمرکز بر عملکرد و امنیت و کاهش زمان و پرسنل .",
    },
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
  {
    id: 3,
    // title: "Business Development Manager",
    // desc: "Managed and expanded business operations, developed strategic partnerships, identified new market opportunities, reduced costs, and implemented efficient structures to drive revenue growth and business success.",
    title: {
      en: "Business Development Manager",
      fa: "مدیر توسعه کسب‌وکار",
    },
    desc: {
      en: "Managed and expanded business operations, developed strategic partnerships, identified new market opportunities, reduced costs, and implemented efficient structures to drive revenue growth and business success.",
      fa: "مدیریت و گسترش عملیات کسب‌وکار، توسعه شراکت‌های استراتژیک، شناسایی فرصت‌های جدید بازار، کاهش هزینه‌ها و پیاده‌سازی ساختارهای کارآمد برای افزایش درآمد و موفقیت کسب‌وکار.",
    },
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 4,
    // title: "Entrepreneur",
    // desc: "Founded and managed two startup, handling all aspects of business operations, including product development, marketing, and client relations.",
    title: {
      en: "Entrepreneur",
      fa: "کارآفرین",
    },
    desc: {
      en: "Founded and managed two startup, handling all aspects of business operations, including product development, marketing, and client relations.",
      fa: "تأسیس و مدیریت دو استارتاپ، مدیریت تمامی جنبه‌های عملیات کسب‌وکار، از جمله توسعه محصول، بازاریابی و ارتباط با مشتریان.",
    },
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://www.linkedin.com/in/pedram-vosooghinia-1b2418a0/",
  },

  {
    id: 3,
    img: "./link.svg",
    link: "https://github.com/pedram-vosooghinia",
  },
];
