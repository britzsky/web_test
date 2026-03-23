import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  {
    label: "test1",
    href: "/test1/one",
    submenu: [
      { label: "test1-1", href: "/test1/one" },
      { label: "test1-2", href: "/test1/two" },
    ],
  },
  {
    label: "test2",
    href: "/test2/one",
    submenu: [
      { label: "test2-1", href: "/test2/one" },
      { label: "test2-2", href: "/test2/two" },
    ],
  },
  {
    label: "test3",
    href: "/test3/one",
    submenu: [
      { label: "test3-1", href: "/test3/one" },
      { label: "test3-2", href: "/test3/two" },
    ],
  },
  {
    label: "test4",
    href: "/test4/one",
    submenu: [
      { label: "test4-1", href: "/test4/one" },
      { label: "test4-2", href: "/test4/two" },
    ],
  },
];
