import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Eye, 
  Sparkles, 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Zap, 
  Bot, 
  Video, 
  Terminal, 
  Network,
  Flame,
  Globe,
  Radio
} from "lucide-react";
import { 
  SiPython, 
  SiPytorch, 
  SiTensorflow, 
  SiKeras, 
  SiScikitlearn, 
  SiHuggingface,
  SiOpencv, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTypescript, 
  SiJavascript, 
  SiFastapi, 
  SiStreamlit, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiNvidia 
} from "react-icons/si";

// 6 Clean Curated Categories with aesthetic Tag/Pills design
const skillCategories = [
  {
    id: "deep-learning",
    title: "Deep Learning & Core ML",
    subtitle: "Neural networks, model training, validation & statistical modeling",
    icon: <Brain className="h-6 w-6 text-blue-400" />,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    glowBorder: "hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]",
    badge: "Core AI",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    skills: [
      { name: "Python", icon: <SiPython className="w-4 h-4 text-yellow-400" />, hot: true },
      { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-orange-500" />, hot: true },
      { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-amber-500" /> },
      { name: "Keras", icon: <SiKeras className="w-4 h-4 text-red-500" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-blue-400" /> },
      { name: "Transformers", icon: <SiHuggingface className="w-4 h-4 text-yellow-500" /> },
      { name: "CNNs & Transfer Learning", icon: <Brain className="w-4 h-4 text-indigo-400" /> },
      { name: "NLP & Embeddings", icon: <Layers className="w-4 h-4 text-cyan-400" /> }
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Video AI",
    subtitle: "Edge & surveillance video pipelines, detection, and tracking",
    icon: <Eye className="h-6 w-6 text-emerald-400" />,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glowBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]",
    badge: "Specialized Area",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    skills: [
      { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-emerald-400" />, hot: true },
      { name: "YOLO (v5/v8/11)", icon: <Eye className="w-4 h-4 text-green-400" />, hot: true },
      { name: "FaceNet", icon: <Network className="w-4 h-4 text-teal-400" /> },
      { name: "VGG-Face", icon: <Network className="w-4 h-4 text-teal-300" /> },
      { name: "Kalman Filter", icon: <Video className="w-4 h-4 text-emerald-300" /> },
      { name: "Roboflow", icon: <Layers className="w-4 h-4 text-green-500" /> },
      { name: "RTSP Live Streaming", icon: <Radio className="w-4 h-4 text-emerald-400" /> },
      { name: "Real-Time Video Analytics", icon: <Video className="w-4 h-4 text-teal-400" /> }
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI & LLMs",
    subtitle: "Enterprise RAG architectures, prompt pipelines & fine-tuning",
    icon: <Bot className="h-6 w-6 text-pink-400" />,
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    glowBorder: "hover:border-pink-500/50 hover:shadow-[0_0_35px_rgba(244,63,94,0.18)]",
    badge: "GenAI",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    skills: [
      { name: "LangChain", icon: <Bot className="w-4 h-4 text-pink-400" />, hot: true },
      { name: "RAG Pipelines", icon: <Sparkles className="w-4 h-4 text-rose-400" />, hot: true },
      { name: "LoRA / QLoRA", icon: <Flame className="w-4 h-4 text-orange-400" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="w-4 h-4 text-yellow-400" /> },
      { name: "LLM Fine-Tuning", icon: <Sparkles className="w-4 h-4 text-pink-300" /> },
      { name: "Document AI & OCR", icon: <Terminal className="w-4 h-4 text-rose-300" /> },
      { name: "Vector Indexing", icon: <Database className="w-4 h-4 text-pink-500" /> }
    ]
  },
  {
    id: "full-stack",
    title: "Full-Stack & APIs",
    subtitle: "Modern reactive frontends, fast microservices & interactive dashboards",
    icon: <Code2 className="h-6 w-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    glowBorder: "hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]",
    badge: "Web & Microservices",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    skills: [
      { name: "React.js", icon: <SiReact className="w-4 h-4 text-cyan-400" />, hot: true },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-foreground" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-green-500" /> },
      { name: "Express", icon: <SiExpress className="w-4 h-4 text-foreground" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-teal-400" />, hot: true },
      { name: "Streamlit", icon: <SiStreamlit className="w-4 h-4 text-red-400" />, hot: true },
      { name: "Tailwind CSS", icon: <Code2 className="w-4 h-4 text-cyan-300" /> }
    ]
  },
  {
    id: "databases-devops",
    title: "Databases & DevOps",
    subtitle: "Robust data persistence, containerized workflows & source control",
    icon: <Database className="h-6 w-6 text-amber-400" />,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    glowBorder: "hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]",
    badge: "Data & Ops",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-amber-500" /> },
      { name: "Firestore", icon: <SiFirebase className="w-4 h-4 text-amber-400" /> },
      { name: "Docker", icon: <SiDocker className="w-4 h-4 text-blue-500" />, hot: true },
      { name: "Git", icon: <SiGit className="w-4 h-4 text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-foreground" /> },
      { name: "CI/CD & SDLC", icon: <Zap className="w-4 h-4 text-yellow-400" /> }
    ]
  },
  {
    id: "simulation-specialized",
    title: "Simulation & Specialized",
    subtitle: "Closed-loop traffic simulators, GPU acceleration & industrial vision",
    icon: <Cpu className="h-6 w-6 text-purple-400" />,
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    glowBorder: "hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]",
    badge: "Hardware & Sim",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    skills: [
      { name: "SUMO", icon: <Zap className="w-4 h-4 text-yellow-400" />, hot: true },
      { name: "TraCI", icon: <Zap className="w-4 h-4 text-amber-400" />, hot: true },
      { name: "CUDA Acceleration", icon: <SiNvidia className="w-4 h-4 text-green-400" />, hot: true },
      { name: "GPU Inference", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
      { name: "IP CCTV CP PLUS", icon: <Radio className="w-4 h-4 text-indigo-400" /> },
      { name: "Closed-Loop Control", icon: <Network className="w-4 h-4 text-fuchsia-400" /> }
    ]
  }
];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const displayedCategories = activeFilter === "all"
    ? skillCategories
    : skillCategories.filter(c => c.id === activeFilter);

  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-background via-primary/[0.02] to-background relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Categorized technical stack spanning Computer Vision, Deep Learning, Generative AI pipelines, and Full-Stack Engineering.
          </p>
        </motion.div>

        {/* Category Pills Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                : "bg-card/60 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            All Tech Stack
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md border flex items-center gap-1.5 ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-card/60 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.title.split("&")[0].trim()}
            </button>
          ))}
        </motion.div>

        {/* Categories Grid with Clean Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative rounded-3xl bg-card/60 backdrop-blur-xl border border-border/70 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${category.glowBorder}`}
              >
                {/* Subtle Card Ambient Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-90`} />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-background/80 border border-border/80 shadow-md group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Category Subtitle */}
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Clean Technology Pills / Tags */}
                  <div className="flex flex-wrap gap-2.5 pt-2 border-t border-border/40">
                    {category.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/70 hover:bg-background border border-border/60 hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-default group/pill"
                      >
                        <span className="flex-shrink-0 transition-transform group-hover/pill:rotate-6 duration-200">
                          {skill.icon}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-foreground group-hover/pill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        {skill.hot && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};