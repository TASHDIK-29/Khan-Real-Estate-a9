import Banner from "../../components/banner/Banner";
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import TeamMember from "../../components/team/TeamMember";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";



const Home = () => {
    
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <Helmet>
                <title>Home | Khan Real Estate</title>
            </Helmet>
           <Banner></Banner>
           <Cards data={data}></Cards>
           <TeamMember></TeamMember>
        </div>
    );
};

export default Home;