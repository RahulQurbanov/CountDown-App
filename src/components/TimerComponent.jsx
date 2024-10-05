import { useRef, useState } from "react"
import Result from "./Result"

export default function TimerComponent({title,targerTime}){
    const [timerExpired,setTimerExpired] = useState()
    const [timerStart,setTimertimerStart] = useState()
    const [timeRemainning,setTimeRemainning]=useState(targerTime*1000)
    const timer = useRef()
    const dialog = useRef()
    const isActive = timeRemainning > 0 && timeRemainning < targerTime*1000

    function handleStart(){
        setTimertimerStart(true)
       timer.current=setInterval(()=>{
          setTimeRemainning(prev=>prev-10)
        },10)
    }
  
    function handleStop(){
        clearInterval(timer.current)
        dialog.current.showModal()
    }

    if (timeRemainning<=0) {
        clearInterval(timer.current)
        dialog.current.showModal()
    }

    function resetTimer(){
        setTimeRemainning(targerTime*1000)
    }

    return (<>
     <Result ref={dialog} targerTime={targerTime} remainningTime={timeRemainning} onReset={resetTimer}></Result>

        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired&&<p>You Lost</p>}
            <p className="challenge-time">
                {targerTime} second{targerTime>1?"s":""}
            </p>
            <p>
                <button onClick={isActive?handleStop:handleStart}>
                    {isActive?"Stop":"Start"} Challange
                </button>
            </p>
            <p className={isActive?"active":undefined}>
              {isActive?"Time is running...":"Timer is inactive..."} 
            </p>
        </section>
    </>
    )

}