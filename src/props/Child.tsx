import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export { Child };
