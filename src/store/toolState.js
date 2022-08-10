import {makeAutoObservable} from 'mobx';

class ToolState {
    tool = null;
    constructor() {
        makeAutoObservable(this);
    }

    setTools(tool) {
        this.tool = tool
    }
}

export default new ToolState();