import { Inter } from "next/font/google";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";

import juanipis_cover_photo from "../../public/cover-photo.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const headingText = "Hello, I'm Juanipis";
const subheadingText = "I'm a software developer";
const descriptionText = `I am a student of Systems Engineering and Computing at EIA University, an institution that has provided me with comprehensive and quality education. I am passionate about software development and technological innovation. 💻`;
export default function Home() {
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
        </Card>
        <Image
          src={juanipis_cover_photo.src}
          alt="Juanipis cover photo"
          width="400"
          height="800"
        />
      </Flex>
    </Flex>
  );
}
