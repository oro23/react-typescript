// import { useState } from "react";
// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.css";
import ParentComponent from "./components/ParentComponent";
import { createContext } from "react";

function App() {
  //const [count, setCount] = useState(0);

  // const data = ["HTML", "C#", "JS", "C++", "PHP"];

  // const list = data.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });

  // let items = ["C#", "HTML", "CSS", "JAVA"];
  // const handleClick = (item: string) => {
  //   console.log(item);
  // };

  const MessageContext = createContext<string>("");

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="List Group"
        onSelectItem={handleClick}
      /> */}
      {/* <Alert>
        Hello <span className="text text-success">World!</span>
      </Alert>
      <ParentComponent /> */}
      {/* <br />
      <ul>{list}</ul> */}
    </>
  );
}

export default App;
