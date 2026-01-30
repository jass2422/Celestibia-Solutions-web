import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";
import { Code2, Cloud, Smartphone, Zap, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gitlabLogo from "@/assets/logos/gitlab.png";
import awsSvg from "@/assets/logos/aws.svg";
import gcpLogo from "@/assets/logos/google-cloud.png";
import jenkinsLogo from "@/assets/logos/jenkins.png";
import githubSvg from "@/assets/logos/github.svg";
import argocdLogo from "@/assets/logos/argocd-new.png";
import grafanaLogo from "@/assets/logos/grafana.png";
import prometheusLogo from "@/assets/logos/prometheus.png";
import azureSvg from "@/assets/logos/azure.svg";
import kubernetesSvg from "@/assets/logos/kubernetes.svg";
import terraformSvg from "@/assets/logos/terraform.svg";
import helmSvg from "@/assets/logos/helm.svg";
import ansibleSvg from "@/assets/logos/ansible.svg";
import dockerSvg from "@/assets/logos/docker.svg";

const beliefs = [
  "Technology should simplify business",
  "Solutions must scale with growth",
  "Innovation is key to staying ahead",
  "Client success is our ultimate achievement",
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with precision and innovation",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description: "Scalable infrastructure and seamless deployments",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Engineering",
    description: "Intuitive applications across all platforms",
  },
  {
    icon: Zap,
    title: "Automation & Process Optimization",
    description: "Streamline workflows and boost efficiency",
  },
  {
    icon: Lock,
    title: "Secure & Reliable Systems",
    description: "High-performance solutions with security at core",
  },
];

const devopsTools = [
  {
    name: "Kubernetes",
    category: "Orchestration",
    logo: kubernetesSvg,
    description: "Container orchestration platform",
  },
  {
    name: "Docker",
    category: "Containerization",
    logo: dockerSvg,
    description: "Container runtime & containerization",
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    logo: jenkinsLogo,
    description: "Automation server for CI/CD",
  },
  {
    name: "GitLab",
    category: "Version Control",
    logo: gitlabLogo,
    description: "DevOps platform & Git repository",
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: githubSvg,
    description: "Code repository & collaboration",
  },
  {
    name: "Terraform",
    category: "Infrastructure",
    logo: terraformSvg,
    description: "Infrastructure as Code tool",
  },
  {
    name: "Ansible",
    category: "Automation",
    logo: ansibleSvg,
    description: "Configuration management & automation",
  },
  {
    name: "Helm",
    category: "Package Manager",
    logo: helmSvg,
    description: "Kubernetes package manager",
  },
  {
    name: "Prometheus",
    category: "Monitoring",
    logo: prometheusLogo,
    description: "Metrics & monitoring system",
  },
  {
    name: "Grafana",
    category: "Visualization",
    logo: grafanaLogo,
    description: "Data visualization & monitoring",
  },
  {
    name: "AWS",
    category: "Cloud",
    logo: awsSvg,
    description: "Amazon Web Services cloud",
  },
  {
    name: "Azure",
    category: "Cloud",
    logo: azureSvg,
    description: "Microsoft Azure cloud platform",
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    logo: gcpLogo,
    description: "Google Cloud Platform",
  },
  {
    name: "ArgoCD",
    category: "GitOps",
    logo: argocdLogo,
    description: "GitOps continuous delivery",
  },
];

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Animated background elements - subtle */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Welcome to Celestibia Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Where innovation meets precision, and ideas transform into impactful digital solutions.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Let's Collaborate
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              At Celestibia Solutions, we are driven by a passion for empowering businesses through smart technology, seamless design, and scalable engineering. We blend creativity with technical excellence to deliver software solutions that are not just functional, but future-ready.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Our team of expert developers, problem-solvers, and strategists work closely with clients to turn challenges into opportunities. Whether it's building intuitive web and mobile applications, modernizing legacy systems, enhancing cloud capabilities, or automating workflows — we deliver solutions with speed, security, and simplicity at the core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4 text-slate-900">
              What We Believe
            </h2>
            <p className="text-lg text-slate-600">
              Our core principles guide every decision and solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700 font-medium">{belief}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Animated Cards Moving Left to Right */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4 text-slate-900">
              What We Do
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive solutions tailored to transform your business
            </p>
          </motion.div>

          {/* Animated Carousel of Moving Cards */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* First set of cards */}
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={`card-1-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-80 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-orange-500 transition-all shadow-lg"
                  >
                    <div className="inline-flex p-4 rounded-lg bg-orange-500/20 text-orange-500 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}

              {/* Duplicate set for seamless loop */}
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={`card-2-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-80 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-orange-500 transition-all shadow-lg"
                  >
                    <div className="inline-flex p-4 rounded-lg bg-orange-500/20 text-orange-500 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Gradient fade effect */}
          <div className="absolute left-0 top-1/2 w-40 h-96 bg-gradient-to-r from-white via-white to-transparent pointer-events-none transform -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-40 h-96 bg-gradient-to-l from-white via-white to-transparent pointer-events-none transform -translate-y-1/2" />
        </div>
      </section>

      {/* DevOps Tools Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background animations */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">
              DevOps & Cloud Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We leverage industry-leading tools and platforms to deliver robust, scalable, and secure solutions
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {devopsTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {/* Logo */}
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.05, 1],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                    >
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </motion.div>

                    {/* Text */}
                    <h3 className="font-bold text-sm text-center mb-1 text-white">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-center opacity-80 text-slate-200">
                      {tool.category}
                    </p>
                  </div>
                </div>

                {/* Tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-slate-900 rounded-lg text-xs whitespace-nowrap pointer-events-none z-20 border border-slate-700 shadow-xl"
                >
                  {tool.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-slate-900" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Info text */}
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl font-bold mb-8 text-slate-900">
              Our Mission
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Our mission is to help organizations leverage technology to unlock efficiency, agility, and new possibilities. We don't just build products — we build partnerships, trust, and long-lasting value.
            </p>
            <p className="text-2xl font-bold text-slate-900">
              Let's create something extraordinary together. 🚀
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Purple instead of Blue */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold mb-8 text-slate-900">
              Shaping the Future, One Solution at a Time
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto text-2xl font-bold text-slate-900">
              Ready to transform your business with cutting-edge technology?
            </p>
            <Button variant="outline" size="lg" asChild className="bg-black text-purple-600 hover:bg-slate-050 border-2 border-purple-600 hover:border-purple-700">
              <Link to="/contact" className="flex items-center gap-2 mx-auto w-fit">
                Get In Touch
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default AboutUsPage;