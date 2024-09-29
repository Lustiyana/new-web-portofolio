/** @format */
"use client";
import AboutUs from "@/components/AboutUs";
import CuriculumVitae from "@/components/CuriculumVitae";
import Educations from "@/components/Educations";
import Modal from "@/components/Modal";
import ParallaxSection from "@/components/ParalaxSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Textarea from "@/components/Textarea";
import TextInput from "@/components/TextInput";
import WorkExperience from "@/components/WorkExperience";
import { useModal } from "@/context/modalContext";

export default function Home() {
  const { isModalOpen, setIsModalOpen } = useModal();
  console.log(isModalOpen);
  return (
    <div>
      <Modal />
      <AboutUs />
      <Services />
      <Educations />
      <div>
        <Projects />

        <WorkExperience />
        <CuriculumVitae />
        {/* Other content */}
      </div>
      <section className="min-h-screen bg-white p-16 flex flex-col justify-center">
        <form className="flex flex-col gap-4">
          <h1 className="text-2xl">Contact Me</h1>
          <div className="flex flex-col items-center"></div>
          <TextInput />
          <TextInput />
          <Textarea />
          <button className="bg-green-600 text-white font-bold py-2 rounded-md">
            SEND
          </button>
        </form>
      </section>
    </div>
  );
}
