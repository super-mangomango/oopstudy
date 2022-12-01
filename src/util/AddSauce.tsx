import RealGimbobInterface from "../interface/RealGimbobInterface";
import AddSauceInterface from "../interface/AddSauceInterface";

class AddSauce implements AddSauceInterface {
    private readonly sauce?: string;

    constructor(sauce?: string) {
        this.sauce = sauce
    }

    execute(gimbob: RealGimbobInterface): RealGimbobInterface {
        this.spreadSauce()
        return {
            ...gimbob,
            sauce: this.sauce
        }
    }

    private spreadSauce(): void {
        if (this.sauce) {
            console.info(`%c 겁나 ${this.sauce}를 뿌려요`, "font-family:'Noto Sans Kr';font-weight:700;color:red;font-size:16px;")
        }
    }
}

export default AddSauce
