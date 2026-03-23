import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  isOnLight?: boolean;
  variant?: "default" | "test1";
}> = ({ item, isOnLight = false, variant = "default" }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();
  const primaryHref = item.submenu?.[0]?.href || item.href;
  const isActive =
    path === item.href || (item.submenu && path.startsWith(`${item.href}/`));

  const isTestVariant = variant === "test1";

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center justify-between w-full py-2 px-2 rounded-md focus:outline-none ${
          isTestVariant
            ? "text-[#1F1F1F] hover:text-[#1F1F1F] hover:bg-transparent"
            : isOnLight
              ? "text-black dark:text-white hover:bg-[#7CE17C]"
              : "text-white"
        } ${
          isTestVariant ? "" : "hover:text-[#D3FECD] dark:hover:text-[#D3FECD]"
        } ${
          isActive
            ? isTestVariant
              ? "text-[#1F1F1F]"
              : `text-[#D3FECD] ${isOnLight ? "bg-[#2F5D3A]" : ""}`
            : ""
        } ${submenuOpen ? (isTestVariant ? "!text-[#1F1F1F]" : "!text-[#D3FECD]") : ""}`}
      >
        <Link href={primaryHref} className="flex-1">
          {item.label}
        </Link>
        {item.submenu && (
          <button
            type="button"
            onClick={handleToggle}
            aria-label={`${item.label} submenu`}
            className="ml-2 flex items-center"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
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
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-black/70 hover:bg-[#D3FECD]"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
