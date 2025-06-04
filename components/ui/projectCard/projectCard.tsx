import { Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import { useCssLibPreference } from "../../CssLibPreference";
import Image from "next/image";
import { logoDarkColor, logoLightColor } from "../colors/logoColors";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: React.FC<SvgProps>[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  url,
}) => {
  const { accentColor } = useCssLibPreference();

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <Card size="2" style={{ width: 320, maxHeight: 350 }}>
        <Inset clip="padding-box" side="top" pb="current">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <Image
              src={image}
              alt={title}
              width="320"
              height="180"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </motion.div>
        </Inset>
      <Flex direction="column" justify="between" style={{ height: 150 }}>
        <Flex direction="column">
          <Text size="3" weight="medium" mt="3">
            {title}
          </Text>
          <Text size="2" mt="2" mr="3">
            {description}
          </Text>
        </Flex>

        <div>
          <Flex wrap="wrap" gap="2" justify="center" mt="3" mb="1">
            {technologies.map((Logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Logo
                  height="20"
                  width="20"
                  fill={
                    accentColor === "crimson" ? logoDarkColor : logoLightColor
                  }
                />
              </motion.div>
            ))}
          </Flex>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Text size="2" ml="3">
              <Strong>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View project
                </a>
              </Strong>
            </Text>
          </motion.div>
        </div>
      </Flex>
    </Card>
    </motion.div>
  );
};

export default ProjectCard;
