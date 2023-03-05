import React, { useState } from "react"

const Dropdown = ({ disabled }: { disabled?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <select
        className="rpgui-dropdown"
        data-rpguitype="dropdown"
        style={{ display: "none" }}
        disabled={disabled}
      >
        <option value="Warrior" selected>
          Warrior
        </option>
        <option value="Mage">Mage</option>
        <option value="Rogue">Rogue</option>
        <option value="Ranger">Ranger</option>
      </select>
      <p
        className=" rpgui-dropdown-imp rpgui-dropdown-imp-header"
        onClick={() => (disabled ? null : setIsOpen((pre) => !pre))}
      >
        <label>▼</label> Warrior
      </p>
      <ul
        className=" rpgui-dropdown-imp"
        style={{
          position: "absolute",
          width: "310.15px",
          display: isOpen ? "block" : "none",
        }}
      >
        <li>Warrior</li>
        <li>Mage</li>
        <li>Rogue</li>
        <li>Ranger</li>
      </ul>
    </>
  )
}

export default Dropdown
