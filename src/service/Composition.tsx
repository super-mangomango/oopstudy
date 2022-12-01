import GimbobInterface from "../interface/GimbobInterface";
import MakeGimbobInterface from "../interface/MakeGimbobInterface";
import AddHotSauce from "../util/AddHotSauce";
import AddCucumber from "../util/AddCucumber";
import Abstraction from "./Abstraction";

class Composition extends Abstraction implements MakeGimbobInterface {
    constructor(main: string, rice: number, laver: number, private hotSauce: AddHotSauce, private cucumber: AddCucumber) {
        super(main, rice, laver);
    }

    makeGimbob(amount: number): GimbobInterface {
        const defaultGimbob = super.makeGimbob(amount);
        const cucumberAdded = this.cucumber.makeGimbobHasCucumber(defaultGimbob);
        return this.hotSauce.makeHotGimbob(cucumberAdded)
    }
}

export default Composition;
