import React from "react";
import Image from "../components/image";
import { Link } from "gatsby";
import { Brand } from "../utils/icons";

export const Logo = () => {
  return (
    <Link className="flex items-center m-0 p-0" to="/">
      <Brand
        name="logo"
        className="w-10 h-10 m-0"
        description="Consolas Retro"
      />
      <span className="text-xl font-bold block pt-1 ml-2  text-gray-800">
        Consolas Retro
      </span>
    </Link>
  );
};
