import React from 'react';

function ItemList( {perifericos} ) {
    return (
        <>
        { perifericos.map( thisperifericos =>{
            return(
                <div>
                    <h1> {thisperifericos.title} </h1>
                    <h4> {thisperifericos.precio} </h4>
                </div>

            )
        })}
        <div>
            {ItemList}
        </div>
        </>
    );
}

export default ItemList;