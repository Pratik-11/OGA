import { NbMenuItem } from "@nebular/theme";


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Home Page",
    icon: "home",
    link: "/pages/home-page",
  },
  {
    title: "National Automation Team",
    icon: "people",
    link: "/pages/national-automation-team",
    home: true,
  },
  {
    title: "Quick Links",
    icon: "bookmark",
    link: "/pages/quick-links",
    home: true,
  },
  {
    title: "Automation Utilization",
    icon: "bar-chart",
    children: [
      {
        title: "UAT",
        link: "/pages/automation-utilization/uat",
      },
      {
        title: "PROD",
        link: "/pages/forms/PROD",
      },
    ],
  },
];
