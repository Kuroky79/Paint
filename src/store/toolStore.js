import {makeAutoObservable} from "mobx";

class ToolStore{
    tool=null
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool){
        this.tool=tool
    }
}
export default new ToolStore()
