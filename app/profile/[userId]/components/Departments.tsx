"use client";

import { FlaskConical, Key, Users } from "lucide-react";
import Link from "next/link";
import Badge from "./ui/Badge";
import InfoCard from "./ui/InfoCard";
import KeyValueRow from "./ui/KeyValueRow";

type DepartmentType = {
  id: string;
  name: string;
  tag: string;
  description: string;
  roleDescription: string;
};

export default function Departments({
  departmentsData,
  color,
}: {
  departmentsData: DepartmentType[];
  color?: string;
}) {
  console.log(departmentsData);
  return (
    <div className=" bg-base-100  rounded-lg p-6 space-y-6 shadow-md mt-6">
      <div className="flex items-center justify gap-2 ">
        <div
          className={`rounded-sm w-10 h-10  bg-${color}-500  flex items-center justify-center text-white`}
        >
          <Users />
        </div>
        <div>
          <h2 className="text-lg font-bold">Your Departments</h2>
          <span className="text-gray-400 text-sm">
            You are part of {departmentsData.length} departments
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {departmentsData.map((dept) => (
          <InfoCard key={dept.id}>
            <div className="flex gap-2 items-center mb-2">
              <div
                className={`rounded-sm w-7 h-7  bg-${color}-500  flex items-center justify-center text-white`}
              >
                <FlaskConical size={12} />
              </div>
              <h4 className="font-semibold">{dept.name}</h4>
              <Badge label={dept.tag} />
            </div>
            <InfoCard>
              <p className="text-sm text-gray-700">{dept.description}</p>
            </InfoCard>

            <div className="mt-4 bg-gray-200 h-[1]"></div>

            <div className="mt-2">
              <h3 className="uppercase text-gray-500">Role Description</h3>
              <p className="text-gray-400 ml-1">{dept.roleDescription}</p>
            </div>

            <div className="mt-4 bg-gray-200 h-[1]"></div>

            <div className="flex items-center text-gray-500 gap-2 text-sm mt-2">
              <span className="font-medium">Department ID:</span>
              <span className="">{dept.id}</span>
            </div>
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
