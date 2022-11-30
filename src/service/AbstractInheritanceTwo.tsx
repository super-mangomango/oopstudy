import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import InheritanceForAbstraction from "./InheritanceForAbstraction";

class AbstractInheritanceTwo extends InheritanceForAbstraction implements MakeGimbobInterface {
    setSteamedRiceAndLaver(amount: number) {
        if (amount > this.ingredient.laver) {
            console.error("김이 부족합니다.");
        } else {
            console.info("%c 계란지단을 펴고, 그 위에 밥을 펴고 있습니다.", "font-family:'Noto Sans Kr';font-weight:700;color:orange;font-size:20px;");
            this.ingredient.laver -= amount;
            this.ingredient.steamedRice -= amount;
        }
    }
}

export default AbstractInheritanceTwo;
