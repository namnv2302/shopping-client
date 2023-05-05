import React, { FC } from "react";
import { RouteProps } from "react-router-dom";
import ROUTE_PATH from "@constants/routes";

import HomePage from "@pages/Home";

type RouterProps = RouteProps & {
  layout?: null | FC;
};

const ROUTER: RouterProps[] = [
  // Home
  {
    path: ROUTE_PATH.HOME,
    element: React.createElement(HomePage, null, null),
  },
];

export default ROUTER;
