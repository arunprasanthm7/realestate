import { Properties } from '../pages/Properties.jsx';
import { Saved } from '../pages/Saved.jsx';
import { Contacted } from '../pages/Contacted.jsx';


export function MainContent(){
    return(
        <div id="mainContent" className="flex flex-col gap-[100px] justify-center items-center mb-[130px]">
   <Properties/>
   <Saved/>
   <Contacted/>

</div>
)
}
