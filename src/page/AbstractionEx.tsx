import React, {ReactElement, useState} from "react";
import Abstract from "../images/abst.png";
import Gimbob from "../images/gimbab.png"
import {css} from "@emotion/react";
import Abstraction from "../service/Abstraction";

type orderType = {
    amount: number,
    main: string
}

function AbstractionEx() {
    const [order, setOrder] = useState<orderType>({amount: 0, main: ""});
    const [resultImg, setResultImg] = useState<ReactElement[] | undefined>(
        undefined
    );
    const [result, setResult] = useState<ReactElement | undefined>(undefined);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setOrder({
            amount: Number(value.split(",")[0]), main: value.split(",")[1]
        });
    };

    const popExample = (order: orderType) => {
        const make = Abstraction.setIngredient(order.main, 1000, 10);
        const result = make.makeGimbob(order.amount);
        let array = [];
        for (let i = 0; i < order.amount; i += 1) {
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
                    transition: `all ${2 + num}s linear`,
                    display: "block",
                }}
                alt="김밥"
                key={num}
            />
        ));
        setResultImg(listItems);
        setResult(
            <>
                <div style={{marginTop: "20px", fontSize: "32px", fontWeight: "700"}}>
                    {result.completed}
                </div>
                <div
                    style={{
                        marginTop: "10px",
                        marginBottom: "50px",
                        fontSize: "24px",
                        fontWeight: "500",
                    }}
                >
                    {result.leftIngredients}
                </div>
            </>
        );
    };

    return (
        <div style={{
            width: "100%",
        }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "800px",
                    margin: "0 auto",
                    paddingBottom: "96px"
                }}
            >
                <h3 css={title}>2. 추상화</h3>
                <img src={Abstract} alt="추상화"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>공통의 속성이나 기능을 묶어 정의하는 것으로, class를 만드는 것 자체를 추상화라고 할 수 있다.</li>
                    <li css={list}>김밥, 라면, 떡볶이 등을 하나의 작은 객체라고 보았을 때, 이것들을 분식이라는 추상적인 큰 객체로 묶어서 정의하는 것이 추상화이다.</li>
                    <li css={list}>
                        <span css={code}>interface</span>를 통해 동일한 형식의 결과를 항상 유도하여 재사용성을 높인다.
                    </li>
                </ul>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#e8e8e8",
                width: "800px",
                margin: "0 auto",
                paddingBottom: "96px"
            }}>
                <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    style={{width: "500px", margin: "150px auto 24px", height: "48px"}}
                />
                <button
                    onClick={() => popExample(order)}
                    style={{width: "500px", margin: "0 auto 24px", height: "48px"}}
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
        </div>
    );
}

const title = css`
  font-size: 32px;
  margin: 48px 0 24px;
`
const code = css`
  background-color: #f1f1f1;
  padding: 0.5px 2px;
  font-weight: 700;
`

const list = css`
  font-size: 16px;
  padding: 8px 0;
`


export default AbstractionEx;
