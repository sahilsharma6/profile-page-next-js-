"use client";

import {
  BriefcaseBusiness,
  Building,
  Globe,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";

type ProfileOrganizationTypes = {
  organizationName: string;
  websiteUrl: string;
  privileges: string[];
  sector: string;
  about: string;
  color?: string;
};

export default function ProfileOrganization({
  organizationName,
  websiteUrl,
  privileges,
  sector,
  about,
  color,
}: ProfileOrganizationTypes) {
  // bg color on privileges tag

  return (
    <div className=" bg-base-100  rounded-lg p-6 space-y-6 shadow-md mt-6">
      <div className="flex items-center justify gap-2 ">
        <div
          className={`rounded-sm w-10 h-10  bg-${color}-500  flex items-center justify-center text-white`}
        >
          <Building className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Current Organization</h2>
          <span className="text-gray-400 text-sm">
            {/* Your active workplace in Deepthought EudTech Ventures Pvt. Ltd */}
            {`Your active workplace in ${organizationName} `}
          </span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col  gap-4">
        <div className=" flex-1 border p-6 border-gray-200 rounded-lg">
          <h3 className="text-xs  font-semibold text-gray-500 uppercase  mb-1">
            Organization Name
          </h3>
          <p className="font-semibold">{organizationName}</p>

          <h3 className="mt-4 text-xs font-semibold text-gray-500 uppercase  mb-1">
            Website
          </h3>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <Link
              href={websiteUrl}
              className="text-blue-600 hover:underline text-sm"
            >
              {websiteUrl}
            </Link>
          </div>
        </div>

        <div className="flex-1  p-6 border border-gray-200 rounded-lg">
          <h3 className="text-xs font-semibold text-gray-500 uppercase  mb-1">
            Your Privileges
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {privileges.map((priv) => (
              <span
                key={priv}
                className={`inline-flex gap-1 items-center px-3 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700  ${
                  priv == "Admin" ? "bg-red-200 text-red-800" : ""
                } ${
                  priv === "Manager" ? "bg-orange-200 text-orange-800" : ""
                } ${priv === "Member" ? "bg-green-200 text-green-800" : ""}`}
              >
                {priv === "Admin" ? <ShieldCheck size={16} /> : null}
                {priv === "Manager" ? <User size={16} /> : null}
                {priv === "Member" ? <User size={16} /> : null}
                {priv}
              </span>
            ))}
          </div>

          <h3 className="text-xs font-semibold text-gray-500 uppercase  mb-1 ">
            Sector
          </h3>
          <span
            className={`inline-flex gap-1 items-center px-3 py-1 rounded text-xs font-medium text-blue-800 bg-blue-200`}
          >
            {/* <BriefcaseBusiness size={16} /> */}
            {sector === "Education" ? (
              <BriefcaseBusiness size={16} />
            ) : (
              <Globe size={16} />
            )}
            {sector}
          </span>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          About
        </h3>
        <p className="text-sm text-gray-700 ">{about}</p>
      </div>
    </div>
  );
}
