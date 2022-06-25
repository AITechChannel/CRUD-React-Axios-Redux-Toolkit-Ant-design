import { Layout } from "antd";
import "antd/dist/antd.css";
import classNames from "classnames/bind";
import HeaderCustom from "../../components/HeaderCustom";
import SiderCustom from "../../components/SiderCustom";
import styles from "./CustomLayout.module.scss";

const cx = classNames.bind(styles);
const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <HeaderCustom />
    <SiderCustom>{children}</SiderCustom>
  </Layout>
);

export default MainLayout;
