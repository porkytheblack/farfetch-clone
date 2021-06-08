import Image from 'next/image'
import data from '../data'
function Discuss({discuss,rangeMin ,rangeNumber}) {
    var sliced = discuss.slice(rangeMin, rangeNumber)
    return (        
        <div className="flex flex-col mb-24 f-96:flex-row items-center justify-between">
            {sliced.map(({img, title, article})=>{
                return(
                        <div key={img} className="flex pl-3 pr-3 pt-3 pb-6 flex-col w-full justify-center f-575:flex-row-reverse f-96:w-1/2 f-96:grid">
                            <div className="flex f-925:hidden f-575:w-3/4 flex-grow f-96:w-full">
                                <Image className="object-contain bg-gray-200" src={img} width={615} height={615}/>
                            </div>
                            <div className="hidden f-96:flex flex-grow f-96:w-full">
                                <Image className="object-contain bg-gray-200" src={img} width={615} height={615}/>
                            </div>
                            <div className="flex flex-col text-start pr-4 pt-2 f-575:w-1/4 f-96:hidden f-575:order-1">
                                <h3 className="pb-4 text-lg">
                                    {title}
                                </h3>
                                <p className="text-base">{article}</p>
                            </div>
                            <div className=" flex-col hidden f-96:flex text-start pr-4 pt-2 f-575:order-1">
                                <h3 className="pb-4 text-lg">
                                    {title}
                                </h3>
                                <p className="text-base">{article}</p>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default Discuss
