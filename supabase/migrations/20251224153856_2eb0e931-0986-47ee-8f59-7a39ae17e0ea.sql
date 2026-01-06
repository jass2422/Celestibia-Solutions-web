-- Add new A/B experiments for all homepage sections
INSERT INTO public.ab_experiments (name, variant_a_name, variant_b_name, is_active) VALUES
  ('hero_headline', 'Innovative Cloud Solutions for a Connected World', 'Transform Your Business with Enterprise Cloud Solutions', true),
  ('hero_cta', 'Get Started', 'Start Your Journey', true),
  ('services_headline', 'End-to-End Cloud & DevOps Solutions', 'Comprehensive Cloud & DevOps Services', true),
  ('testimonials_headline', 'Trusted by Industry Leaders', 'What Our Clients Say', true),
  ('why_choose_headline', 'Technology Should Simplify Business', 'Why Partner With Us?', true),
  ('industries_headline', 'Transforming Industries with Cloud Innovation', 'Industries We Empower', true),
  ('partners_headline', 'Partners & Certifications', 'Our Technology Partners', true);