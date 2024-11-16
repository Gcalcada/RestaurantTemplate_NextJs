"use client";

import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbsComponent = () => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 p-4 sm:p-4 mb-2 sm:mb-4">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<span className="text-blue-400"> &gt; </span>}>
        <Link
          href="/"
          passHref
          className="no-underline text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 font-semibold">
          Home
        </Link>

        {pathNames.map((name, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;

          return isLast ? (
            <Typography
              key={href}
              className="text-white font-bold"
              aria-current="page">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
          ) : (
            <Link
              key={href}
              href={href}
              passHref
              className="text-yellow-400  hover:text-yellow-500 dark:hover:text-yellow-400">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
