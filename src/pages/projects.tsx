import { Flex } from "@radix-ui/themes";
import {
  PostgreSQLLogo,
  PythonLogo,
  MongoDBLogo,
  DockerLogo,
  HTMLLogo,
  JavascriptLogo,
  FirebaseLogo,
  OpenAILogo,
  LinuxLogo,
  AWSLogo,
  FlutterLogo,
  JavaLogo,
  FastapiLogo,
  SpringBootLogo,
  NextjsLogo,
  TypescriptLogo,
  RaspberryPiLogo,
  IBMCloudLogo,
} from "../../components/ui/logos/logos";
import ProjectCard from "../../components/ui/projectCard/projectCard";
import Head from "next/head";
import NestjsLogo from "../../components/ui/logos/nestjsLogo";

function Projects() {
  return (
    <>
      <Head>
        <title>Juanipis | Projects</title>
        <meta
          name="description"
          content="Juanipis personal website, projects"
        />
      </Head>
      <Flex ml="3" mr="2" mt="5" gap="7" justify="center" wrap="wrap">
      <ProjectCard
          title={"Dance club Comuna 8 🕺"}
          description={"A web app for a dance club in Medellín."}
          image="/banner_images/dance_club.webp"
          technologies={[FlutterLogo, FirebaseLogo]}
          url={"https://github.com/Juanipis/dance_club_comuna_8"}
        />
        <ProjectCard
          title={"Miyuki webpage 🐈"}
          description={"An online store for a miyuki products brand."}
          image="/banner_images/miyuki.webp"
          technologies={[NextjsLogo]}
          url={"https://github.com/pablomesa08/miyuki-webpage"}
        />
        <ProjectCard
          title={"Miyuki backend 🐈"}
          description={"A backend for a online miyuki products brand."}
          image="/banner_images/miyuki-backend.webp"
          technologies={[NestjsLogo,PostgreSQLLogo]}
          url={"https://github.com/pablomesa08/backend-miyuki"}
        />
        <ProjectCard
          title={"Backend for an Online Store 🛒"}
          description={"Necessary backend for an online store."}
          image="/banner_images/backend_tienda_online.webp"
          technologies={[PythonLogo, PostgreSQLLogo, MongoDBLogo, DockerLogo]}
          url={"https://github.com/Juanipis/backend_tienda_online"}
        />
        <ProjectCard
          title="AprendIoT 🌐"
          description="Educational website about IoT. It was an engineering project at EIA."
          image="/banner_images/aprendiot.webp"
          technologies={[HTMLLogo, JavascriptLogo, FirebaseLogo]}
          url={"https://github.com/Juanipis/AprendIoT"}
        />
        <ProjectCard
          title="Dwalle 🤖"
          description="Bot connected to GPT-3.5 to chat about products of an online store."
          image="/banner_images/dwalle.webp"
          technologies={[PythonLogo, DockerLogo, OpenAILogo, LinuxLogo]}
          url={"https://github.com/alejop153/DWALLE"}
        />
        <ProjectCard
          title="Harry Potter Recognition (aws) 📱"
          description="Select a Harry Potter character, upload an image and if it matches, save it."
          image="/banner_images/app_flutter_aws_rekognition.webp"
          technologies={[
            PythonLogo,
            FastapiLogo,
            DockerLogo,
            AWSLogo,
            FlutterLogo,
          ]}
          url={"https://github.com/Juanipis/api-consulta-flutter-impltgr"}
        />

        <ProjectCard
          title="Personal Website 🌐"
          description="Personal website with an arachnid design in Next.js."
          image="/banner_images/personal_webpage.webp"
          technologies={[NextjsLogo, TypescriptLogo, HTMLLogo]}
          url={"https://github.com/Juanipis/personal-nextjs-radix-page"}
        />

        <ProjectCard
          title="Apptibiogram Clone 📱"
          description="Clone of the Apptibiogram app for analyzing antibiograms."
          image="/banner_images/apptibiograma.webp"
          technologies={[FlutterLogo, JavaLogo, SpringBootLogo, PostgreSQLLogo]}
          url={"https://github.com/Juanipis/proyecto_medico"}
        />

        <ProjectCard
          title="Mi contratista CLI 🛠"
          description="CLI to manage a contractor's tasks."
          image="/banner_images/mi_contratista_cli.webp"
          technologies={[PythonLogo]}
          url={
            "https://github.com/Juanipis/mi_contratista_cli?tab=readme-ov-file#mi-contratista-cli"
          }
        />

        <ProjectCard
          title="Murder REST API Spring Boot 🕵️‍♂️"
          description="REST API to consult a PostgreSQL database."
          image="/banner_images/asesinatos_spring_boot.webp"
          technologies={[JavaLogo, SpringBootLogo, PostgreSQLLogo]}
          url={"https://github.com/Juanipis/asesinatos-springboot"}
        />

        <ProjectCard
          title="Huffman Encoder 💾"
          description="Huffman encoder in Java to compress and decompress texts."
          image="/banner_images/huffman.webp"
          technologies={[JavaLogo]}
          url={"https://github.com/Juanipis/Huffman"}
        />
        <ProjectCard
          title="Polyphasic Sorting Method 📊"
          description="Polyphasic sorting method in Java."
          image="/banner_images/polifasico.webp"
          technologies={[JavaLogo]}
          url={"https://github.com/Enano2001/Polifasico"}
        />
        <ProjectCard
          title="IBM Personality Analysis 🧠"
          description="Personality analysis with IBM Personality Insights."
          image="/banner_images/personality_insight.webp"
          technologies={[PythonLogo, IBMCloudLogo]}
          url={"https://github.com/Juanipis/Analisis-de-personalidad"}
        />
        <ProjectCard
          title="Pychat 🐍"
          description="Chat in Python using sockets."
          image="/banner_images/pychat.webp"
          technologies={[PythonLogo]}
          url={"https://github.com/Juanipis/Pychat"}
        />
        <ProjectCard
          title="Quimera Eyes 👁"
          description="Block programming based on USB devices for visually impaired people."
          image="/banner_images/quimera_eyes.webp"
          technologies={[PythonLogo, LinuxLogo, RaspberryPiLogo]}
          url={"https://github.com/Juanipis/QuimeraEyes"}
        />
      </Flex>
    </>
  );
}

export default Projects;
