import React from 'react';
import { Box, Card, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import Image from "next/image";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { motion } from "framer-motion";

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
import Head from "next/head";

const headingText = "Hello, I'm Juanipis";
const subheadingText = "I'm a software developer";
const descriptionText = `I am a student of Systems Engineering and Computing at EIA University, an institution that has provided me with comprehensive and quality education. I am passionate about software development and technological innovation.`;

export default function Home() {
  const { accentColor } = useCssLibPreference();

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
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Juanipis | Home</title>
        <meta name="description" content="Juanipis personal website" />
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Flex
          direction="row"
          justify="center"
          align="center"
          grow="1"
          mt="5"
          wrap="wrap"
          gap="7"
        >
          <motion.div variants={itemVariants}>
            <Card>
              <Box className="min-h-28">
                <Flex mt="6" ml="4" align="center">
                  <motion.div variants={itemVariants}>
                    <Heading mr="5" size="9">
                      {headingText}
                    </Heading>
                  </motion.div>
                  <motion.div
                    variants={logoVariants}
                    whileHover="hover"
                    style={{ display: 'inline-block' }}
                  >
                    {accentColor === "crimson" ? (
                      <SpiderLogo fill={logoDarkColor} width="70" height="70" />
                    ) : (
                      <HikingLogo fill={logoLightColor} width="70" height="70" />
                    )}
                  </motion.div>
                </Flex>

                <motion.div variants={itemVariants}>
                  <Box mt="5">
                    <Text ml="4" size="6">
                      {subheadingText}
                    </Text>
                  </Box>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Box ml="4" mr="4" mt="5" className=" welcome-description-text">
                    <Text size="5">{descriptionText}</Text>
                  </Box>
                </motion.div>
              </Box>
              
              <Box mt="4" mb="2">
                <motion.div variants={itemVariants}>
                  <Text size="5" ml="4" weight="bold" mb="2">
                    I have experience in:
                  </Text>
                  <Separator size="4" mt="1" mb="3" />
                </motion.div>
                
                <motion.div
                  variants={techStackVariants}
                  className="flex flex-row items-center justify-center gap-4 mx-4 flex-wrap"
                >
                  {[
                    { 
                      component: PythonLogo,
                      label: "Python" 
                    },
                    { 
                      component: JavaLogo,
                      label: "Java" 
                    },
                    { 
                      component: MongoDBLogo,
                      label: "MongoDB" 
                    },
                    { 
                      component: PostgreSQLLogo,
                      label: "PostgreSQL" 
                    },
                    { 
                      component: GoLogo,
                      label: "Go",
                      width: "70",
                      height: "70"
                    },
                    { 
                      component: FlutterLogo,
                      label: "Flutter" 
                    }
                  ].map((tech, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center mx-3 my-2"
                      variants={techItemVariants} 
                      whileHover="hover"
                    >
                      {React.createElement(tech.component, {
                        fill: accentColor === "crimson" ? logoDarkColor : logoLightColor,
                        width: tech.width || "50",
                        height: tech.height || "50"
                      })}
                      <Text size="2" mt="1" align="center" className="opacity-80">
                        {tech.label}
                      </Text>
                    </motion.div>
                  ))}
                </motion.div>
              </Box>
            </Card>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}
