import Image from 'next/image'
function BannerTwo() {
    return (
        <div className="w-full cursor-pointer flex flex-col f-925:flex-row">
            <div className="w-auto ml-4 mr-4 f-925:w-1/2">
                <Image width={915} height={915} src="https://cdn-static.farfetch-contents.com/cms-cm/ke/media/2277014/data/4f2e33fadaf97538ec395ec5f91735cf.png?ratio=1x1_messaging-side&minWidth=936"/>
            </div>
            <div className="w-auto pl-6 pr-6 f-925:w-1/2 flex flex-col items-center justify-center">
                <h3 className="text-3xl mb-12 text-black text-center font-bold">Circular Services 101: how to sell, donate and repair</h3>
                <p className="text-md pb-4 mb-4 text-center text-black" >Whether you’re looking to clear your closet while earning FARFETCH credit or restore your favorite pieces, our circular services can help to reduce waste and extend the life of your clothes. Here’s everything you need to know</p>
                <button className="bg-none pt-2 pb-2 pl-4 pr-4 border-black border-2 rounded-lg flex items-center"> Read More </button>
            </div>
        </div>
    )
}

export default BannerTwo
