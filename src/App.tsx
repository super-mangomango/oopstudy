import React, {useState} from 'react';
import './App.css';
import GimbobIngredientInterface from "./interface/GimbobIngredientInterface";

function App() {
    const [amount, setAmount] = useState<number>(0)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }

    let ingredient: GimbobIngredientInterface = {
        main: undefined,
        vegetables: true,
        rice: 0,
        steamedRice: 0,
        laver: 0,
    }

    const popExample = (amount: number) => {
        // const gimbob = MakeGimbobUtil.setIngredient("멸치고추", 1000, 10)
        // gimbob.makeGimbob(amount)
        ingredient.main = "참치마요"
        ingredient.rice = 600
        ingredient.laver = 6

        if (amount * 100 > ingredient.rice) {
            console.error("쌀이 부족합니다.")
        } else {
            console.log(`밥을 ${amount}공기 하고 있습니다.`)
            ingredient.steamedRice = amount;
            ingredient.rice = ingredient.rice - amount * 100
        }
        console.log("밥에 간을 하고 있습니다.")
        if (amount > ingredient.laver) {
            console.error("김이 부족합니다.")
            console.error("김이 부족합니다.")
        } else {
            console.log(`김에 밥을 올리고 펴고 있습니다.`)
            ingredient.laver = ingredient.laver - amount;
            ingredient.steamedRice = ingredient.steamedRice - amount;
        }
        console.log("재료를 올리고 있습니다.")
        console.log("꾹꾹 말고 있습니다.")
        console.log(`${ingredient.main}김밥 ${amount}줄 완성!!`)
        console.log(`남은 재료는 쌀${ingredient.rice}g, 밥${ingredient.steamedRice}공기, 김${ingredient.laver}장 입니다.`)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%"}}>
            <input type="number" onChange={e => onChange(e)} style={{width: "500px", margin: "200px auto 24px", height: "48px"}}/>
            <button onClick={() => popExample(amount)} style={{width: "500px", margin: "0 auto 24px", height: "48px"}}>김밥하기</button>
        </div>
    );
}

export default App;
