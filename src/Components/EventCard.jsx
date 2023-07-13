import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const EventCard = ({ id, eventThumbnail, eventStartTime, title, eventType}) => {

// Convert to Date object
const date = new Date(eventStartTime);

// Format the date
const formattedDate = date.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

// Format the time
const formattedTime = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
});

    return (
        <>
            <Card maxW='xs'>
                <Link to={`/event/${id}`}>
                    <CardBody pb={10} position={"relative"}>
                        <Image
                            src={eventThumbnail}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            height="200px" // Set a fixed height for the image
                            w={"25rem"}
                            objectFit="cover"
                        />
                        <Stack mt='0' spacing='3'>
                            <Flex gap={1} fontSize={"xs"} color={"grey"}>
                            <Text>{formattedDate} </Text>
                            <Text>▪️ {formattedTime} IST</Text>
                            </Flex>
                            <Heading size='lg'>{title}</Heading>
                        </Stack>

<Box position={"absolute"} top={5} m={1} p={1} bg={"grey"} borderRadius={5}>{eventType}</Box>
                    </CardBody>
                </Link>
            </Card>
        </>
    )
}

export default EventCard