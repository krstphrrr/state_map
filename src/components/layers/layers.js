import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Collapse,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  SimpleGrid,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";

import LayerButton from "../button1/button_1"

const varia = "ok"

const Layers = () => {
  return(
    <>
    <Flex
        bg="white"
        flexDir="column"
        boxShadow="sm"
        borderRadius="lg"
        flex="1"
      >flexbox inside Layers component
      {/*  */}
      <Accordion allowMultiple allowToggle defaultIndex={[0, 1]}>
        <AccordionItem bg="gray.300">

          <Box>
            <Tooltip
              label="informative tooltip"
              hasArrow
              zIndex={70}
              placement="right">
              <Box>
                <AccordionButton>

                  <Box flex="1" textAlign="left">
                    <Flex alignItems="center">
                      {/* <Box  mr={2} boxSize={6} /> */}
                      <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
                        Layers
                      </Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <SimpleGrid columns={2} spacing={3}>
                  <Box>
                    <LayerButton localito={varia}></LayerButton>
                  </Box>
                  <Box>
                    layer placeholder 2
                  </Box>
                  </SimpleGrid>
                </AccordionPanel>
              </Box>
            </Tooltip>
          </Box>
        </AccordionItem>
      </Accordion>
    </Flex>
    </>
  )
}
export default Layers