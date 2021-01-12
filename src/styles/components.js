import React from "react";
import Image from "../components/image";
import { Link } from "gatsby";

export const Logo = () => {
  return (
    <Link className="flex items-center m-0 p-0" to="/">
      <Image
        name="coin"
        className="w-10 h-10 m-0"
        description="Consolas Retro"
      />
      <span className="text-xl font-bold block pt-1 ml-2">Consolas Retro</span>
    </Link>
  );
};
