import React from "react"
/**
 * Ref: https://www.totaltypescript.com/concepts/react-componentprops-type-helper
 */
export interface Buttonprops extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline"
}
export function Button({ children, ...restProps }: Buttonprops) {
  return <button {...restProps}>{children}</button>
}
