import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const companies = [
  {
    label: '당근',
    value: '당근',
  },
  {
    label: '와이어드',
    value: '와이어드',
  },
  {
    label: '키클롭스',
    value: '키클롭스',
  },
]

export function CompanySelect({
  onSelected,
}: {
  onSelected?: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className="w-[400px] justify-between"
          role="combobox"
          variant="outline"
        >
          {value
            ? companies.find((company) => company.value === value)?.label
            : '회사를 선택 해 주세요'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search company..." />
          <CommandList>
            <CommandEmpty>회사가 없습니다. 회사 추가하러가기 </CommandEmpty>
            <CommandGroup>
              {companies.map((company) => (
                <CommandItem
                  className="hover:shadow-xl"
                  key={company.value}
                  onSelect={(currentValue) => {
                    const nextValue = currentValue === value ? '' : currentValue
                    setValue(nextValue)
                    onSelected?.(nextValue)
                    setOpen(false)
                  }}
                  value={company.value}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === company.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {company.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
