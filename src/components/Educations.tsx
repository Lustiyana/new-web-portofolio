/** @format */

import React from "react";

const EducationItem = ({
  school,
  major,
  descriptions,
}: {
  school: string;
  major: string;
  descriptions: string[];
}) => (
  <div className="flex flex-col gap-2 max-w-96">
    <p className="font-semibold text-lg">{school}</p>
    <p className="italic">{major}</p>
    <ul>
      {descriptions.map((description: string, index: number) => (
        <li key={index} className="list-disc ml-4 text-justify ">
          {description}
        </li>
      ))}
    </ul>
  </div>
);

const Educations = () => {
  return (
    <section className="mb-52 flex flex-col gap-8 items-center">
      <div className="flex gap-2">
        <div className="flex flex-col gap-8 items-start max-lg:hidden">
          <div className="flex gap-2">
            <div className="h-4 bg-black w-4 rounded-full"></div>
            <div className="h-4 bg-black w-8 rounded-full"></div>
            <div className="h-4 bg-black w-16 rounded-full"></div>
            <div className="h-4 bg-black w-36 rounded-full"></div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold">Education</h1>
            <div className="h-1 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="h-4 bg-green-500 w-4 rounded-full"></div>
            <div className="h-4 bg-black w-96 rounded-full"></div>
          </div>
          <EducationItem
            descriptions={[
              "2nd Place in FLS2N Poster Competition at the District Level",
              "Participated in the District Science Olympiad in Computer Science",
              "Member and Secretary of the Informatics Student Club",
              "Member and Treasurer of the Youth Red Cross",
            ]}
            school="SMAN 1 Padalarang"
            major="Mathematics and Science"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="h-4 bg-green-500 w-6 rounded-full"></div>
            <div className="h-4 bg-black w-5/12 rounded-full"></div>
            <div className="h-4 bg-black w-4/12 rounded-full"></div>
            <div className="h-4 bg-black w-3/12 rounded-full"></div>
            <div className="h-4 bg-black w-2/12 rounded-full"></div>
            <div className="h-4 bg-black w-1/12 rounded-full"></div>
          </div>
          <EducationItem
            descriptions={[
              "Graduated with Cum Laude honors with a GPA of 3.83",
              "Member and treasurer of the Robotics Club at UIN Bandung",
              "Executive board member of the student association for two terms",
              "Member of the Communication and Partnership sector of the Google Developer Student Club",
              "Participated in the Bangkit Academy Learning Path in Machine Learning",
            ]}
            school="UIN Sunan Gunung Djati"
            major="Informatics Engineering"
          />
        </div>
      </div>
    </section>
  );
};

export default Educations;
