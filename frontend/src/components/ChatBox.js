import { Box } from "@chakra-ui/layout";
// import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../context/ChatProvider";
import { Flex } from '@chakra-ui/react';
 
const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
 
  return (
    <Flex
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
       <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Flex>
  );
};

export default ChatBox;
