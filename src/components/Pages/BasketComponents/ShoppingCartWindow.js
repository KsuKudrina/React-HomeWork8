import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/slices/productsSlice";

const ShoppingCartWindow = ({id, cardLink, img, title, price, color, size}) => {

    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }

    
	return (
        <div className="basket-item" key={id}>
            <a className="basket-pos" href={cardLink}>
            
                <img className="box__img" src={img} alt="product"/>
                <div className="basket-content">
                     <p className="basket-headline">${title}</p>
                     <div className="basket-star">
                                <i className="fa fa-star f123"></i>
                                <i className="fa fa-star f123"></i>
                                <i className="fa fa-star f123"></i>
                                <i className="fa fa-star f123"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                    <p className="basket-cost">1 x ${color}</p>
                    <p className="basket-cost">1 x ${size}</p>
                    <p className="basket-cost">1 x ${price}</p>
                     
                     <a href="/#"
                     onClick={handleDelete}
                            ><i className="fa fa-times-circle" aria-hidden="true"></i>
                    </a>
                </div>
            </a>
            <div className="box__line"></div>
        </div>
	)
}
export default ShoppingCartWindow