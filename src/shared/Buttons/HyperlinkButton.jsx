import React from "react";
import Link from "next/link";

export const HyperlinkButton = ({ text, link }) => {
  const regEx = /^http/;
  return (
    <div className="inline-flex font-bold">
      {regEx.test(link) ? (
        <Link href={link}>{text}</Link>
      ) : (
        <a className="px-9 py-3" href={link}>
          {text}
        </a>
      )}
    </div>
  );
};
