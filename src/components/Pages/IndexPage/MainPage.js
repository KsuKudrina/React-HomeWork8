import FeatureIconOne from "../../Icons/FeatureIcons/FeatureIconOne"
import FeatureIconThree from "../../Icons/FeatureIcons/FeatureIconThree"
import FeatureIconTwo from "../../Icons/FeatureIcons/FeatureIconTwo"
import ProductUnit from "../ProductCard/ProductUnit"

export const MainPage = () => {
    return(
      <>
        <main className="top-content center">
            <div className="top-content-left">
                <h1 className="top-content-left-title">
                THE BRAND <br />
                <span className="top-content-left-titleBlack">OF LUXERIOUS</span>
                <span className="top-content-left-titleColor">FASHION</span>
                </h1>
            </div>
        </main>
        <section className="category center">
        <div className="category-item category-item-block1">
            <a href="/#"
            ><img className="category-img" src="img/category/men.png" alt=""
            /></a>
            <p className="category-img-text">
            30% OFF<br />
            <span className="category-img-color">FOR MAN</span>
            </p>
        </div>

        <div className="category-item category-item-block2">
            <a href="/#"
            ><img className="category-img" src="img/category/women.png" alt=""
            /></a>
            <p className="category-img-text">
            HOT DEAL<br />
            <span className="category-img-color">FOR WOMAN</span>
            </p>
        </div>

        <div className="category-item category-item-block3">
            <a href="/#"
            ><img className="category-img" src="img/category/accesories.png" alt=""
            /></a>
            <p className="category-img-text">
            LUXIROUS & TRENDY<br />
            <span className="category-img-color">ACCESORIES</span>
            </p>
        </div>

        <div className="category-item category-item-block4">
            <a href="/#"
            ><img className="category-img" src="img/category/kids.png" alt=""
            /></a>
            <p className="category-img-text">
            NEW ARRIVALS<br />
            <span className="category-img-color">FOR KIDS</span>
            </p>
        </div>
        </section>
        <section className="product center">
        <div className="product__title">
            <h2 className="product__titleText">Fetured Items</h2>
            <p className="product-subtitle">
            Shop for items based on what we featured in this week
            </p>
        </div>
        <ProductUnit />
        
        </section>
        <div className="all-product">
        <a href="/products" className="button all-product__button button_hover">
            <span className="all-product-text">Browse All Product</span></a>
        </div>
        <section className="feature">
        <div className="feature-banner">
            <img className="feature-img" src="img/feature__banner.jpg" alt="" />
        </div>
        <div className="feature-content">
            <article className="feature-advantage">{FeatureIconOne()}
            
                <div className="feature-advantage-text">
                    <p className="feature-advantage-title">Free Delivery</p>
                    <p className="feature-advantage-subtitle">
                    Worldwide delivery on&nbsp;all. Authorit tively morph
                    next-generation innov tion with extensive models.
                    </p>
                </div>
            </article>
            <article className="feature-advantage">
            {FeatureIconTwo()}
            <div className="feature-advantage-text">
                <p className="feature-advantage-title">Sales &amp;&nbsp;discounts</p>
                <p className="feature-advantage-subtitle">
                Worldwide delivery on&nbsp;all. Authorit tively morph
                next-generation innov tion with extensive models.
                </p>
            </div>
            </article>
            <article className="feature-advantage">
            {FeatureIconThree()}
            <div className="feature-advantage-text">
                <p className="feature-advantage-title">Quality assurance</p>
                <p className="feature-advantage-subtitle">
                Worldwide delivery on&nbsp;all. Authorit tively morph
                next-generation innov tion with extensive models.
                </p>
            </div>
            </article>
        </div>
        </section>
      </>  
    )
}