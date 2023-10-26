import React from "react";

import { faker } from "@faker-js/faker";
import { User } from "lucide-react";

const DummyList: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <ul className="space-y-4">
        <li className="flex items-center gap-2">
          <span className="rounded-full bg-gray-300 p-2">
            <User className="w-5 h-5" />
          </span>
          <span className="font-medium">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-300 p-2">
            <User className="w-5 h-5" />
          </span>
          <span className="font-medium">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="rounded-full bg-red-300 p-2">
            <User className="w-5 h-5" />
          </span>
          <span className="font-medium">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="rounded-full bg-sky-300 p-2">
            <User className="w-5 h-5" />
          </span>
          <span className="font-medium">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="rounded-full bg-yellow-300 p-2">
            <User className="w-5 h-5" />
          </span>
          <span className="font-medium">
            {faker.person.firstName()} {faker.person.lastName()}
          </span>
        </li>
      </ul>
    </>
  );
};

export default DummyList;
