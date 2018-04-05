import React, { Component } from 'react';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    _changeOpenness = ()=> {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        let openness;

        //if open state is true...
        if (this.state.open){
            openness = <h1>Hopes and Dreams</h1>
        } else {
            openness = <h1>My dreams are nightmares</h1>
        }

        return(
            <span>
                <div>Hello, {this.props.name}, today is {this.props.day}.</div>
                <h1>{openness}</h1>
                <button onClick={this._changeOpenness.bind(this)}>Click Me</button>
            </span>
        )
    }
}

export default ProductCard;