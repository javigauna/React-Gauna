import React , { useState } from 'react';

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function handleAdd(){
        setCount(count + 1);
    }

    function handleSubstract(){
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Compra tus Productos</h1>
            <div>
                <button onClick={handleAdd}>-</button>
                <span>    {count}    </span>
                <button onClick={handleSubstract}>+</button>
                <div>
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;

