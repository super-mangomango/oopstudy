import React, {ReactElement, useState} from "react";
import NudeGimbob from "../images/nudegimbob.png"
import EggGimbob from "../images/egggimbob.png"
import {css} from "@emotion/react";
import AbstractInheritance from "../service/AbstractInheritance";
import AbstractInheritanceTwo from "../service/AbstractInheritanceTwo";

type orderType = {
    amount: number,
    main: string
}

function AbstractInheritanceEx() {
    const [order, setOrder] = useState<orderType>({amount: 0, main: ""});
    const [resultImg, setResultImg] = useState<ReactElement[] | undefined>(
        undefined
    );
    const [resultImgTwo, setResultImgTwo] = useState<ReactElement[] | undefined>(
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
        const make = new AbstractInheritance(order.main, 1000, 10);
        const makeTwo = new AbstractInheritanceTwo(order.main, 1000, 10)
        const result = make.makeGimbob(order.amount);
        const resultTwo = makeTwo.makeGimbob(order.amount);
        let array = [];
        for (let i = 0; i < order.amount; i += 1) {
            array.push(i);
        }
        let listItems = array.map((num) => (
            <img
                src={NudeGimbob}
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
        let listItemsTwo = array.map((num) => (
            <img
                src={EggGimbob}
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
        setResultImgTwo(listItemsTwo)
        setResult(
            <div style={{marginTop: "20px", fontSize: "32px", fontWeight: "700"}}>
                누드{result.completed}<br/>
                계란{resultTwo.completed}
            </div>
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
                <h3 css={title}>4. 상속의 추상화</h3>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>상위 클래스(큰 개념)만으로 객체를 사용할 경우가 없거나, 너무 크게 추상화가 되었을 때, 하위 클래스만으로 실제로 사용될 때, 공통동작을 제공하는 역할을 한다.</li>
                    <li css={list}>공통 동작과, 객체 각각의 특징 메서드의 구현이 분리되어 있어, 유지보수에 용이하고 가독성이 좋아진다.</li>
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
                    <div>
                        {resultImg}
                    </div>
                    <div style={{marginTop: "24px"}}>
                        {resultImgTwo}
                    </div>
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


export default AbstractInheritanceEx;
