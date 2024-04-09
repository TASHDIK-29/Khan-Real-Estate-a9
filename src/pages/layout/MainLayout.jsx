import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Footer from "../footer/Footer";
const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;