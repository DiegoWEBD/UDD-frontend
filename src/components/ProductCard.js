import { Component } from 'react'

class ProductCard extends Component{

    render(){

        const { product } = this.props

        return (
            <div className='mx-auto mb-20 bg-white h-fit shadow-xl shadow-gray-500 w-80 p-4 rounded'>
                
                <img 
                className="mx-auto rounded mb-4 shadow-xl max-h-48"
                src={product.thumbnail} 
                />
                
                <div className='p-2'>
                    <div className='flex'>
                        <p className='mr-2 text-sm font-bold'>Título:</p>
                        <p className='text-sm'>{product.title}</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='flex'>
                        <p className='mr-2 text-sm font-bold'>Precio:</p>
                        <p className='text-sm'>{product.price} {product.currency_id}</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='flex'>
                        <p className='mr-2 text-sm font-bold'>Condición:</p>
                        <p className='text-sm'>{product.condition}</p>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='flex'>
                        <p className='mr-2 text-sm font-bold'>Stock:</p>
                        <p className='text-sm'>{ product.available_quantity > 0 ? `Disponible (${product.available_quantity})` : 'Agotado'}</p>
                    </div>
                </div>
            </div>
        )  
    }
}

export default ProductCard