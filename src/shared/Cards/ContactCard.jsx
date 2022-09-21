import React from "react";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

export const ContactCard = ({ contacts }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-evenly mx-20 lg:mx-0 mt-[70px]">
      {contacts &&
        contacts.map((details) => (
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:w-full md:w-auto px-0 py-10 md:px-5 md:py-5 lg:p-0">
            {/* Icon */}
            <div
              className="sm:w-1/2 md:w-auto pb-5 sm:pb-0 pr-0 sm:pr-5"
              key={details.id}
            >
              <div className="bg-brown-10 sm:ml-[calc(100%-68px)] md:ml-0 p-4 rounded-full">
                {details.item === "Phone" && (
                  <FaPhoneAlt fill="#ffffff" size="36" />
                )}
                {details.item === "Email" && (
                  <FaEnvelope fill="#ffffff" size="36" />
                )}
                {details.item === "Location" && (
                  <FaMapMarkerAlt fill="#ffffff" size="36" />
                )}
              </div>
            </div>
            {/* Details */}
            <div className="text-center sm:text-left">
              <div>
                <p className="text-4xl font-medium leading-8">
                  {details.item ? details.item : "N/A"}
                </p>
              </div>
              <div>
                {details.list &&
                  details.list.map((data) => (
                    <p
                      key={data.id}
                      className="text-lg font-medium leading-7 pt-2"
                    >
                      {data.attribute}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
