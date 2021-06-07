function HeaderIcon({Icon, left}) {
    return (
        <div className={`p-2 ml-2 mr-1 border-0 cursor-pointer rounded ${left && "hover:bg-gray-100"}`}>
            <Icon className="text-black h-8 p-1 "/>
        </div>
    )
}
export default HeaderIcon