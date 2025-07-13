import { ChevronDown, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadAndView = (e) => {
    e.preventDefault();

    window.open('/SAIF-ULLAH-Resume.pdf', '_blank');
   
    const link = document.createElement('a');
    link.href = '/SAIF-ULLAH-Resume.pdf';
    link.download = 'SAIF-ULLAH-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
     
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              👋 Hello, I'm
            </span>
          </div>

     
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in animation-delay-300">
            <span className="text-primary">Saif</span> Ullah
          </h1>

      
          <h2 className="font-inter text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-600">
            Software Engineering Student & Full-Stack Developer
          </h2>

        
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-900">
            Passionate about creating innovative solutions through modern web and mobile technologies. 
            Specializing in React, Node.js, and Flutter development.
          </p>

      
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in animation-delay-1200">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium px-8 py-3"
            >
              View My Work
            </Button>
            <a
              href="/SAIF-ULLAH-Resume.pdf"
              onClick={handleDownloadAndView}
              className="inline-flex items-center justify-center border border-border bg-transparent hover:bg-accent hover:text-white transition-all duration-300 font-medium px-8 py-3 rounded-md text-base cursor-pointer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in animation-delay-1500">
            <a
              href="https://www.linkedin.com/in/saif-ullah-094bb6270/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Saifullah-Zakaib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/saifullah_oficial?igsh=MWlrdmhkZnA4MmJ4bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-medium"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;