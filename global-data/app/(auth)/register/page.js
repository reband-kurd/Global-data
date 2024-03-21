
import MYbutton from '@/app/compunent/myButton.js';
import Navbar from './navva.js'
export default function Page() {
  
    return (
        <div className="text-xl h-screen flex flex-col justify-center items-center "> 
           
           <Navbar/>
           
           <dev className="flex flex-col items-center gap-4">
            <input className="" type="text" name="username" placeholder="username" ></input>
            <input className="" type="password" name="password" placeholder="password" ></input>
            <MYbutton >sing-up</MYbutton>
              </dev>
        </div>
    );
}
