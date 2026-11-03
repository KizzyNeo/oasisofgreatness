import {
  BookOpen,
  Printer,
  Droplets,
  Sun,
  PenTool,
  ArrowRight,
  Phone,
  MessageSquareText,
} from "lucide-react";

import "./App.css";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Printing & Publishing",
    description:
      "Professional printing of books, brochures, flyers, business cards, and other publications.",
    icon: Printer,
    image: "/images/printing.jpg",
    color: "blue",
  },
  {
    title: "Autobiographies & Biographies",
    description:
      "Transform personal experiences and life stories into professionally written and published books.",
    icon: PenTool,
    image: "/images/biography.jpg",
    color: "gold",
  },
  {
    title: "Books & Poems",
    description:
      "Discover inspiring books, poetry collections, and publications for readers of all ages.",
    icon: BookOpen,
    image: "/images/books-poems.jpg",
    color: "green",
  },
  {
    title: "Water Treatment",
    description:
      "Explore water treatment solutions and alkaline water products for your needs.",
    icon: Droplets,
    image: "/images/water-treatment.jpg",
    color: "cyan",
  },
  {
    title: "Solar Engineering",
    description:
      "Solar panel installation, inverters, batteries, and dependable renewable energy solutions.",
    icon: Sun,
    image: "/images/solar-engineering.jpg",
    color: "orange",
  },
];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <img src="/images/logo.png" className="logo" />
        <span>
          <strong>Oasis of Greatness</strong>
          <small>Publishers Ltd.</small>
        </span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#work">Our Work</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        <Phone size={16} />
        Get in Touch
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          WELCOME TO OASIS OF GREATNESS PUBLISHERS LTD.
        </span>

        <h1>
          Quality Services
          <br />
          for a Brighter Future
        </h1>

        <p>
          Innovative solutions in printing and publishing,
          biographies, books and poems, water treatment,
          and solar engineering.
        </p>

        <a href="#services" className="primary-button">
          Explore Our Services <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className={`service-icon ${service.color}`}>
        <Icon size={27} />
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
      />

      <a href="#work" className="learn-more">
        Learn More <ArrowRight size={15} />
      </a>
    </article>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span className="eyebrow">OUR SERVICES</span>
        <h2>What We Do</h2>
        <p>
          Professional services designed to meet your needs
          and bring your ideas to life.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-content">
        <span className="eyebrow">ABOUT US</span>

        <h2>Our Mission Is to Add Value to Your Life and Business</h2>

        <p>
          At Oasis of Greatness Publishers Ltd., we bring together
          creativity, publishing, technology, and sustainable
          energy solutions to serve individuals, businesses,
          and communities.
        </p>

        <a href="#contact" className="outline-button">
          Contact Our Team <ArrowRight size={16} />
        </a>
      </div>

      <div className="about-values">
        <div>
          <strong>Quality Service</strong>
          <p>We are committed to excellence in everything we do.</p>
        </div>

        <div>
          <strong>Customer Focus</strong>
          <p>Your needs and satisfaction are our priority.</p>
        </div>

        <div>
          <strong>Sustainability</strong>
          <p>We promote responsible and sustainable solutions.</p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section portfolio-section" id="work">
      <div className="section-heading">
        <span className="eyebrow">OUR PORTFOLIO</span>
        <h2>Our Work</h2>
        <p>A closer look at our services and solutions.</p>
      </div>

      <div className="portfolio-grid">
        {services.map((service) => (
          <a
            href={service.title === "Books & Poems" ? "https://selar.com" : "#contact"}
            target={service.title === "Books & Poems" ? "_blank" : "_self"}
            rel={service.title === "Books & Poems" ? "noopener noreferrer" : undefined}
            className="portfolio-item"
            key={service.title}
          >
            <img src={service.image} alt={service.title} loading="lazy" />
            <div>
              <h3>{service.title}</h3>
              <span>Explore Service →</span>
            </div>
          </a>
        ))}
        <div className="portfolio-card video-card">
            <div className="video-wrapper">
                <video autoPlay controls muted playsInline loop preload="auto" poster="/images/books-poems.jpg">
                  <source src="/images/brain-paining-you.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
            </div>
            <div className="portfolio-content">
              <h3>Discover Oasis of Greatness</h3>
              <p>Watch the full videos of our amazing and educative poems on YouTube.</p>
              <a href="https://www.youtube.com/@osiriameobalabi" target="_blank" rel="noopener noreferrer" className="explore-link">
                Explore Videos →
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <span className="eyebrow">LET'S WORK TOGETHER</span>

      <h2>Let's Build a Brighter Future Together</h2>

      <p>
        Contact us today to discuss your needs and discover
        how we can help.
      </p>

      <a href="tel:+2348082030000" className="primary-button">
        <Phone size={17} /> Call Us Today
      </a>
      <a href="https://wa.me/+2348082030000" className="primary-button">
        <MessageSquareText size={17} /> Send Us a Message
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand footer-brand">
        <img src="/images/logo.png" className="logo" />
        <span>
          <strong>Oasis of Greatness</strong>
          <small>Publishers Ltd.</small>
        </span>
      </a>

      <p>
        Print · Inspire · Empower · Sustain
      </p>

      <p>
        © {new Date().getFullYear()} Oasis of Greatness Publishers Ltd.
        All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Oasis of Greatness Publishers LTD</title>
        <link rel="icon" type="image/x-icon" href="https://osiriame.com/favicon.ico" />
        <meta name="description" content="Oasis of Greatness Publishers LTD offers professional printing and publishing, biography writing, books and poems, water treatment solutions, and solar engineering services." />
        <meta name="keywords" content="Oasis of Greatness Publishers, printing, publishing, biography writing, books, poems, water treatment, alkaline water, solar engineering, solar installation" />
        <meta name="author" content="Oasis of Greatness Publishers LTD" />
        <meta  property="og:title" content="Oasis of Greatness Publishers LTD" />
        <meta  property="og:description" content="Discover our publishing, water treatment and solar engineering services." />
        <meta  property="og:type" content="website" />
        <meta  property="og:image" content="https://osiriame.com/thumbnail.png" />
        <meta  property="og:url" content="https://osiriame.com/" />
        <meta property="twitter:image" content="https://osiriame.com/thumbnail.png" />
        <meta  property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content="Oasis of Greatness Publishers LTD offers professional printing and publishing, biography writing, books and poems, water treatment solutions, and solar engineering services." />
        <meta property="og:site_name" content="https://osiriame.com/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
