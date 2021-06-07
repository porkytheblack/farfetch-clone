const { SearchIcon } = require("@heroicons/react/outline");

function Nav() {
    return (
        <div className="flex justify-between flex-grow items-center h-11">
            <div className="flex items-center w-auto justify-between">
                <h4 className="font-thin cursor-pointer mr-3 text-lg ">Sale</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">New In</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">Shop</h4>
                <h4 className="font-thin cursor-pointer mr-3 flex-grow ml-3 text-lg ">By Designers</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">Clothing</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">Shoes</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">Bags</h4>
                <h4 className="font-thin cursor-pointer mr-3 ml-3 text-lg ">Accessories</h4>
            </div>  
            <div className="flex items-center justify-end flex-col max-w-sm">
                <div className="flex items-center h-11 justify-between bg-white rounded-lg pr-2 border-2">
                    <input type="text" placeholder="Search" className="bg-transparent pl-2 h-11 border-0 outline-none" />
                    <SearchIcon className="h-4"/>
                </div>
            </div>          
        </div>
    )
}

export default Nav
