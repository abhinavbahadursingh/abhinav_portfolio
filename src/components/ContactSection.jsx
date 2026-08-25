import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co endpoint directed to Abhinav's email
      const response = await fetch('https://formsubmit.co/ajax/abhinavbahadursingh69@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent to Abhinav! 🎉",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Direct mailto fallback if network/API fails
      const mailtoLink = `mailto:abhinavbahadursingh69@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opened email client ✉️",
        description: "Redirected to send directly to abhinavbahadursingh69@gmail.com",
        variant: "default"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Contact Details
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:abhinavbahadursingh69@gmail.com"
                    className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                  >
                    abhinavbahadursingh69@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+919555711500"
                    className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                  >
                    +91 9555711500
                  </a>
                </div>
              </div>
              
              <a
                href="https://www.google.com/maps/search/?api=1&query=Crossings+Republik,+Ghaziabad,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 bg-background/60 hover:bg-primary/10 border border-border/70 hover:border-primary/50 rounded-xl sm:rounded-2xl transition-all duration-300 group/loc cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary group-hover/loc:scale-110 transition-transform duration-300">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <span className="text-sm sm:text-base font-semibold text-foreground group-hover/loc:text-primary transition-colors flex items-center gap-1.5">
                      Crossings Republik, Ghaziabad, India
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover/loc:opacity-100 transition-opacity duration-300 pr-2">
                  <span>View Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Visually Pleasant 'Find Me on Map' Banner Button */}
            <div className="pt-6 sm:pt-8 border-t border-border/50">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Crossings+Republik,+Ghaziabad,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-purple-500/10 to-primary/15 p-4 sm:p-5 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          Find Me On Google Maps
                        </h4>
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Crossings Republik, Ghaziabad, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-background/80 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>

              {/* Social links */}
              <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Quick Profiles:</span>
                <div className="flex gap-2 sm:gap-3">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      url: "https://linkedin.com/in/abhinavbahadursingh",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      url: "https://github.com/abhinavbahadursingh",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      url: "mailto:abhinavbahadursingh69@gmail.com",
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 sm:p-3 rounded-xl bg-background/80 hover:bg-primary/10 border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 shadow-xs"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Send Me a Message
            </h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Hey, I'd love to collaborate on..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 text-sm sm:text-base",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="sm:size-[18px]" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};