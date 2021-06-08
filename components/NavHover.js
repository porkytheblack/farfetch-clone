import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "@heroicons/react/outline";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNav, selectNav } from "../features/appSlice";
import NavChosenOption from "./NavChosenOption";
import FlipMove from 'react-flip-move'


const NavHover = ()=> {
    const [more, setMore] = useState(false)
    const [chosen, setChosen] = useState(null)
    var cls = useSelector(selectNav)
    const dispatch = useDispatch()

    const viewable = useSelector(selectNav)

    useEffect(() => {
        console.log("bro force one")
    }, [cls])

    function showMore(title){
        setMore(true)
    }

    function navOption(title){
        return(
            <div onClick={()=>{setChosen(title); setMore(true)}} className="h-10 hover:bg-gray-200 w-full flex flex-row items-center justify-between text-lg cursor-pointer pr-4 pl-4">
                {title}
                <ChevronRightIcon className="h-6"/>
            </div>
        )
    }
    function close(){
        dispatch(closeNav({
            close: false
        }))
    }
    return (
        <>

        { viewable && <div className={`${ cls==true ? "flex" : "hidden" } absolute  f-96:hidden z-999  h-full w-full justify-start`}>
            <div className="relative w-full h-full">
                <div className="bg-black opacity-50 w-full h-full">

                </div>
                <div className="w-375 top-0 bottom-0 h-full  absolute">
                    <div className="w-375 bg-white flex flex-col justify-start h-screen fixed ">
                        <div className="w-full flex flex-row pt-4 mb-4 items-center justify-between pl-4 pr-4">
                            <img className="h-8 object-contain" src="https://media.glassdoor.com/sqll/799159/farfetch-squarelogo-1599647796128.png" alt="" />
                            <XIcon onClick={close} className="h-8 cursor-pointer"/>
                        </div>
                        <div className="w-3/4 flex pl-4 mb-4 justify-start items-center">
                            <h3 className="text-lg cursor-pointer text-bold pb-2 mr-6">Women</h3>
                            <h3 className="text-lg text-bold cursor-pointer pb-2 bolder border-b-2 border-black mr-6">Men</h3>
                            <h3 className="text-lg cursor-pointer text-bold pb-2 mr-6">Kids</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div onClick={close} className="h-10 hover:bg-gray-200 w-full flex items-center justify-start text-lg cursor-pointer pl-4">Men's Homepage</div> 
                            <div className={`${more ? "hidden" : "flex flex-col w-full items-center justify-center" }`}>
                                {navOption("Sale")}
                                {navOption("New In")}
                                {navOption("Shop By")}
                                {navOption("Designers")}
                                {navOption("Clothing")}
                                {navOption("Shoes")}
                                {navOption("Sneakers")}
                                {navOption("Bag")}
                                {navOption("Accessories")}
                                {navOption("Watches")}
                            </div>
                            <div className={`${more ? "flex flex-col w-full" : "hidden" }`}>
                                    <div onClick={()=>{setMore(false)}} className="h-10 hover:bg-gray-200 w-full flex flex-row items-center justify-between text-lg cursor-pointer pr-4 pl-4">
                                        <ChevronLeftIcon className="h-6"/>
                                         Back
                                    </div>
                                {chosen && <NavChosenOption className="flex flex-col bg-white z-999 text-black" side={true} chosenOption={chosen} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default NavHover
