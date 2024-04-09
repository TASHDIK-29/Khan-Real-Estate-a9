import BookmarkCard from "../../components/bookmarkesCard/BookmarkCard";
import { getStoredData } from "../../utils/storage";

const Bookmark = () => {

    const bookmarked = getStoredData();
    console.log(bookmarked);
    return (
        <div>
            <h1>Bookmark page</h1>
            <div className="grid grid-cols-3 gap-4 p-6">
                {
                    bookmarked.map(item => <BookmarkCard key={item.id} item={item}></BookmarkCard>)
                }
            </div>
        </div>
    );
};

export default Bookmark;