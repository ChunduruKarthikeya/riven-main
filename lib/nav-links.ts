

export type NavMenuItem = {
  title: string;
  href: string;
  tagline?: string;
  
};

export type NavLink = {
  title: string;
  href: string;
  menu?: NavMenuItem[];
};

export const NAV_LINKS: NavLink[] = [
  
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Typing Practice",
    href: "/learn-typing",
  },
  
  {
    title: "Skillup",
    href: "/skill-up",
  },
  {
    title: " Tech Blogs",
    href: "/blogs",
  },
  {
    title: "Riven-AI",
    href: "/riven-ai",
  },

  
  
];
