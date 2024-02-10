import React from "react"
export interface CardProps extends React.ComponentProps<"div"> {}
export function Card({ children, ...restProps }: CardProps) {
  return <div {...restProps}>{children}</div>
}
