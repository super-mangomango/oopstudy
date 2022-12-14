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
                alt="κΉλ°₯"
                key={num}
            />
        ));
        setResultImg(listItems);
        setResult(
            <>
                <div style={{marginTop: "20px", fontSize: "32px", fontWeight: "700", textAlign: "center"}}>
                    {!result.hotSauce || "π₯π₯ μμ²­ λ§€μ΄"}
                    {result.completed}
                    {!result.hotSauce || "π₯π₯"}<br/>
                    {!result.hasCucumber || "(μ€μ΄ λ€μμ π€’π€’π€’)"}
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
                <h3 css={title}>3. μμ</h3>
                <img src={InheritanceImg} alt="μμ"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>μΆμνλ μμ κ°μ²΄μ νΉμ§μ μΆκ°λ νΉμ§μ κ°μ§λ νμ κ°μ²΄κ° μμκ°μ²΄λ‘λΆν° κ°λμ λ¬Όλ €λ°λ κ²</li>
                    <li css={list}>νλ°μ λ₯Ό μ¬μ©νκ³ , 4κ°μ λ°ν΄κ° μκ³ , μμ§μ΄λ <span css={code}>μλμ°¨(μμ κ°λ)</span><br/>β λμΌν νΉμ§μ κ°μ§μ§λ§ λκ»μ΄ μ΄λ¦¬λ <span css={code}>μ€ν¬μΈ μΉ΄(μμ κ°λ)</span></li>
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
                    κΉλ°₯νκΈ°
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
