import { useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"

const EventDetail = () => {
    const {eventId} = useParams()
    const {all_events} = useData()
    const this_event = all_events.events.filter(({id}) => id === eventId)[0]
    console.log(this_event)

    return (
        <>
        Eventt{eventId}
        </>
    )
}

export default EventDetail