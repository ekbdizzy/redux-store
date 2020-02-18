import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, index) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{index}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{`$${total}`}</td>
                <td>
                    <button className="btn btn-outline-danger btn-sm float-right"
                            onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success btn-sm float-right"
                            onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning btn-sm float-right"
                            onClick={() => onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                {`Total: $${total}`}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`);
        },
        onDecrease: (id) => {
            console.log(id);
        },
        onDelete: (id) => {
            console.log(id);
        }
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
