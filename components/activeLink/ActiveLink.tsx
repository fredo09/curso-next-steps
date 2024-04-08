/** Use 'use client' cuando se rendericen componentes para el cliente **/
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  value: string;
}

export const ActiveLink = ({ path, value }: Props) => {

  //* hook de next para los paths y ver su valor
  const pathName = usePathname();
  console.log("🚀 ~ ActiveLink ~ pathName:", pathName);
  
  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]} `}
      href={path}
    >
      {value}
    </Link>
  );
};