import React, { useState } from "react"

const List = ({ disabled = false }: { disabled?: boolean }) => {
  const [selected, setSelected] = useState<boolean | string>(false)
  return (
    <>
      <select
        className="rpgui-list"
        id="background-select"
        size={5}
        data-rpguitype="list"
        style={{ display: "none" }}
        disabled={disabled}
      >
        <option value="Blacksmith">Blacksmith</option>
        <option value="Merchant">Merchant</option>
        <option value="City Guard">City Guard</option>
        <option value="Alchemist">Alchemist</option>
        <option value="Explorer">Explorer</option>
        <option value="Thug">Thug</option>
        <option value="Mercenary">Mercenary</option>
        <option value="Royalty">Royalty</option>
        <option value="Gladiator">Gladiator</option>
      </select>
      <ul
        id="background-select-rpgui-list"
        className=" rpgui-list-imp"
        style={{ height: 140 }}
      >
        <li
          data-rpguivalue="Blacksmith"
          className={`${selected === "Blacksmith" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Blacksmith")
          }}
        >
          Blacksmith
        </li>
        <li
          data-rpguivalue="Merchant"
          className={`${selected === "Merchant" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Merchant")
          }}
        >
          Merchant
        </li>
        <li
          data-rpguivalue="City Guard"
          className={`${selected === "City Guard" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("City Guard")
          }}
        >
          City Guard
        </li>
        <li
          data-rpguivalue="Alchemist"
          className={`${selected === "Alchemist" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Alchemist")
          }}
        >
          Alchemist
        </li>
        <li
          data-rpguivalue="Explorer"
          className={`${selected === "Explorer" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Explorer")
          }}
        >
          Explorer
        </li>
        <li
          data-rpguivalue="Thug"
          className={`${selected === "Thug" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Thug")
          }}
        >
          Thug
        </li>
        <li
          data-rpguivalue="Mercenary"
          className={`${selected === "Mercenary" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Mercenary")
          }}
        >
          Mercenary
        </li>
        <li
          data-rpguivalue="Royalty"
          className={`${selected === "Royalty" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Royalty")
          }}
        >
          Royalty
        </li>
        <li
          data-rpguivalue="Gladiator"
          className={`${selected === "Gladiator" ? "rpgui-selected" : ""}`}
          onClick={() => {
            if (disabled) return
            setSelected("Gladiator")
          }}
        >
          Gladiator
        </li>
      </ul>
    </>
  )
}

export default List
