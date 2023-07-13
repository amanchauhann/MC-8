import { Flex } from "@chakra-ui/react"
import EventCard from "../../Components/EventCard"
import { useData } from "../../Contexts/DataContext"

const Home = () => {
    const {all_events} = useData()

    return (
        <>
        <Flex gap={1} wrap={"wrap"} justify={"space-between"}>
        {all_events.events.map(each_event => <EventCard {...each_event} />)}

        </Flex>
        
        </>
    )
}

export default Home