import { CheckCircle, Code, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App Development", 
      description: "Building cross-platform mobile solutions"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Scalable Solutions",
      description: "Creating applications that grow with business needs"
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & SQL",
    "Flutter & Dart",
    "TypeScript",
    "Cloud Platforms"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-lg tracking-wide uppercase">
              More About Me
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 flex items-end justify-center mb-4">
                <div className="absolute inset-0 w-64 h-64 bg-gradient-primary rounded-full z-0" />
                <img
                  src="/b.png"
                  alt="Saif Ullah"
                  className="w-63 h-63 object-cover rounded-full border-4 border-white shadow-lg z-10 relative -translate-y-3"
                />
              </div>
              <p className="text-muted-foreground">Saif Ullah</p>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>

           
            <div className="space-y-8">
          
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">Software Engineering student</span> driven by curiosity and creativity. I specialize in both full-stack web development and mobile app development, with experience building scalable and modern applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My tech stack includes <span className="text-primary font-semibold">React, Node.js, MongoDB, Express.js, and Flutter</span>. Actively exploring AI/ML, focusing on building intelligent systems that enhance user experience through smart automation, personalization, and data-driven insights. My current projects integrate these technologies to create responsive and forward-thinking applications.
                </p>
              </div>

           
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-border transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-3 text-primary">
                        {highlight.icon}
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{highlight.title}</h4>
                      <p className="text-xs text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

             
              <div>
                <h4 className="font-semibold text-lg mb-4">Core Technologies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;