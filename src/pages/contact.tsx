import { Box, Card, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import {
  LinkedInLogo,
  TwitterXLogo,
  InstagramLogo,
  GitHubLogo,
} from "../../components/ui/logos/logos";
import LinkLogo from "../../components/ui/logos/linkLogo/linkLogo";

const contactHeading = "I'm here";
const contactText =
  "Let's talk about your project, or anything else you want to talk, I'm here to help you.";
const linkdeinUrl = "https://www.linkedin.com/in/juanipis/";
const xTwitterUrl = "https://twitter.com/juanipis";
const instagramUrl = "https://www.instagram.com/juanipis/";
const githubUrl = "https://github.com/Juanipis";
const email = "juanipis@gmail.com";
function Contacts() {
  return (
    <Flex direction="row" justify="center" align="center" grow="1" gap="7">
      <Card size="5">
        <Flex gap="3" align="center" wrap="wrap" justify="center">
          <Box style={{ maxWidth: 300 }}>
            <Heading size="9">{contactHeading}</Heading>
            <Text size="6">{contactText}</Text>
          </Box>
          <Flex direction="column" align="center">
            <Heading>Social media</Heading>
            <Flex align="center" justify="between" gap="2">
              <LinkLogo
                href={githubUrl}
                width="30"
                height="30"
                logo={GitHubLogo}
              />
              <LinkLogo
                href={linkdeinUrl}
                width="30"
                height="30"
                logo={LinkedInLogo}
              />
              <LinkLogo
                href={xTwitterUrl}
                width="23"
                height="23"
                logo={TwitterXLogo}
              />
              <LinkLogo
                href={instagramUrl}
                width="30"
                height="30"
                logo={InstagramLogo}
              />
            </Flex>

            <Text mt="3" align="center">
              <Strong>Send me an email at</Strong>
            </Text>
            <a href={"mailto:" + email}>{email}</a>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Contacts;
