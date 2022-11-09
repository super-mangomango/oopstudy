import React, {useState} from 'react';
import './App.css';
import GimbobIngredientInterface from "./interface/GimbobIngredientInterface";

function App() {
  const [amount, setAmount] = useState<number>(0)

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  let ingredient:GimbobIngredientInterface = {
    main:undefined,
    vegetables:true,
    rice:undefined,
    steamedRice:undefined,
    laver:undefined
  }

  const popExample = (amount:number) => {
    ingredient.main = "참치마요"
    ingredient.rice = 300
    ingredient.laver = 6
  }

  return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%"}}>
        <input type="number" onChange={e=>onChange(e)} style={{width:"500px", margin:"200px auto 24px", height:"48px" }} />
        <button onClick={()=>popExample(amount)} style={{width:"500px", margin:"0 auto 24px", height:"48px"  }}>김밥하기</button>
      </div>
  );
}

export default App;
