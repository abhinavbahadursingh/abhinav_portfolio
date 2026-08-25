import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award, Cpu, ShieldCheck } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Artificial Intelligence Trainee",
      company: "ABESIT NVIDIA Deep Learning Centre of Excellence",
      period: "Training & Research",
      type: "AI & Deep Learning",
      description: "Spearheaded research and engineering on production-grade computer vision, biometrics, and Generative AI systems.",
      highlights: [
        "Architected end-to-end automation solutions using Python, OpenCV, and deep learning architectures, integrating Firebase for reliable data management.",
        "Engineered high-impact applications including a biometric attendance system, real-time vehicle monitoring, and an automated emergency-response framework.",
        "Spearheaded R&D on LLM fine-tuning, LangChain, and RAG pipelines, deploying containerized workflows via Docker for GPU-accelerated inference.",
        "Refined computer vision models for live deployment, automating administrative tasks and achieving an 80% reduction in manual workload."
      ],
      tags: ["Python", "OpenCV", "PyTorch", "LangChain", "RAG", "Docker", "Firebase"],
      icon: <Cpu className="h-5 w-5 text-primary" />
    },
    {
      role: "Industrial Trainee — AI & Computer Vision",
      company: "NTPC Feroze Gandhi Unchahar Thermal Power Plant",
      period: "July 2026",
      type: "Industrial Safety Surveillance",
      description: "Architected, deployed, and validated an on-site computer vision PPE safety framework for industrial surveillance.",
      highlights: [
        "Architected a PPE compliance monitoring framework by fine-tuning YOLOv8 on large-scale violation datasets in Google Colab, enabling high-accuracy helmet detection for industrial safety.",
        "Integrated CP PLUS IP cameras over a TP-Link network using OpenCV and RTSP streaming, enabling automated surveillance across live CCTV, webcams, and recorded video feeds.",
        "Deployed real-time violation alerts and an interactive Streamlit analytics dashboard, cutting manual safety oversight through live compliance monitoring.",
        "Designed an extensible system architecture — validated on-site at NTPC Unchahar — supporting multi-camera integration, biometric worker identification, and cloud-based reporting."
      ],
      tags: ["YOLOv8", "OpenCV", "RTSP Streaming", "Streamlit", "CP PLUS CCTV", "Google Colab"],
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />
    }
  ];

  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "Aug 2023 – May 2027",
    coursework: [
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Natural Language Processing",
      "Data Structures & Algorithms",
      "Database Management Systems"
    ]
  };

  const activities = [
    "Competed in 10+ national and regional hackathons, building AI-powered and real-time solutions under tight deadlines — demonstrating rapid prototyping, agile execution, and technical communication.",
    "Active open-source contributor on GitHub; maintains fully documented repositories with READMEs, setup guides, and usage examples reflecting software engineering best practices.",
    "Applies SDLC, Git/GitHub version control, and CI/CD workflows consistently across academic and personal projects."
  ];

  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" /> Career & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-purple-600">
            Work Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Industrial and research experience delivering production-grade AI/ML, computer vision, and deep learning solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-6 sm:p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-border/50 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 text-xs sm:text-sm font-medium text-muted-foreground border border-border">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-background/80 text-xs font-medium text-muted-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
                <span className="text-xs sm:text-sm text-muted-foreground">Academic Foundation</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-foreground">{education.degree}</h4>
                <p className="text-primary font-medium text-sm">{education.institution}</p>
                <span className="inline-block mt-1 text-xs text-muted-foreground bg-secondary/50 px-2.5 py-0.5 rounded-full">
                  {education.period}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-lg bg-primary/5 text-primary text-xs font-medium border border-primary/15"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements & Activities Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Achievements & Activities</h3>
                <span className="text-xs sm:text-sm text-muted-foreground">Hackathons & Open Source</span>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((act, aIdx) => (
                <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{act}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
