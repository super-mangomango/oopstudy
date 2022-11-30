import GimbobIngredientInterface from "../interface/GimbobIngredientInterface";
import GimbobInterface from "../interface/GimbobInterface";
import MakeGimbobInterface from "../interface/MakeGimbobInterface";

class addHotSauce {
    private static spreadHotSauce(): void {
        console.info("%c 겁나 매운 소스를 뿌려요", "font-family:'Noto Sans Kr';font-weight:700;color:red;font-size:16px;")
    }

    makeHotGimbob(gimbob: GimbobInterface): GimbobInterface {
        addHotSauce.spreadHotSauce()
        return {
            ...gimbob,
            hotSauce: true
        }
    }
}

class addCucumber {
    private static putCucumber(): void {
        console.info("%c 미쳤는지 오이를 넣어달래요.", "font-family:'Noto Sans Kr';font-weight:700;color:darkgreen;font-size:20px;")
    }

    makeGimbobHasCucumber(gimbob: GimbobInterface): GimbobInterface {
        addCucumber.putCucumber()
        return {
            ...gimbob,
            hasCucumber: true
        }
    }
}


class Composition implements MakeGimbobInterface {
    protected static RICE_GRAM_FOR_STEAMED = 100;

    protected ingredient: GimbobIngredientInterface = {
        main: undefined,
        rice: 0,
        steamedRice: 0,
        laver: 0,
        vegetables: true,
    };

    protected constructor(main: string, rice: number, laver: number, private hotSauce: addHotSauce, private cucumber: addCucumber) {
        this.ingredient = {
            ...this.ingredient,
            main: main,
            rice: rice,
            laver: laver,
        };
    }

    static setIngredient(
        main: string, rice: number, laver: number, hotSauce: addHotSauce, cucumber: addCucumber
    ): Composition {
        return new Composition(main, rice, laver, hotSauce, cucumber);
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

    fillRice(rice: number) {
        this.ingredient.rice += rice;
    }

    makeGimbob(amount: number): GimbobInterface {
        this.makeSteamedRice(amount);
        Composition.makeSaltySteamedRice();
        this.setSteamedRiceAndLaver(amount);
        Composition.setLeftIngredient();
        Composition.roll();
        const defaultGimbob = {
            completed: `${this.ingredient.main}김밥 ${amount}줄 완성!`,
            leftIngredients: `남은 재료는 쌀${this.ingredient.rice}g, 밥${this.ingredient.steamedRice}공기, 김${this.ingredient.laver}장 입니다.`,
        };
        const cucumberAdded = this.cucumber.makeGimbobHasCucumber(defaultGimbob);
        return this.hotSauce.makeHotGimbob(cucumberAdded)
    }

    protected makeSteamedRice(amount: number) {
        if (amount * Composition.RICE_GRAM_FOR_STEAMED > this.ingredient.rice) {
            console.error("쌀이 부족합니다.");
        } else {
            console.log(`밥을 ${amount}공기 하고 있습니다.`);
            this.ingredient.steamedRice += amount;
            this.ingredient.rice -= amount * Composition.RICE_GRAM_FOR_STEAMED;
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

export default Composition;
