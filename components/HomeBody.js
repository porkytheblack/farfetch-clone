import Image from 'next/image'

function HomeBody() {
    return (
        <div className="flex items-center pt-4 pb-20 justify-between flex-col f-925:flex-row">
            <div className="order-first f-925:hidden pb-4  justify-center items-center w-5/6 f-925:order-last f-925:w-1/2 flex">
                <Image width={918} height={918}   src="https://cdn-static.farfetch-contents.com/cms-cm/ke/media/2226484/data/7c2df33252019ec9396d4c03fc6eb1b4.png?ratio=1x1_messaging-side&minWidth=616" />
            </div>
            <div className="order-first hidden  justify-center items-center w-5/6 f-925:order-last  f-925:w-1/2 f-925:flex">
                <Image width={520} height={520}   src="https://cdn-static.farfetch-contents.com/cms-cm/ke/media/2226484/data/7c2df33252019ec9396d4c03fc6eb1b4.png?ratio=1x1_messaging-side&minWidth=616" />
            </div>
            <div className="order-last f-925:mr-4  f-925:w-1/2 f-925:order-first flex flex-col justify-center items-center">
                <h1 className="text-7xl text-center pb-4 font-black">SELL: GET UP TO 50% OFF NOW</h1>
                <h3 className="text-center text-lg pb-4 font-light">The Greatest selection of sale pieces from the world's finest fashion boutiques and brands -only on <span className="text-bold">FARFETCH</span> </h3>
                <button className="pb-2 pt-2 pl-4 pr-4 bg-none border-2 rounded-lg">Shop now</button>
            </div>
        </div>
    )
}

export default HomeBody
