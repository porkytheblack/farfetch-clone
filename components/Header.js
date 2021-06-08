import {GlobeIcon, MenuIcon, SearchIcon, ShoppingBagIcon, StarIcon, UserIcon, XIcon} from "@heroicons/react/outline"
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { closeNav, selectSearch, setSearch } from "../features/appSlice";
import HeaderIcon from "./HeaderIcon"
import Nav from "./Nav"
import FlipMove from 'react-flip-move'

const Header = forwardRef(ref=> {
    const dispatch = useDispatch();
    const srch = useSelector(selectSearch)
    function closeSearch(){
        dispatch(setSearch({
            active: false
        }))
    }
    function openSearch(){
        dispatch(setSearch({
            active: true
        }))
    }
    function Open(){
        dispatch(closeNav({
            close: true
        }))
    }
    return (
        <div className="flex fixed flex-col z-50  bg-white f-575:z-999 w-full justify-center pb-4">

        {srch && <FlipMove>
            <div ref={ref} className="w-full h-full flex x-999 flex-col justify-center relative">
            <div onClick={closeSearch} className="absolute cursor-pointer top-4 right-4">
                <XIcon className="h-6"/>
            </div>     
            <div className="mt-6 flex mr-auto ml-auto">
                <img className="h-4 object-contain f-96:h-8 z-40 top-10 cursor-pointer" src="https://www.farfetch.com/static/images/logo.png" alt="" />
            </div>   
            <div className="flex mt-6 flex-row items-center mr-auto ml-auto justify-between w-1/2 bg-gray-50 pt-1 pb-1 pl-1 pr-1 border-black border-2 rounded-md h-9 text-md">
                <form className="w-full">
                    <input type="text" className="bg-gray-50  h-8 outline-none border-none w-full" placeholder="Search" />
                    
                </form>
                <SearchIcon className="h-4"/>
            </div>
            
        </div>
        </FlipMove>
    }
        {!srch && <>
        <div className="flex pt-6 pl-6 pr-6  flex-grow items-center justify-between">
            <div>
                <div className="flex f-96:hidden justify-start items-center">
                    <div onClick={Open} className="cursor-pointer">
                    <HeaderIcon  Icon={MenuIcon}/>
                    </div>
                    <div className="cursor-pointer" onClick={openSearch}>
                    <HeaderIcon Icon={SearchIcon}/>
                    </div>
                </div>
                <div className="hidden pt-1  f-96:flex justify-start items-center">
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Women</h4>
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Men</h4>
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Kids</h4>
                </div>
                
            </div>
            <div className="flex justify-center items-center flex-grow">
                <img className="h-4 object-contain f-96:h-8 z-40 cursor-pointer" src="https://www.farfetch.com/static/images/logo.png" alt="" />
            </div>
            <div className="flex justify-start items-center">
                <div className="hidden f-96:flex">
                    <HeaderIcon Icon={GlobeIcon} left/>
                    <HeaderIcon  Icon={UserIcon} left/>
                </div>                
                <HeaderIcon Icon={StarIcon} left/>
                <HeaderIcon Icon={ShoppingBagIcon} left/>
            </div>
        </div>
        <div  className="hidden f-96:flex pl-6 pr-6 pt-1">
            <Nav/>
        </div>
        </>}
        </div>
    )
})

export default Header

