import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React from "react";

interface ArrowLinkProps {
  href: string;
  label: string;
  target?: "_blank" | "_self";
  iconColor?: string;
  className?: string;
}

const ArrowLink = ({
  href,
  label,
  target = "_self",
  iconColor = "#4b5563",
  className = "",
}: ArrowLinkProps) => (
  <Link
    href={href}
    target={target}
    className={`flex flex-row items-center gap-2 group ${className}`}
  >
    <span className="leading-none text-sm md:text-lg text-gray-600">{label}</span>
    <ArrowRight
      size={16}
      color={iconColor}
      className="-rotate-45 group-hover:-rotate-90 duration-200"
    />
  </Link>
);

export default ArrowLink;
