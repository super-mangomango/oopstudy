import React, {ReactElement, useState} from "react";
import Encapsulation from "../service/Encapsulation";
import Gimbob from "../images/gimbab.png";
import Problem from "../images/prob_inheritance.png"
import {css} from "@emotion/react";


function CompositionEx() {
    const [order, setOrder] = useState<number>(0);
    const [resultImg, setResultImg] = useState<ReactElement[] | undefined>(
        undefined
    );
    const [result, setResult] = useState<ReactElement | undefined>(undefined);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(Number(e.target.value));
    };

    const popExample = (amount: number) => {
        const make = new Encapsulation(1000, 10);
        const result = make.makeGimbob(amount);
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
                <h3 css={title}>6. 합성</h3>
                <img src={Problem} alt="상속의문제점"/>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>상속의 단계가 깊어질수록 객체간의 관계가 복잡해진다. (의존성↑ 독립성↓)</li>
                    <li css={list}>복잡해진 관계도만큼, 부모 클래스가 수정되었을 때, 유지보수가 힘들다.</li>
                    <li css={list}>동시에 두 개 이상의 클래스를 상속받을 수 없다.
                    </li>
                    <li css={list}><strong>Object의 구조가 복잡하고, 변수가 많을 수록 composition을 사용하는 것이 클린 코드에 가깝다.</strong></li>
                </ul>
                <h5 css={css`margin: 16px 0 0;
                  font-size: 20px`}>·Static Property</h5>
                <ul css={css`margin: 16px 0`}>
                    <li css={list}>
                        <span css={code}>static property</span>를 선언하면, 해당 변수나 메소드는 class level로 올라가면서 (원래는 object level)
                        인스턴스를 생성할 때마다 새롭게 생성되지 않으며, 인스턴스를 생성하지 않더라도 독립적으로 사용할 수 있다.
                    </li>
                </ul>
                <h5 css={css`margin: 16px 0 0;
                  font-size: 20px; `}>·접근 제한자(Access modifier)</h5>
                <ul css={css`margin: 16px 0;
                  list-style: decimal`}>
                    <li css={decimalList}>
                        public
                        <ul css={css`padding-left: 8px`}>
                            <p css={list}>· 제한자를 선언하지 않는다면 기본적으로 모든 변수와 메소드는 public이다.</p>
                            <p css={list}>· public은 외부에서 인스턴스 생성 후 어디서나 접근이 가능하다.</p>
                        </ul>
                    </li>
                    <li css={decimalList}>
                        private
                        <ul css={css`padding-left: 8px`}>
                            <p css={list}>
                                · private을 선언하게 되면, 해당 변수와 메소드는 외부에서 접근이 불가능하다.
                            </p>
                        </ul>
                    </li>
                    <li css={decimalList}>
                        protected
                        <ul css={css`padding-left: 8px`}>
                            <p css={list}>· protected는 기본적으로 private과 동일하지만, class를 상속받은 상속자에서는 접근이 가능하다.</p>
                        </ul>
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
const decimalList = css`
  font-size: 18px;
  padding: 8px 0;
`

export default CompositionEx;
