import React from "react";

interface ChildProps {
  message: string;
  items: string[];
  onClickHandler: () => void;
}

const ChildComponent: React.FC<ChildProps> = ({
  message,
  items,
  onClickHandler,
}) => {
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClickHandler}>Click me</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
