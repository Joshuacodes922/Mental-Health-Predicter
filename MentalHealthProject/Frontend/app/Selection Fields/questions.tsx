"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Field, FieldError } from "@/components/ui/field"

export default function Questions({ value, onChange, options, submitted}) {
  return (
    <Field className="w-full max-w-48">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          aria-invalid={value === "" && submitted}
          className="w-[180px]"
        >
          <SelectValue placeholder={options[0]?.label} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {value === "" && submitted && <FieldError>Please select an option.</FieldError>}
    </Field>
  )
}