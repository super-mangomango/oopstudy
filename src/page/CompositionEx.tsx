import React, {ReactElement, useState} from "react";
import CompositionImg from "../images/prob_inheritance.png";
import Gimbob from "../images/gimbab.png"
import {css} from "@emotion/react";
import Composition from "../service/Composition";
import AddHotSauce from "../util/AddHotSauce";
import AddCucumber from "../util/AddCucumber";
import {Link} from "react-router-dom";

type orderType = {
    amount: number,
    main: string
}

function CompositionEx() {
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
        const hotSauce = new AddHotSauce();
        const cucumber = new AddCucumber();
        const make = new Composition(order.main, 1000, 10, hotSauce, cucumber);
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
                    {!result.hotSauce || "🔥🔥"}
                    <br/>
                    (오이 들었음 🤢🤢🤢)
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
                <h3 css={title}>6. 합성</h3>
                <img src={CompositionImg} alt="상속"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>상속의 단계가 깊어질수록 객체간의 관계가 복잡해진다. (의존성↑ 독립성↓)</li>
                    <li css={list}>복잡해진 관계도만큼, 부모 클래스가 수정되었을 때, 유지보수가 힘들다.</li>
                    <li css={list}>동시에 두 개 이상의 클래스를 상속받을 수 없다.
                    </li>
                    <li css={list}><strong>Object의 구조가 복잡하고, 변수가 많을 수록 composition을 사용하는 것이 클린 코드에 가깝다.</strong></li>
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
            <Link to="/진짜합성" style={{textDecoration: "none"}}>
                <button css={toComposition}>진짜 합성</button>
            </Link>
        </div>
    );
}



const title = css`
  font-size: 32px;
  margin: 48px 0 24px;
`
const toComposition = css`
  background-color: lightseagreen;
  margin: 48px auto;
  width: 360px;
  padding: 20px;
  display: block;
  color: white;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: seagreen;
  }
`

const list = css`
  font-size: 16px;
  padding: 8px 0;
`


export default CompositionEx;
