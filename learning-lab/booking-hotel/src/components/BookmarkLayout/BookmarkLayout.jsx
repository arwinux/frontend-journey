import React from "react";
import Map from "../Map/Map";
import { Outlet } from "react-router-dom";
import { useBookmark } from "../context/BookmarkList";

function BookmarkLayout() {
  const { bookmarks } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocation={bookmarks} />
    </div>
  );
}

export default BookmarkLayout;

// state => bookmarklist => global
