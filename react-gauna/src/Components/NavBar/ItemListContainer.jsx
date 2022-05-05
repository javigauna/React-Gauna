import React, {useEffect , useState} from 'react';
import perifericosDB from "../../data/perifericos";
import ItemList from './ItemList';

function getPerifericos(){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            resolve(perifericosDB);
        }, 2000);
    })
}

function ItemListContainer(props) {
    const [perifericos, setPerifericos] = useState([]);
    useEffect( () =>{
        getPerifericos().then( respuestaPromise => {
            setPerifericos(respuestaPromise);

        });
    }, []);
    
    return (
        <div>
        <h1>{props.titulo}</h1>
        <ItemList perifericos= {perifericos}/>
        </div>
    );
}

export default ItemListContainer;