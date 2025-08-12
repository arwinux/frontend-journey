import React from "react";

function Message({ children }) {
  return (
    <div className="sm:text-xl md:text-2xl break-words text-center">
      {children}
    </div>
  );
}

export default Message;
