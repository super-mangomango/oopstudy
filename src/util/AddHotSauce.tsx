import GimbobInterface from "../interface/GimbobInterface";

class AddHotSauce {
    private static spreadHotSauce(): void {
        console.info("%c 겁나 매운 소스를 뿌려요", "font-family:'Noto Sans Kr';font-weight:700;color:red;font-size:16px;")
    }

    makeHotGimbob(gimbob: GimbobInterface): GimbobInterface {
        AddHotSauce.spreadHotSauce()
        return {
            ...gimbob,
            hotSauce: true
        }
    }
}

export default AddHotSauce
