import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import Abstraction from "./Abstraction";

class Inheritance extends Abstraction implements MakeGimbobInterface {
    constructor(main: string, rice: number, laver: number, public hotSauce: boolean) {
        super(main, rice, laver);
    }

    private static addHotSauce(): void {
        console.log("%c 엄청 매운 소스를 뿌려요.", "font-family:'Noto Sans Kr';font-weight:700;color:darkred;font-size:20px;")
    }

    makeGimbob(amount: number) {
        const gimbob = super.makeGimbob(amount)
        Inheritance.addHotSauce()
        return {
            ...gimbob,
            hotSauce: this.hotSauce
        };
    }

}

export default Inheritance;
