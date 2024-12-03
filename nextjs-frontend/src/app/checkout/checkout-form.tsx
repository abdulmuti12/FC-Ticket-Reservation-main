/* eslint-disable camelcase */
'use client'

import { checkoutAction } from '@/actions'
import { ErrorMessage } from '@/components/error-message'
import { PropsWithChildren } from 'react'
import { useFormState } from 'react-dom'

export async function getCardHash() {
  return Math.random().toString(36).substring(7)
}

export type CheckoutFormProps = {
  className?: string
}

export function CheckoutForm(props: PropsWithChildren<CheckoutFormProps>) {
  const [state, formAction] = useFormState(checkoutAction, {
    error: null as string | null,
  })

  return (
    <form
      action={async (formData: FormData) => {
        const card_hash = await getCardHash()
        formAction({
          cardHash: card_hash,
          email: formData.get('email') as string,
        })
      }}
      className={props.className}
    >
      {state?.error && <ErrorMessage error={state.error} />}
      <input type="hidden" name="card_hash" />
      {props.children}
    </form>
  )
}
