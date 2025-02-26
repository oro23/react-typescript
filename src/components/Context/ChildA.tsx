import { useContext } from "react";
import { MessageContext } from "../../App";
import ChildB from "./ChildB";
export const ChildA = () => {
  const message = useContext(MessageContext);
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  );
};
