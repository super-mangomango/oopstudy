import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";

class Encapsulation {
    static RICE_GRAM_FOR_STEAMED = 100;

    ingredient: GimbobIngredientInterface = {
        main: undefined,
        rice: 0,
        steamedRice: 0,
        laver: 0,
        vegetables: true,
    };

    constructor(rice: number, laver: number) {
        this.ingredient = {
            ...this.ingredient,
            rice: rice,
            laver: laver,
        };
    }

    // static setIngredient(
    //     rice: number, laver: number
    // ): Encapsulation {
    //     return new Encapsulation(rice, laver);
    // }

    makeSaltySteamedRice() {
        console.log("밥에 간을 하고 있습니다.");
    }

    setLeftIngredient() {
        console.log("재료를 올리고 있습니다.");
    }

    roll() {
        console.log("꾹꾹 말고 있습니다.");
    }

    makeGimbob(amount: number) {
        this.makeSteamedRice(amount);
        this.makeSaltySteamedRice();
        this.setSteamedRiceAndLaver(amount);
        this.setLeftIngredient();
        this.roll();
        return {
            completed: `김밥 ${amount}줄 완성!`,
            leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
        };
    }

    makeSteamedRice(amount: number) {
        if (amount * Encapsulation.RICE_GRAM_FOR_STEAMED > this.ingredient.rice) {
            console.error("쌀이 부족합니다.");
        } else {
            console.log(`밥을 ${amount}공기 하고 있습니다.`);
            this.ingredient.steamedRice += amount;
            this.ingredient.rice -= amount * Encapsulation.RICE_GRAM_FOR_STEAMED;
        }
    }

    setSteamedRiceAndLaver(amount: number) {
        if (amount > this.ingredient.laver) {
            console.error("김이 부족합니다.");
        } else {
            console.log(`김에 밥을 올리고 펴고 있습니다.`);
            this.ingredient.laver -= amount;
            this.ingredient.steamedRice -= amount;
        }
    }
}

export default Encapsulation;
