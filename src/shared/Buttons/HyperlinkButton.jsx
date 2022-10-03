import React from "react";
import Link from "next/link";

export const HyperlinkButton = ({ text, link }) => {
  const regEx = /^http/;
  return (
    <Link href={link}>
      <a target="_blank">
        <div className="inline-flex font-bold">
          {regEx.test(link) ? (
            <Link href={link} target="_blank">
              {text}
            </Link>
          ) : (
            <a className="px-9 py-3" href={link} target="_blank">
              {text}
            </a>
          )}
        </div>
      </a>
    </Link>
  );
};
