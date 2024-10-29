import { useSelector } from "react-redux"
import AccountDown from "../Icons/AccountDown"
import Basket from "../Icons/Basket"
import HeaderDown from "../Icons/HeaderDown"
import HeaderSearch from "../Icons/HeaderSearch"
import logotype from "../Icons/Logotype"
import ShoppingCartWindow from "./BasketComponents/ShoppingCartWindow"
import { useEffect, useState } from "react"

export const Header = () => {
    const products = useSelector((state) => state.products.products)
    console.log(products);
    const [subtotal , setSubtotal] = useState(0);

    useEffect(()=> {
        setSubtotal(products.reduce((sum, product) => 
        sum + product.price, 0));
    } 
    , [products])
  return (
    <header className="header center">
        <div className="header-left">
            <div className="header-left__logo">
                <a href="/" className="header-logotype">{logotype()}</a>
                <a className="header-left-textlogo" href="/"
                >BRAN<span className="header-left-colorText">D</span></a>
            </div>
            <nav className="header-search">
                <details className="header-search-btn">
                    <summary className="button header-search__button button_bdr-left button_hover-shadow">
                        Browse <i className="down header__down">{HeaderDown()}</i>
                    </summary>
                    <div className="box header-search-btn__box">
                        <div className="header-item">
                            <h3 className="header__heading">Men</h3>
                            <a href="/#" className="header-itemlink">Dresses</a>
                            <a href="/#" className="header-itemlink">Tops</a>
                            <a href="/#" className="header-itemlink">Sweaters/Knits</a>
                            <a href="/#" className="header-itemlink">Jackets/Coats</a>
                            <a href="/#" className="header-itemlink">Blazers</a>
                            <a href="/#" className="header-itemlink">Denim</a>
                            <a href="/#" className="header-itemlink">Leggings/Pants</a>
                            <a href="/#" className="header-itemlink">Skirts/Shorts</a>
                            <a href="/#" className="header-itemlink">Accessories</a>
                        </div>
                    </div>
                </details>

                <div className="header-search-cont">
                    <input
                        className="header-search-text"
                        type="text"
                        placeholder="Search for Item..."
                    />
                    <a href="/#" className="button header-search-cont__button">
                        <i className="fa-solid fa-magnifying-glass" fill="#a4a4a4">{HeaderSearch()}
                        </i>
                    </a>
                </div>
            </nav>
        </div>
        <div className="header-right">
            <details className="basket">
                <summary className="button basket__button">{Basket()}
                
                </summary>
                <div className="box basket__box">
                    <div className="basket-product">
                    
                    {products.length !== 0 ?
                        products.map(product =>
                            <ShoppingCartWindow 
                                key={product.id}
                                id={product.id}
                                cardLink={product.cardLink}
                                img={product.img}
                                title={product.title}
                                price={product.price}
                                color={product.color}
                                size={product.sizes && product.sizes.join(', ')}
                            />
                    )
                    : <p> Kорзина пуста!</p>
                    }
                    <div className="basket-total">
                        <p className="basket-totaltext">TOTAL</p>
                        <p className="basket-totaltext">{subtotal}</p>
                        </div>
                    </div>
                <div className="basket-checkout">
                    <div className="link-check">
                        <a href="checkout.html"
                            className="button link-check__button button_bg-none button_hoverbdr"
                            >Checkout</a>
                        <a href="./basket"
                            className="button link-check__button button_bg-none button_hoverbdr"
                            >Go to cart</a>
                    </div>
                </div>
                </div>
            </details>
            <details className="header-btn">
                <summary className="button header-right__button button_bdr button_hover">
                    My Account
                    <i className="down header-right__down">{AccountDown()}</i>
                </summary>
                <div className="box header-btn__box">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    reiciendis dolore consequuntur similique consequatur blanditiis?
                </div>
            </details>
        </div>
    </header>
  )
}
    
  
