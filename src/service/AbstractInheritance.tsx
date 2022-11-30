import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import InheritanceForAbstraction from "./InheritanceForAbstraction";

class AbstractInheritance extends InheritanceForAbstraction implements MakeGimbobInterface {
    setSteamedRiceAndLaver(amount: number) {
        if (amount > this.ingredient.laver) {
            console.error("김이 부족합니다.");
        } else {
            console.info("%c 밥을 먼저 펴고, 그 위에 김을 펴고 있습니다.", "font-family:'Noto Sans Kr';font-weight:700;color:blue;font-size:20px;");
            this.ingredient.laver -= amount;
            this.ingredient.steamedRice -= amount;
        }
    }
}

export default AbstractInheritance;
