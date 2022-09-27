import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  to: string;
}

const Path = ({ text, to }: Props) => {
  return (
    <li>
      <Link href={to}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

export default Path;
