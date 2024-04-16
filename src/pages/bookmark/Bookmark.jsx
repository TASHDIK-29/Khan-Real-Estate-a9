import { Helmet } from "react-helmet-async";
import BookmarkCard from "../../components/bookmarkesCard/BookmarkCard";
import { getStoredData } from "../../utils/storage";
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';
import Recommended from "../../components/recommended/Recommended";
import { useEffect } from "react";

const Bookmark = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const data = useLoaderData();
    console.log(data);

    const bookmarked = getStoredData();
    console.log(bookmarked);
    return (
        <div>
            <Helmet>
                <title>Bookmark | Khan Real Estate</title>
            </Helmet>
            <div className="p-2">
                <h1 className="md:w-2/6 mx-auto p-2 text-center text-black border-b-4 border-green-700 font-bold text-4xl my-4">Your Bookmarks</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {
                    bookmarked.map(item => <BookmarkCard key={item.id} item={item}></BookmarkCard>)
                }
            </div>

            <div className="p-2">
                <h1 className="md:w-2/6 mx-auto text-center text-black border-b-4 border-green-700 font-bold text-4xl mt-6 mb-4 p-4">Recommended For You</h1>
            </div>
            <div className="">
                <Marquee pauseOnHover={true} speed={150}>
                    {
                        data.map(item => <Recommended key={item.id} item={item}></Recommended>)
                    }
                </Marquee>
            </div>

        </div>
    );
};

export default Bookmark;