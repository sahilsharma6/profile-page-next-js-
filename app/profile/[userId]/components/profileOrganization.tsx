"use client";

import {
  BriefcaseBusiness,
  Building,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import Badge from "./ui/Badge";
import InfoCard from "./ui/InfoCard";

type Leadership = {
  name: string;
  designation: string;
  email?: string;
  phone?: string;
};

type Contact = {
  phone?: string;
  email?: string;
};

type OfficeLocation = {
  city: string;
  state: string;
  address: string;
};

type Locations = {
  office: OfficeLocation;
};

type ProfileOrganizationTypes = {
  organizationName: string;
  websiteUrl: string;
  privileges: string[];
  sector: string;
  about: string;
  leadership: Leadership[];
  locations: Locations;
  contacts: Contact;
  color?: string;
};

export default function ProfileOrganization({
  organizationName,
  websiteUrl,
  privileges,
  sector,
  about,
  leadership,
  locations,
  contacts,
  color,
}: ProfileOrganizationTypes) {
  // bg color on privileges tag

  console.log(locations);
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
      <h3 className="font-bold mx-2 relative top-3 uppercase">Overview</h3>
      <div className="flex md:flex-row flex-col  gap-4">
        {/* <div className=" flex-1 border p-6 border-gray-200 rounded-lg">
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
        </div> */}

        <InfoCard title="Organization Name" className="flex-1">
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
        </InfoCard>

        <InfoCard title="Your Privileges" className="flex-1">
          <div className="flex gap-2 flex-wrap">
            {privileges.map((priv) => (
              <Badge
                key={priv}
                label={priv}
                variant={
                  priv.toLocaleLowerCase() as "admin" | "manager" | "member"
                }
                icon={
                  priv === "Admin" ? (
                    <ShieldCheck size={16} />
                  ) : priv === "Manager" ? (
                    <User size={16} />
                  ) : priv === "Member" ? (
                    <User size={16} />
                  ) : null
                }
              />
            ))}
          </div>

          <h3 className="text-xs font-semibold text-gray-500 uppercase my-2 ">
            Sector
          </h3>

          <Badge
            label={sector}
            variant="primary"
            icon={
              sector === "Education" ? (
                <BriefcaseBusiness size={16} />
              ) : (
                <Globe size={16} /> // that's why because other category is technology can improve it but not main focus
              )
            }
          />
        </InfoCard>
      </div>
      <InfoCard title="About">
        <p className="text-sm text-gray-700">{about}</p>
      </InfoCard>

      <h3 className="font-bold mx-2 relative top-3 uppercase">
        Leadership Team
      </h3>

      <div className="flex flex-col md:flex-row  md:items-center gap-6">
        {leadership.map((leader, index) => (
          <InfoCard key={index} className="flex-1">
            <div>
              <h4 className="font-semibold">{leader.name}</h4>
              {/* <p className="text-sm text-gray-500">{leader.designation}</p> */}
              <Badge label={leader.designation} variant="success" />
            </div>
            <div className="mt-2 space-y-1">
              {leader.email && <p className="text-sm "> {leader.email}</p>}
              {leader.phone && <p className="text-sm "> {leader.phone}</p>}
            </div>
          </InfoCard>
        ))}
      </div>

      <h3 className="font-bold mx-2 relative top-3 uppercase">
        Locations & Contact
      </h3>

      <div className="flex md:flex-row flex gap-6">
        <InfoCard title="Office Locations" className="flex-1">
          <div className="flex gap-1  items-center mb-1">
            <Building size={16} /> {locations.office.city},{" "}
            {locations.office.state}
          </div>
          <div>{locations.office.address}</div>
        </InfoCard>
        <InfoCard title="Email Addresses" className="flex-1">
          <div className="flex flex-col gap-2">
            {" "}
            <Mail size={16} />
            Office
          </div>
          <div>{contacts.email}</div>
        </InfoCard>

        <InfoCard title="Phone Numbers" className="flex-1">
          <div className="flex flex-col gap-2">
            <Phone size={16} />
            Office
          </div>
          <div>{contacts.phone}</div>
        </InfoCard>
      </div>
    </div>
  );
}

// <div className="flex-1  p-6 border border-gray-200 rounded-lg">
//   <h3 className="text-xs font-semibold text-gray-500 uppercase  mb-1">
//     Your Privileges
//   </h3>
//   <div className="flex flex-wrap gap-2 mb-4">
//     {privileges.map((priv) => (
//       // <span
//       //   key={priv}
//       //   className={`inline-flex gap-1 items-center px-3 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700  ${
//       //     priv == "Admin" ? "bg-red-200 text-red-800" : ""
//       //   } ${
//       //     priv === "Manager" ? "bg-orange-200 text-orange-800" : ""
//       //   } ${priv === "Member" ? "bg-green-200 text-green-800" : ""}`}
//       // >
//       //   {priv === "Admin" ? <ShieldCheck size={16} /> : null}
//       //   {priv === "Manager" ? <User size={16} /> : null}
//       //   {priv === "Member" ? <User size={16} /> : null}
//       //   {priv}
//       // </span>

//       // changed and made into reusable component
//       <Badge
//         key={priv}
//         label={priv}
//         variant={priv.toLocaleLowerCase() as "admin" | "manager" | "member"}
//         icon={
//           priv === "Admin" ? (
//             <ShieldCheck size={16} />
//           ) : priv === "Manager" ? (
//             <User size={16} />
//           ) : priv === "Member" ? (
//             <User size={16} />
//           ) : null
//         }
//       />
//     ))}
//   </div>

//   <h3 className="text-xs font-semibold text-gray-500 uppercase  mb-1 ">
//     Sector
//   </h3>
//   {/* <span
//         className={`inline-flex gap-1 items-center px-3 py-1 rounded text-xs font-medium text-blue-800 bg-blue-200`}
//       >
//         {sector === "Education" ? (
//           <BriefcaseBusiness size={16} />
//         ) : (
//           <Globe size={16} />
//         )}
//         {sector}
//       </span> */}

//   <Badge
//     label={sector}
//     variant="primary"
//     icon={
//       sector === "Education" ? (
//         <BriefcaseBusiness size={16} />
//       ) : (
//         <Globe size={16} /> // that's why because other category is technology can improve it but not main focus
//       )
//     }
//   />
// </div>;
