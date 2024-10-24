import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../../../redux/slices/productsSlice";
import { useState } from "react";


const Basket = ({ id, img, title, color, price,  sizes, quantity }) => {
    const [quantityProduct, setQuantityProduct] = useState(1);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    
    const handleQuantity = (e, id) => {
        const value = parseInt(e.target.value);
        setQuantityProduct(value);
    
        dispatch(setQuantity({id, value: value}));
    }
    return(
        <div className="shopping-item">
                <a href="/#" class="shopping-pos">
                    <img src={img} alt="product"/>
                    <div class="shopping-content">
                        <p class="shopping-headline">{title}</p>
                        <div class="">
                            <p class="shopping-details">Color: <span class="shopping-details-det">{color}</span></p>
                            <p class="shopping-details">Size: <span class="shopping-details-det">{sizes}</span></p>
                        </div>
                    </div>
                </a>
                <div class="shopping-grid">
                    <p class="shopping-text">$ {price}</p>
                </div>
                <div class="shopping-grid">
                    <input 
                        id={id}
                        class="shopping-input" 
                        type="number" 
                        min="1" 
                        value={quantityProduct}
                        onChange={(e) => handleQuantity(e.id)}
                        required/>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text">FREE</p>
                </div>
                <div className="shopping-grid">
                    <p className="shopping-text">$ <span className="">{price * quantity}</span></p>
                </div>
                <div className="shopping-grid">
                    <p className="shopping-text"><a id={id} href="/#" onClick={handleDelete}><i className="fa fa-times-circle" aria-hidden="true"></i></a></p>
                </div>
            </div>
    )
}
export default Basket