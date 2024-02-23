import { Flex } from "@radix-ui/themes";
import PostgreSQLLogo from "../../components/ui/logos/postgresqlLogo";
import PythonLogo from "../../components/ui/logos/pythonLogo";
import ProjectCard from "../../components/ui/projectCard/projectCard";
import MongoDBLogo from "../../components/ui/logos/mongodbLogo";
import DockerLogo from "../../components/ui/logos/dockerLogo";
import HTMLLogo from "../../components/ui/logos/htmlLogo";
import JavascriptLogo from "../../components/ui/logos/javascriptLogo";
import FirebaseLogo from "../../components/ui/logos/firebaseLogo";
import OpenAILogo from "../../components/ui/logos/openaiLogo";
import LinuxLogo from "../../components/ui/logos/linuxLogo";
import AWSLogo from "../../components/ui/logos/awsLogo";
import FlutterLogo from "../../components/ui/logos/flutterLogo";
import JavaLogo from "../../components/ui/logos/javaLogo";
import FastapiLogo from "../../components/ui/logos/fastapiLogo";
import SpringBootLogo from "../../components/ui/logos/springbootLogo";
import NextjsLogo from "../../components/ui/logos/nextjsLogo";
import TypescriptLogo from "../../components/ui/logos/typescriptLogo";

function Projects() {
  return (
    <Flex ml="3" mr="2" mt="5" gap="7" justify="center" wrap="wrap">
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
      <ProjectCard
        title="Dwalle 🤖"
        description="Bot conectado a GPT-3.5 para chatear sobre productos de una tienda online."
        image="/banner_images/dwalle.webp"
        technologies={[PythonLogo, DockerLogo, OpenAILogo, LinuxLogo]}
        url={"https://github.com/alejop153/DWALLE"}
      />
      <ProjectCard
        title="Harry Potter Rekognition (aws) 📱"
        description="Selecciona personaje de harry potter, subir una imagen y si coincide guardarla"
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
        title="Pagina web personal 🌐"
        description="Pagina web personal con un diseño aracnido en next.js."
        image="/banner_images/personal_webpage.webp"
        technologies={[NextjsLogo, TypescriptLogo, HTMLLogo]}
        url={"https://github.com/Juanipis/personal-nextjs-radix-page"}
      />

      <ProjectCard
        title="REST API Asesinatos Spring Boot 🕵️‍♂️"
        description="REST API para consultar una base de datos de postgresql."
        image="/banner_images/asesinatos_spring_boot.webp"
        technologies={[JavaLogo, SpringBootLogo, PostgreSQLLogo]}
        url={"https://github.com/Juanipis/asesinatos-springboot"}
      />

      <ProjectCard
        title="Codificador huffman 💾"
        description="Codificador huffman en java para comprimir y descomprimir textos."
        image="/banner_images/huffman.webp"
        technologies={[JavaLogo]}
        url={"https://github.com/Juanipis/Huffman"}
      />
      <ProjectCard
        title="Metodo de ordenamiento polifasico 📊"
        description="Metodo de ordenamiento polifasico en java."
        image="/banner_images/polifasico.webp"
        technologies={[JavaLogo]}
        url={"https://github.com/Enano2001/Polifasico"}
      />
      <ProjectCard
        title="Pychat 🐍"
        description="Chat en python con sockets."
        image="/banner_images/pychat.webp"
        technologies={[PythonLogo]}
        url={"https://github.com/Juanipis/Pychat"}
      />
    </Flex>
  );
}

export default Projects;
