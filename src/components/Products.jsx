import { useServer } from '../hooks/apicontext'
import { useContext } from "react";
import { CartContext } from "../contexts/cartcontext";



export const Products = (props) => {


    const { increaseNumber, handletotalPrice } = useContext(CartContext)



    const addToCart = (product) => {

        let currentItems = JSON.parse(localStorage.items);
        const productForCart = {
            title: product.title,
            id: product.id,
            image: product.image,
            count: 1,
            price: product.price,
            category: product.category
        };


        if (!currentItems.filter((item) => item.id === productForCart.id).length > 0) {
            localStorage.items = JSON.stringify([...currentItems, productForCart])

        }
        else {

            currentItems.map((item, index) => item.id === productForCart.id && (currentItems[index].count++, localStorage.items = JSON.stringify([...currentItems])))
        }
        handletotalPrice(productForCart.price, true);
        increaseNumber();
    }

    const { products, loading } = useServer();
    return (

        <div className=' flex pt-48 min-h-screen bg-stone-300 gap-20 px-6 pb-8 flex-wrap justify-center lg:px-20'>
            {loading && <p>loading</p>}
            {products &&
                products.filter((product) => product.category.includes(props.type)).map((product) => (
                    <div className='flex flex-col w-3/4 h-[500px] items-center p-4  bg-white shadow-md rounded-sm text-4xl enlarge lg:w-[400px] lg:h-72 lg:text-lg ' key={product.id}> 
                    {/* enlarge */}
                        <p>{product?.title}</p>
                        <img className='h-52 bg-inherit lg:h-32' src={product?.image} alt="item" />
                        <div className='flex w-full h-full items-end justify-end'>
                            <button className='w-20 rounded-full h-20 font-bold bg-orange-100 lg:w-8 lg:h-8' onClick={() => { addToCart(product); }} >+</button>
                        </div>
                        <p>{product?.price}$</p>
                    </div>
                ))}

        </div>

    )
}
