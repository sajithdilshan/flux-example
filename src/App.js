import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import ColorComponent from "./components/ColorComponent";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <ButtonComponent/>
                <ColorComponent/>
            </div>

        );
    }
}
