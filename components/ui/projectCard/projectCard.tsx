import { Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import { useCssLibPreference } from "../../CssLibPreference";
import Image from "next/image";
import { logoDarkColor, logoLightColor } from "../colors/logoColors";

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
    <Card size="2" style={{ width: 320, maxHeight: 350 }}>
      <Inset clip="padding-box" side="top" pb="current">
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
              <Logo
                key={index}
                height="20"
                width="20"
                fill={
                  accentColor === "crimson" ? logoDarkColor : logoLightColor
                }
              />
            ))}
          </Flex>
          <Text size="2" ml="3">
            <Strong>
              <a href={url} target="_blank" rel="noopener noreferrer">
                View project
              </a>
            </Strong>
          </Text>
        </div>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
