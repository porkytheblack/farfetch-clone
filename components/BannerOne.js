import Image from 'next/image';
function BannerOne() {
    return (
        <div className="flex flex-col mb-24 f-925:flex-row items-center justify-between">
            <div className="flex pl-3 pr-3 pt-3 pb-6 flex-col w-full justify-center f-575:flex-row-reverse f-925:w-1/2 f-925:grid">
                <div className="flex f-925:hidden f-575:w-3/4 flex-grow f-925:w-full">
                    <Image className="object-contain bg-gray-200" src="https://cdn-static.farfetch-contents.com/cms-cm/ke/media/2300534/data/8231a54bec5c8655a6bb489a2c38d10a.png?ratio=1x1_two-columns&minWidth=552" width={530} height={530}/>
                </div>
                <div className="hidden f-925:flex flex-grow f-925:w-full">
                    <Image className="object-contain bg-gray-200" src="https://cdn-static.farfetch-contents.com/cms-cm/ke/media/2300534/data/8231a54bec5c8655a6bb489a2c38d10a.png?ratio=1x1_two-columns&minWidth=552" width={550} height={550}/>
                </div>
                <div className="flex flex-col text-start pr-4 pt-2 f-575:w-1/4 f-925:hidden f-575:order-1">
                    <h3 className="pb-4 text-lg">
                        Made with love: fashion’s new DIY spirit
                    </h3>
                    <p className="text-base">In honor of World Environment Day, we’re championing the brands making considered efforts to minimize fashion’s impact on the planet. Buffalo Zine’s fashion director @taticotliar shares her thoughts on the rise of conscious design and craftcore culture</p>
                </div>
                <div className=" flex-col hidden f-925:flex text-start pr-4 pt-2 f-575:order-1">
                    <h3 className="pb-4 text-lg">
                        Made with love: fashion’s new DIY spirit
                    </h3>
                    <p className="text-base">In honor of World Environment Day, we’re championing the brands making considered efforts to minimize fashion’s impact on the planet. Buffalo Zine’s fashion director @taticotliar shares her thoughts on the rise of conscious design and craftcore cultur</p>
                </div>
            </div>
            <div className="flex mr-4 f-925:w-1/2 f-925:bg-contain bg-bannerOneSide bg-no-repeat bg-cover w-4/5    flex-col items-center justify-between">
                <div className="h-80"></div>
                <div className="flex  items-center flex-col justify-center text-white">
                    <h1 className="text-5xl cursor-pointer pb-4 font-bold">SCAROSSO</h1>
                    <p className="text-lg cursor-pointer font-thin underline">Shop now</p>
                </div>
                <div className="h-80"></div>
            </div>
        </div>
    )
}

export default BannerOne
