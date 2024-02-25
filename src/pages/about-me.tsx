import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import LinkLogo from "../../components/ui/logos/linkLogo/linkLogo";
import LinkedinLogo from "../../components/ui/logos/linkedinLogo";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";
import {
  ExperienceItem,
  ExperienceLine,
} from "../../components/ui/timeline/timelineVertical";
import juanipis_avatar_dark from "../../public/avatar_juanipis_dark.jpg";
import juanipis_avatar from "../../public/avatar_juanipis.jpg";
const name = "Juan Pablo Díaz Correa";
const linkdeinUrl = "https://www.linkedin.com/in/juanipis/";
const email = "juanipis@gmail.com";
function AboutMe() {
  const { accentColor } = useCssLibPreference();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      grow="1"
      mt="5"
      gap="7"
    >
      <Card style={{ maxWidth: "800px" }}>
        <Flex direction="row" justify="center">
          <Box>
            <Avatar
              size="7"
              src={
                accentColor === "crimson"
                  ? juanipis_avatar_dark.src
                  : juanipis_avatar.src
              }
              radius="full"
              fallback="T"
            />
          </Box>
        </Flex>

        <Heading size="8" align="center">
          {name}
        </Heading>
        <Heading size="6" weight="light" align="center">
          Backend developer
        </Heading>
        <Separator my="3" size="4" />
        <Flex direction="row" justify="center" gap="8">
          <Flex direction="row" align="center" gap="1">
            <LinkLogo
              href={linkdeinUrl}
              width="15"
              height="15"
              logo={LinkedinLogo}
              paddingBottom="3px"
            />
            <Text color={accentColor === "crimson" ? "crimson" : "blue"}>
              <a href={linkdeinUrl}>LinkedIn</a>
            </Text>
          </Flex>
          <Flex direction="row" align="center" gap="1">
            <EnvelopeClosedIcon
              color={accentColor === "crimson" ? logoDarkColor : logoLightColor}
            />
            <Text color={accentColor === "crimson" ? "crimson" : "blue"}>
              <a href={"mailto:" + email}>{email}</a>
            </Text>
          </Flex>
        </Flex>
        <Separator my="3" size="4" />
        <Flex className="flex-col md:flex-row" gap="5">
          <Flex
            ml="3"
            className="experience"
            direction="column"
            style={{ maxWidth: "470px" }}
          >
            <section>
              <Heading size="6">About me</Heading>
              <Text>
                <p>
                  As a <strong>Systems and Computing Engineering</strong>{" "}
                  student at <em>EIA University</em>, I&apos;m immersed in a{" "}
                  rigorous, holistic education, fostering my passion for{" "}
                  <strong>software development</strong> and{" "}
                  <strong>technological innovation</strong>.
                </p>
                <p>
                  Skilled in <em>web and mobile application development</em>, I
                  utilize languages like <strong>Python</strong> and{" "}
                  <strong>Java</strong>, along with frameworks like{" "}
                  <strong>Flutter</strong>, to craft dynamic,{" "}
                  <em>responsive</em>, and cross-platform solutions. My
                  proficiency extends to managing both relational and
                  non-relational databases such as <strong>PostgreSQL</strong>{" "}
                  and <strong>Firebase</strong>, ensuring efficient and secure
                  data handling.
                </p>
              </Text>
            </section>
            <Separator my="3" size="4" />
            <section>
              <Heading size="6">Experience</Heading>
              <Box mt="2" />
              <ExperienceLine>
                <ExperienceItem>
                  <Flex direction="column">
                    <Heading size="3">Fullstack developer</Heading>
                    <Text>Jun 2023 - Feb 2024</Text>
                    <Text weight="medium">
                      <a href="https://kuenta.co/">Kuenta</a>
                    </Text>
                    <Text>
                      A dedicated Full Stack Developer skilled in Go, TypeScript
                      (Angular+Ionic), Java, and Python, focused on the design
                      and enhancement of software functionalities.
                    </Text>
                    <ul className=" ml-5" style={{ listStyleType: "disc" }}>
                      <li>Lead full-stack software development initiatives.</li>
                      <li>
                        Design, implement, and maintain software features.
                      </li>
                      <li>
                        Participate in development sprints, ensuring clean and
                        structured coding practices.
                      </li>
                      <li>
                        Adhere to confidentiality and exclusivity agreements,
                        maintaining professional integrity.
                      </li>
                    </ul>
                  </Flex>
                </ExperienceItem>
              </ExperienceLine>
            </section>
          </Flex>
          <div>
            <Separator
              className="hidden md:block"
              orientation="vertical"
              size="4"
            />
          </div>
          <div>
            <Separator className="md:hidden" size="4" />
          </div>
          <Flex
            className="other"
            direction="column"
            style={{ maxWidth: "500px" }}
          >
            <section>
              <Heading size="6">Tech Stack</Heading>
              <Flex mt="2" direction="row" wrap="wrap" gap="2">
                <Button variant="surface" size="2">
                  Python
                </Button>
                <Button variant="surface" size="2">
                  Java
                </Button>
                <Button variant="surface" size="2">
                  MongoDB
                </Button>
                <Button variant="surface" size="2">
                  PostgreSQL
                </Button>
                <Button variant="surface" size="2">
                  Go
                </Button>
                <Button variant="surface" size="2">
                  Flutter
                </Button>
              </Flex>
            </section>
            <Separator my="3" size="4" />
            <section>
              <Heading size="6">Education</Heading>
              <Box mt="2">
                <Flex direction="column" gap="1">
                  <Heading size="3">Systems Engineering</Heading>
                  <Text>EIA University</Text>
                  <Text>2021 - Now</Text>
                </Flex>
              </Box>
            </section>
            <Separator my="3" size="4" />
            <section>
              <Heading size="6">Languages</Heading>
              <Box mt="2">
                <Flex direction="column" gap="1">
                  <Text>Spanish (native)</Text>
                  <Text>English (in progress)</Text>
                </Flex>
              </Box>
            </section>
            <Separator my="3" size="4" />
            <section>
              <Heading size="6">Soft skills</Heading>
              <Box mt="2">
                <Flex direction="column" gap="1">
                  <Text>Teamwork</Text>
                  <Text>Problem solving</Text>
                  <Text>Leadership</Text>
                  <Text>Communication</Text>
                  <Text>Adaptability</Text>
                  <Text>Time management</Text>
                </Flex>
              </Box>
            </section>
          </Flex>
        </Flex>
      </Card>
      <Box mt="1" />
    </Flex>
  );
}

export default AboutMe;
