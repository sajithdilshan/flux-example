import dispatcher from "../Dispatcher";
import {EventEmitter} from "events";
import * as ColorAppActions from "../actions/ColorAppActions";

class ColorAppStore extends EventEmitter {

    constructor() {
        super();
        this.activeColor = "lightgrey";
    }

    handleActions(action) {
        switch (action.type) {
            case ColorAppActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
                this.activeColor = action.value;
                this.emit("storeUpdated");
                break;
            }
            default: {
            }
        }
    }

    getActiveColor() {
        return this.activeColor;
    }
}

const colorAppStore = new ColorAppStore();
dispatcher.register(colorAppStore.handleActions.bind(colorAppStore));
export default colorAppStore;