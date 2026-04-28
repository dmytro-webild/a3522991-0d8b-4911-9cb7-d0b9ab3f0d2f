"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="All Service HVAC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Heating & Cooling Solutions You Can Trust"
      description="Professional residential and commercial HVAC services in Menomonie. From emergency repairs to annual maintenance, we keep your environment perfect year-round."
      buttons={[
        {
          text: "Schedule Service",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "c1",
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-adult-builder-man-uniform-points-back-with-hand-isolated-olive-green-wall_141793-66439.jpg",
          imageAlt: "HVAC Service Technician",
        },
        {
          id: "c2",
          imageSrc: "http://img.b2bpic.net/free-photo/electrician-is-mounting-electric-sockets-white-wall-indoors_169016-17659.jpg",
          imageAlt: "HVAC System Repair",
        },
        {
          id: "c3",
          imageSrc: "http://img.b2bpic.net/free-photo/young-loader-showing-gun-gesture-winking-eye-uniform-front-view_176474-21428.jpg",
          imageAlt: "Professional Heating Setup",
        },
        {
          id: "c4",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-worker-sweeping-away-loose-debris-accumulated-around-air-conditioner-base-trained-engineer-cleaning-hvac-system-body-control-panel-with-dusting-brush-tool-remove-loose-dirt_482257-70162.jpg",
          imageAlt: "Air Conditioning Service",
        },
        {
          id: "c5",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-safety-helmets_23-2149366668.jpg",
          imageAlt: "Maintenance Check",
        },
        {
          id: "c6",
          imageSrc: "http://img.b2bpic.net/free-photo/technician-looking-refrigerant-leaks_482257-85108.jpg",
          imageAlt: "Energy Efficient Solution",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Committed to Your Comfort"
      description={[
        "Whether you need an AC maintenance check or an emergency furnace repair, we are available to handle all of your heating & cooling needs.",
        "We serve residential and commercial clients, offering a variety of HVAC, high quality, energy-efficient, money-saving solutions.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "AC Maintenance",
          description: "Preventive checks to ensure your cooling system performs reliably during the hot season.",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334228.jpg",
        },
        {
          title: "Emergency Furnace Repair",
          description: "Rapid response services when you need heating help the most, ensuring your property remains warm.",
          imageSrc: "http://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23720.jpg",
        },
        {
          title: "Energy Efficiency Upgrades",
          description: "Modern, cost-effective solutions designed to save money while improving climate control efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/tilt-up-shot-out-service-condenser-unit-with-protection-cover-removed-need-fixing-with-damaged-electric-internal-parts-outside-hvac-system-working-anymore-ready-be-fixed_482257-64976.jpg",
        },
      ]}
      title="Professional HVAC Services"
      description="We deliver comprehensive heating and cooling solutions to keep your indoor climate comfortable and efficient."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "5.0",
          description: "Average Rating on Google",
        },
        {
          id: "m2",
          value: "9+",
          description: "Verified Google Reviews",
        },
        {
          id: "m3",
          value: "100%",
          description: "Commitment to Customer Service",
        },
      ]}
      title="Why Choose Us"
      description="Serving Menomonie with professional care and expertise."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Fast and Professional",
          quote: "Fantastic service. They arrived on time and fixed my furnace quickly.",
          name: "Sarah J.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/casual-blond-female-denim-jeans-posing-floor-living-room_613910-8982.jpg",
        },
        {
          id: "t2",
          title: "Excellent AC Repair",
          quote: "The team helped us with our commercial AC issues promptly.",
          name: "Mike R.",
          role: "Business Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/coworkers-refill-air-conditioner-freon_482257-90737.jpg",
        },
        {
          id: "t3",
          title: "Highly Recommend",
          quote: "They provide high-quality and reliable HVAC care.",
          name: "Emma L.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-nfc-technology-pay-bill-restaurant_23-2150039422.jpg",
        },
        {
          id: "t4",
          title: "Reliable Technicians",
          quote: "Consistent, professional, and very money-saving solutions.",
          name: "David W.",
          role: "Resident",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-looking-into-solid-fuel-boiler-working-with-biofuels-economical-heating_169016-15377.jpg",
        },
        {
          id: "t5",
          title: "Expert HVAC Care",
          quote: "Great energy-efficient upgrades, made a real difference.",
          name: "Linda M.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/young-worker-holding-hand-chest-uniform-looking-grateful_176474-35950.jpg",
        },
      ]}
      title="Proven Quality Service"
      description="Hear what our residential and commercial clients have to say about our work."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What areas do you serve?",
          content: "We proudly serve Menomonie and nearby areas in Wisconsin.",
        },
        {
          id: "q2",
          title: "Do you handle emergency furnace repairs?",
          content: "Yes, we are available to handle your emergency heating and cooling needs promptly.",
        },
        {
          id: "q3",
          title: "Do you work with businesses?",
          content: "Absolutely, we serve both residential and commercial clients with high-quality HVAC solutions.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We're here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Need HVAC Service Today?"
      description="Whether you need routine maintenance or emergency repair, call us at (715) 340-3441 to schedule an appointment."
      buttons={[
        {
          text: "Call (715) 340-3441",
          href: "tel:7153403441",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="All Service Heating & Cooling"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
