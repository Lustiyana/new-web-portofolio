/** @format */
"use client";
import AboutUs from "@/components/AboutUs";
import CuriculumVitae from "@/components/CuriculumVitae";
import Educations from "@/components/Educations";
import FormContact from "@/components/FormContact";
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
      </div>

      <FormContact />
    </div>
  );
}
