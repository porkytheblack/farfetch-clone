import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {activate, hideMainNav, selectChosenItem, selectMainNav, selectMainNavActive, setChosenItem, setSearch, showMainNav} from "../features/appSlice"

const { SearchIcon } = require("@heroicons/react/outline");

function Nav() {
    const chosen = useSelector(selectChosenItem)
    console.log("Edgy", chosen)
    const active = useSelector(selectMainNavActive);
    const mainNavState = useSelector(selectMainNav)
    const titles = ["Sale", "New In", "Shop By", "Designers", "Clothing", "Shoes", "Bags", "Accessories"]
    const dispatch = useDispatch()
    function openSearch(){
        dispatch(setSearch({
            active: true
        }))
    }
    if(mainNavState){
        dispatch(showMainNav())
    }

    function checkActivity(){
        setTimeout(() => {
            if(!active){
                dispatch(setChosenItem({
                    chosenItem: null
                }))
                dispatch(hideMainNav())
            }
        }, 1000);
        
    }
    function updateChosen(name){
        dispatch(setChosenItem({
            chosenItem: name
        }))
        dispatch(showMainNav())
        dispatch(activate())
    }
    function title(name){
        return(
            <h4 onMouseEnter={()=>{ updateChosen(name)} } onMouseLeave={checkActivity} className="font-bold cursor-pointer mr-3 text-lg ">{name}</h4>
        )
    }

    return (
        <div  className="flex justify-between flex-grow items-center h-11">
            <div className="flex items-center w-auto justify-between">
                {
                    titles.map((obj)=>{
                        return(
                            title(obj)
                        )
                    })
                }
            </div>  
            <div className="flex items-center justify-end flex-col max-w-sm">
                <div className="flex items-center h-11 justify-between bg-white rounded-lg pr-2 border-2">
                    <input type="text" onChange={openSearch} onFocus={openSearch} placeholder="Search" className="bg-transparent pl-2 h-11 border-0 outline-none" />
                    <div className="cursor-pointer" onClick={openSearch}> 
                    <SearchIcon className="h-4"/>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default Nav
