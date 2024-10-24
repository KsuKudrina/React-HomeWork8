import ProductsCard from "./ProductsCart";
import { data } from "../../../redux/slices/productsSlice"

const ProductsUnit = () => {
    console.log(data);
    return(
        
        <section className="product__box">
            
            {data.map(product => 
                    <ProductsCard
                    key={product.id}
                    id={product.id}
                    cardLink={product.cardLink}
                    img={product.img}
                    addLink={product.addLink}
                    title={product.title}
                    price={product.price}
                    size={product.sizes && product.sizes.join(', ')} />
                )}

        </section>
    )
}

export default ProductsUnit