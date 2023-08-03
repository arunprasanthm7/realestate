import {propsData} from '../propsData.js';
import saveIcon from '../images/saved.svg';
import locIcon from '../images/locationIcon.png';
export function MainContent(){
    return(
        <div className="flex justify-center items-center mb-[130px]">
    <div className='grid grid-cols-4 gap-20 '>
    {propsData.map((props)=>{
       return( 
       <div className='relative'>
        <img className="w-[280px] h-[200px] " src={props.image}/>
        <img className="w-4 h-4 absolute top-6 right-6"  src={saveIcon}/>
        <div className='px-[22px] py-3 w-[220px] h-[110px] absolute left-[30px] bottom-[-46px] text-[12px]  border bg-white border-black rounded z-10'>
            <div className='font-bold text-sm'>{props.name}</div>
            <div className="flex gap-1">
            <img src={locIcon} className="w-4 h-4"/>
            <div className='font-normal text-gray-800 text-xm'>{props.location}</div> 
            </div>
            <div ><span className='font-normal text-sm'>{props.type}BHK </span>by <span className='font-semibold text-gray-800 text-xm'>{props.builder}</span></div>
            <div className=''><span className='font-semibold text-base'>{props.price}</span> <span className='font-normal text-base'>Lakhs</span></div>
        </div>
    </div>
       )
    }
    )}
</div> 
</div>
)
}