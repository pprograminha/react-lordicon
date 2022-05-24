import 'react'

type LordiconTrigger =
  | 'hover'
  | 'click'
  | 'loop'
  | 'loop-on-hover'
  | 'morph'
  | 'morph-two-way'

type LordiconProps = {
  src?: string
  trigger?: LordiconTrigger
  colors?: string
  delay?: string | number
}

type LordiconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordiconProps

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': LordiconElement
    }
  }
}
