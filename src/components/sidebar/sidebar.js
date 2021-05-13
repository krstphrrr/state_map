import React from "react";
import { Flex, Box, Stack, useDisclosure } from "@chakra-ui/react";
// import Header from "./header";
import Layers from "../layers/layers";
// import SidebarMenu from "./sidebar-menu";
// import config from "@uidaholib/shared/constants/config";

const Sidebar = () => {

  const { isOpen, onClose, onOpen } = useDisclosure(false);

  return (
    <>
      <Flex
        flexDir="column"
        pos="absolute"
        w={["100%", "100%", "50%", "40%"]}
        top={{ md: 0 }}
        left={{ md: 0 }}
        flex="1"
        minH={0}
        zIndex={45}
      >column space for Sidebar
        <Flex
          flexDir="column"
          w="100%"
          minH={0}
          flex="1"
          maxH="100%"
          h="100%"
          p={3}
          borderTopRadius={["md", null]}
          borderRightRadius={[null, "md"]}
          bg="gray.100"
          color="gray.700"
          boxShadow="lg"
        >
        actual Sidebar
          {/* <Header title={title} onOpen={onOpen} /> */}
          <Layers />
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;