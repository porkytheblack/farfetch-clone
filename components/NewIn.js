import ProductCardOne from './ProductCardOne'
import data from '../data'


function NewIn() {
    return (
        <div className="flex mt-12 w-full flex-col mb-40 items-center justify-center">
            <h1 className="text-3xl font-thin w-1/2 text-center">New in : hand-picked daily from the world's best brands and boutiques</h1>
            <div className="flex flex-row mb-10 mt-12 w-full overflow-x-scroll scrollbar-hidden  justify-between items-center">
                {data.products.map(({img1, img2, brand, description, price})=>{
                    return(
                    <ProductCardOne key={img1} img1={img1} img2={img2} brand={brand} description={description} price={price}  />
                )})}
                
            </div>
            <button className="bg-none pt-2 pb-2 pl-4 pr-4   border-black border-2 rounded-lg flex items-center"> Shop Now </button>
        </div>
    )
}

export default NewIn
