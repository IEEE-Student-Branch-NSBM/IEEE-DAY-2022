import React from "react";

export const HyperlinkButton = ({ text, link}) => {
  return (
    <div className="inline-flex font-bold">
      <a className="px-9 py-3" href={link}>{text}</a>
    </div>
  );
};
