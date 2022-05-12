import React,{useState,useEffect} from 'react'
import './nav.css'
 const Navbar = () => {
     const [verticalheight, setverticalheight] = useState(false);
     useEffect(() => {
         window.addEventListener("scroll",()=>{
             if(window.scrollY>100){
             setverticalheight(true);
             }
             else{
                 setverticalheight(false);
             }
         })
         return () => {
          window.removeEventListener("scroll");
         };
     }, []);
    return (
        <div className={` nav-bar ${verticalheight && "nav-black"}`}>
            <img  className='nav-barimg' src="./images/logo.png" alt=" loading.." />
            <img className='nav-barimg2'  src="./images/smile-dp.jpg" alt=" loading.." />
        </div>
    )
}
export default Navbar
