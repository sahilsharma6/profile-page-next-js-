"use client";

import { SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProfileHeaderProps = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  color?: string;
};

export default function ProfileHeader({
  id,
  name,
  email,
  avatarUrl,
  color,
}: ProfileHeaderProps) {
  //   const COLORS = [
  //     "bg-blue-500",
  //     "bg-green-500",
  //     "bg-red-500",
  //     "bg-yellow-500",
  //     "bg-purple-500",
  //     "bg-pink-500",
  //     "bg-indigo-500",
  //     "bg-teal-500",
  //   ];
  //   const getrandomColor = () => {
  //     return COLORS[Math.floor(Math.random() * COLORS.length)];
  //   };
  //   const [color] = useState(getrandomColor());

  return (
    <div className="card bg-base-100 shadow-sm ">
      <div
        className={`h-28 rounded-t-xl bg-${color}-500
        }`}
      ></div>

      <div className="card-body pt-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-3">
          <div className="relative md:flex items-center gap-4">
            <div className="avatar -mt-16">
              {/* <div className="w-30 h-30 rounded-full ring ring-base-100 ring-offset-1"> */}
              <div className="w-30 h-30 rounded-full bg-white shadow-md">
                {avatarUrl ? (
                  <Image src={avatarUrl} alt={name} width={80} height={80} />
                ) : (
                  //   <div
                  //     className={`w-30 h-30 bg-${color}-500 text-white flex items-center justify-center`}
                  //   >
                  <div
                    className={`w-30 h-30   bg-white  text-black  flex items-center justify-center`}
                  >
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>

            <div
              className={` absolute h top-3 -mt-12 left-32 rounded ring ring-offset-2 w-8 h-8  bg-${color}-500 flex items-center justify-center text-white `}
            >
              <SquarePen className="h-4 w-4" />
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <span className="text-gray-300">#</span>
              </div>
              <p className="text-sm text-gray-400">{email}</p>
            </div>
          </div>

          <div className="flex mt-4 md:mt-0   gap-2">
            <Link
              href="/profile/plans"
              className={`btn bg-${color}-500 text-white btn-sm`}
            >
              View Plans
            </Link>
            <Link href="/profile/reports" className="btn btn-outline btn-sm">
              View Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
