import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

type Props = {
  title: string,
  content: string,
  isFirst?: boolean,
}

export const ListItem = ({title, content, isFirst}: Props) => {
  const [activeItem, setActiveItem] = useState<string | undefined>(isFirst ? title : undefined);

  const handleToggle = (item: string) => {
    setActiveItem(prevItem => (prevItem === item ? undefined : item));
  }

  const isActive = activeItem === title;

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full"
      value={activeItem}
      onValueChange={handleToggle}
    >
      <AccordionItem 
        value={title} 
        className={`p-2 pl-4 pr-4 m-2 rounded-md ${isActive ? 'bg-slate-50' : ''}`}
      >
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
