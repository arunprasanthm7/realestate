import SearchIcon from '../../images/icons8-search-64 2.svg'

export function Search(){
    return(
        <>
        <div className="flex justify-center items-center mt-16 mb-20 gap-[2px]">
            <input type="text/number" placeholder="Search Name, Location, Price, Type...." className="w-[400px] h-10 text- p-3 border border-black rounded "/>
            <div className="cursor-pointer w-24 h-10 flex px-7 items-center  border rounded border-black  right-0 hover:border-2 ab relative" >Search <img src={SearchIcon} className="absolute w-5 h-5 left-1"/></div>
        </div>
        </>
    )
}