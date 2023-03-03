import { useState, useEffect } from "react";
import Produit from "./Produit";
import ProduitData from './Produits.json'

function ProduitPage() {

    const [id, setId] = useState(0)
    const [nom, setNom] = useState("")
    const [prix, setPrix] = useState(0)
    const [image, setImage] = useState("")
    const [imagePath, setImagePath] = useState("")

    const [produits, setProduit] = useState([]);
    // The images path in the json file are in the public folder


    useEffect(function () {
        setProduit(ProduitData)
    }, [])


    const imageUpload = (event) => {
        const file = event.target.files[0]
        const read = new FileReader()

        read.addEventListener("load", () => {
            const url = read.result
            setImagePath(url)
        })

        read.readAsDataURL(file)

    };


    const ajuouterProduit = function (e) {
        e.preventDefault()

        const nProduit = {
            id: id,
            nom: nom,
            prix: prix,
            image: imagePath
        };

        console.log(produits)
        console.log(nProduit)

        setProduit([...produits, nProduit])


        setNom("");
        setPrix(0);
        setImage("");
        setId(0);
    }


    const supprimerProduit = function (id) {
        const filterProduit = produits.filter(function (produit) {
            return produit.id !== id
        })
        setProduit(filterProduit)
    }

    return (
        <div>
            <div className="d-flex flex-wrap">
                {
                    produits.map((produit) => (
                        <Produit
                            nom={produit.nom}
                            prix={produit.prix}
                            image={produit.image}
                            id={produit.id}
                            key={produit.id}
                            onDelete={supprimerProduit}
                        />
                    ))
                }
            </div>

            {/* Formulaire */}
            <div className="Ajouter Produit mt-5 mb-5">
                <form onSubmit={ajuouterProduit}>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Identifiant</label>
                        <input value={id} onChange={(e) => setId(e.target.value)} type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id="nom" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Prix</label>
                        <input value={prix} onChange={(e) => setPrix(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01">Image</label>
                        <input value={image} onChange={imageUpload} type="file" className="form-control" id="image" />
                    </div>
                    <button type="submit" className="btn btn-secondary">Ajouter</button>
                </form>
            </div >
        </div >
    )

}


export default ProduitPage;