import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    heading: "inicio",
    route: "/dashboard",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
  },
  {
    heading: "pessoas",
    route: "/builder",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
  },
  {
    sectionTitle: "clientes",
    route: "/apps",
    keenthemesIcon: "black-right",
    bootstrapIcon: "bi-arrow-right",
    pages: [
      {
        heading: "novoClinte",
        route: "/apps/customers/getting-started",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-arrow-right",
      }
    ],
  },

];

export default MainMenuConfig;

import type { MenuItem } from "@/layouts/default-layout/config/types";
