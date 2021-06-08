import NavLink from "./NavLink"
import Image from "next/image"

function NavChosenOption({chosenOption, side, main}) {
    const chosenOptions = ["Sale", "New In", "Shop By", "Clothing"]
    console.log(chosenOption)
    const options = {
        sale: {
            titles: ["Shoes", "Featured Designers"],
            img:"https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/SS21%20Sale/Onsite_MainSale_Launch_456x374.jpg",
            shoes:["New in Shoes", "All shoes", "Boots", "Brogues", "Derby Shoes", "Espadrilles", "Flip Flops & slides", "Loafers", "Monk shoes", "Oxford Shoes", "sandals", "Trainers", "Conscious shoes", "Sale Shoes"],
            featuredDesigners: ["Alexander McQueen", "Balenciaga", "Burberry", "Common Projects", "Dolce and Gabbana", "Fendi", "Gucci", "Givency", "Off White", "Prada", "Versace", "Valentino Garavani"]
        },
        newin: {
            img:"https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-06-MW-NEWIN-GRAPHIC-TSHIRTS.jpg",
            titles: ["Whats New", "Trends", "Fashion Feed"],
            whatsNew: ["New in", "Next generation designers", "Spring Summer 2021", "Exclusive & collaborations"],
            trends: ["50 graphic t-shirts", "the swimwear update", "The summer shoe update", "Bucket hats"],
            fashionFeed: ["All articles", "Sheet styles", "How to", "Brands we love", "Trends", "Boutique directory"]
        },
        shopby: {
            img:"https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(23)/02-06-MW-SHOPBY-CONSCIOUS.jpg",
            titles: ["Styles", "Boutique Guides", "Moment", "Editors Picks"],
            styles: ["Classic", "Edgy", "Minimal", "Street"],
            boutiqueGuides: ["The cult edit", "The classic edit", "The minimal edit", "The steetwear edit"],
            moment: ["Lounge Wear", "Party wear", "Getaway wardrobe", "Wedding day", "Work from home"],
            editorsPicks: ["Best sellers", "Black designers", "Conscious", "Customisation studio", "Gifts","Stadium Goods Edit"]
        },
        clothing:{
            img:"https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(23)/02-06-MW-CLOTHING-SHIRTS.jpg",
            titles: ["Clothing ", "Active Wear"],
            clothing: ["New in clothing", "All clothing", "Beach Wear", "Coats", "Denim", "Dresses", "Jackets", "Jumpsuits & play suits", "Knit wear", "lingrerie", "Shorts", "Skirts", "Tailoring", "Tops", "Trousers", "Conscious clothing", "Sale clothing"],
            activeWear:["All active wear", "Accessories", "All in ones", "Footwear", "Jackets", "Shorts", "Ski", "Swimwear", "Tops", "Trousers", "Conscious Active Wear", "Sale Active wear"]
        }
    }

    var ts = []
    var titles = []
    if(chosenOption !== null && chosenOptions.indexOf(chosenOption) > -1){
        titles = options[chosenOption.replace(" ", "").trim().toLowerCase()].titles.map((title)=>{
            console.log(title)
            var arr1 = title.split(" ");
            console.log(arr1)
            if(arr1.length > 1){
                console.log(arr1,36)
                var str = arr1[0].toLowerCase() + arr1[1].replace(arr1[1].charAt(0),arr1[1].charAt(0).toUpperCase() )
                console.log(str, 37)
            }else{
                var str = arr1[0].toLowerCase()
            }
            
            ts.push(str)
            return ts
        })
    }
    console.log(titles)

    return (
        <div className="">
            {side && <div className="flex flex-col overflow-y-scroll w-full ">
                {chosenOption &&
                    titles[0].map((title)=>{
                        return (options[chosenOption.replace(" ", "").trim().toLowerCase()][title].map((obj, i)=>{
                            return(
                                <div className="h-10 hover:bg-gray-200 w-full flex flex-row items-center justify-between text-lg cursor-pointer pr-4 pl-4">
                                    {obj}
                                </div>
                            )                        
                        }))
                    })
                }
            </div>}
            {
                main && <div className="w-full h-screen overflow-y-scroll flex flex-row items-start justify-between pl-12 pr-12 pt-10">
                    <div className="w-4/6 justify-between flex flex-row">
                    { chosenOptions.indexOf(chosenOption) > -1 &&
                        titles[0].map((obj, i)=>{
                            console.log(obj)
                            return(
                                <div key={i} className="flex flex-col mr-6 ml-2 justify-center">
                                    <h4 className="text-lg text-gray-500">{obj}</h4>
                                    <div className="flex flex-col justify-center items-start">
                                        {
                                            options[chosenOption.replace(" ", "").trim().toLowerCase()][obj].map((obj, i)=>{
                                                return(
                                                    <div key={i} className="hover:underline w-full flex flex-row items-center justify-between text-md cursor-pointer">
                                                        {obj}
                                                    </div>
                                                )                        
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    {chosenOptions.indexOf(chosenOption) > -1 && <div className="w-1/3 h-full flex flex-col justify-start">
                        <Image className="bg-gray-200" height={300} width={280} src={options[chosenOption.replace(" ", "").trim().toLowerCase()].img} />
                        <div className="flex flex-col w-full justify-start">
                            <h4 className="text-lg text-thin mt-8 mb-4">Spotlight on</h4>
                            <h3 className="text-md uppercase cursor-pointer hover:text-red-900 mb-4 text-gray-300">{options[chosenOption.replace(" ", "").trim().toLowerCase()][titles[0][0]][0]}</h3>
                            <h3 className="text-lg font-bold cursor-pointer hover:underline"> Shop Now </h3>
                        </div>
                    </div>}
                </div>
            }
        </div>
    )
}

export default NavChosenOption
