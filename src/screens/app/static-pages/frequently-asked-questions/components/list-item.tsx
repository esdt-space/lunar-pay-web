import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

type Props = {
  title: string,
  content: string
}

export const ListItem = ({title, content}: Props) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleToggle = (item: string) => {
    setActiveItem(prevItem => (prevItem === item ? null : item));
  }

  const isActive = activeItem === title;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem 
        value={title} 
        className={`p-2 pl-4 pr-4 m-2 rounded-md ${isActive ? 'bg-slate-50' : ''}`}
        onClick={() => handleToggle(title)}
      >
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
