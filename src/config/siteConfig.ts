export const siteConfig = {
  name: "Silva-Startups",
  url: "",
  description:
    "",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },

  pages: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    }
  ]
}

export type SiteConfig = typeof siteConfig