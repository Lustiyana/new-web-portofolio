/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailFaceRecognition = () => {
  return (
    <LayoutDescription title="Absence with Face Recognition using WhatsApp Bot">
      <p>
        This project is designed to fulfill the thesis assignment. It combines
        Flask, Node.js, and Strapi using JavaScript and Python. The project
        applies Face Recognition to a WhatsApp bot to facilitate the attendance
        process. The model creation utilizes the Convolutional Neural Network
        algorithm.
      </p>
      <div className="flex flex-wrap gap-2">
        <img
          className="w-40 h-auto"
          src="/images/wa-1.jpeg"
          alt="WhatsApp Screenshot 1"
        />
        <img
          className="w-40 h-auto"
          src="/images/wa-2.jpeg"
          alt="WhatsApp Screenshot 2"
        />
        <img
          className="w-40 h-auto"
          src="/images/wa-3.jpeg"
          alt="WhatsApp Screenshot 3"
        />
        <img
          className="w-40 h-auto"
          src="/images/wa-4.jpeg"
          alt="WhatsApp Screenshot 4"
        />
      </div>
      <p>
        To retrieve data, a web-based application was created using Next.js and
        Tailwind CSS. This website implements an authentication system and an
        image retrieval process. Strapi is employed as a content manager,
        utilizing MySQL as the database.
      </p>
      <div className="flex flex-wrap gap-2">
        <img
          className="w-40 h-auto"
          src="/images/fr-web-1.png"
          alt="Face Recognition Web Screenshot 1"
        />
        <img
          className="w-40 h-auto"
          src="/images/fr-web-2.png"
          alt="Face Recognition Web Screenshot 2"
        />
        <img
          className="w-40 h-auto"
          src="/images/fr-web-3.png"
          alt="Face Recognition Web Screenshot 3"
        />
        <img
          className="w-40 h-auto"
          src="/images/fr-web-4.png"
          alt="Face Recognition Web Screenshot 4"
        />
      </div>
      <p>
        The deployment process uses the Nginx web server. VPS with Ubuntu OS,
        4GB RAM, 4Core CPU, and 1GB Storage.
      </p>
      <div>
        <h3 className="text-xl font-bold">Links for Repository</h3>
        <ol className="text-blue-600">
          <li>
            <a
              href="https://github.com/Lustiyana/bot-wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/bot-wa
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lustiyana/mtcnn-py"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/mtcnn-py
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lustiyana/frontend-fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/frontend-fr
            </a>
          </li>
        </ol>
      </div>
    </LayoutDescription>
  );
};

export default DetailFaceRecognition;
