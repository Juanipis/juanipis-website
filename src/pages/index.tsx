import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useCssLibPreference } from "../../components/CssLibPreference";

import juanipis_cover_photo_dark from "../../public/cover-photo-dark.jpg";
import juanipis_cover_photo_light from "../../public/cover-photo-light.jpg";

import {
  GoLogo,
  JavaLogo,
  MongoDBLogo,
  PostgreSQLLogo,
  PythonLogo,
  FlutterLogo,
  SpiderLogo,
  HikingLogo,
} from "../../components/ui/logos/logos";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";

const headingText = "Hello, I'm Juanipis";
const subheadingText = "I'm a software developer";
const descriptionText = `I am a student of Systems Engineering and Computing at EIA University, an institution that has provided me with comprehensive and quality education. I am passionate about software development and technological innovation.`;

export default function Home() {
  const { accentColor } = useCssLibPreference();

  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      grow="1"
      mt="5"
      wrap="wrap"
      gap="7"
    >
      <Card>
        <Box className=" min-h-28">
          <Flex mt="6" ml="4" align="center">
            <Heading mr="5" size="9">
              {headingText}
            </Heading>
            {accentColor === "crimson" ? (
              <SpiderLogo fill={logoDarkColor} width="70" height="70" />
            ) : (
              <HikingLogo fill={logoLightColor} width="70" height="70" />
            )}
          </Flex>

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
            <Text
              style={{ width: "50%" }}
              size="5"
              ml="2"
              align="center"
              mr="8"
            >
              I have experience in:
            </Text>
            <Flex
              direction="row"
              align="center"
              justify="between"
              width="100%"
              mr="6"
              wrap="wrap"
            >
              <PythonLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="50"
                height="50"
              />
              <JavaLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="50"
                height="50"
              />
              <MongoDBLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="50"
                height="50"
              />
              <PostgreSQLLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="50"
                height="50"
              />
              <GoLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="70"
                height="70"
              />
              <FlutterLogo
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
                width="50"
                height="50"
              />
            </Flex>
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
  );
}
