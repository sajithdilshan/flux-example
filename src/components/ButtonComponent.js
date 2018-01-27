import React from "react";
import * as ColorAppActions from "../actions/ColorAppActions";

export default class ButtonComponent extends React.Component {

    onButtonClick = (colorName) => {
        ColorAppActions.changeColor(colorName)
    };

    render() {
        return (
            <div>
                <button onClick={() => this.onButtonClick("red")} className="color-button">Red</button>
                <button onClick={() => this.onButtonClick("blue")} className="color-button">Blue</button>
            </div>

        );
    }
}
