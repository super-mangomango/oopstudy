import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";
import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import GimbobInterface from "../interface/GimbobInterface";

abstract class InheritanceForAbstraction implements MakeGimbobInterface {
    protected RICE_GRAM_FOR_STEAMED = 100;

    protected ingredient: GimbobIngredientInterface = {
        main: undefined,
        rice: 0,
        steamedRice: 0,
        laver: 0,
        vegetables: true,
    };

    constructor(main: string, rice: number, laver: number) {
        this.ingredient = {
            ...this.ingredient,
            main: main,
            rice: rice,
            laver: laver,
        };
    }

    makeGimbob(amount: number): GimbobInterface {
        this.makeSteamedRice(amount);
        this.makeSaltySteamedRice();
        this.setSteamedRiceAndLaver(amount);
        this.setLeftIngredient();
        this.roll();
        return {
            completed: `${this.ingredient.main}김밥 ${amount}줄 완성!`,
            leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
        };
    }

    protected makeSaltySteamedRice() {
        console.log("밥에 간을 하고 있습니다.");
    }

    protected setLeftIngredient() {
        console.log("재료를 올리고 있습니다.");
    }

    protected roll() {
        console.log("꾹꾹 말고 있습니다.");
    }

    protected makeSteamedRice(amount: number) {
        if (amount * this.RICE_GRAM_FOR_STEAMED > this.ingredient.rice) {
            console.error("쌀이 부족합니다.");
        } else {
            console.log(`밥을 ${amount}공기 하고 있습니다.`);
            this.ingredient.steamedRice += amount;
            this.ingredient.rice -= amount * this.RICE_GRAM_FOR_STEAMED;
        }
    }

    protected abstract setSteamedRiceAndLaver(amount: number): void
}

export default InheritanceForAbstraction;
