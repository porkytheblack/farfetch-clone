import BannerOne from "./BannerOne"
import BannerTwo from "./BannerTwo"
import Discuss from "./Discuss"
import Feed from "./feed"
import Footer from "./Footer"
import Highlights from "./Highlights"
import HomeBody from "./HomeBody"
import NewIn from "./NewIn"
import data from '../data'
import { useDispatch, useSelector } from "react-redux"
import { activate, deActivate, hideMainNav, selectChosenItem, selectMainNav } from "../features/appSlice"
import NavChosenOption from "./NavChosenOption"

function HomePageBody() {

    const chosenItem = useSelector(selectChosenItem)
    const active = useSelector(selectMainNav)
    const dispatch = useDispatch();
    function updateStore(){
        dispatch(activate())
    }
    function da(){
        console.log("done")
        dispatch(deActivate())
        dispatch(hideMainNav())
    }

    return (
        <div className="relative top-36 scrollbar-hide flex flex-col">
            {
                active && <div onMouseEnter={()=>{updateStore()}} className="absolute w-full h-full z-999">
                            <div className="relative w-full h-full">
                                <div className="w-full h-full bg-black opacity-50"></div>
                                <div onMouseLeave={()=>{da()}}  className="w-full   h-screen absolute top-0">
                                        <div className="w-full z-999 h-3/4 fixed top-36 bg-white">
                                            <NavChosenOption chosenOption={chosenItem} main={true} />
                                        </div>                                        
                                </div>
                            </div>
                        </div>
            }
            <HomeBody/>
            <BannerOne/>
            <BannerTwo/>
            <NewIn/>
            <Highlights/>
            <Feed feed={data.feed.slice(0, 4)} title="The feed: conscious sneakers"/>
            <Discuss discuss={data.discuss} rangeMin={0} rangeNumber={2} />
            <Feed feed={data.feed.slice(4,8)} title="The boutique edit: modern staples from Tiziana Fausti, Italy"/>
            <Discuss discuss={data.discuss} rangeMin={2} rangeNumber={4} />
            <Feed feed={data.feed.slice(8, 12)} title="New to our Black designers edit"/>
            <Footer/>
        </div>
    )
}

export default HomePageBody
