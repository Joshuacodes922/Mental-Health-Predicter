"use client"
import { Input } from "@/components/ui/input"
import { Field, FieldError } from "@/components/ui/field"

export default function InputField({ value, onChange, type, placeholder , submitted }) {
  return (

    
    <Field className="w-full max-w-48">
      <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={value === "" && submitted}
    />
      {value === "" && submitted && <FieldError>Enter Field.</FieldError>}
    </Field>
  )
}