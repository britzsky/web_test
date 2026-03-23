"use client";
import { useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{
  item: HeaderItem;
  isOnLight?: boolean;
  variant?: "default" | "test1";
}> = ({ item, isOnLight = false, variant = "default" }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const handleToggleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubmenuOpen((prev) => !prev);
  };

  const path = usePathname();
  const primaryHref = item.submenu?.[0]?.href || item.href;

  const isTestVariant = variant === "test1";

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`text-base flex items-center gap-0.5 font-normal px-2 py-1 rounded-md ${
          isTestVariant
            ? "text-[#1F1F1F] dark:text-white hover:text-[#C39265] dark:hover:text-[#C39265]"
            : isOnLight
              ? "text-black dark:text-white hover:text-[#C39265] dark:hover:text-[#C39265]"
              : "text-white"
        } ${
          isTestVariant ? "" : "hover:text-[#C39265] dark:hover:text-[#C39265]"
        } ${
          item.href === path || path.startsWith(`/${item.label.toLowerCase()}`)
            ? isTestVariant
              ? "text-[#1F1F1F] dark:text-white"
              : `text-[#D3FECD] ${isOnLight ? "bg-[#2F5D3A]" : ""}`
            : ""
        } ${submenuOpen ? (isTestVariant ? "!text-[#1F1F1F] dark:!text-white" : "!text-[#D3FECD]") : ""} ${
          submenuOpen && isOnLight && !isTestVariant ? "bg-[#2F5D3A]" : ""
        }`}
      >
        <Link
          href={primaryHref}
          className={`flex items-center transition-colors duration-200 ${
            isTestVariant ? "group-hover:text-[#C39265] hover:text-[#C39265]" : ""
          }`}
        >
          {item.label}
        </Link>
        {item.submenu && (
          <button
            type="button"
            aria-label={`${item.label} submenu`}
            aria-expanded={submenuOpen}
            onClick={handleToggleClick}
            className={`flex items-center transition-transform duration-200 ${submenuOpen ? "rotate-180" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="transition-transform duration-200"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>
        )}
      </div>
      {item.submenu && (
        <ul
          className={`absolute left-0 top-full mt-0 w-60 rounded-none border border-black/20 bg-white py-2 shadow-lg transition-opacity ${
            submenuOpen ? "visible opacity-100" : "invisible opacity-0"
          } group-hover:visible group-hover:opacity-100 z-50`}
        >
          {item.submenu?.map((subItem, index) => (
            <li key={index}>
              <Link
                href={subItem.href}
                className="block px-4 py-2 text-black hover:text-[#C39265]"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HeaderLink;
