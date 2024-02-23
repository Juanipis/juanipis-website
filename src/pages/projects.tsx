import { Flex } from "@radix-ui/themes";
import PostgreSQLLogo from "../../components/ui/logos/postgresqlLogo";
import PythonLogo from "../../components/ui/logos/pythonLogo";
import ProjectCard from "../../components/ui/projectCard/projectCard";
import MongoDBLogo from "../../components/ui/logos/mongodbLogo";
import DockerLogo from "../../components/ui/logos/dockerLogo";
import HTMLLogo from "../../components/ui/logos/htmlLogo";
import JavascriptLogo from "../../components/ui/logos/javascriptLogo";
import FirebaseLogo from "../../components/ui/logos/firebaseLogo";

function Projects() {
  return (
    <Flex ml="3" mr="2" mt="5" gap="7">
      <ProjectCard
        title={"Backend para una tienda online 🛒"}
        description={"Backend necesario para una tienda online."}
        image="/banner_images/backend_tienda_online.webp"
        technologies={[PythonLogo, PostgreSQLLogo, MongoDBLogo, DockerLogo]}
        url={"https://github.com/Juanipis/backend_tienda_online"}
      />
      <ProjectCard
        title="AprendIoT 🌐"
        description="Web educativa sobre IoT. Fue un proyecto de ingeniería 1 en la EIA."
        image="/banner_images/aprendiot.webp"
        technologies={[HTMLLogo, JavascriptLogo, FirebaseLogo]}
        url={"https://github.com/Juanipis/AprendIoT"}
      />
    </Flex>
  );
}

export default Projects;
