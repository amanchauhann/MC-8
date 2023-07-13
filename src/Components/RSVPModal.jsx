import { Button, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useState } from "react"

const RSVPModal = ({isOpen,onClose, set_is_rsvp}) => {
    const [rsvp_form, set_rsvp_form] = useState({
        name: null,
        email: null
    })

    const rsvp_handler = () => {
        set_is_rsvp(true)
        onClose()
    }

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={"3rem"}>
          <ModalHeader>
          <Heading mb={2} fontSize={"2xl"}>Complete your RSVP</Heading>
            <Text color={"grey"} fontSize={"sm"}>Fill in Your personal information</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={5}>
            <label>Name:
                <Input type="text" onChange={(e)=> set_rsvp_form((prev => ({...prev, name: e.target.value})))} />
            </label>
            <label>Email:
                <Input type="email" onChange={(e)=> set_rsvp_form((prev => ({...prev, email: e.target.value})))} />
            </label>
            <Text color={"grey"} fontSize={"sm"}>*You have to make the payment at the venue</Text>
            <Button isDisabled={!rsvp_form.name || !rsvp_form.email} colorScheme="red" onClick={rsvp_handler}>RSVP</Button>
            </Flex>
            
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
        </>
    )
}

export default RSVPModal