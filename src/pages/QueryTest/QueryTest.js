import { useRef } from "react";
import "./style.css";

const QueryTest = () => {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("Bạn đã nhấp chuột " + ref.current + " lần!");
  }

  console.log('Render');

  return <button onClick={handleClick}>Nhấp vào tôi!</button>;
};

export default QueryTest;
