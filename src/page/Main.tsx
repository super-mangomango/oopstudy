import React, {useState} from "react"
import Logo from "../images/logo.jpg";
import Menu_1 from "../images/menu-1.jpg"
import Menu_1_1 from "../images/menu-1-1.jpg"
import Menu_2 from "../images/menu-2.jpg"
import Menu_2_1 from "../images/menu-2-1.jpg"
import Menu_3 from "../images/menu-3.jpg"
import Menu_3_1 from "../images/menu-3-1.jpg"
import Menu_4 from "../images/menu-4.jpg"
import Menu_4_1 from "../images/menu-4-1.jpg"
import Menu_5 from "../images/menu-5.jpg"
import Menu_5_1 from "../images/menu-5-1.jpg"
import Menu_6 from "../images/menu-6.jpg"
import Menu_6_1 from "../images/menu-6-1.jpg"
import {css} from '@emotion/react'
import {Link} from "react-router-dom";

function Main() {
    const [hover, setHover] = useState<number>(0);

    return (
        <div css={main}>
            <img src={Logo} css={logo} alt="로고"/>
            <p css={text}>
                · 아래의 OOP 속성들은 OOP의 원래 목적인 가독성, 안정성,<br/>&nbsp; 재사용성, 효율성 등 모듈화를 더 효과적으로 하기 위한 방법들이다.<br/><br/>
                · 모듈화를 함에 있어서, 아래의 개념들이 <strong>필수 조건들은 아니다.</strong>
            </p>
            <div css={dishes}>
                <Link to="/캡슐화">
                    <img onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} src={hover === 1 ? Menu_1_1 : Menu_1} css={menu} alt="메뉴"/>
                </Link>
                <Link to="/추상화">
                    <img onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} src={hover === 2 ? Menu_2_1 : Menu_2} css={menu} alt="메뉴"/>
                </Link>
                <Link to="/상속">
                    <img onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} src={hover === 3 ? Menu_3_1 : Menu_3} css={menu} alt="메뉴"/>
                </Link>
                <Link to="/상속+추상화">
                    <img onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} src={hover === 4 ? Menu_4_1 : Menu_4} css={menu} alt="메뉴"/>
                </Link>
                <Link to="/다형성">
                    <img onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)} src={hover === 5 ? Menu_5_1 : Menu_5} css={menu} alt="메뉴"/>
                </Link>
                <Link to="/합성">
                    <img onMouseEnter={() => setHover(6)} onMouseLeave={() => setHover(0)} src={hover === 6 ? Menu_6_1 : Menu_6} css={menu} alt="메뉴"/>
                </Link>
            </div>
        </div>
    )
}

const main = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);`

const logo = css`
  width: 320px;
  height: auto;
  margin: 0 auto 40px;
  display: block;
`

const text = css`
  width: 630px;
  background-color: #e4f3f0;
  border-radius: 30px;
  font-size: 16px;
  color: #084235;
  margin-bottom: 20px;
  padding: 24px 36px;
`

const dishes = css`
  width: 636px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px
`
const menu = css`
  width: 300px;
  height: auto;
`

export default Main