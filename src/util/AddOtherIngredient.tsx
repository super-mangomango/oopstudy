import AddOtherIngredientInterface from "../interface/AddOtherIngredientInterface";
import RealGimbobInterface from "../interface/RealGimbobInterface";

class AddOtherIngredient implements AddOtherIngredientInterface {
    private readonly other?: string;

    constructor(other?: string) {
        this.other = other
    }

    execute(gimbob: RealGimbobInterface): RealGimbobInterface {
        this.putOtherIngredient()
        return {
            ...gimbob,
            other: this.other
        }
    }

    private putOtherIngredient(): void {
        if (this.other) {
            console.info(`%c ${this.other}가 추가되었습니다.`, "font-family:'Noto Sans Kr';font-weight:700;color:darkgreen;font-size:20px;")
        }
    }
}

export default AddOtherIngredient