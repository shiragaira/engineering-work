import { forwardRef, HTMLProps, Ref, useImperativeHandle, useRef } from 'react'

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  className?: string
}

const TextInput = (props: TextInputProps, ref: Ref<HTMLInputElement>) => {
  const { ...inputProps } = props
  const internalRef = useRef<HTMLInputElement>(null)

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    ref,
    () => internalRef.current,
    []
  )

  return (
    <input
      {...inputProps}
      className='px-12 py-8 rounded border-2 border-slate-300 text-sm placeholder:text-sm focus:outline-none'
      ref={internalRef}
    />
  )
}

const _TextInput = forwardRef(TextInput)
export { _TextInput as TextInput }
