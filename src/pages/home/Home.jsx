import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/cards/Cards";
const Home = () => {

    const data = useLoaderData();
    
    return (
        <div>
           <Banner></Banner>
           <Cards data={data}></Cards>
        </div>
    );
};

export default Home;