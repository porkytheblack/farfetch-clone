import {GlobeIcon, MenuIcon, SearchIcon, ShoppingBagIcon, StarIcon, UserIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"
import Nav from "./Nav"

function Header() {
    return (
        <div className="flex flex-col justify-center pb-4">
        <div className="bg-white pt-6 pl-6 pr-6 flex flex-grow items-center justify-between">
            <div>
                <div className="flex  f-96:hidden justify-start items-center">
                    <HeaderIcon Icon={MenuIcon}/>
                    <HeaderIcon Icon={SearchIcon}/>
                </div>
                <div className="hidden pt-1  f-96:flex justify-start items-center">
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Women</h4>
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Men</h4>
                    <h4 className="font-thin cursor-pointer mr-6 text-lg ">Kids</h4>
                </div>
                
            </div>
            <div className="flex justify-center items-center flex-grow">
                <img className="h-4 object-contain f-96:h-8 cursor-pointer" src="https://www.farfetch.com/static/images/logo.png" alt="" />
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
        <div className="hidden pl-6 pr-6 pt-1 f-96:flex">
            <Nav/>
        </div>
        </div>
    )
}

export default Header

