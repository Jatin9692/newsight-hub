
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About NewsightHub
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our mission, vision, and the team behind the insights.
            </p>
          </div>
        </section>

        <section className="container py-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At NewsightHub, we believe that staying informed shouldn't be complicated. 
                Our mission is to provide students and professionals with clear, concise insights 
                on market news, finance, marketing, and current affairs.
              </p>
              <p className="text-muted-foreground">
                We break down complex topics into digestible information, helping you understand 
                the world around you and make informed decisions in your academic and professional life.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                We focus on simplicity and relevance. Our team carefully curates content from reliable 
                sources, ensuring you get accurate information presented in an accessible way.
              </p>
              <p className="text-muted-foreground">
                Whether you're a student trying to understand market trends for a project or a 
                professional looking to stay updated on industry developments, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8 bg-secondary/30 rounded-lg my-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg">
              <h3 className="font-bold mb-2">Accessibility</h3>
              <p className="text-sm">
                We believe knowledge should be accessible to everyone, regardless of their background 
                or expertise in a particular subject.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="font-bold mb-2">Accuracy</h3>
              <p className="text-sm">
                We prioritize factual information and strive to present balanced viewpoints on 
                complex topics.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg">
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-sm">
                Our ultimate goal is to educate and empower our readers to understand 
                the world better and make informed decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
