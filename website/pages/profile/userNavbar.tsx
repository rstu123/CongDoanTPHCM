/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { Navbar, NavbarContent, NavbarItem, Button, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import NextLink from "next/link";

import styles from '@/styles/App.module.css'
import { siteConfig } from "@/config/site";
import flagVN from '@/assets/flagVN.png'
import flagUSA from '@/assets/flagUSA.png'


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
    <DropdownMenu className="p-0 bg-slate-50 rounded-none z-50" onMouseLeave={onMouseLeave}>
      {items.map((item, index) => (
        <DropdownItem key={`${item.href}-${index}`} className="p-0 rounded bg-slate-50 z-50">
          {item.children ? (
            <Dropdown>
              <DropdownTrigger>
                <Button className="text-left bg-slate-50 text-black w-full rounded z-50" color="primary" variant="light">
                  {item.label}
                </Button>
              </DropdownTrigger>
              <div className="dropdown-menu-left z-50">
                <RecursiveDropdown items={item.children} onMouseLeave={onMouseLeave} />
              </div>
            </Dropdown>
          ) : (
            <NextLink passHref href={item.href}>
              <Button className="text-left bg-slate-50 text-black w-full rounded z-50" color="primary" variant="light">
                {item.label}
              </Button>
            </NextLink>
          )}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};

export default function userNavbar() {

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
    "Hỏi đáp": [
      {label: "Đại hội Công đoàn Các cấp", href: "#"},
      {label: "Chính sách, Pháp luật", href: "#"},
      {label: "Biểu mẫu", href: "#"},
      {label: "Nghiệp vụ Công đoàn", href: "#"},
    ],
    "Công Việc": [
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

// Extracted children


  // Extracted children
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const navbarRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (navbar) {
        const navbarTop = navbar.offsetTop;
        const scrollTop = window.pageYOffset;
        const threshold = 20; // Adjust threshold as needed

        setIsFixed(scrollTop >= navbarTop + threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar ref={navbarRef} className={`bg-blue-700 h-10 w-full ${!isFixed ? '' : 'fixed'}`} position="sticky">
        <NavbarContent className="transition-all duration-300 gap-1 flex sm:gap-5 z-50" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className={`relative transition-colors duration-300 ${dropdownData[item.label] ? 'group cursor-pointer' : ''}`}
              onMouseEnter={() => dropdownData[item.label] && setShowDropdown(item.label)}
              onMouseLeave={() => dropdownData[item.label] && setShowDropdown(null)}
            >
              {dropdownData[item.label] ? (
                <>
                  <span className={`${item.label === "Hội viên" ? `${styles.textChanging} text-[10px] sm:text-lg text-white font-bold uppercase` : "text-[10px] sm:text-lg text-white font-bold uppercase group-hover:bg-blue-800 px-1 py-1 rounded transition-colors"}`}>
                    {item.label}
                  </span>
                  {showDropdown === item.label && (
                    <Dropdown isOpen={showDropdown === item.label}>
                      <RecursiveDropdown items={dropdownData[item.label]} onMouseLeave={() => setShowDropdown(null)} />
                    </Dropdown>
                  )}
                </>
              ) : (
                <NextLink className="text-[10px] sm:text-lg text-white font-bold uppercase hover:bg-blue-800 px-2 py-2 rounded transition-colors" href={item.href}>
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
        </NavbarContent>
      </Navbar>
    </>
  );
}
