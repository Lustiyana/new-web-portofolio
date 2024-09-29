/** @format */

import React from "react";

interface ServiceItemProps {
  title: string;
  description: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="py-24 px-16 md:flex md:flex-col gap-12">
      <h1 className="text-center text-3xl">
        <span className="font-bold">Spesializing</span>{" "}
        <span className="font-light">in</span>
      </h1>
      <div className="grid grid-cols-3 text-center gap-8">
        <ServiceItem
          title="Frontend Development"
          description="Slicing UI using CSS Framework (bootstrap, tailwindcss), integration web with API, building dynamic web using React.js, Next.js, create mobile frontend using React Native and Flutter"
        />
        <ServiceItem
          title="Backend Development"
          description="Create API using Javascript framework (Express and Hapi) and also create API using Next.js. Building dynamic web with MVC concept using Codeigniter. Create API using Golang with Gin Framework. Connect to database mySQL and postgreeSQL using ORM (Sequelize and Gorm)"
        />
        <ServiceItem
          title="Machine Learning"
          description="Building machine learning model using Python with Tensorflow. Connect machine learning model with web application using Flask."
        />
      </div>
    </section>
  );
};

export default Services;
