/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailInvoiceGenerator = () => {
  return (
    <LayoutDescription title="Invoice Generator">
      <p>
        This is an application designed to generate payment invoices using a
        mobile app built with Flutter. The application is currently in the
        testing and bug-fixing phase to ensure optimal performance and user
        experience.
      </p>
      <div>
        <p>Github Link</p>
        <a
          href="https://github.com/Lustiyana/invoice-generator-flutter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://github.com/Lustiyana/invoice-generator-flutter
        </a>
      </div>
    </LayoutDescription>
  );
};

export default DetailInvoiceGenerator;
