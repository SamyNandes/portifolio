import { motion } from "framer-motion";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6"
    >
      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
          <img
            src={profilePicture}
            alt="Samyra - Desenvolvedora Back-end"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6"
          >
            Sou desenvolvedora{" "}
            <strong className="text-primary">Back-end</strong> especializada em
            Node.js e Nest.Js, com experiência na criação de APIs modernas,
            escaláveis e bem estruturadas. Trabalho com bancos de dados
            relacionais e não-relacionais, sempre aplicando boas práticas,
            arquitetura limpa, validação, segurança e integração entre serviços.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6"
          >
            Atuo no desenvolvimento de soluções completas, incluindo
            autenticação/autorização, modelagem de dados, comunicação entre
            microsserviços, pipelines de processamento e integração com sistemas
            externos. Busco entregar código organizado, modular e fácil de
            manter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-foreground/90 text-lg md:text-xl leading-relaxed"
          >
            Além do software, tenho experiência em{" "}
            <strong className="text-primary">automação industrial</strong>{" "}
            utilizando CLPs Siemens (TIA Portal, S7-1500, ET-200). Essa vivência
            me permite entender processos industriais e conectar soluções
            digitais ao ambiente da Indústria 4.0, agregando uma visão prática
            que une TI e automação.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
