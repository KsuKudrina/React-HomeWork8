import { useState } from "react"
import FeatureIconOne from "../../Icons/FeatureIcons/FeatureIconOne"
import FeatureIconThree from "../../Icons/FeatureIcons/FeatureIconThree"
import FeatureIconTwo from "../../Icons/FeatureIcons/FeatureIconTwo"
import FilterIcon from "../../Icons/ProductsIcon/FilterIcon"
import { NewArrivals } from "./NewArrivals"
import { data } from "../../../redux/slices/productsSlice"
import ProductsCard from "./ProductsCart"


export const ProductPage = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleChange = (size) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(size) ? prevSelected.filter((s) => s !== size) : [...prevSelected, size]
        );
    };

    const sortProducts = data.filter((product) =>
        selectedSizes.length === 0 || product.sizes.some((size) => selectedSizes.includes(size))
    );
    return(
        <>
            <NewArrivals />

            <div className="container center right">
                <nav className="filter-sort center">
                    <details className="filter" open>
                        <summary className="filter-summary"><span className="filter-summary-head">FILTER</span>{FilterIcon()}
                            
                        </summary>
                        <div className="filter-container">
                            <details className="filter-item">
                                <summary className="filter-item-heading">CATEGORY</summary>
                                <div className="filter-box">
                                    <a href="/#" className="filter-box-link">Accessories</a>
                                    <a href="/#" className="filter-box-link">Bags</a>
                                    <a href="/#" className="filter-box-link">Denim</a>
                                    <a href="/#" className="filter-box-link">Hoodies & Sweatshirts</a>
                                    <a href="/#" className="filter-box-link">Jackets & Coats</a>
                                    <a href="/#" className="filter-box-link">Pants</a>
                                    <a href="/#" className="filter-box-link">Polos</a>
                                    <a href="/#" className="filter-box-link">Shirts</a>
                                    <a href="/#" className="filter-box-link">Shoes</a>
                                    <a href="/#" className="filter-box-link">Shorts</a>
                                    <a href="/#" className="filter-box-link">Sweaters & Knits</a>
                                    <a href="/#" className="filter-box-link">T-Shirts</a>
                                    <a href="/#" className="filter-box-link">Tanks</a>
                                </div>
                            </details>
                            <details className="filter-item">
                                <summary className="filter-item-heading">BRAND</summary>
                                <div className="filter-box">
                                    <a href="/#" className="filter-box-link">Accessories</a>
                                    <a href="/#" className="filter-box-link">Bags</a>
                                    <a href="/#" className="filter-box-link">Denim</a>
                                    <a href="/#" className="filter-box-link">Hoodies & Sweatshirts</a>
                                    <a href="/#" className="filter-box-link">Jackets & Coats</a>
                                    <a href="/#" className="filter-box-link">Pants</a>
                                    <a href="/#" className="filter-box-link">Polos</a>
                                    <a href="/#" className="filter-box-link">Shirts</a>
                                    <a href="/#" className="filter-box-link">Shoes</a>
                                    <a href="/#" className="filter-box-link">Shorts</a>
                                    <a href="/#" className="filter-box-link">Sweaters & Knits</a>
                                    <a href="/#" className="filter-box-link">T-Shirts</a>
                                    <a href="/#" className="filter-box-link">Tanks</a>
                                </div>
                            </details>
                            <details className="filter-item">
                                <summary className="filter-item-heading">DESIGNER</summary>
                                <div className="filter-box">
                                    <a href="/#" className="filter-box-link">Accessories</a>
                                    <a href="/#" className="filter-box-link">Bags</a>
                                    <a href="/#" className="filter-box-link">Denim</a>
                                    <a href="/#" className="filter-box-link">Hoodies & Sweatshirts</a>
                                    <a href="/#" className="filter-box-link">Jackets & Coats</a>
                                    <a href="/#" className="filter-box-link">Pants</a>
                                    <a href="/#" className="filter-box-link">Polos</a>
                                    <a href="/#" className="filter-box-link">Shirts</a>
                                    <a href="/#" className="filter-box-link">Shoes</a>
                                    <a href="/#" className="filter-box-link">Shorts</a>
                                    <a href="/#" className="filter-box-link">Sweaters & Knits</a>
                                    <a href="/#" className="filter-box-link">T-Shirts</a>
                                    <a href="/#" className="filter-box-link">Tanks</a>
                                </div>
                            </details>
                        </div>
                    </details>

                    <div className="sort">
                        <details className="sort-details" open>
                            <summary className="sort-summary"><span className="sort-summary-heading">TRENDING NOW</span></summary>
                            <div className="sort-box">
                                <a href="/#" className="sort-box-link">Bohemian</a>|
                                <a href="/#" className="sort-box-link">Floral</a>|
                                <a href="/#" className="sort-box-link">Lace</a>
                                <a href="/#" className="sort-box-link">Floral</a>|
                                <a href="/#" className="sort-box-link">Lace</a>|
                                <a href="/#" className="sort-box-link">Bohemian</a>
                            </div>
                        </details>
                        <details className="sort-details" open>
                            <summary className="sort-summary"><span className="sort-summary-heading">SIZE</span></summary>
                            <div className="sort-box">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <label key={size} className="sort-box-sizeCheck">
                                        <input 
                                        type="checkbox"
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => handleChange(size)}/>
                                        {size}
                                    </label>
                                ))}                              
                            </div>
                        </details>
                        <details className="sort-details" open>
                            <summary className="sort-summary"><span className="sort-summary-heading">PRICE</span></summary>
                            <div className="sort-box">
                                <input className="input" type="range" min="$52" max="$400"/>
                                <div className="sort-interval">
                                    <p>$52</p>
                                    <p>$400</p>
                                </div>
                            </div>
                        </details>
                    </div>

                </nav>
                <nav className="sortBy">
                    <div className="sortBy-box">
                        <div className="sortBy-sort"><span className="sortBy-sort-text">Sort By</span>
                        </div>
                        <select  className="sortBy-name">
                        {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                            <option value="name">Name </option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                    <div className="sortBy-box">
                        <div className="sortBy-sort"><span className="sortBy-sort-text">Show</span></div>
                        <select className="sortBy-name">
                            {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                            <option value="9">09 </option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                        </select>
                    </div>

                </nav>
                <section className="product center">
                    <section className="product__box">
            
                        {sortProducts.length !== 0 ? 
                            sortProducts.map(product => 
                                <ProductsCard
                                key={product.id}
                                id={product.id}
                                cardLink={product.cardLink}
                                img={product.img}
                                addLink={product.addLink}
                                title={product.title}
                                price={product.price}
                                size={product.sizes && product.sizes.join(', ')} />
                            ) : <div><p>Товары не найдены</p></div>}
                    </section>
                </section>
                <div className="cont-bottom center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="/#">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/#">1</a></li>
                            <li className="page-item"><a className="page-link" href="/#">2</a></li>
                            <li className="page-item"><a className="page-link" href="/#">3</a></li>
                            <li className="page-item"><a className="page-link" href="/#">4</a></li>
                            <li className="page-item"><a className="page-link" href="/#">5</a></li>
                            <li className="page-item"><a className="page-link" href="/#">6</a></li>
                            <li className="page-item"><a className="page-link" href="/#">...</a></li>
                            <li className="page-item"><a className="page-link" href="/#">20</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/#">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="all-view">
                        <a href="single-page.html" className="button all-view__button button_hover">
                            <span className="all-view-text">View All</span></a>
                    </div>
                </div>
            </div>


            <div className="advantages center">
                <div className="advantage">
                    {FeatureIconOne()}
                    <p className="advantage-title">Free Delivery</p>
                    <p className="advantage-subtitle">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
                <div className="advantage">
                    {FeatureIconTwo()}
                    <p className="advantage-title">Sales & discounts</p>
                    <p className="advantage-subtitle">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
                <div className="advantage">
                    {FeatureIconThree()}
                    <p className="advantage-title">Quality assurance</p>
                    <p className="advantage-subtitle">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
        </>
    )
}