import React, { useReducer } from 'react';

function CartUI() {

    function cartReducer(state, action) {
        switch (action.type) {
            case 'ADD':
                return state + action.payload;

            case 'REMOVE':
                return state > 0 ? state - action.payload : 0;

            case 'RESET':
                return 0;

            default:
                return state;
        }
    }

    const [cartCount, dispatch] = useReducer(cartReducer, 0);

    return (
        <div className="container mt-5">
            <div className="card text-center shadow">
                <div className="card-header bg-dark text-white">
                     Shopping Cart
                </div>

                <div className="card-body">
                    <h2 className="mb-4">
                        Items in Cart: 
                        <span className="badge bg-success ms-2">
                            {cartCount}
                        </span>
                    </h2>

                    <div className="d-flex justify-content-center gap-3">
                        <button
                            className="btn btn-success"
                            onClick={() =>
                                dispatch({ type: 'ADD', payload: 1 })
                            }
                        >
                            ➕ Add Item
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                dispatch({ type: 'REMOVE', payload: 1 })
                            }
                        >
                            ➖ Remove Item
                        </button>

                        <button
                            className="btn btn-warning"
                            onClick={() =>
                                dispatch({ type: 'RESET' })
                            }
                        >
                             Reset Cart
                        </button>
                    </div>
                </div>

                <div className="card-footer text-muted">
                    useReducer Real-Time Example
                </div>
            </div>
        </div>
    );
}

export default CartUI;
