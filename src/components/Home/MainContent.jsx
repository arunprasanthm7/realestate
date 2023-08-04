import {propsData} from '../../Data/propsData.js';
import saveEmpty from '../../images/saved.svg';
import locIcon from '../../images/locationIcon.png';
import saveFill from '../../images/savedblackfilled.svg';
export function MainContent(){
    let condition = true;
    function savedProps(id){
    let saveIcon = document.getElementById(id);
    saveIcon.src = (condition)?saveFill:saveEmpty;
    condition = !condition;
    }
    return(
        <div className="flex justify-center items-center mb-[130px]">
    <div className='grid grid-cols-4 gap-20 '>
    {propsData.map((props)=>{
       return( 
       <div className='relative'>
        <img src={props.image} className="w-[280px] h-[200px] rounded-lg " />
        <img className="w-5 h-5 absolute top-6 right-6 z-10 cursor-pointer" id={props.id} onClick={()=>{savedProps(props.id)}} src={saveEmpty}/>
        <div className='px-[22px] py-3 w-[220px] h-[110px] absolute left-[30px] bottom-[-46px] text-[12px]   shadow-md bg-white rounded-lg z-10'>
            <div className='font-bold text-sm'>{props.name}</div>
            <div className="flex gap-1">
            <img src={locIcon} className="w-4 h-4"/>
            <div className='font-normal text-gray-800 text-xm'>{props.location}</div> 
            </div>
            <div ><span className='font-normal text-sm'>{props.type}BHK </span>by <span className='font-semibold text-gray-800 text-xm'>{props.builder}</span></div>
            <div className=''><span className='font-semibold text-sm'>{props.price}</span> <span className='font-normal text-sm'>Lakhs</span></div>
        </div>
    </div>
       )
    }
    )}
</div> 
</div>
)
}