import {css, Global} from "@emotion/react"

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Pretendard", serif;
    line-height: 1.3;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-std-dynamic-subset.css");
  }
`

const GlobalStyle = () => {
    return <Global styles={globalStyles}/>
}

export default GlobalStyle