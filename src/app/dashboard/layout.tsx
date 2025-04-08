import { ReactNode } from "react";
import { Header } from "../_components/Header";
import LeftSide from "../_components/LeftSide";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <LeftSide />
      {props.children}
    </div>
  );
};
export default Layout;
