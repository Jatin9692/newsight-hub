
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { resourcesData } from '../data/resourcesData';

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Educational Resources
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover free tools, applications, and learning materials to enhance your knowledge and skills.
            </p>
          </div>
        </section>

        <section className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
