import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "MechConnect",
      description: "Developed a Full stack web platform connecting car owners with mechanics/electricians for emergency repairs, schedule appointments, and track vehicle history.",
      image: "/MechConnect.png",
      technologies: ["HTML5", "CSS3", "JavaScript",  "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/MechConnect",
      featured: true
    },
    {
      title: "FitFocus",
      description: "Developed FitFocus, a full-stack fitness assistant web app (Django, HTML/CSS) enabling users to track workouts, diet, and goals. Key features include weight tracking, food diary, and calorie monitoring. Integrated AI-driven insights for personalized workout and nutrition recommendations.",
      image: "/image.png", 
      technologies: ["HTML5", "CSS3", "JavaScript", "Django", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/Saifullah-Zakaib/FitFocus",
      featured: true
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
                  <div className="relative overflow-hidden rounded-2xl shadow-large">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-4">
                      {project.title}
                    </h3>
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-border rounded-md px-4 py-2 text-base font-medium hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
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
