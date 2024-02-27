import { useNavigate } from "react-router-dom"

import { RoutesConfig } from "@/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ToolsMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="mr-4">
      <DropdownMenu>
        <DropdownMenuTrigger>Tools</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => navigate(RoutesConfig.paymentButtonTool)}>
            Payment Button
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate(RoutesConfig.donationButtonTool)}>
            Donation Button
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
