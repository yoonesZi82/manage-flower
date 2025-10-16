"use client";
import React from "react";
import * as Icons from "react-icons/pi";
import Link from "next/link";

const Box = ({ title, value, iconName, link }) => {
  const Icon = Icons[iconName];

  return (
    <>
      {link ? (
        <Link href={link}>
          <div className="group group flex flex-col gap-1 hover:bg-secondary p-[14px] border-2 border-sidebarTheme rounded-[8px] w-full transition-all duration-500">
            <p className="text-secondary text-xm group-hover:text-sidebarTheme text-right">
              {value}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center gap-2">
                <p className="text-secondary group-hover:text-sidebarTheme">
                  {title}
                </p>
                <div className="!text-secondary group-hover:!text-sidebarTheme">
                  {Icon && <Icon size={30} />}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 w-full">
                <hr className="border-2 border-secondary group-hover:border-sidebarTheme rounded-[8px] w-[55%]" />
                <hr className="border-2 border-secondary group-hover:border-sidebarTheme rounded-[8px] w-[35%]" />
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="group flex flex-col gap-1 hover:bg-navbarDashboard p-[14px] border-2 border-navbarDashboard rounded-[8px] w-full transition-all duration-500"
        >
          <p className="text-sidebarTheme text-xm text-right">{value}</p>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center gap-2">
              <p className="text-navbarDashboard group-hover:text-sidebarTheme">
                {title}
              </p>
              <div>{Icon && <Icon size={30} color="#d2b48c" />}</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <hr className="border-2 border-sidebarTheme rounded-[8px] w-[55%]" />
              <hr className="border-2 border-sidebarTheme rounded-[8px] w-[35%]" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Box;
