import React from "react"

const List = ({ disabled = false }: { disabled?: boolean }) => {
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
        <li data-rpguivalue="Blacksmith" className="">
          Blacksmith
        </li>
        <li data-rpguivalue="Merchant" className="">
          Merchant
        </li>
        <li data-rpguivalue="City Guard" className="">
          City Guard
        </li>
        <li data-rpguivalue="Alchemist" className="">
          Alchemist
        </li>
        <li data-rpguivalue="Explorer" className="">
          Explorer
        </li>
        <li data-rpguivalue="Thug" className="">
          Thug
        </li>
        <li data-rpguivalue="Mercenary" className="">
          Mercenary
        </li>
        <li data-rpguivalue="Royalty" className="">
          Royalty
        </li>
        <li data-rpguivalue="Gladiator" className="">
          Gladiator
        </li>
      </ul>
    </>
  )
}

export default List
