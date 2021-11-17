import { Child } from "./Child";

const Parent = () => {
  return <Child color="red" onClick={() => console.log("you clicked me")} />;
};

export default Parent;
