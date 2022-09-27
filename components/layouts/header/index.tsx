import React from "react";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className="py-8">
      <div>{children}</div>
    </header>
  );
};

export default Header;
