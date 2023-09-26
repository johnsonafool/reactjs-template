import { lazy, type FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const FooPage = lazy(() => import("@/pages/foo"));
const BarPage = lazy(() => import("@/pages/bar"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

const routeList: RouteObject[] = [
  {
    path: "/",
    element: <FooPage />,
  },
  {
    path: "/foo",
    element: <FooPage />,
  },
  {
    path: "/bar",
    element: <BarPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
