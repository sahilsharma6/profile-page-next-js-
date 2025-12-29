"use client";

import useSWR from "swr";
import { useParams, useRouter } from "next/navigation";
import ProfileHeader from "./components/profileHeader";
import ProfileOrganization from "./components/profileOrganization";
import { useRandomColor } from "@/app/hooks/useRandomColor";
import OrganizationCard from "./components/OrganizationCard";
import Departments from "./components/Departments";
import AllOrganizations from "./components/AllOrganizations";

type Department = {
  id: string;
  name: string;
  tag: string;
  description: string;
  roleDescription: string;
};

type Leadership = {
  name: string;
  designation: string;
  email?: string;
  phone?: string;
};

type OfficeLocation = {
  city: string;
  state: string;
  address: string;
};

type Locations = {
  office: OfficeLocation;
};

type Contacts = {
  phone?: string;
  email?: string;
};

type Organization = {
  id: string;
  name: string;
  sector: string;
  website?: string;
  isCurrent: boolean;
  roles: string[];
  about?: string;
  leadership?: Leadership[];
  locations?: Locations;
  contacts?: Contacts;
  departments?: Department[];
};

type User = {
  id: string;
  name: string;
  email: string;
  profile: {
    avatarInitial: string;
  };
  currentOrganizationId: string;
  organizations: Organization[];
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const dynamic = "force-dynamic";
export default function Page() {
  const params = useParams();
  const userId = params?.userId;
  const router = useRouter();
  const color = useRandomColor();

  const { data, error, isLoading } = useSWR(
    "https://codebanao.in/user/index.json", // hosted sample json file with dummy user data and used my domain in hostinger
    fetcher
  );

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6">Failed to load users</div>;

  const user = data?.find((u: User) => u.id === userId);

  if (!user) return <div className="p-6">User not found</div>;

  const currentOrg = user.organizations.find(
    (org: Organization) => org.id === user.currentOrganizationId
  );

  return (
    <div className="min-h-screen bg-base-200 p-3">
      <ProfileHeader
        id={user.id}
        name={user.name}
        email={user.email}
        color={color}
      />

      <ProfileOrganization
        organizationName={currentOrg?.name || "N/A"}
        websiteUrl={currentOrg?.website || "#"}
        privileges={currentOrg?.roles || []}
        sector={currentOrg?.sector || "N/A"}
        about={currentOrg?.about || "N/A"}
        leadership={currentOrg?.leadership || []}
        locations={currentOrg?.locations}
        contacts={currentOrg?.contacts}
        color={color}
      />

      <Departments
        departmentsData={currentOrg?.departments || []}
        color={color}
      />
      <AllOrganizations organizations={user.organizations} />
    </div>
  );
}
