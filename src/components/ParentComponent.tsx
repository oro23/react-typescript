import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const message = "Hello from parent!";
  const itemsList = ["HTML", "CSS", "JS"];
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <div>
      <ChildComponent
        message={message}
        items={itemsList}
        onClickHandler={handleClick}
      />
    </div>
  );
};

export default ParentComponent;
