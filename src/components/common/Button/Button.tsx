import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'
import { Loader } from '@/components/common/Loader'

const classNameButtonVariants = {
  primary:
    'max-h-[52px] border-2 border-green-600 hover:border-green-700 rounded px-8 py-12 uppercase font-medium tracking-wide bg-green-600 hover:bg-green-700 transition-colors',
}

const classNameDisabled = 'disabled:bg-slate-300 disabled:border-slate-300'

export enum ButtonVariants {
  'PRIMARY' = 'primary',
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: ButtonVariants
  loading?: boolean
}

export const Button = (props: ButtonProps) => {
  const { variant, loading, className, children, ...rest } = props

  return (
    <button
      className={classNames(classNameButtonVariants[variant], classNameDisabled, className)}
      disabled={loading}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </button>
  )
}
