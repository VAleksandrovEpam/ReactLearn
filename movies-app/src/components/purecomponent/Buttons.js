import React from "react";

export default class Buttons extends React.PureComponent {
    render() {
        const { onIncrement, onDecrement } = this.props;
        return (
            <React.Fragment>
                <button onClick={onIncrement}>Plus</button>
                <button onClick={onDecrement}>Minus</button>
            </React.Fragment>
        );
    }
}