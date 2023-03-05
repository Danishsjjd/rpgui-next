import { ReactNode, useState } from "react"

const Radio = ({
  children,
  className,
  defaultCheck,
  name,
}: {
  children: ReactNode
  className?: string
  defaultCheck?: boolean
  name?: string
}) => {
  const [isChecked, setIsChecked] = useState(defaultCheck ?? false)
  return (
    <>
      <input
        className={`rpgui-radio ${className ? className : ""}`}
        checked={isChecked}
        name={name || "radio"}
        type="radio"
        onChange={() => {}}
      />
      <label onClick={() => setIsChecked((pre) => !pre)}>{children}</label>
    </>
  )
}

export default Radio
