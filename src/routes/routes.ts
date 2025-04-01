import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-LazyLoads/pages/NoLazy";
import LazyPage1 from "../01-LazyLoads/pages/LazyPage1";
import LazyPage2 from "../01-LazyLoads/pages/LazyPage2";
import LazyPage3 from "../01-LazyLoads/pages/LazyPage3";
import ShoppingPage from "../02-components-patters/pages/ShoppingPage";
// import LazyPage1 from "../01-LazyLoads/pages/LazyPage1";
// import LazyPage2 from "../01-LazyLoads/pages/LazyPage2";
// import LazyPage3 from "../01-LazyLoads/pages/LazyPage3";

type JSXComponent = () => React.JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName:  "LazyLayout" */ "../01-LazyLoads/layout/LazyLayout"
    )
);

// const Lazy1 = lazy(
//   () =>
//     import(
//       /* webpackChunkName:  "LazyPage1" */ "../01-LazyLoads/pages/LazyPage1"
//     )
// );
// const Lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunkName:  "LazyPage2" */ "../01-LazyLoads/pages/LazyPage2"
//     )
// );
// const Lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunkName:  "LazyPage3" */ "../01-LazyLoads/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    to: "/lazy-layout/",
    path: "/lazy-layout/*",
    Component: LazyLayout,
    name: "Lazy-layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
  //   {
  //     to: "/lazy3",
  //     path: "lazy3",
  //     Component: Lazy3,
  //     name: "Lazy-3",
  //   },
];

export const routesNoLazy: Route[] = [
  {
    to: "/about",
    path: "/about",
    Component: LazyPage1,
    name: "About",
  },
  {
    to: "/home",
    path: "/home",
    Component: ShoppingPage,
    name: "Home",
  },
  {
    to: "/users",
    path: "users",
    Component: LazyPage3,
    name: "Users",
  },
];
