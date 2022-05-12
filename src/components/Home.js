
import { Product } from './Product'



const Home = (props) => {
    console.log('home', props)

    const getid = (id) => {

        const data = Product.filter((product) => {
            return product.id == id
        })
        props.addToCartHandler(data);
    }
 
    const removeid =(id)=>{
        alert(id);
        const data = props.cartItem.cartItem.filter((product) => {
            return product.id !== id
        })
        props.removeToCartHandler(data);
    }

    return (
        <div >
            <h1>Shopping cart<sup>{props.cartItem.cartItem.length}</sup></h1>
            <div className='product-design'>
                {
                    Product.map((product, index) => {
                        return (
                            <>
                                <div key={{ index }}>

                                    <div className='cart-wrapper' >
                                        <div className='img-wrapper item'>
                                            <img src={product.image} />
                                        </div>
                                        <div className='name-wrapper item' >
                                            <span>
                                                {product.name}
                                            </span>
                                            <span>
                                                {product.price}
                                            </span>
                                        </div>
                                        <div className='button-format'>
                                            <div className='button-wrapper item' >
                                                <button onClick={() => getid(product.id)}>
                                                    Add To Card
                                                </button>
                                            </div>

                                            <div className='remove-items' >
                                                <button onClick={() => removeid(product.id)}>
                                                    Remove Card
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }




            </div>
        </div>
    )
}

export default Home