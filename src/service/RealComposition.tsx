import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";
import RealMakeGimbobInterface from "../interface/RealMakeGimbobInterface";
import RealGimbobInterface from "../interface/RealGimbobInterface";
import AddSauceInterface from "../interface/AddSauceInterface";
import AddOtherIngredientInterface from "../interface/AddOtherIngredientInterface";

class RealComposition implements RealMakeGimbobInterface {
    protected static RICE_GRAM_FOR_STEAMED = 100;

    protected ingredient: GimbobIngredientInterface = {
        main: undefined,
        rice: 0,
        steamedRice: 0,
        laver: 0,
        vegetables: true,
    };

    protected constructor(main: string, rice: number, laver: number, private addSauce: AddSauceInterface, private addOther: AddOtherIngredientInterface) {
        this.ingredient = {
            ...this.ingredient,
            main: main,
            rice: rice,
            laver: laver,
        };
    }

    static setIngredient(
        main: string, rice: number, laver: number, addSauce: AddSauceInterface, addOther: AddOtherIngredientInterface
    ): RealComposition {
        return new RealComposition(main, rice, laver, addSauce, addOther);
    }

    protected static makeSaltySteamedRice() {
        console.log("밥에 간을 하고 있습니다.");
    }

    protected static setLeftIngredient() {
        console.log("재료를 올리고 있습니다.");
    }

    protected static roll() {
        console.log("꾹꾹 말고 있습니다.");
    }

    makeGimbob(amount: number): RealGimbobInterface {
        this.makeSteamedRice(amount);
        RealComposition.makeSaltySteamedRice();
        this.setSteamedRiceAndLaver(amount);
        RealComposition.setLeftIngredient();
        RealComposition.roll();
        const firstStep = {
            completed: `${this.ingredient.main}김밥 ${amount}줄 완성!`,
            leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
        }
        const addedSauce = this.addSauce.execute(firstStep)
        return this.addOther.execute(addedSauce)
    }

    protected makeSteamedRice(amount: number) {
        if (amount * RealComposition.RICE_GRAM_FOR_STEAMED > this.ingredient.rice) {
            console.error("쌀이 부족합니다.");
        } else {
            console.log(`밥을 ${amount}공기 하고 있습니다.`);
            this.ingredient.steamedRice += amount;
            this.ingredient.rice -= amount * RealComposition.RICE_GRAM_FOR_STEAMED;
        }
    }

    private setSteamedRiceAndLaver(amount: number) {
        if (amount > this.ingredient.laver) {
            console.error("김이 부족합니다.");
        } else {
            console.log(`김에 밥을 올리고 펴고 있습니다.`);
            this.ingredient.laver -= amount;
            this.ingredient.steamedRice -= amount;
        }
    }
}

export default RealComposition;
