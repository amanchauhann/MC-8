import { Box, Flex, Heading, Input } from "@chakra-ui/react"
import { useData } from "../Contexts/DataContext"

const Nav = () => {
    const {all_events, events_dispatch} = useData()

    const search_handler = (e) => {
        events_dispatch({ type: "FILTER", payload: {
            eventType: all_events.filters.eventType,
            search: e.target.value
        } })
    }
    return(
        <Box paddingX={10}>
        <Flex paddingY={5} justify={"space-between"} borderBottom={"1px solid grey"}>
        <div className="nav_font">Meetup</div>
        <Input w={"15rem"} type="text" placeholder="search by title" onChange={search_handler} />
        </Flex>
        </Box>

    )
}

export default Nav