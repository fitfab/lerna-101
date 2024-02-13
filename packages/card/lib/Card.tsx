import React from "react"
export interface CardProps extends React.ComponentProps<"div"> {}
export function Card({ children, ...restProps }: CardProps) {
  return (
    <div {...restProps}>
      <h2>Card</h2>
      {children}
    </div>
  )
}
