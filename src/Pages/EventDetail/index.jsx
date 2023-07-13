import { useParams } from "react-router-dom"
import { useData } from "../../Contexts/DataContext"
import { Avatar, Box, Button, Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react"
import { getDateAndTime } from "../../utils"
import RSVPModal from "../../Components/RSVPModal"
import { useState } from "react"

const EventDetail = () => {
    const {eventId} = useParams()
    const {all_events} = useData()
    const [is_rsvp, set_is_rsvp] = useState(false)
    const this_event = all_events.events.filter(({id}) => id === eventId)[0]
    const {title,hostedBy,eventThumbnail,eventDescription,additionalInformation,eventTags, location, address, eventStartTime, eventEndTime, price, speakers, isPaid} = this_event

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box p={"5rem"}>
        <Flex justify={"space-between"} gap={"22rem"}>
        <Flex maxW={"550px"} direction={"column"} gap={8}>
            <Heading>{title}</Heading>
            <Flex direction={"column"}>
                <Text>Hosted By</Text>
                <Text fontWeight={700}>{hostedBy}</Text>
            </Flex>
            <Image boxSize={"550px"} src={eventThumbnail} h={"400px"} />
            <Flex direction={"column"} gap={3}>
            <Heading fontSize={"2xl"}>Details:</Heading>
            <Text>{eventDescription}</Text>
            </Flex>

            <Flex direction={"column"} gap={2}>
            <Heading fontSize={"2xl"}>Additional Information:</Heading>
            <Text><b>Dress Code:</b> {additionalInformation.dressCode}</Text>
            <Text><b>Age Restrictions:</b> {additionalInformation.ageRestrictions}</Text>
            </Flex>

<Heading fontSize={"2xl"}>Event tags:</Heading>
<Flex gap={2}>
{eventTags.map(each => <Button colorScheme="red">{each}</Button>)}

</Flex>
        </Flex>
        <Flex direction={"column"} gap={10} p={"2rem"}>
        <Flex direction={"column"} gap={5} p={"2rem"} borderRadius={10} bg={"white"}>
            <Flex gap={2}>
                <Box>⌚</Box>
            <Text>{getDateAndTime(eventStartTime).date} at {getDateAndTime(eventStartTime).time} to {getDateAndTime(eventEndTime).date} at {getDateAndTime(eventEndTime).time}</Text>
            </Flex>
        <Flex gap={2}>
            <Box>📍</Box>
        <Text>{location}, {address}</Text>
        </Flex>
        {isPaid ? 
        <Flex gap={5}>
        <Box>₹</Box>
        <Text> {price}</Text>
        </Flex> 
        :
        <Text fontWeight={500}>{price}</Text>
    }
        
        
        </Flex>
        <Box>
            <Heading mb={4} fontSize={"md"}>Speakers: (2)</Heading>
            <Flex textAlign={"center"} justify={"space-between"}>
                {speakers.map(({name, image, designation}) => <Box bg={"white"} border={"1px solid grey"} p={5} borderRadius={8} boxShadow={"2xl"}>
                    <Avatar size={"lg"} src={image} name={name}/>
                    <Text fontSize={"md"} fontWeight={700}>{name}</Text>
                    <Text fontSize={"sm"}>{designation}</Text>
                </Box>)}
            </Flex>
        </Box>
        <Button alignSelf={"center"} w={"10rem"} colorScheme="red" isDisabled={is_rsvp} onClick={ onOpen}>{is_rsvp && "Already "}RSVP</Button>
        </Flex>
        </Flex>
        <RSVPModal isOpen={isOpen} onClose={onClose} set_is_rsvp={set_is_rsvp} />
        </Box>
    )
}

export default EventDetail