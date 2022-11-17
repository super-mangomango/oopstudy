import React, { ReactElement, useState } from "react";
import "./App.css";
import Encapsulation from "./util/Encapsulation";
import Gimbob from "./images/gimbab.png";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [resultImg, setResultImg] = useState<ReactElement[] | undefined>(
    undefined
  );
  const [result, setResult] = useState<ReactElement | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const popExample = (amount: number) => {
    const make = new Encapsulation("참치마요", 1000, 10);
    make.makeGimbob(amount);
    let array = [];
    for (let i = 0; i < amount; i += 1) {
      array.push(i);
    }
    let listItems = array.map((num) => (
      <img
        src={Gimbob}
        style={{
          marginTop: "-60px",
          width: "400px",
          height: "auto",
          zIndex: num + 1,
        }}
        alt="김밥"
      />
    ));
    setResultImg(listItems);
    setResult(
      <>
        <div style={{ marginTop: "20px", fontSize: "32px", fontWeight: "700" }}>
          {make.makeGimbob(amount).completed}
        </div>
        <div style={{ marginTop: "10px", fontSize: "24px", fontWeight: "500" }}>
          {make.makeGimbob(amount).leftIngredients}
        </div>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <input
        type="number"
        onChange={(e) => onChange(e)}
        style={{ width: "500px", margin: "150px auto 24px", height: "48px" }}
      />
      <button
        onClick={() => popExample(amount)}
        style={{ width: "500px", margin: "0 auto 24px", height: "48px" }}
      >
        김밥하기
      </button>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {resultImg}
        {result}
      </div>
    </div>
  );
}

export default App;
