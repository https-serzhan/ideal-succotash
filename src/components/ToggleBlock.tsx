import { useState } from "react";


export default function ToggleBlock() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    function handleToggle(){
        setIsVisible((prevIsVisible) => !prevIsVisible);
    }
    return (
        <>
            {isVisible && <div className='hidden-block' style={{marginBottom : '2rem', marginTop : '2rem'}} >I SEE YOU </div>}
            <button onClick={handleToggle} style={{marginBottom : '2rem', marginTop : '2rem'}} >Toggle block</button>
        </>
    )
}