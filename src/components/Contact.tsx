import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Contact = () => {
  return (
    <section id="contatos" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-foreground mb-2"
          >
            Entre em
          </motion.h2>
          <motion.h2
            variants={itemVariants}
            className="section-title gradient-text"
          >
            CONTATO
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg"
        >
          <p className="text-center text-muted-foreground text-lg mb-8">
            Vamos conversar sobre projetos, oportunidades ou trocar ideias sobre
            tecnologia!
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/SamyNandes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl transition-colors group"
            >
              <Github
                size={24}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground font-medium">GitHub</span>
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/samyra-fernandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl transition-colors group"
            >
              <Linkedin
                size={24}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:samyrafernandes19@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl transition-colors group"
            >
              <Mail
                size={24}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              <span className="text-foreground font-medium">E-mail</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
