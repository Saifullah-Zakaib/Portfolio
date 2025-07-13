import { Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/saif-ullah-094bb6270/",
      name: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Saifullah-Zakaib",
      name: "GitHub"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/saifullah_oficial?igsh=MWlrdmhkZnA4MmJ4bw==",
      name: "Instagram"
    }
  ];

  return (
    <footer className="bg-footer text-white relative">

      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary-hover shadow-medium rounded-full"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="font-poppins font-bold text-2xl">
                <span className="text-primary">Saif</span> Ullah
              </h3>
              <p className="text-white/80 mt-2">Software Engineering Student</p>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Passionate about creating innovative solutions through modern web and mobile technologies. 
              Always ready for new challenges and opportunities.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg text-white/80 hover:bg-primary hover:text-white transition-all duration-300 social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

   
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a 
                  href="mailto:saifboss313@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  saifboss313@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923155856179"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +92 315 5856 179
                </a>
              </li>
              <li>Pakistan, Peshawar</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2025 Saif Ullah. All rights reserved.
            </p>
         
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;