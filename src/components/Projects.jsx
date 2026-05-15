import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "ClassSphere VR",
      description: "Developed an immersive VR-based virtual classroom integrating Flutter mobile app with Unity (VR/XR), featuring AI-driven virtual lectures and real-time interaction with custom-designed VR environments and avatars.",
      image: "/a.jpeg",
      mobileImage: "/mobile.png",
      technologies: ["Flutter", "Unity", "Node.js", "MongoDB", "Blender", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Sports ERP System",
      description: "Built a comprehensive full-stack ERP system for sports equipment manufacturing with role-based dashboards for 6 departments, featuring automated order routing, real-time inventory alerts, and smart order processing with auto-generated production orders.",
      image: "/sports.png",
      technologies: ["Python", "Django", "MySQL", "React", "Bootstrap 5", "Chart.js", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "MechConnect",
      description: "Developed a Full stack web platform connecting car owners with mechanics/electricians for emergency repairs, schedule appointments, and track vehicle history.",
      image: "/MechConnect.png",
      technologies: ["HTML5", "CSS3", "JavaScript",  "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/MechConnect",
      featured: false
    },
    {
      title: "FitFocus",
      description: "Developed FitFocus, a full-stack fitness assistant web app (Django, HTML/CSS) enabling users to track workouts, diet, and goals. Key features include weight tracking, food diary, and calorie monitoring. Integrated AI-driven insights for personalized workout and nutrition recommendations.",
      image: "/image.png", 
      technologies: ["HTML5", "CSS3", "JavaScript", "Django", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/FitFocus",
      featured: false
    },
    {
      title: "CV Checker",
      description: "Developed a Flask-based resume parser using scikit-learn’s K-means clustering and TF-IDF vectorization to group resumes by content similarity, integrating spaCy for skill extraction and Random Forest for job title prediction.",
      image: "/Cv.png",
      technologies: ["Flask", "Python", "Pandas","Numpy","Spacy", "HTML5", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/CV-Checker",
      featured: false
    },
    {
      title: "Hospital Management System",
      description: "A console-based Hospital Management System written in C++. It helps to manage and organize hospital operations",
      image: "/a.jpg",
      technologies: ["C++", "OOP"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/Hospital-Management-System",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      image: "/portfolio.png",
      technologies: ["React", "JavaScript",  "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib",
      featured: false
    }

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-lg tracking-wide uppercase">
              My Work
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {project.mobileImage ? (
                    // ClassSphere VR with dual images
                    <div className="flex gap-6 items-center justify-center">
                      {/* Desktop/VR View */}
                      <div className="relative overflow-hidden rounded-2xl shadow-large flex-1">
                        <img 
                          src={project.image}
                          alt={`${project.title} VR View`}
                          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                      </div>
                      {/* Mobile App View */}
                      <div className="relative flex-shrink-0">
                        <div className="relative w-48 h-96 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-800">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-800 rounded-b-2xl"></div>
                          <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                            <img 
                              src={project.mobileImage}
                              alt={`${project.title} Mobile App`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular single image
                    <div className="relative overflow-hidden rounded-2xl shadow-large">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground">
                        {project.title}
                      </h3>
                      {project.isFinalYear && (
                        <Badge className="bg-primary text-white hover:bg-primary/90">
                          Final Year Project
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-accent text-accent-foreground hover:text-white transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center border border-border rounded-md px-4 py-2 text-base font-medium hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
            }
          </div>

        
          <div>
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-xl text-foreground mb-3">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-accent text-accent-foreground hover:text-white transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground hover:text-white transition-all duration-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                  
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center border border-border rounded-md px-4 py-2 text-xs font-medium hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

       
          <div className="text-center mt-12">
            <a
              href="https://github.com/Saifullah-Zakaib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-border rounded-md px-6 py-3 text-lg font-medium hover:bg-accent hover:text-white transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
