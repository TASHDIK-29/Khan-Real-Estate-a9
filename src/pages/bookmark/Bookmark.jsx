import BookmarkCard from "../../components/bookmarkesCard/BookmarkCard";
import { getStoredData } from "../../utils/storage";

const Bookmark = () => {

    const bookmarked = getStoredData();
    console.log(bookmarked);
    return (
        <div>
            <div className="bg-black opacity-30 py-4 px-4">
                <h1 className="text-center text-white font-bold text-4xl">Your Bookmarks</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {
                    bookmarked.map(item => <BookmarkCard key={item.id} item={item}></BookmarkCard>)
                }
            </div>
        </div>
    );
};

export default Bookmark;