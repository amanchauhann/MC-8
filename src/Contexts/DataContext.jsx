import { createContext, useContext, useEffect, useReducer } from "react";
import { meetups } from "../Data/Data";
// import { meetups } from "../Data/Data";

const DataContext = createContext()


const data_reducer = (state, { type, payload }) => {
    switch (type) {
        case("INITIAL"):
            return {
                ...state,
                events: payload
            }
        case("FILTER"):
            return {
                ...state,
                filters: payload
            }
    }
}


export const DataProvider = ( {children} ) => {
    const a =4
    const initial_Data = {
        events: [],
        filters: {
            search: "",
            eventType: null
        }
    }
    const [all_events, events_dispatch] = useReducer(data_reducer, initial_Data)

    useEffect(() => {
        events_dispatch({ type: "INITIAL", payload: meetups })
    }, [])

    console.log(all_events)

    return (
        <DataContext.Provider value={{all_events, events_dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)