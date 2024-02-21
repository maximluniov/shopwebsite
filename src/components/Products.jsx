import { useServer } from '../hooks/apicontext'




export const Products = (props) => {

    const addToCart = (product) =>{
        const currentItems = JSON.parse(localStorage.items)
        localStorage.items=JSON.stringify([...currentItems,product])
    }

    const {products,loading} = useServer()
    return (
        <div className=' flex pt-40 min-h-screen bg-stone-300 gap-20 px-40 py-8 flex-wrap justify-center'>
            {loading && <p>loading</p>}
                {products &&
                    products.filter((product) => product.category.includes(props.type)).map((product) => (
                        <div className='flex flex-col w-[400px] h-72 items-center p-4  bg-white' key={product.id}>
                            <p>{product?.title}</p>
                            <img className='h-32 bg-inherit' src={product?.image} alt="item" />
                            <div className='flex w-full h-full items-end justify-end'>
                            <button className='w-8 rounded-full h-8 bg-orange-100'  onClick={()=>addToCart(product)} >+</button>
                            </div>
                            {/* <p>{product?.category}</p> */}
                        </div>
                    ))
                }
        </div>
    )
}
