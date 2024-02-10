import React from "react"
export interface Buttonprops extends React.ComponentProps<"button"> {}
export function Button({ children, ...restProps }: Buttonprops) {
  return <button {...restProps}>{children}</button>
}
