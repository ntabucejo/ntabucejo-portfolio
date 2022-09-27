import React from "react";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default Main;
