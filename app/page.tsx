import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 
    
  "
    >
      <p className="text-2xl mb-3">
        Click on links to view different user profiles based on userId.
      </p>

      <Link href={"/profile/1"} className="text-3xl font-bold underline mb-6">
        Profile Page 1
      </Link>
      <Link href={"/profile/2"} className="text-3xl font-bold underline">
        Profile Page 2
      </Link>
    </div>
  );
}
