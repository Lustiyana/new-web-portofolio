/** @format */
"use client";
import React, { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import ParallaxSection from "./ParalaxSection";
import DetailPulsadong from "./DetailPulsadong";
import DetailFaceRecognition from "./DetailFaceRecognition";
import DetailFlexboxPlayground from "./DetailFlexboxPlayground";
import DetailTicTacToe from "./DetailTicTacToe";
import DetailMRPLaw from "./DetailMRPLaw";
import DetailStore from "./DetailStore";
import DetailInvoiceGenerator from "./DetailInvoiceGenerator";

const projects = [
  {
    title: "PORTOFOLIO",
    image: "/bg-laptop.jpg",
    items: [
      {
        projectName: "Pulsadong",
        thumbnail: "/images/pulsadong.png",
        description: <DetailPulsadong />,
      },
      {
        projectName: "Flexbox Playground",
        thumbnail: "/images/flexbox-playground.png",
        description: <DetailFlexboxPlayground />,
      },
      {
        projectName: "MRPLaw",
        thumbnail: "/images/mrplaw.png",
        description: <DetailMRPLaw />,
      },
      {
        projectName: "Face Recognition",
        thumbnail: "/images/MTCNN.png",
        description: <DetailFaceRecognition />,
      },
      {
        projectName: "Tic Tac Toe",
        thumbnail: "/images/tic-tac-toe.png",
        description: <DetailTicTacToe />,
      },
    ],
  },
  {
    title: "ONGOING PROJECT",
    image: "bg-code.jpg",
    items: [
      {
        projectName: "Pertamina",
        thumbnail: "/images/pertamina.png",
        description: "",
      },
      {
        projectName: "Online Store",
        thumbnail: "/images/mostore.png",
        description: <DetailStore />,
      },
      {
        projectName: "Invoice Generator",
        thumbnail: "/images/invoice-generator.png",
        description: <DetailInvoiceGenerator />,
      },
    ],
  },
];

const ProjectSection = ({ project }: { project: any }) => (
  <div className="min-h-screen" data-aos="zoom-in">
    <h1 className="text-white font-bold text-4xl text-center mb-8">
      {project.title}
    </h1>
    <div className="grid grid-cols-3 gap-4">
      {project.items.map((item: any, index: number) => (
        <Card item={item} key={index} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return projects.map((project, index) => (
    <ParallaxSection image={project.image} key={index}>
      <section className="w-full flex flex-col gap-24">
        <ProjectSection project={project} />
      </section>
    </ParallaxSection>
  ));
};

export default Projects;
