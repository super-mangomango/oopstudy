import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import Abstraction from "./Abstraction";

class Inheritance extends Abstraction implements MakeGimbobInterface {
    constructor(main: string, rice: number, laver: number, public cucumber: boolean) {
        super(main, rice, laver);
    }

    private static putCucumber(): void {
        console.info("%c 미쳤는지 오이를 넣어달래요.", "font-family:'Noto Sans Kr';font-weight:700;color:darkgreen;font-size:20px;")
    }

    makeGimbob(amount: number) {
        const gimbob = super.makeGimbob(amount)
        Inheritance.putCucumber()
        return {
            ...gimbob,
            hasCucumber: this.cucumber
        };
    }

}

export default Inheritance;
