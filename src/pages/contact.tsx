import { Box, Card, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import {
  LinkedInLogo,
  TwitterXLogo,
  InstagramLogo,
  GitHubLogo,
} from "../../components/ui/logos/logos";
import LinkLogo from "../../components/ui/logos/linkLogo/linkLogo";
import Head from "next/head";
import { motion } from "framer-motion";

const contactHeading = "I'm here";
const contactText =
  "Let's talk about your project, or anything else you want to talk, I'm here to help you.";
const linkdeinUrl = "https://www.linkedin.com/in/juanipis/";
const xTwitterUrl = "https://twitter.com/juanipis";
const instagramUrl = "https://www.instagram.com/juanipis/";
const githubUrl = "https://github.com/Juanipis";
const email = "juanipis@gmail.com";
function Contacts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Juanipis | Contact</title>
        <meta name="description" content="Juanipis personal website, contact" />
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Flex direction="row" justify="center" align="center" grow="1" gap="7">
          <motion.div variants={itemVariants}>
            <Card size="5">
              <Flex gap="3" align="center" wrap="wrap" justify="center">
                <motion.div variants={itemVariants} style={{ maxWidth: 300 }}>
                  <Heading size="9">{contactHeading}</Heading>
                  <Text size="6">{contactText}</Text>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <Heading>Social media</Heading>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center justify-between gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, staggerChildren: 0.1 }}
                  >
                    <motion.div variants={logoVariants} whileHover="hover">
                      <LinkLogo
                        href={githubUrl}
                        width="30"
                        height="30"
                        logo={GitHubLogo}
                      />
                    </motion.div>
                    <motion.div variants={logoVariants} whileHover="hover">
                      <LinkLogo
                        href={linkdeinUrl}
                        width="30"
                        height="30"
                        logo={LinkedInLogo}
                      />
                    </motion.div>
                    <motion.div variants={logoVariants} whileHover="hover">
                      <LinkLogo
                        href={xTwitterUrl}
                        width="23"
                        height="23"
                        logo={TwitterXLogo}
                      />
                    </motion.div>
                    <motion.div variants={logoVariants} whileHover="hover">
                      <LinkLogo
                        href={instagramUrl}
                        width="30"
                        height="30"
                        logo={InstagramLogo}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-3 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    <Text mt="3" align="center">
                      <Strong>Send me an email at</Strong>
                    </Text>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={"mailto:" + email}>{email}</a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Flex>
            </Card>
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}

export default Contacts;
