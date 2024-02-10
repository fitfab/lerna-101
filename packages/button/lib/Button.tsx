import React from "react"
/**
 * Ref: https://www.totaltypescript.com/concepts/react-componentprops-type-helper
 */
export interface Buttonprops extends React.ComponentProps<"button"> {}
export function Button({ children, ...restProps }: Buttonprops) {
  return <button {...restProps}>{children}</button>
}
