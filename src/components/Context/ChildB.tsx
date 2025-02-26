import { useContext } from "react";
import { MessageContext } from "../../App";
import ChildC from "./ChildC";
const message = useContext(MessageContext);

function ChildB() {
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
}

export default ChildB;
