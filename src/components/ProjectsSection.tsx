import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import callsManagement from "@/assets/calls-management.gif";
import placesAngular from "@/assets/places-angular.gif";
import assembleiaBack from "@/assets/assembleia-back.png";
import iotEsp8266 from "@/assets/iot-esp8266.jpg";
import painelEletrico from "@/assets/painel-eletrico.jpg";
import fonteReguladora from "@/assets/fonte-reguladora.jpg";
import wegnology from "@/assets/wegnology.png";

const programmingProjects = [
  {
    title: "Calls Management",
    description:
      "Aplicação destinada à autenticação e criação de usuários, permitindo o registro de pendências e sua categorização conforme o estado atual no ambiente de trabalho.",
    technologies: ["Vue.js", "Node.js"],
    image: callsManagement,
    githubUrl: "https://github.com/SamyNandes/callsManagement",
  },
  {
    title: "Places Angular",
    description:
      "Aplicação com cadastro de usuários e integração de API para consulta de estados e cidades durante o processo de registro. Projeto focado no estudo e domínio do Angular.",
    technologies: ["Angular"],
    image: placesAngular,
    githubUrl: "https://github.com/SamyNandes/Places-Front",
  },
  {
    title: "Assembleia Back",
    description:
      "Sistema voltado ao registro de votos em pautas específicas, com abertura e encerramento controlados.",
    technologies: ["NestJS", "TypeORM", "SQL"],
    image: assembleiaBack,
    githubUrl: "https://github.com/SamyNandes/Assembleia-Back",
  },
  {
    title: "IoT – ESP8266",
    description:
      "Projeto para controle remoto de dispositivos utilizando o módulo ESP8266 integrado à plataforma Arduino IoT Cloud Remote.",
    technologies: ["Arduino IoT Cloud Remote", "C", "Arduino IDE"],
    image: iotEsp8266,
    githubUrl: "https://github.com/SamyNandes/callsManagement",
  },
];

const electricalProjects = [
  {
    title: "Painel de Comandos Elétricos",
    description:
      "O objetivo principal foi compreender na prática o funcionamento de um sistema simples de acionamento de motores, utilizando componentes reais de controle e sinalização.",
    technologies: [
      "Fonte AC/DC 24V",
      "Contator",
      "Dijuntor motor",
      "Dijuntor bipolar e unipolar",
      "Relé sequencia de fase",
    ],
    image: painelEletrico,
    githubUrl: "#",
    year: "2025",
  },
  {
    title: "Fonte Reguladora Variável",
    description:
      "O circuito foi baseado em um regulador ajustável, como o LM317, que permite configurar a tensão de saída por meio de um potenciômetro e resistores.",
    technologies: [
      "Transformador",
      "Ponte retificadora",
      "Capacitores eletrolíticos",
      "Dissipador de calor",
    ],
    image: fonteReguladora,
    githubUrl: "#",
    year: "2025",
  },
  {
    title: "Wegnology + Node Red + S7 PLCSIM",
    description:
      "A integração entre WEGnology, Node-RED e S7 PLCSIM permite simular um ambiente de Indústria 4.0 conectando um CLP Siemens virtual à nuvem.",
    technologies: ["WEGnology", "Node Red", "S7 PLCSIM"],
    image: wegnology,
    githubUrl: "#",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Programming Projects */}
        <div className="mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 variants={titleVariants} className="section-title text-foreground mb-2">
              Projetos com foco em
            </motion.h2>
            <motion.h2
              variants={titleVariants}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              PROGRAMAÇÃO
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>

        {/* Electrical Projects */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 variants={titleVariants} className="section-title text-foreground mb-2">
              Projetos com foco em
            </motion.h2>
            <motion.h2
              variants={titleVariants}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              ELÉTRICA
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electricalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
