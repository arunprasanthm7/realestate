import { Saved } from "../pages/Saved.jsx";
export  function Navigation () {
let PropertiesPage=()=>{
console.log('properties')
document.getElementById('propertyContainer').style.visibility="visible";
}
let SavedPage=()=>{
    console.log('Saved')
    document.getElementById('propertyContainer').style.visibility="hidden";
    return (<Saved/>)
    }
    let ContactedPage=()=>{
        console.log('Contacted')
        document.getElementById('propertyContainer').style.visibility="hidden";
        }

return(
<div className="flex justify-center items-center">
<div className="flex w-[600px] h-[40px]justify-center items-center  text-black text-lg ">
    <div className="flex justify-center items-center w-[200px] h-10 border-2 border-white hover:border-b-black cursor-pointer text-base" onClick={()=>{PropertiesPage()}}>Properties</div>
    <div className="flex justify-center items-center w-[200px] h-10 border-2 border-white hover:border-b-black cursor-pointer text-base" onClick={()=>{SavedPage()}}>Saved</div>
    <div className="flex justify-center items-center w-[200px] h-10 border-2 border-white hover:border-b-black cursor-pointer text-base" onClick={()=>{ContactedPage()}}>Contacted</div>
</div>
</div>
)
}
