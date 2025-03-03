import { createContext } from "react";

type CounterContextProps = {
    count: number,
    increase: ()=>void
}


export const CounterContext = createContext<CounterContextProps>(null!);

