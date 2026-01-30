import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  year?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  year,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="bg-card rounded-xl overflow-hidden border border-border card-glow group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-display text-xl font-semibold text-foreground mb-3">
          {title}
        </h4>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">
            {technologies.length > 1 ? "Tecnologias usadas:" : "Tecnologia usada:"}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {year && (
          <p className="text-xs text-muted-foreground mb-4">Feito em {year}</p>
        )}

        {/* GitHub Link */}
        {githubUrl !== "#" && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <Github size={18} />
            Repositório do GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
