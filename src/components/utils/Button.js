import React from "react"
import cc from "classcat"

const Button = ({
  variant,
  className,
  onClick,
  type,
  id,
  disabled,
  asLink,
  noClass,
  children,
  ...props
}) => {
  const Element = asLink ? "a" : "button"
  return (
    <Element
      disabled={disabled && disabled}
      onClick={onClick}
      type={type && type}
      id={id && id}
      {...props}
      className={cc({
        button: !noClass,
        [`button--${variant}`]: !noClass && variant,
        [className]: className,
      })}
    >
      {children}
    </Element>
  )
}

export default Button
