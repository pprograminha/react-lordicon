import 'https://cdn.lordicon.com/xdjxvujz.js'
import React from 'react'

export type LordiconIcons =
  | 'bolt'
  | 'helpCenter'
  | 'info'
  | 'notificationBell'
  | 'error'
  | 'warning'
  | 'helpQuestion'
  | 'alarm'
  | 'arrowUp'
  | 'arrowDown'
  | 'chat'
  | 'clock'
  | 'autorenew'
  | 'article'
  | 'history'
  | 'trash'
  | 'play'
  | 'addCard'
  | 'thumbsUpDown'
  | 'cross'
  | 'spaFlower'
  | 'snake'
  | 'ruins'
  | 'privacyPolicy'
  | 'edit'
  | 'bin'
  | 'flatArrow'

export type LordiconTrigger =
  | 'hover'
  | 'click'
  | 'loop'
  | 'loop-on-hover'
  | 'morph'
  | 'morph-two-way'

export type LordiconColors = {
  primary?: string
  secondary?: string
}

export type LordiconProps = {
  icon?: LordiconIcons
  colors?: LordiconColors
  trigger?: LordiconTrigger

  delay?: number | string
  size?: number | string
} & React.HtmlHTMLAttributes<HTMLDivElement>

export type LordiconElement = HTMLElement & {
  src?: string
  trigger?: LordiconTrigger
  colors?: LordiconColors
  delay?: string | number
}

export const Lordicon: React.FC<LordiconProps> = ({
  colors = {
    primary: '#fff',
    secondary: '#fff'
  },
  icon = 'helpCenter',
  delay = 1000,
  trigger = 'loop',
  size = 20,
  ...rest
}) => {
  const cdnLordiconBaseUrl = 'https://cdn.lordicon.com/'

  const lordiconIcons: Record<LordiconIcons, string> = {
    bolt: 'giaigwkd.json',
    helpCenter: 'njjuilvq.json',
    info: 'aixyixpa.json',
    notificationBell: 'ndydpcaq.json',
    error: 'otyynlki.json',
    warning: 'rslnizbt.json',
    helpQuestion: 'keogyrep.json',
    alarm: 'rinkvymq.json',
    arrowUp: 'eflfmgmj.json',
    arrowDown: 'xhdhjyqy.json',
    chat: 'uvextprq.json',
    clock: 'abgtphux.json',
    autorenew: 'sihdhmit.json',
    trash: 'dovoajyj.json',
    article: 'sygggnra.json',
    history: 'lefmybnc.json',
    play: 'fetyzpiw.json',
    addCard: 'auvicynv.json',
    thumbsUpDown: 'rahcoaeu.json',
    cross: 'vfzqittk.json',
    spaFlower: 'dqunxaob.json',
    snake: 'jlkaerma.json',
    ruins: 'uixzulhh.json',
    privacyPolicy: 'yyecauzv.json',
    edit: 'wloilxuq.json',
    bin: 'gsqxdxog.json',
    flatArrow: 'iifryyua.json'
  }

  const lordiconIcon = lordiconIcons[icon]

  const lordicon = (
    <lord-icon
      {...rest}
      colors={`primary:${colors.primary},secondary:${colors.secondary}`}
      src={`${cdnLordiconBaseUrl}${lordiconIcon}`}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size
      }}
    />
  )

  return lordicon
}

export default Lordicon
