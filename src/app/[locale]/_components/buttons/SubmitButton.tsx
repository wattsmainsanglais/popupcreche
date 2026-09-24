'use client'

import { ReactNode } from 'react'
import { ImSpinner8 } from 'react-icons/im'


export const SubmitButton = ({ children, pending }: { children: ReactNode, pending: boolean }) => {

    return (
      <button type="submit" disabled={pending}
        className="mt-1 flex h-12 items-center justify-center rounded-full bg-sage-dark px-8 text-lg font-bold text-white transition-colors hover:bg-ink disabled:opacity-70">
        {pending ? <ImSpinner8 className="animate-spin" aria-label="Sending" /> : children}
      </button>
    )
  }
