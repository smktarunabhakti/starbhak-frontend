import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface ButtonWithIconInterface{
    icon: ReactNode
    text: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

export default function ButtonWithIcon(props: ButtonWithIconInterface) {
  return (
    <Button variant={props.variant}>
      {props.icon} {props.text}
    </Button>
  )
}
