import data from "../data"
import Highlight from "./Highlight"

function Highlights() {
    return (
        <div className="flex flex-col justify-between items-center ml-10 mr-10">
            <h1 className="text-3xl font-thin w-1/2 text-center">This Week's Highlights</h1>
            <div className="flex flex-row mb-10 mt-12 w-full overflow-x-scroll scrollbar-hidden  justify-between items-center">
                {data.highlights.map(({img, title, description})=>{
                    return(
                        <Highlight key={img} img={img} title={title} description={description} />
                    )
                })}
            </div>
        </div>
    )
}

export default Highlights
