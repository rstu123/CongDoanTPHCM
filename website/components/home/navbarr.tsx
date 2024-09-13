/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { Navbar, NavbarContent, NavbarItem, Button, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import NextLink from "next/link";
import styles from '@/styles/App.module.css';
import { siteConfig } from "@/config/site";
import flagVN from '@/assets/flagVN.png';
import flagUSA from '@/assets/flagUSA.png';

// Define types for dropdown items
interface DropdownItemType {
  label: string;
  href: string;
  children?: DropdownItemType[];
}

interface RecursiveDropdownProps {
  items: DropdownItemType[];
  onMouseLeave: () => void;
}

const RecursiveDropdown: React.FC<RecursiveDropdownProps> = ({ items, onMouseLeave }) => {
  return (
    <DropdownMenu
      className={`${styles.noGap} bg-slate-50 z-50`}  // Applying no-gap and no-rounded styles
      onMouseLeave={onMouseLeave}
    >
      {items.map(item => (
        <DropdownItem key={item.href} className={`${styles.noGap} bg-slate-50`}>
          {item.children ? (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className={`text-left bg-slate-50 text-black w-full border-none`}  // Applying rectangular-item style
                  color="primary"
                  variant="flat"
                >
                  {item.label}
                </Button>
              </DropdownTrigger>
              <div className={`${styles.noGapMenu} dropdown-menu-left`}>  {/* Applying no-gap-menu style */}
                <RecursiveDropdown items={item.children} onMouseLeave={onMouseLeave} />
              </div>
            </Dropdown>
          ) : (
            <NextLink href={item.href} passHref>
              <Button
                className={`text-left bg-slate-50 text-black w-full border-none`}  // Applying rectangular-item style
                color="primary"
                variant="flat"
              >
                {item.label}
              </Button>
            </NextLink>
          )}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};


export default function Navbarr() {
  const data: DropdownItemType[] = [
    { label: "Trung tâm Báo chí TP Hồ Chí Minh", href: "TTBCTPHCM" }
  ];

  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [isDropdownSticky, setIsDropdownSticky] = useState<boolean>(false);

  const dropdownData: Record<string, DropdownItemType[]> = {
    "Giới thiệu": [
      {
        label: "Công Đoàn Việt Nam", href: "/",
        children: [
          { label: "Điều Lệ Công Đoàn Việt Nam", href: "gioiThieu/CDVN/dieulecongdoan" },
          { label: "Hướng Dẫn Thực Hiện Điều Lệ", href: "gioiThieu/CDVN/huongdandieule" }
        ]
      },
      {
        label: "Công Đoàn Thành phố Hồ Chí Minh", href: "/",
        children: [
          { label: "Văn Kiện Đại Hội", href: "gioiThieu/CDTPHCM/van-kien-dai-hoi" },
          { label: "Ban Chấp Hành Các Thời Kỳ", href: "gioiThieu/CDTPHCM/bch-cac-thoi-ky" },
          { label: "Cơ Cấu Tổ Chức", href: "gioiThieu/CDTPHCM/co-cau-to-chuc" },
        ]
      },
    ],
    "Tin tức": [
      { label: "Đời sống lao động", href: "#" },
      { label: "Thông tin hoạt động", href: "#" },
      { label: "Truyền hình công nhân công đoàn", href: "#" },
      { label: "Tin công đoàn (Báo Người Lao Động)", href: "#" },
      { label: "Tuyên truyền", href: "#" },
      { label: "Công khai tài chính", href: "#" },
    ],
    "Điều hành": [
      { label: "Văn phòng điện tử", href: "#" },
      { label: "Hệ thống văn bản", href: "#" },
      {
        label: "Lịch công tác tuần", href: "#",
        children: [
          { label: "Đăng Ký Lịch", href: "sub1" },
        ]
      },
      { label: "Báo cáo", href: "#" },
    ],
    "Hội viên": [
      { label: "Đăng nhập", href: siteConfig.login.href },
      { label: "Đăng ký", href: siteConfig.register.href },
    ]
  };

  const navbarRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setShowDropdown(null);
        setIsDropdownSticky(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle the dropdown click
  const handleDropdownClick = (label: string) => {
    if (showDropdown === label && isDropdownSticky) {
      setShowDropdown(null);
      setIsDropdownSticky(false);
    } else {
      setShowDropdown(label);
      setIsDropdownSticky(true);
    }
  };

  return (
    <>
      <Navbar ref={navbarRef} className="bg-blue-700 h-10 w-full">
        <NavbarContent className="transition-all duration-300 gap-1 flex sm:gap-3" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className={`relative transition-colors duration-300 ${dropdownData[item.label] ? 'group cursor-pointer' : ''}`}
              onMouseEnter={() => dropdownData[item.label] && setShowDropdown(item.label)}
              onMouseLeave={() => dropdownData[item.label] && !isDropdownSticky && setShowDropdown(null)}
            >
              {dropdownData[item.label] ? (
                <>
                  <span
                    className={`${item.label === "Hội viên" ? `${styles.textChanging} text-[10px] sm:text-lg text-white font-bold uppercase` : "text-[10px] sm:text-lg text-white font-bold uppercase group-hover:bg-blue-800 px-1 py-1 rounded transition-colors"}`}
                    onClick={() => handleDropdownClick(item.label)}
                    role="button" // Add the role of a button
                    tabIndex={0} // Add tabIndex to make it focusable via keyboard
                    onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                    handleDropdownClick(item.label); // Trigger click with Enter or Space key
                    }
                  }}
                aria-expanded={showDropdown === item.label} // Indicate whether the dropdown is open
              aria-haspopup="true" // Indicate that it triggers a menu
            >
                 {item.label}
                   </span>

                  {showDropdown === item.label && (
                    <Dropdown isOpen={showDropdown === item.label} placement="bottom-end">
                      <RecursiveDropdown items={dropdownData[item.label]} onMouseLeave={() => !isDropdownSticky && setShowDropdown(null)} />
                    <></>
                    </Dropdown>

                  )}
                </>
              ) : (
                <NextLink className="text-[10px] sm:text-lg text-white font-bold uppercase hover:bg-blue-800 px-2 py-1 rounded transition-colors" href={item.href}>
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly className="p-1 sm:p-0" variant="light">
              <NextImage alt="Flag VietNam" className="w-4 sm:w-7" src={flagVN} />
            </Button>
            <Button isDisabled isIconOnly className="p-1 sm:p-0" variant="light">
              <NextImage alt="Flag USA" className="w-4 sm:w-7" src={flagUSA} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Autocomplete className="w-full flex items-center sm:block" defaultItems={data} placeholder="Tìm kiếm ..." size="sm">
              {data.map((index) => (
                <AutocompleteItem key={index.label}>
                  {index.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
