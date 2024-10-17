"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path:string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-screen w-full bg-gradient-to-r from-lamaPurpleLight via-lamaYellowLight to-lamaSkyLight p-6">
      <div
        onClick={() => handleNavigation("/admin")}
        className="group cursor-pointer relative border-2 border-lamaPurple p-10 rounded-lg shadow-lg bg-white text-lamaPurple font-semibold text-lg hover:bg-lamaPurple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-64 h-64 flex items-center justify-center"
      >
        <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">👩‍💼</span>
        Continue As Admin
      </div>

      <div
        onClick={() => handleNavigation("/student")}
        className="group cursor-pointer relative border-2 border-lamaYellow p-10 rounded-lg shadow-lg bg-white text-lamaYellow font-semibold text-lg hover:bg-lamaYellow hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-64 h-64 flex items-center justify-center mt-6 md:mt-0"
      >
        <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">👨‍🎓</span>
        Continue As Student
      </div>

      <div
        onClick={() => handleNavigation("/teacher")}
        className="group cursor-pointer relative border-2 border-lamaSky p-10 rounded-lg shadow-lg bg-white text-lamaSky font-semibold text-lg hover:bg-lamaSky hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-64 h-64 flex items-center justify-center mt-6 md:mt-0"
      >
        <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">👩‍🏫</span>
        Continue As Teacher
      </div>

      <div
        onClick={() => handleNavigation("/parent")}
        className="group cursor-pointer relative border-2 border-lamaPurple p-10 rounded-lg shadow-lg bg-white text-lamaPurple font-semibold text-lg hover:bg-lamaPurple hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-64 h-64 flex items-center justify-center mt-6 md:mt-0"
      >
        <span className="absolute -top-5 left-0 right-0 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">👨‍👩‍👧</span>
        Continue As Parent
      </div>
    </div>
  );
}
