import React from "react";

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <footer>
      <div>{children}</div>
    </footer>
  );
};

export default Footer;
