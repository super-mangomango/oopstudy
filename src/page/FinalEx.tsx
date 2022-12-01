import React, {ReactElement, useState} from "react";
import Gimbob from "../images/gimbab.png"
import {css} from "@emotion/react";
import AddOtherIngredient from "../util/AddOtherIngredient";
import AddSauce from "../util/AddSauce";
import RealComposition from "../service/RealComposition";

type orderType = {
    amount: number,
    main: string
}

function FinalEx() {
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
        const sauce = new AddSauce("마요네즈");
        const other = new AddOtherIngredient("오이");
        const make = RealComposition.setIngredient(order.main, 1000, 10, sauce, other);
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
                    {!result.sauce || `${result.sauce} 가득 뿌려진`} <br/>
                    {result.completed} <br/>
                    {!result.other || `(${result.other} 추가되었습니다.)`}
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
                <h3 css={title}>Interface를 통한 규격화</h3>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>1. 합성되는 부분의 메서드가 재활용될 수 있도록 추상화</li>
                    <li css={list}>2. 합성되는 메서드의 Interface 규격화</li>
                    <li css={list}>3. 합성되는 부분을 포함할 수 있는 본 메서드의 Interface 규격화
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

const list = css`
  font-size: 16px;
  padding: 8px 0;
`


export default FinalEx;
