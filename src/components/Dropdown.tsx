import { pressStart } from "@/pages/_app"
import React, { useState } from "react"

const Dropdown = ({ disabled }: { disabled?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Warrior")
  return (
    <>
      <select
        className="rpgui-dropdown"
        data-rpguitype="dropdown"
        style={{ display: "none" }}
        disabled={disabled}
        defaultValue={"Warrior"}
      >
        <option value="Warrior">Warrior</option>
        <option value="Mage">Mage</option>
        <option value="Rogue">Rogue</option>
        <option value="Ranger">Ranger</option>
      </select>
      <p
        className=" rpgui-dropdown-imp rpgui-dropdown-imp-header"
        onClick={() => (disabled ? null : setIsOpen((pre) => !pre))}
      >
        <label style={{ fontSize: 6 }}>▼</label> {selected}
      </p>
      <ul
        className=" rpgui-dropdown-imp"
        style={{
          position: "absolute",
          width: "310.15px",
          display: isOpen ? "block" : "none",
        }}
      >
        <li
          onClick={() => {
            setSelected("Warrior")
            setIsOpen(false)
          }}
        >
          Warrior
        </li>
        <li
          onClick={() => {
            setSelected("Mage")
            setIsOpen(false)
          }}
        >
          Mage
        </li>
        <li
          onClick={() => {
            setSelected("Rogue")
            setIsOpen(false)
          }}
        >
          Rogue
        </li>
        <li
          onClick={() => {
            setSelected("Ranger")
            setIsOpen(false)
          }}
        >
          Ranger
        </li>
      </ul>
    </>
  )
}

export default Dropdown
