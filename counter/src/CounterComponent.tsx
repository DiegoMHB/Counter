import { useContext } from "react"
import { CounterContext } from "./CounterContext"


export default function CounterComponent() {
    const {count, increase} = useContext(CounterContext)
   
  return (
    <div>
        <p>Current Count {count}</p>
        <button
        onClick={increase}
        >+1</button>
    </div>
  )
}
