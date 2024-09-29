/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailStore = () => {
  return (
    <LayoutDescription title="Online Store">
      <p>
        This is a web-based application (built with Next.js), mobile application
        (developed with React Native), and a backend using Go for handling
        purchase transactions. Currently, the application has completed the CRUD
        functionality for the web page and has integrated with the API. We are
        now in the process of implementing the mobile page using React Native.
      </p>
      <div>
        <h3 className="text-xl font-bold">Links for Repository</h3>
        <ol className="text-blue-600">
          <li>
            <a
              href="https://github.com/Lustiyana/store-react-native"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/store-react-native
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lustiyana/store-be-golang"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/store-be-golang
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lustiyana/store-fe-next"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Lustiyana/store-fe-next
            </a>
          </li>
        </ol>
      </div>
    </LayoutDescription>
  );
};

export default DetailStore;
