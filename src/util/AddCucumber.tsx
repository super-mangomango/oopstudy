import GimbobInterface from "../interface/GimbobInterface";

class AddCucumber {
    private static putCucumber(): void {
        console.info("%c 미쳤는지 오이를 넣어달래요.", "font-family:'Noto Sans Kr';font-weight:700;color:darkgreen;font-size:20px;")
    }

    makeGimbobHasCucumber(gimbob: GimbobInterface): GimbobInterface {
        AddCucumber.putCucumber()
        return {
            ...gimbob,
            hasCucumber: true
        }
    }
}

export default AddCucumber