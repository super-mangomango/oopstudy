import React, {useState} from "react";
import PolymorphismImage from "../images/polymor.png"
import {css} from "@emotion/react";
import Inheritance from "../service/Inheritance";
import Abstraction from "../service/Abstraction";
import InheritanceTwo from "../service/InheritanceTwo";


function PolymorphismEx() {
    const [order, setOrder] = useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(Number(e.target.value));
    };

    const popExample = (amount: number) => {
        const make = [
            Abstraction.setIngredient("참치", 1000, 10),
            new Inheritance("김치", 1000, 10, true),
            new InheritanceTwo("스팸", 1000, 10, true),
            Abstraction.setIngredient("돈까스", 1000, 10),
            new Inheritance("어묵", 1000, 10, true),
            new Inheritance("멸치", 1000, 10, true),
            new InheritanceTwo("야채", 1000, 10, true),
            Abstraction.setIngredient("샐러드", 1000, 10),
        ]
        make.forEach(making => {
            console.log("------------------------");
            console.log(making.makeGimbob(amount))
        })
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
                <h3 css={title}>5. 다형성</h3>
                <img src={PolymorphismImage} alt="다형성"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>추상화된 하나의 객체를 통해 다양한 결과를 만들어 내는 것</li>
                    <li css={list}>생성자의 변수나, 상속받은 객체에서의 오버라이딩을 통해 공통된 특징(하나의 메서드로)을 가지는 각기 다른 다양한 결과값을 만들어 내는 특성으로, <span css={code}>코드 재사용성</span>을 높인다.</li>
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
                    type="number"
                    onChange={(e) => onChange(e)}
                    style={{width: "500px", margin: "150px auto 24px", height: "48px"}}
                />
                <button
                    onClick={() => popExample(order)}
                    style={{width: "500px", margin: "0 auto 24px", height: "48px"}}
                >
                    김밥하기
                </button>
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


export default PolymorphismEx;
