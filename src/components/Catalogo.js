import { Component } from "react"
import ProductCard from "./ProductCard"

class Catalogo extends Component {

    render(){
        const { products } = this.props

        return (
            <div className="flex flex-wrap py-8 px-2 bg-neutral-200 min-h-screen">
                {
                products.map((product, index) => 
                    <ProductCard
                        key={index}
                        product={product}
                    />
                )}
            </div>
        )
    }
}

export default Catalogo