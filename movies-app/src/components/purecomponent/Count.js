import React from "react";

export default class Count extends React.Component {
    render() {
        console.log('Count Updated');
        return (
            <span>{this.props.value}</span>
        );
    }
}