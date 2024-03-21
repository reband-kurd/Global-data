
import { HandMetal } from "lucide-react";
import Link from 'next/link'; 
import MYbutton from "../../compunent/myButton";



 
function navva() {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">

     
    
    <div className="text-xl flex flex-row justify-between items-center ">
      <div className=" justify-start pl-10"><Link href="/"><HandMetal/></Link></div>
      <div className=" w-60 ">
        <MYbutton>
             <Link href="/signin">Sign-in</Link>

           </MYbutton>  
           </div>  
         
      
     
          
           
      
       </div>  
    
     
</div>
)
}
 
export default navva
