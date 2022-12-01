import React, {ReactElement, useState} from "react";
import InheritanceImg from "../images/inheri.png";
import Gimbob from "../images/gimbab.png"
import {css} from "@emotion/react";
import Inheritance from "../service/Inheritance";

type orderType = {
    amount: number,
    main: string
}

function InheritanceEx() {
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
        const make = new Inheritance(order.main, 1000, 10, true);
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
                <div style={{marginTop: "20px", fontSize: "32px", fontWeight: "700", textAlign: "center"}}>
                    {!result.hotSauce || "🔥🔥 엄청 매운"}
                    {result.completed}
                    {!result.hotSauce || "🔥🔥"}<br/>
                    {!result.hasCucumber || "(오이 들었음 🤢🤢🤢)"}
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
                <h3 css={title}>3. 상속</h3>
                <img src={InheritanceImg} alt="상속"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>추상화된 상위 객체의 특징에 추가된 특징을 가지는 하위 객체가 상위객체로부터 개념을 물려받는 것</li>
                    <li css={list}>휘발유를 사용하고, 4개의 바퀴가 있고, 움직이는 <span css={code}>자동차(상위 개념)</span><br/>→ 동일한 특징을 가지지만 뚜껑이 열리는 <span css={code}>스포츠카(상위 개념)</span></li>
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


export default InheritanceEx;
