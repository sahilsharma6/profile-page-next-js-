"use client";

import { Globe, Building, Check, ShieldCheck, User } from "lucide-react";
import Badge from "./ui/Badge";
import InfoCard from "./ui/InfoCard";
import Link from "next/link";

type Department = {
  id: string;
  name: string;
  tag: string;
  description: string;
  roleDescription: string;
};
type Organization = {
  id: string;
  name: string;
  sector: string;
  website?: string;
  isCurrent: boolean;
  roles: string[];
  about?: string;
  departments?: Department[];
};

export default function AllOrganizations({
  organizations,
}: {
  organizations: Organization[];
}) {
  return (
    <div className="bg-base-100  rounded-lg p-6 space-y-6 shadow-md mt-6">
      <div>
        <h2 className="text-lg font-bold">All Organizations</h2>
        <p className="text-sm text-gray-400">
          You are a member of {organizations.length} organizations
        </p>
      </div>

      <div className="space-y-4">
        {organizations.map((org) => (
          <InfoCard key={org.id}>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{org.name}</h3>
                  {org.isCurrent && (
                    <Badge label="Current" icon={<Check size={12} />} />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-400">{org.sector}</p>
                  <div className="flex gap-2 mt-2">
                    {org.roles.map((role) => (
                      <Badge
                        key={role}
                        label={role}
                        variant={
                          role.toLocaleLowerCase() as
                            | "admin"
                            | "manager"
                            | "member"
                        }
                        icon={
                          role === "Admin" ? (
                            <ShieldCheck size={16} />
                          ) : role === "Manager" ? (
                            <User size={16} />
                          ) : role === "Member" ? (
                            <User size={16} />
                          ) : null
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {org.about && (
              <InfoCard className="mt-2">
                <p className="text-sm text-gray-600 mt-3">{org.about}</p>
              </InfoCard>
            )}

            <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-4">
              <div className="flex items-center gap-1">
                <Globe size={14} />
                <Link
                  href={org.website || "#"}
                  target="_blank"
                  className="hover:underline"
                >
                  Website
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <Building size={14} />
                {org.departments?.length || 0} Departments
              </div>
            </div>
            {org.departments && org.departments.length > 0 && (
              <>
                <div className="mt-4 bg-gray-200 h-[1]"></div>
                <div
                  className="mt-2 p-1
                "
                >
                  <h4 className="font-semibold mb-2">Your Departments</h4>
                  <div className="flex flex-wrap gap-3">
                    {org.departments.map((dept) => (
                      <Badge key={dept.id} label={dept.name} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </InfoCard>
        ))}
      </div>
    </div>
  );
}
