import React, { Component } from 'react';
import './DeleteItemButton.css';

class DeleteButton extends Component {

    deleteItem = () => {
        var url =process.env.REACT_APP_SHOPPING_LIST_API + this.props.idToDelete
        fetch(url, { method: 'DELETE',
            headers:{ 'Content-Type': 'application/json' } })
            .catch(error => console.error('Error:', error))
            .then(() => this.props.itemDeletedCallBack());
    }

    render() {
        return (
            <button type="button" onClick={() => this.deleteItem()} className="DeleteButton">Supprimer</button>
        )
    }
}

export default DeleteButton