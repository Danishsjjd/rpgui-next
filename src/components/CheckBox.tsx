import { ReactNode, useState } from "react"

const CheckBox = ({
  children,
  className,
  defaultCheck,
}: {
  children: ReactNode
  className?: string
  defaultCheck?: boolean
}) => {
  const [isChecked, setIsChecked] = useState(defaultCheck ?? false)
  return (
    <>
      <input
        className={`rpgui-checkbox ${className ? className : ""}`}
        type="checkbox"
        checked={isChecked}
      />
      <label onClick={() => setIsChecked((pre) => !pre)}>{children}</label>
    </>
  )
}

export default CheckBox
