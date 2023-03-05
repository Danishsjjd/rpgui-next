import { ComponentProps, ReactNode } from "react"

interface InputGroupProps extends ComponentProps<"button"> {
  children: ReactNode
  className?: string
}

const Button = ({ children, className, ...props }: InputGroupProps) => {
  return (
    <button
      className={`rpgui-button ${className ? className : ""}`}
      type={"button"}
      {...props}
    >
      <p>{children}</p>
    </button>
  )
}

export default Button
