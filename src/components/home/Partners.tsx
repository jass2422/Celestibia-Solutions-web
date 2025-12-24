import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const partners = [
  {
    name: "AWS",
    certification: "Select Consulting Partner",
    logo: "aws",
  },
  {
    name: "Microsoft Azure",
    certification: "Solutions Partner",
    logo: "azure",
  },
  {
    name: "Google Cloud",
    certification: "Certified Partner",
    logo: "gcp",
  },
  {
    name: "GitLab",
    certification: "Select Partner",
    logo: "gitlab",
  },
  {
    name: "Veeam",
    certification: "ProPartner",
    logo: "veeam",
  },
];

const LogoIcon = ({ logo }: { logo: string }) => {
  switch (logo) {
    case "aws":
      return (
        <svg viewBox="0 0 80 48" className="w-16 h-10">
          <path
            d="M22.8 28.8c0 .8.1 1.4.3 1.8.2.4.5.9.9 1.4.1.2.2.3.2.5 0 .2-.1.4-.4.6l-1.3.9c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-.9-.2-.3-.4-.7-.6-1.1-1.5 1.8-3.4 2.7-5.7 2.7-1.6 0-2.9-.5-3.9-1.4-1-.9-1.5-2.2-1.5-3.7 0-1.6.6-3 1.7-4 1.2-1 2.7-1.5 4.6-1.5.6 0 1.3 0 2 .1.7.1 1.4.2 2.2.4v-1.4c0-1.5-.3-2.5-.9-3.1-.6-.6-1.7-.9-3.2-.9-.7 0-1.4.1-2.1.3-.7.2-1.4.4-2.1.7-.3.1-.5.2-.6.3-.1 0-.2.1-.3.1-.3 0-.4-.2-.4-.6v-1c0-.3 0-.5.1-.7.1-.1.2-.3.5-.4.7-.4 1.5-.7 2.4-.9.9-.3 1.9-.4 2.9-.4 2.2 0 3.8.5 4.9 1.5 1 1 1.6 2.5 1.6 4.5v6zm-7.9 3c.6 0 1.2-.1 1.9-.3.7-.2 1.3-.6 1.8-1.1.3-.3.5-.7.7-1.1.1-.4.2-.9.2-1.6v-.8c-.6-.1-1.2-.2-1.8-.3-.6-.1-1.2-.1-1.8-.1-1.3 0-2.2.2-2.8.7-.6.5-.9 1.2-.9 2.1 0 .9.2 1.5.7 2 .4.4 1.1.6 2 .6zm15.6 2.1c-.4 0-.6-.1-.8-.2-.2-.2-.3-.4-.5-.8l-5.1-16.8c-.1-.4-.2-.7-.2-.9 0-.4.2-.6.6-.6h2c.4 0 .7.1.8.2.2.2.3.4.4.8l3.7 14.4 3.4-14.4c.1-.4.2-.7.4-.8.2-.2.5-.2.9-.2h1.6c.4 0 .7.1.9.2.2.2.3.4.4.8l3.4 14.6 3.8-14.6c.1-.4.3-.7.4-.8.2-.2.5-.2.8-.2h1.9c.4 0 .6.2.6.6 0 .1 0 .2-.1.4 0 .1-.1.3-.2.6l-5.2 16.8c-.1.4-.3.7-.5.8-.2.2-.5.2-.8.2h-1.7c-.4 0-.7-.1-.9-.2-.2-.2-.3-.4-.4-.8l-3.4-14.1-3.3 14c-.1.4-.2.7-.4.8-.2.2-.5.2-.9.2h-1.7zm25 .5c-1 0-2-.1-2.9-.4-.9-.2-1.6-.5-2-.9-.3-.2-.5-.4-.5-.6-.1-.2-.1-.4-.1-.6v-1.1c0-.4.2-.6.5-.6.1 0 .3 0 .4.1.1.1.3.1.5.2.7.3 1.4.5 2.2.7.8.2 1.5.2 2.3.2 1.2 0 2.2-.2 2.8-.6.6-.4 1-.9 1-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.9-.7-1.8-1l-2.6-.8c-1.3-.4-2.3-1-2.9-1.8-.6-.8-1-1.6-1-2.6 0-.8.2-1.4.5-2 .3-.6.8-1.1 1.3-1.5.6-.4 1.2-.7 2-1 .8-.2 1.6-.3 2.4-.3.4 0 .9 0 1.3.1.5.1.9.1 1.3.2.4.1.8.2 1.1.3.3.1.6.2.8.4.3.1.5.3.6.5.1.2.2.4.2.7v1c0 .4-.2.6-.5.6-.2 0-.5-.1-.9-.3-1.3-.6-2.8-.9-4.4-.9-1.1 0-2 .2-2.6.5-.6.4-.9.9-.9 1.6 0 .5.2.9.5 1.3.4.4 1 .7 1.9 1.1l2.5.8c1.3.4 2.2 1 2.8 1.7.6.7.9 1.6.9 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.8 1.1-1.4 1.6-.6.4-1.3.8-2.1 1-.9.3-1.8.4-2.8.4z"
            fill="currentColor"
          />
          <path
            d="M42.4 40.5c-5.2 3.8-12.7 5.9-19.2 5.9-9.1 0-17.3-3.4-23.5-9-.5-.4-.1-1 .5-.7 6.7 3.9 15 6.2 23.5 6.2 5.8 0 12.1-1.2 17.9-3.7.9-.4 1.6.6.8 1.3z"
            fill="hsl(var(--primary))"
          />
          <path
            d="M44.8 37.8c-.7-.9-4.5-.4-6.2-.2-.5.1-.6-.4-.1-.7 3.1-2.1 8-1.5 8.6-.8.6.7-.2 5.8-3 8.2-.4.4-.9.2-.7-.3.7-1.6 2.1-5.3 1.4-6.2z"
            fill="hsl(var(--primary))"
          />
        </svg>
      );
    case "azure":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <path
            d="M17.5 5L5 37h9.2l2.3-6h14l2.3 6H42L29.5 5h-12zm6.1 7.5l4.9 13h-9.8l4.9-13z"
            fill="currentColor"
          />
        </svg>
      );
    case "gcp":
      return (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M12 5.37l-1.94 1.12L12 7.61l1.94-1.12L12 5.37zm-3.39 1.96l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm6.78 0l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zM6.67 9.29l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm10.66 0l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zM12 11.25l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm-5.33 1.96l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm10.66 0l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zM12 15.17l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm-3.39 1.96l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12zm6.78 0l-1.94 1.12 1.94 1.12 1.94-1.12-1.94-1.12z"
              fill="hsl(var(--primary))"
            />
          </svg>
          <span className="text-muted-foreground text-sm">Google Cloud</span>
        </div>
      );
    case "gitlab":
      return (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 01.82 0l2.44 7.51h8.06l2.44-7.51a.42.42 0 01.82 0l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z"
              fill="currentColor"
            />
          </svg>
          <span className="text-muted-foreground text-sm">GitLab</span>
        </div>
      );
    case "veeam":
      return (
        <div className="flex flex-col items-center gap-1">
          <div className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
            Veeam
          </div>
          <span className="text-[10px] text-muted-foreground">Backup</span>
        </div>
      );
    default:
      return null;
  }
};

export const Partners = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Link2 className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Partners & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for technical excellence and certified expertise across major cloud platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-border/50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 text-foreground">
                <LogoIcon logo={partner.logo} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.certification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
