import { useServer } from '../hooks/apicontext'


import img from "../assets/img.png"

const Main = () => {

    const { products, loading } = useServer();

    // const img = require('../assets/img.png')

    return (
        <div className='flex flex-col bg-stone-300 '>
            
            
            <div className=' w-full  h-screen bg-cover bg-blend-multiply bg-white flex items-center justify-center font-bold font-serif text-4xl bg-no-repeat ' style={{backgroundImage:`url(${img})` }} >
                                E-COMMERCE
            </div>





            
            <div className=' flex   gap-20 px-40 py-8 flex-wrap justify-center'>
            {loading && <p>loading</p>}
                {products &&
                    products.map((product) => (
                        <div className='flex flex-col w-[400px] h-72 items-center p-4  bg-white' key={product.id}>
                            <p>{product?.title}</p>
                            <img className='h-32 bg-inherit' src={product?.image} alt="item" />
                            <div className='flex w-full h-full items-end justify-end'>
                            <button className='w-8 rounded-full h-8 bg-orange-100'>+</button>
                            </div>
                            <p>{product?.category}</p>
                        </div>
                    ))
                }
            </div>
                
        </div>
    )
}

export default Main