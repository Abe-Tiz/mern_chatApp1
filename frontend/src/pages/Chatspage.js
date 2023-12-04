// import React, { useEffect, useState } from "react";
// import axios from "axios";
import {ChatState} from '../context/ChatProvider'
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/layout";
import Mychats from "../components/Mychats";
import ChatBox from "../components/ChatBox";
import { Flex, Spacer } from "@chakra-ui/react";
 
const Chatspage = () => {
 
  const { user } = ChatState();
  
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="20px"
      >
        {user && <Mychats />}
        {user && <ChatBox />}
      </Flex>
      {/* <Box
        d="flex"
        flexDir="row"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="20px"
      >
        {user && <Mychats />}
        {user && <ChatBox />}
      </Box> */}
    </div>
  );
};

export default Chatspage;
