import { useState } from "react";


function Produit(props) {


    const supprimerClick = function () {
        props.onDelete(props.id)
    }
    return (
        <div className="card ms-4 mt-3" style={{ width: '15rem' }} >
            <img src={props.image} className="card-img-top h-75" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nom}</h5>
                <p className="card-text">{props.prix} DH</p>
                <button onClick={supprimerClick} className="btn btn-success rounded-1 border-0">Epuisé</button>
            </div>
        </div>
    )
}


export default Produit;