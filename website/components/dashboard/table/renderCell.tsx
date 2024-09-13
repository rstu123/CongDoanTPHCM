/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React from "react"
import { User, Tooltip, Chip } from "@nextui-org/react"

import { users } from "./data"

import { DeleteIcon } from "@/components/icons/table/deleteIcon"
import { EditIcon } from "@/components/icons/table/editIcon"
import { EyeIcon } from "@/components/icons/table/eyeIcon"

interface Props {
  user: (typeof users)[number]
  columnKey: string | React.Key
}

export const RenderCell = ({ user, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey]

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            src: user.avatar,
          }}
          name={cellValue}
        >
          {user.name}
        </User>
      )
    case "role":
      return (
        <div>
          <div>
            <span>{cellValue}</span>
          </div>
          <div>
            <span>{user.team}</span>
          </div>
        </div>
      )
    case "status":
      return (
        <Chip
          color={
            cellValue === "trực tuyến"
              ? "success"
              : cellValue === "rời"
                ? "danger"
                : "warning"
          }
          size="sm"
          variant="flat"
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      )

    case "actions":
      return (
        <div className="flex justify-end items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("View user", user.id)}>
                <EyeIcon fill="#979797" size={20} />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip color="secondary" content="Edit user">
              <button onClick={() => console.log("Edit user", user.id)}>
                <EditIcon fill="#979797" size={20} />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              color="danger"
              content="Delete user"
              onClick={() => console.log("Delete user", user.id)}
            >
              <button>
                <DeleteIcon fill="#FF0080" size={20} />
              </button>
            </Tooltip>
          </div>
        </div>
      )
    default:
      return cellValue
  }
}
