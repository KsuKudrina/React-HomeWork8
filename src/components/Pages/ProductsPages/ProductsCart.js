import { AddToCartButton } from "../../Button/AddToCartButton";
import 'font-awesome/css/font-awesome.min.css';


const ProductsCard = ({id, cardLink, img, title, price, size}) => {

	return (
		<div className="product__unit" key={id}>
            <a className="product__unit-link" href={cardLink}>
                <img className="product__img" src={img} alt="product"/>
                <div className="product__box-content">
                <p className="product__box-name">{title}</p>
                <div className="cards__block-text">
                        <p className="product__box-price">$ {price}</p>
                        <p className="product__box-size">{size}</p>
                    </div>
                </div>
            </a>
            <AddToCartButton id={id}/>
            
            <a className="butcard-retweet" href="/#">
                <i className="fa fa-retweet" aria-hidden="true"></i>
            </a>
            <a className="butcard-heart" href="/#">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
            </a>
        </div>
	)
}

export default ProductsCard;