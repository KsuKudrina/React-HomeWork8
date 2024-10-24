import { data } from "../../../redux/slices/productsSlice"
import ProductCard from "./ProductCard"

const ProductUnit = () => {
    
    return(
        
        <section className="product__box">
            
            {data.map(product => 
                    <ProductCard
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

export default ProductUnit
