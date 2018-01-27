import React from "react";
import ColorAppStore from "../stores/ColorAppStore";

export default class ColorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ColorAppStore.getActiveColor()
        }
    }

    componentDidMount() {
        ColorAppStore.on("storeUpdated", this.updateBackgroundColor);
    }

    componentWillUnmount() {
        ColorAppStore.removeListener("storeUpdated", this.updateBackgroundColor);
    }

    updateBackgroundColor = () => {
        this.setState({color: ColorAppStore.getActiveColor()})
    };

    render() {
        return (
            <div className="color-container" style={{backgroundColor: this.state.color}}/>
        );
    }
}
