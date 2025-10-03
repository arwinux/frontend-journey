import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "../context/BookmarkList";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi";

function Bookmark() {
  const { isLoading, bookmarks, currentBookmark, deleteBookmark } =
    useBookmark();

  const handleClick = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };

  if (isLoading) return <Loader />;

  if (!bookmarks.length) return <p>there is no bookmarked location</p>;

  return (
    <div>
      <h2>BookmarkList</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
              <div
                key={item.id}
                className={`bookmarkItem ${
                  item.id === currentBookmark?.id ? "current-bookmark" : ""
                }`}
              >
                <div>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  &nbsp; <strong>{item.cityName}</strong> &nbsp;
                  <span>{item.country}</span>
                </div>
                <button onClick={(e) => handleClick(e, item.id)}>
                  <HiTrash className="trash" />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
