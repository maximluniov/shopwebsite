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

        <div className=' flex pt-40 min-h-screen bg-stone-300 gap-20 px-40 py-8 flex-wrap justify-center'>
            {loading && <p>loading</p>}
            {products &&
                products.filter((product) => product.category.includes(props.type)).map((product) => (
                    <div className='flex flex-col w-[400px] h-72 items-center p-4  bg-white shadow-md rounded-sm enlarge' key={product.id}>
                        <p>{product?.title}</p>
                        <img className='h-32 bg-inherit' src={product?.image} alt="item" />
                        <div className='flex w-full h-full items-end justify-end'>
                            <button className='w-8 rounded-full h-8 bg-orange-100' onClick={() => { addToCart(product); }} >+</button>
                        </div>
                        <p>{product?.price}$</p>
                    </div>
                ))}

        </div>

    )
}
