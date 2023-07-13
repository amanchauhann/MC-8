import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react"
import EventCard from "../../Components/EventCard"
import { useData } from "../../Contexts/DataContext"

const Home = () => {
    const {all_events, events_dispatch} = useData()

    const event_type_handler = (e) => {
        events_dispatch({ type: "FILTER", payload: {
            search: all_events.filters.search,
            eventType: e.target.value
        } })
    }


    const searched_events= all_events.events.filter(({title, eventTags}) => title.toLowerCase().includes(all_events.filters.search.toLowerCase().trim()) || eventTags.some(element => element.includes(all_events.filters.search.toLowerCase().trim())))

    
    const sorted = all_events.filters.eventType === "both" || all_events.filters.eventType === null ? searched_events : searched_events.filter(({eventType}) => eventType.toLowerCase() === all_events.filters.eventType)
    console.log(searched_events)
    return (
        <Box p={"2.2rem"}>
            <Flex justify={"space-between"}>
            <Heading>Meetup Events</Heading> 
        <Select onChange={event_type_handler} w={60} bg={"white"} placeholder='Select Event Type'>
  <option value='online'>Online</option>
  <option value='offline'>Offline</option>
  <option value='both'>Both</option>
</Select>
            </Flex>
        
        { sorted.length> 0 ? 
            <Flex p={"1.5rem"} gap={5} wrap={"wrap"}>
        {sorted.map(each_event => <EventCard {...each_event} />)}

        </Flex> :
        <Heading textAlign={"center"} mt={"6rem"}>NO MEETUPS</Heading>
        }
        
        </Box>
    )
}

export default Home