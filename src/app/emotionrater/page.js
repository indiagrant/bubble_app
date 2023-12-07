"use client";
import supabase from "../config/supbaseClient.js";
import { useEffect, useState } from "react";
import { useLink } from "next/router";
import { SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link.js";
import Bubble from "../../../public/assets/Bubble.svg";

import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const RatingButtons = () => {
  const [happinessRating, setHappinessRating] = useState(null);
  // console.log(`This is the happiness rating ${happinessRating}`);
  const [sadnessRating, setSadnessRating] = useState(null);
  // console.log(`This is the sadness rating ${sadnessRating}`);
  const [angryRating, setAngryRating] = useState(null);
  // console.log(`This is the angry rating ${angryRating}`);
  const [cheekyRating, setCheekyRating] = useState(null);
  //console.log(`This is the cheeky rating ${cheekyRating}`);
  const [tiredRating, setTiredRating] = useState(null);
  //console.log(`This is the tired rating ${tiredRating}`);
  const [worriedRating, setWorriedRating] = useState(null);
  console.log(
    `This is the happiness rating ${happinessRating} This is the sadness rating ${sadnessRating} This is the angry rating ${angryRating} This is the cheeky rating ${cheekyRating} This is the tired rating ${tiredRating}  This is the worried rating ${worriedRating}`
  );

  const handleHappinessRatingChange = async (rating) => {
    setHappinessRating(rating);
  };
  const handleSadnessRatingChange = async (rating) => {
    setSadnessRating(rating);
  };
  const handleAngryRatingChange = async (rating) => {
    setAngryRating(rating);
  };
  const handleCheekyRatingChange = async (rating) => {
    setCheekyRating(rating);
  };
  const handleTiredRatingChange = async (rating) => {
    setTiredRating(rating);
  };
  const handleWorriedRatingChange = async (rating) => {
    setWorriedRating(rating);
  };

  const SubmitEvent = async () => {
    const { error } = await supabase
      .from("mood")
      .update({
        happy: happinessRating,
        sad: sadnessRating,
        angry: angryRating,
        cheeky: cheekyRating,
        tired: tiredRating,
        worried: worriedRating,
      })
      .eq("uuid", `135086d0-9c0e-4444-b110-9a964710cff3`);
  };

  return (
    <Box position="relative">
      <Flex direction="column" align="center" justify="center" h="100%">
        <Box size="lg" w="70%" h="100px" bg="brand.blue" borderRadius="md">
          <Heading align="center">
            Let's dive deeper (rate your emotions - click on the bubbles)
          </Heading>
        </Box>

        <Box>
          <Box
            bg="brand.blue"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How happy do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Happy
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image
                  src={Bubble}
                  alt="Bubble1"
                  width={50}
                  height={50}
                  style={{
                    filter: happinessRating !== 1 ? "opacity(50%)" : "none",
                  }}
                />

                <Text
                  onClick={() => handleHappinessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={happinessRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: happinessRating !== 2 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleHappinessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={happinessRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: happinessRating !== 3 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleHappinessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={happinessRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"

                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: happinessRating !== 4 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleHappinessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={happinessRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                  
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: happinessRating !== 5 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleHappinessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={happinessRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                  
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Happy
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.yellow"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How sad do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Sad
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} style={{
                    filter: sadnessRating !== 1 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleSadnessRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={sadnessRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: sadnessRating !== 2 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleSadnessRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={sadnessRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: sadnessRating !== 3 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleSadnessRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={sadnessRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: sadnessRating !== 4 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleSadnessRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={sadnessRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: sadnessRating !== 5 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleSadnessRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={sadnessRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Sad
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.green"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How angry do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Angry
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} style={{
                    filter: angryRating !== 1 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleAngryRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={angryRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: angryRating !== 2 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleAngryRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={angryRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: angryRating !== 3 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleAngryRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={angryRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: angryRating !== 4 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleAngryRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={angryRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: angryRating !== 5 ? "opacity(50%)" : "none",
                  }} />

                <Text
                  onClick={() => handleAngryRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={angryRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Angry
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.pink"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How cheeky do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Cheeky
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} style={{
                    filter: cheekyRating !== 1 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleCheekyRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={cheekyRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: cheekyRating !== 2 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleCheekyRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={cheekyRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: cheekyRating !== 3 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleCheekyRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={cheekyRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: cheekyRating !== 4 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleCheekyRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={cheekyRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: cheekyRating !== 5 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleCheekyRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={cheekyRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Cheeky
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.purple"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How tired do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Tired
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} style={{
                    filter: tiredRating !== 1 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleTiredRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={tiredRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: tiredRating !== 2 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleTiredRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={tiredRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: tiredRating !== 3 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleTiredRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={tiredRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: tiredRating !== 4 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleTiredRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={tiredRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: tiredRating !== 5 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleTiredRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={tiredRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Tired
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="brand.green"
            borderRadius="lg"
            w="100%"
            p="1rem"
            my="1rem"
            minWidth="500px"
          >
            <Heading align="center">How worried do you feel?</Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex">
                <Text align="center" w="65px" size="sm">
                  Not Worried
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble1" width={50} height={50} style={{
                    filter: worriedRating !== 1 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleWorriedRatingChange(1)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={worriedRating === 1 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  1
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble2" width={50} height={50} style={{
                    filter: worriedRating !== 2 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleWorriedRatingChange(2)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={worriedRating === 2 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  2
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble3" width={50} height={50} style={{
                    filter: worriedRating !== 3 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleWorriedRatingChange(3)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={worriedRating === 3 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  3
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble4" width={50} height={50} style={{
                    filter: worriedRating !== 4 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleWorriedRatingChange(4)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={worriedRating === 4 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  4
                </Text>
              </Box>
              <Box position="relative" display="inline-block">
                <Image src={Bubble} alt="Bubble5" width={50} height={50} style={{
                    filter: worriedRating !== 5 ? "opacity(50%)" : "none",
                  }}/>

                <Text
                  onClick={() => handleWorriedRatingChange(5)}
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="lg"
                  fontWeight="bold"
                  color={worriedRating === 5 ? "black":"grey"}
                  p={4}
                  pt={1}
                  pb={1}
                  borderRadius="md"
                >
                  5
                </Text>
              </Box>

              <Text align="center" w="65px" size="sm">
                Very Worried
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Button
        position="relative"
        bottom="0"
        right="0"
        onClick={() => SubmitEvent()}
      >
        Submit
      </Button>
    </Box>
  );
};

export default RatingButtons;
