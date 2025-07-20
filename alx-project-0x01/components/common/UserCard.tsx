import React from "react";
import { UserProps } from "@/interfaces";

type UserProps = Pick<
  UserProps ,
  | "id"
  | "name"
  | "username"
  | "email"
  | "phone"
  | "website"
  | "address"
  | "company"
>;

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  id,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">
        {name} ({username})
      </h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600 mt-2 text-sm">
        Address: {address.suite}, {address.street}, {address.city},{" "}
        {address.zipcode}
      </p>
      <p className="text-sm text-gray-600">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;