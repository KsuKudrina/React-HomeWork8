import { useEffect, useState } from "react";
import { NewArrivals } from "../ProductsPages/NewArrivals"

import Basket from "./Basket";
import { useSelector } from "react-redux";

const ShoppingCartPage = () => {
    const products = useSelector((state) => state.products.products);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setSubtotal(products.reduce((sum, product) => 
        sum + (product.quantity * product.price), 0));

        setTotal(products.reduce((sum, product) => 
       sum + (product.quantity * product.price), 0))
    } 
    , [products])
    return(
        <>
        <NewArrivals />
        <div className="shopping center">
        <form className="shopping-product">
        {products.length !== 0 ?
                        products.map(product =>
            <Basket 
                key={product.id}
                id={product.id}
                cardLink={product.cardLink}
                img={product.img}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                color={product.color}
                sizes={product.sizes.join(', ')}/>
            )
            : <>
                <p className="box__product-basket"> В корзине нет товаров! </p>
            </>
        }
            {/* <div className="shopping-item">
                <p class="shopping-head">Product Details</p>
                <div class="shopping-grid">
                    <p class="shopping-head">unite Price</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-head">Quantity</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-head">shipping</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-head">Subtotal</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-head">ACTION</p>
                </div>
            </div>
            <div className="shopping-item">
                <a href="product.html" class="shopping-pos">
                    <img src="img/basket/men1.png" alt="product men">
                    <div class="shopping-content">
                        <p class="shopping-headline">Mango People T-shirt</p>
                        <div class="">
                            <p class="shopping-details">Color: <span class="shopping-details-det">Red</span></p>
                            <p class="shopping-details">Size: <span class="shopping-details-det">Xll</span></p>
                        </div>
                    </div>
                </a>
                <div class="shopping-grid">
                    <p class="shopping-text">$150</p>
                </div>
                <div class="shopping-grid">
                    <input class="shopping-input" type="number" min="1" required>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text">FREE</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text">$300</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text"><a href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a></p>
                </div>
            </div>
            <div className="shopping-item">
                <a href="product.html" class="shopping-pos">
                    <img src="img/basket/men2.png" alt="product men">
                    <div class="shopping-content">
                        <p class="shopping-headline">Mango People T-shirt</p>
                        <div class="">
                            <p class="shopping-details">Color: <span class="shopping-details-det">Red</span></p>
                            <p class="shopping-details">Size: <span class="shopping-details-det">Xll</span></p>
                        </div>
                    </div>
                </a>
                <div class="shopping-grid">
                    <p class="shopping-text">$150</p>
                </div>
                <div class="shopping-grid">
                    <input class="shopping-input" type="number" min="1" required>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text">FREE</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text">$300</p>
                </div>
                <div class="shopping-grid">
                    <p class="shopping-text"><a href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a></p>
                </div>
            </div> */}
            
            <div className="shoppbut">
                <input className="button shoppbut__button button_bg-none button_hoverbdr" type="submit"
                    value="cLEAR SHOPPING CART" />

                <input className="button shoppbut__button button_bg-none button_hoverbdr" type="submit"
                    value="cONTINUE sHOPPING" />
            </div>
        </form>
        <div className="shopping-checkout">
            <form className="shopping-block">
                <div className="shopping-caption">
                    <p className="shopping-title">Shipping Adress</p>
                </div>
                <select name="" className="shopping-sity">
                    <option value="bangladesh">Bangladesh</option>
                    <option value="russia">Russia</option>
                    <option value="usa">USA</option>
                </select>
                <div className="shopping-data">
                    <input className="shopping-in" type="text" placeholder="State" />
                </div>
                <div className="shopping-data">
                    <input className="shopping-in" type="number" id="postcode" name="postcode" min="111000" required />
                </div>
                <div className="shoppbut">
                    <input className="button shoppbut__button button_bg-none button_hoverbdr" type="submit"
                        value="get a quote" />
                </div>
            </form>
            <form className="shopping-block">
                <div className="shopping-caption">
                    <p className="shopping-title">coupon discount</p>
                    <p className="shopping-title-tagline">Enter your coupon code if you have one</p>
                </div>
                <div className="shopping-data">
                    <input className="shopping-in" type="text" placeholder="State" />
                </div>
                <div className="shoppbut">
                    <input className="button shoppbut__button button_bg-none button_hoverbdr" type="submit"
                        value="Apply coupon" />
                </div>
            </form>
            <form className="shopping-block-right">
                <div className="shopping-caption-right">
                    <p className="shopping-subtitle">Sub total <span>${subtotal}</span></p>
                    <p className="shopping-title">GRAND TOTAL <span className="shopping-title-color">${total}</span></p>
                </div>
                <div className="shoppbutt">
                    <input className="button shoppbutt__button button_bd-color button_bg-none button_hover" type="submit"
                        value="proceed to checkout" />
                </div>
            </form>
        </div>
    </div>
        </>
    )
}

export default ShoppingCartPage