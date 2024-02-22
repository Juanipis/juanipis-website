import { Inter } from "next/font/google";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";

import juanipis_cover_photo_dark from "../../public/cover-photo-dark.jpg";
import juanipis_cover_photo_light from "../../public/cover-photo-light.jpg";
import Image from "next/image";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { useEffect } from "react";
import java_logo from "../../public/icons/java.svg";
import python_logo from "../../public/icons/python.svg";
import mongo_logo from "../../public/icons/mongodb.svg";
import postgres_logo from "../../public/icons/postgresql.svg";
import go_logo from "../../public/icons/go.svg";

const inter = Inter({ subsets: ["latin"] });

const headingText = "Hello, I'm Juanipis";
const subheadingText = "I'm a software developer";
const descriptionText = `I am a student of Systems Engineering and Computing at EIA University, an institution that has provided me with comprehensive and quality education. I am passionate about software development and technological innovation. 💻`;

export default function Home() {
  const { accentColor } = useCssLibPreference();
  useEffect(() => {
    console.log(`The accent color has changed to: ${accentColor}`);
  }, [accentColor]);

  return (
    <Flex direction="column" justify="center" className="h-screen" mt="5">
      <Flex
        className="w-full flex-wrap justify-center gap-9 items-center px-4 sm:px-6 lg:px-8"
        justify="center"
        gap="9"
        align="center"
      >
        <Card>
          <Box className=" min-h-28">
            <Heading mt="6" ml="4" size="9">
              {headingText}
            </Heading>
            <Box mt="5">
              <Text ml="4" size="6">
                {subheadingText}
              </Text>
            </Box>
            <Box ml="4" mr="4" mt="5" className=" welcome-description-text">
              <Text size="5">{descriptionText}</Text>
            </Box>
          </Box>
          <Box>
            <Flex direction="row" align="center">
              <Text size="5" ml="4" align="center" mr="8">
                I have experience in:
              </Text>
              <Image
                src={python_logo.src}
                alt="Python logo"
                width={50}
                height={50}
              />
              <Image
                src={java_logo.src}
                alt="Java logo"
                width={50}
                height={50}
              />
              <Image
                src={mongo_logo.src}
                alt="MongoDB logo"
                width={50}
                height={50}
              />
              <Image
                src={postgres_logo.src}
                alt="PostgreSQL logo"
                width={50}
                height={50}
              />
              <Image src={go_logo.src} alt="Go logo" width={50} height={50} />
            </Flex>
          </Box>
        </Card>
        <Image
          src={
            accentColor === "crimson"
              ? juanipis_cover_photo_dark.src
              : juanipis_cover_photo_light.src
          }
          alt="Juanipis cover photo"
          width="400"
          height="800"
        />
      </Flex>
    </Flex>
  );
}
