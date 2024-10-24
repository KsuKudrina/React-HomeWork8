import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productsSlice";
import AddToCart from "../Icons/AddToCart";

export const AddToCartButton = (id) => {
    const dispatch = useDispatch();

    const handleAddToBasket = (e) => {
        e.preventDefault();
        dispatch(addProduct(id))
    }
    return(
        <div className="butcard">
                <a href="/#" id={id} className="button butcard__button"  onClick={handleAddToBasket}>{AddToCart()}<span className="butcard__textCard">Add to Cart</span>
                </a>
            </div>
    )
}