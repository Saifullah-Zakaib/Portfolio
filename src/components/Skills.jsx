import { Code2, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Django", level: 70 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "AWS Basics", level: 55 }
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 80 },
        { name: "React Native", level: 45 },
        { name: "Mobile UI/UX", level: 85 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Git & GitHub", "Docker", "Postman", 
    "Figma", "MongoDB Compass", "Chrome DevTools", "Vercel"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-lg tracking-wide uppercase">
              Technical Expertise
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-accent rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="font-poppins font-semibold text-2xl text-foreground mb-8">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;