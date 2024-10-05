import { forwardRef } from "react"

const Result=forwardRef(function Result({targerTime,remainningTime,onReset},ref){

    const userLost = remainningTime<=0
    const result =Math.floor((1-(remainningTime/(targerTime*1000)))*100)

    return <dialog ref={ref} className="result-modal" >
        {userLost&&<h2>You Lost</h2>}
        {!userLost&&<h2>You {result}</h2>}
        <p>The targer time is {targerTime} seconds.</p>
        <p>You stopped the timer with {remainningTime/1000} seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
})

export default Result;