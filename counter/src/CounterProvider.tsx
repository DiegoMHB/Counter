import { ReactNode, useState } from "react";
import { CounterContext } from "./CounterContext";

type CounterProviderProps = {
    children: ReactNode
}



export const CounterProvider = ({children} : CounterProviderProps) =>{
    const [count, setCount] = useState<number>(0);

    const increase = () :void=> {
        setCount((prev: number)=> prev + 1)
    }
    return (
        <CounterContext.Provider value={{increase, count}}>
            {children}
        </CounterContext.Provider>
    )
}
