import React, { useEffect } from "react";
import { useBookmark } from "../context/BookmarkList";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, isLoading, currentBookmark } = useBookmark();

  const navigate = useNavigate();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading || !currentBookmark) return <Loader />;
  return (
    <div>
      <button onClick={handleBack} className="btn btn--back">
        &larr; Back
      </button>
      <h2>{currentBookmark.cityName}</h2>
      <div key={currentBookmark.id} className="bookmarkItem">
        <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
        &nbsp; <strong>{currentBookmark.cityName}</strong> &nbsp;
        <span>{currentBookmark.country}</span>
      </div>
    </div>
  );
}

export default SingleBookmark;
