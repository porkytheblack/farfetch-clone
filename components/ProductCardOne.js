import { StarIcon } from "@heroicons/react/outline"

function ProductCardOne({img1, img2, Ns, brand, description, price}) {
    return (
        <div className="  productOneCard cursor-pointer">
            <div className="group productOneCardImage">
                <StarIcon className="starIcon" />
                <img className="flex group-hover:hidden" src={img1} alt="" />
                <img className="hidden group-hover:flex" src={img2} alt="" />
            </div>
            <div className="cardText text-center flex flex-col justify-center">
                <p className="text-gray-400 pb-4">New Season</p>
                <h4 className="pb-2">{brand}</h4>
                <p className="pb-2">{description}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ProductCardOne
