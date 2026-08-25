import { ArrowRight, Github, ChevronUp, Star, Code, Sparkles, Zap, Eye } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    category: "Computer Vision",
    description: "High-performance vehicle detection, tracking, and closed-loop density-aware signal optimization using deep learning and SUMO simulation.",
    image: "/projects/image.png",
    tags: ["Python", "OpenCV", "YOLOv5", "SUMO", "TraCI", "Computer Vision"],
    githubUrl: "https://github.com/abhinavbahadursingh/trafficPglu",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Validated",
    highlights: [
      "Achieved 25+ FPS throughput on live surveillance & SUMO simulation",
      "Density-aware logic delivering a 30% reduction in intersection latency",
      "Automated accident detection & emergency vehicle preemptive routing",
      "Closed-loop traffic control environment with SUMO and TraCI"
    ]
  },
  {
    id: 2,
    title: "Industrial PPE Compliance & Helmet Detection",
    category: "Computer Vision",
    description: "Real-time safety surveillance system architected and validated on-site at NTPC Unchahar with automated violation alerts across IP CCTV feeds.",
    image: "/projects/image copy.png",
    tags: ["YOLOv8", "OpenCV", "Streamlit", "RTSP Streaming", "IP Cameras"],
    githubUrl: "https://github.com/abhinavbahadursingh/NTPC_Helmet_Detection",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Deployed",
    highlights: [
      "Fine-tuned YOLOv8 on large-scale industrial violation datasets",
      "Integrated CP PLUS IP cameras with OpenCV RTSP streaming",
      "Interactive Streamlit analytics dashboard with real-time alerting",
      "Validated on-site at NTPC Feroze Gandhi Unchahar Thermal Power Plant"
    ]
  },
  {
    id: 3,
    title: "AI Target Tracking & Prediction System",
    category: "Computer Vision",
    description: "Intelligent target lock and tracking system combining deep learning detection with Kalman filtering for continuous motion prediction through occlusions.",
    image: "/projects/project2.png",
    tags: ["Python", "YOLOv8", "OpenCV", "Kalman Filter", "Real-Time Tracking"],
    githubUrl: "https://github.com/abhinavbahadursingh/ObjectTrackingAndPrediction",
    featured: false,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Complete",
    highlights: [
      "YOLOv8 + Kalman filter fusion for real-time target locking",
      "Robust motion estimation when targets temporarily exit field of view",
      "Target re-acquisition minimizing unintended identity switching",
      "High resilience against sudden visual disruption"
    ]
  },
  {
    id: 4,
    title: "Weaver — B2B Textile Marketplace",
    category: "Full Stack",
    description: "Full-stack B2B textile marketplace connecting suppliers and buyers with product discovery, supplier management, and scalable marketplace workflows.",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Drizzle", "Better Auth"],
    githubUrl: "hhttps://github.com/abhinavbahadursingh/marketPlace",
    featured: false,
    accentColor: "from-indigo-500 to-violet-600",
    status: "Live",
    highlights: [
      "Supplier console with product management and marketplace REST APIs",
      "Product catalog with India-focused pricing and international marketplace support",
      "Authentication, inventory, cart, wishlist and order workflow architecture",
      "Modern React interface with responsive marketplace experience"
    ]
  },
  {
    id: 5,
    title: "AI-Powered Automatic Attendance System",
    category: "AI & Biometrics",
    description: "Computer vision based attendance system designed to automate student identification and attendance tracking using facial recognition.",
    image: "/projects/project4.png",
    tags: ["Python", "OpenCV", "Face Recognition", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/abhinavbahadursingh/attendanceManagement",
    featured: false,
    accentColor: "from-teal-500 to-emerald-600",
    status: "Production",
    highlights: [
      "Automated face detection and recognition for attendance marking",
      "Deep facial embeddings for reliable student identification",
      "Real-time camera-based attendance processing",
      "Reduced manual effort through automated attendance records"
    ]
  },
  {
    id: 6,
    title: "College Alumni Management Portal",
    category: "Full Stack",
    description: "Full-stack alumni networking platform connecting students, alumni, and the institution through profiles, communication, and centralized alumni management.",
    image: "/projects/project6.png",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Clerk", "shadcn/ui"],
    githubUrl: "https://github.com/abhinavbahadursingh/collegeAlumniPortal",
    featured: false,
    accentColor: "from-cyan-500 to-blue-600",
    status: "Live",
    highlights: [
      "Alumni profiles with searchable professional and academic information",
      "Student–alumni networking and communication workflows",
      "Secure authentication and role-based platform architecture",
      "Responsive modern dashboard for alumni and institutional management"
    ]
  },
  {
    id: 7,
    title: "AI Celebrity Recognition System",
    category: "Computer Vision",
    description: "Computer vision system capable of identifying known personalities from images using facial feature extraction and similarity-based recognition.",
    image: "/projects/project5.png",
    tags: ["Python", "OpenCV", "FaceNet", "VGG-Face", "Deep Learning", "Computer Vision"],
    githubUrl: "https://github.com/abhinavbahadursingh/Which-Celebrity-You-Look-Like",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    status: "Validated",
    highlights: [
      "Face detection and feature extraction from input images",
      "Deep embedding-based similarity matching for identity prediction",
      "Supports recognition across varying poses and image conditions",
      "Designed as an end-to-end computer vision recognition pipeline"
    ]
  },
  {
    id: 8,
    title: "AI-Powered Language Translator",
    category: "Generative AI & NLP",
    description: "AI-based translation application designed to convert text between multiple languages through modern NLP and transformer-based language models.",
    image: "/projects/project3.png",
    tags: ["Python", "NLP", "Transformers", "Hugging Face", "FastAPI", "React"],
    githubUrl: "https://github.com/abhinavbahadursingh/realTimeVoiceTranslator",
    featured: false,
    accentColor: "from-pink-500 to-rose-600",
    status: "Production",
    highlights: [
      "Multi-language text translation through AI models",
      "Clean interactive interface for real-time translation",
      "Context-aware translation using transformer-based NLP",
      "Designed for scalable API-based language processing"
    ]
  }
];

const categoryColors = {
  "Computer Vision": "from-purple-500/20 to-indigo-600/20 text-purple-400 border-purple-500/30",
  "Full Stack": "from-blue-500/20 to-cyan-600/20 text-blue-400 border-blue-500/30",
  "AI & Biometrics": "from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30",
  "Generative AI & NLP": "from-pink-500/20 to-rose-600/20 text-pink-400 border-pink-500/30"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Show 3 initially, allow expanding to see all
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-start gap-2 text-xs sm:text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Featured Projects & Engineering Systems
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade machine learning, real-time computer vision, Generative AI pipelines, and full-stack software systems.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="group h-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-card/70 border border-border/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5 backdrop-blur-md">
                  
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.status === "Deployed" || project.status === "Live" 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${categoryColors[project.category] || "bg-primary/20 text-primary border-primary/30"}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover GitHub Quick Button */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/40 font-medium text-sm transition-all duration-300 shadow-xl"
                      >
                        <Github size={18} />
                        <span>View Source Code</span>
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/30 flex-shrink-0">
                            <Star size={12} className="fill-amber-400 text-amber-400" /> 
                            Featured
                          </div>
                        )}
                      </div>

                      <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Points */}
                      <div className="mb-4">
                        <ProjectHighlights highlights={project.highlights} />
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border/40">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-medium border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Single GitHub Action Button */}
                      <div className="pt-3 border-t border-border/60">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                        >
                          <Github size={16} />
                          <span>View on GitHub</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Accent Bottom Border */}
                  <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See All / Load More Button */}
        {filteredProjects.length > 3 && (
          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground border border-border hover:border-primary/50"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <span>See All Projects ({filteredProjects.length})</span>
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Simple CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/70 border border-border/80 rounded-2xl p-10 max-w-4xl mx-auto backdrop-blur-md">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Open Source & Contributions
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">Explore More Repositories</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Check out my GitHub for end-to-end deep learning pipelines, simulation controllers, and full-stack applications.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://github.com/abhinavbahadursingh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <Github size={18} />
                <span>Visit GitHub Profile</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span>Contact Me</span>
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};