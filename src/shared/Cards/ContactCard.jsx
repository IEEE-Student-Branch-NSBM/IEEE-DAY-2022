import React from "react";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

export const ContactCard = ({ contacts }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:mt-[70px]">
      {contacts &&
        contacts.map((details) => (
          <div className="flex flex-row">
            {/* Icon */}
            <div className="pr-5">
              <div className="bg-brown-10 p-4 rounded-full">
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
            <div>
              <div>
                <p className="text-4xl font-medium leading-8">
                  {details.item ? details.item : "N/A"}
                </p>
              </div>
              <div>
                {details.list &&
                  details.list.map((data) => (
                    <p className="text-lg font-medium leading-7 pt-2">
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
