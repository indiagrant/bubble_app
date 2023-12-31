"use client";
import supabase from "../config/supabaseClient.js";
import Image from "next/image";
import Happy from "../../../public/assets/emojis/Happy.svg";
import Sad from "../../../public/assets/emojis/Sad.svg";
import Cheeky from "../../../public/assets/emojis/Cheeky.svg";
import Angry from "../../../public/assets/emojis/Angry.svg";
import Worried from "../../../public/assets/emojis/Worried.svg";
import Tired from "../../../public/assets/emojis/Tired2.svg";
import Link from "next/link.js";
import { Box, Heading, Text, Flex, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserIdContext } from "../context/useridcontext.js";
import HeadingComponent from "../components/HeadingComponent.jsx";

export default function Emojis() {
  const { setUuid } = useContext(UserIdContext);
  const router = useRouter();

  async function emojiClickHandler(emoji) {
    const { data, error } = await supabase
      .from("mood")
      .insert([{ emoji, date: new Date() }])
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("this has worked, check supabase");
      router.push("/emotionrater");
      setUuid(data[0].uuid);
    }
  }

  return (
    //set up a div to contain the text - "How are you feeling? (just pick one)
    //need to display the 6 emoji images in a grid - chakra ui grid
    <>
      <Navbar />
      <Flex justify="center" alignItems="center" direction="column">
        <HeadingComponent />
          <Box px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
            <SimpleGrid columns={3} spacing={10} mx="auto">
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Box cursor="pointer">
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Happy}
                      alt="Happy-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Happy.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Happy
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Box>
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Sad}
                      alt="Sad-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Sad.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Sad
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Box>
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Cheeky}
                      alt="Cheeky-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Cheeky.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Cheeky
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Box>
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Angry}
                      alt="Angry-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Angry.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Angry
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="center" alignItems="center" h="100%">
                <Box>
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Worried}
                      alt="Worried-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Worried.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Worried
                  </Text>
                </Box>
              </Flex>
              <Flex justify="flex-start" alignItems="flex-start" h="100%">
                <Box>
                  <Link href="/emotionrater" target="_self">
                    <Image
                      src={Tired}
                      alt="Tired-Emoji"
                      priority
                      onClick={() =>
                        emojiClickHandler(
                          "../../../public/assets/emojis/Tired2.svg"
                        )
                      }
                      width={175}
                    />
                  </Link>
                  <Text mt={2} textAlign="center" color="white" fontSize="xl">
                    Tired
                  </Text>
                </Box>
              </Flex>
            </SimpleGrid>
          </Box>
        {/* <Link href="/emotionrater">
            <Button>Next</Button>
          </Link> */}
      </Flex>
      <Footer />
    </>
  );
}
