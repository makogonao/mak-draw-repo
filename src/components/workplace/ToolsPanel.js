import React from "react";
import "./toolspanel.css";
import Draggable from "react-draggable";

export default class ToolsPanel extends React.Component {

    // state = {
    //     activeDrags: 0,
    //     deltaPosition: {
    //         x: 0,
    //         y: 0,
    //     },
    //     controlledPosition: {
    //         x: -400,
    //         y: 200,
    //     },
    // };

    // handleDrag = (e, ui) => {
    //     const { x, y } = this.state.deltaPosition;
    //     this.setState({
    //         deltaPosition: {
    //             x: x + ui.deltaX,
    //             y: y + ui.deltaY,
    //         },
    //     });
    // };

    // onStart = () => {
    //     this.setState({ activeDrags: ++this.state.activeDrags });
    // };

    // onStop = () => {
    //     this.setState({ activeDrags: --this.state.activeDrags });
    // };
    // onDrop = (e) => {
    //     this.setState({ activeDrags: --this.state.activeDrags });
    //     if (e.target.classList.contains("drop-target")) {
    //         alert("Dropped!");
    //         e.target.classList.remove("hovered");
    //     }
    // };
    // onDropAreaMouseEnter = (e) => {
    //     if (this.state.activeDrags) {
    //         e.target.classList.add("hovered");
    //     }
    // };
    // onDropAreaMouseLeave = (e) => {
    //     e.target.classList.remove("hovered");
    // };

    // // For controlled component
    // adjustXPos = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     const { x, y } = this.state.controlledPosition;
    //     this.setState({ controlledPosition: { x: x - 10, y } });
    // };

    // adjustYPos = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     const { controlledPosition } = this.state;
    //     const { x, y } = controlledPosition;
    //     this.setState({ controlledPosition: { x, y: y - 10 } });
    // };

    // onControlledDrag = (e, position) => {
    //     const { x, y } = position;
    //     this.setState({ controlledPosition: { x, y } });
    // };

    // onControlledDragStop = (e, position) => {
    //     this.onControlledDrag(e, position);
    //     this.onStop();
    // };

    render() {
        return (
            <Draggable handle=".panel-header">
                <aside>
                    <div className="panel-header"><b>Tools</b></div>
                    <div className="panel-tools-grid">
                        <div className="panel-tools-btn transitions">1</div>
                        <div className="panel-tools-btn transitions">2</div>
                        <div className="panel-tools-btn transitions">3</div>
                        <div className="panel-tools-btn transitions">4</div>
                        <div className="panel-tools-btn transitions">5</div>
                        <div className="panel-tools-btn transitions">6</div>
                        <div className="panel-tools-btn transitions">7</div>
                        <div className="panel-tools-btn transitions">8</div>
                    </div>
                </aside>
            </Draggable>
        );
    }
}
