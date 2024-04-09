import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import TeamMember from "../../components/team/TeamMember";
const Home = () => {

    const data = useLoaderData();
    
    return (
        <div>
           <Banner></Banner>
           <Cards data={data}></Cards>
           <TeamMember></TeamMember>
        </div>
    );
};

export default Home;