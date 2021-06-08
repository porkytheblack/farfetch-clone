import Image from 'next/image'
function Highlight({img, title, description}) {
    return (
        <div className="highlightCard flex flex-col justify-start">
            <Image src={img} height={536} width={405}/>
            <h3 className="text-xl text-left pb-4">{title}</h3>
            <p className="text-lg text-left pb-4">{description}</p>
        </div>
    )
}

export default Highlight
