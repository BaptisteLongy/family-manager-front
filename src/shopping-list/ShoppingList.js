import React, { Component } from 'react';
import NewShoppingItem from './NewShoppingItem';
import DeleteButton from './DeleteItemButton';
// import NewShoppingList from './NewShoppingList';
import './ShoppingList.css';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            shoppingList: [],
        }
    }

    fetchShoppinglist() {
        fetch(process.env.REACT_APP_SHOPPING_LIST_URL + "/ShoppingLists/1")
        .then(results => results.json())
        .then((data) => {
            this.setState({ shoppingList: data.listOfItems })
        })
    }

    componentDidMount() {
        this.fetchShoppinglist();
    }

    refreshShoppingList = () => {
        this.fetchShoppinglist();
    }

    render() {
        return (
            <div className="shoppingList">
                <h3>Liste de courses</h3>
            <table className="shoppingList">
                <tbody>
                    {this.state.shoppingList.map(
                        (data) => (
                            <tr key={data.id}>
                                <td className="shoppingItemName">{data.name}</td>
                                <td className="shoppingItemDeleteButton"><DeleteButton idToDelete={data.id} itemDeletedCallBack={this.refreshShoppingList}/></td>
                            </tr>
                        )
                    )}
                   
                </tbody>
            </table>
            <NewShoppingItem itemAddedCallback={this.refreshShoppingList}/>
            {/* <NewShoppingList listAddedCallback={this.refreshShoppingList}/> */}
            </div>
        )
    }
}

export default ShoppingList