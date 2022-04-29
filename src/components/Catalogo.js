import { Component } from "react"
import ProductCard from "./ProductCard"

class Catalogo extends Component {

    render(){
        const { products } = this.props

        return (
            <div className="flex flex-wrap">
                {products.map(product => 
                    <ProductCard
                        key={product.title}
                        product={product}
                    />
                )}
            </div>
        )
    }
}

export default Catalogo