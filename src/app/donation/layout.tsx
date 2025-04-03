import { ReactNode } from "react";
import { Header } from "../_components/Header";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
