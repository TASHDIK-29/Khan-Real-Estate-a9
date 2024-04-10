import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Footer from "../footer/Footer";
const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;