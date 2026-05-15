import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "FAST-NUCES",
      location: "Peshawar, Pakistan",
      period: "Jul. 2025 – Sep. 2025",
      responsibilities: [
        "Built the MVP of Zehni Sehat, a national mental health and wellbeing platform for Pakistan, using the MERN Stack (MongoDB, Express, React, Node.js).",
        "Developed a Flutter-based mobile application for the Dual-Brain Psychology project, enabling users to interact with an AI-powered mental wellbeing avatar.",
        "Trained conversational AI using curated psychology research content and structured session data.",
        "Worked under academic supervision with affiliations to Harvard Medical School and McLean Hospital (USA)."
      ]
    },
    {
      title: "Technical & Development Director",
      company: "MLSA Society FAST-NUCES",
      location: "Peshawar, Pakistan",
      period: "Aug. 2025 – Present",
      responsibilities: [
        "Led technical workshops and trained students on modern software development tools",
        "Organized industrial tours and coordinated technical events, strengthening leadership and teamwork."
      ]
    },
    {
      title: "Software Engineer",
      company: "KPK Culture & Tourism Authority",
      location: "Peshawar, Pakistan",
      period: "Nov. 2023 – Dec. 2023",
      responsibilities: [
        "Collaborated on the creation of the Software Requirement Specification (SRS) document for KPK Culture & Tourism Authority"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-lg tracking-wide uppercase">
              Professional Journey
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <Card className={`border-border hover:shadow-medium transition-all duration-300 bg-card ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:col-start-2'}`}>
                    <CardContent className="p-6 md:p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-poppins font-bold text-xl md:text-2xl text-foreground mb-2 flex items-center gap-2">
                              <div className="p-2 bg-accent rounded-lg text-primary inline-block">
                                <Briefcase className="h-5 w-5" />
                              </div>
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-primary mb-1">
                              {exp.company}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex gap-3 group">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <p className="text-muted-foreground leading-relaxed">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
