import { FC } from "react";
import "antd/dist/reset.css";
import "./GlobalStyles.scss";

type GlobalStylesType = {
  children: JSX.Element;
};

const GlobalStyles: FC<GlobalStylesType> = ({ children }) => {
  return children;
};

export default GlobalStyles;
