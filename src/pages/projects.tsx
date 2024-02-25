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
        title="Clon Apptibiograma 📱"
        description="Clon de la aplicación de apptibiograma para analizar antibiogramas."
        image="/banner_images/apptibiograma.webp"
        technologies={[FlutterLogo, JavaLogo, SpringBootLogo, PostgreSQLLogo]}
        url={"https://github.com/Juanipis/proyecto_medico"}
      />

      <ProjectCard
        title="Mi contratista CLI 🛠"
        description="CLI para gestionar tareas de un contratista."
        image="/banner_images/mi_contratista_cli.webp"
        technologies={[PythonLogo]}
        url={
          "https://github.com/Juanipis/mi_contratista_cli?tab=readme-ov-file#mi-contratista-cli"
        }
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
        title="Análisis de personalidad IBM 🧠"
        description="Análisis de personalidad con IBM Personality Insight."
        image="/banner_images/personality_insight.webp"
        technologies={[PythonLogo, IBMCloudLogo]}
        url={"https://github.com/Juanipis/Analisis-de-personalidad"}
      />
      <ProjectCard
        title="Pychat 🐍"
        description="Chat en python con sockets."
        image="/banner_images/pychat.webp"
        technologies={[PythonLogo]}
        url={"https://github.com/Juanipis/Pychat"}
      />
      <ProjectCard
        title="Quimera Eyes 👁"
        description="Programación en bloques basada en dispositivos USB para discapacitados visuales"
        image="/banner_images/quimera_eyes.webp"
        technologies={[PythonLogo, LinuxLogo, RaspberryPiLogo]}
        url={"https://github.com/Juanipis/QuimeraEyes"}
      />
    </Flex>
  );
}

export default Projects;
