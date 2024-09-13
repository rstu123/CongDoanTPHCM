/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { DarkModeSwitch } from "./darkModeSwitch";

import Avatarr from '@/assets/avatars/avatar.png'
import { storage } from "@/lib/utils/storage";


export const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = () => {
    storage.remove('token');
    router.replace("/login");
  }

  return (
    <Dropdown >
      <DropdownTrigger>
        <Avatar
          isBordered
          as='button'
          color='primary'
          size='sm'
          src={Avatarr.src}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label='User menu actions'
        className="p-0"
        onAction={(actionKey) => console.log({ actionKey })}>
        <DropdownItem
          key='profile'
          className='flex flex-col justify-start w-full items-start'>
          <p>Đã đăng nhập bằng tài khoản</p>
          <p>admin</p>
        </DropdownItem>
        <DropdownItem key='settings'>Cài Đặt Cá Nhân</DropdownItem>
        <DropdownItem key='team_settings'>Cài Đặt Chung</DropdownItem>
        <DropdownItem key='analytics'>Số Liệu</DropdownItem>
        <DropdownItem key='system'>Hệ Thống</DropdownItem>
        <DropdownItem key='configurations'>Tùy Chỉnh</DropdownItem>
        <DropdownItem key='help_and_feedback'>Báo Lỗi</DropdownItem>
        <DropdownItem
          key='logout'
          className='text-danger'
          color='danger'
          onPress={handleLogout}>
          Đăng Xuất
        </DropdownItem>
        <DropdownItem key='switch'>
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
