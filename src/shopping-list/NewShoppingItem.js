import React, { Component } from 'react';
import './NewShoppingItem.css';

class NewShoppingItem extends Component {
    state = { newShoppingItem: '' }

    handleShoppingItemInput = (event) => {
        this.setState({ newShoppingItem: event.target.value })
    }

    handleCreationOK(response) {
        this.setState({ newShoppingItem: '' })
        this.props.itemAddedCallback();
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = process.env.REACT_APP_SHOPPING_LIST_API
        const data = { name: this.state.newShoppingItem.toString() }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            //.then(response => response.json())  - I am not returning a response
            .catch(error => console.error('Error:', error))
            .then(response => this.handleCreationOK(response));
    }

    render() {
        return (
            <form className="newShoppingItemForm" onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    autoComplete="given-name"
                    value={this.state.newShoppingItem}
                    onChange={this.handleShoppingItemInput}
                    className="newShoppingItemInput"
                />
                <button type="submit" className="NewItemButton">A acheter</button>
            </form>
        )
    }
}

export default NewShoppingItem