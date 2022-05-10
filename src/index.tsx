import 'https://cdn.lordicon.com/lusqsztk.js'
import React from 'react'

type Icons = 'helpCenter' | 'info' | 'notificationBell' | 'warning' | 'chat' | 'clock' | 'autorenew' | 'article' | 'history' | 'trash' | 'play' | 'addCard' | 'thumbsUpDown' | 'cross' | 'spaFlower' | 'snake' | 'ruins' | 'privacyPolicy' | 'edit' | 'bin' | 'flatArrow'

export type LordiconProps = {
  icon?: Icons
  delay?: number
  colors?: {
    primary?: string
    secondary?: string
  },
  trigger?: 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'morph-two-way',
  size?: number | string
} & React.HtmlHTMLAttributes<HTMLDivElement>

export const Lordicon: React.FC<LordiconProps> = ({
  colors = {
    primary: '#fff',
    secondary: '#fff',
  },
  icon = 'bin',
  delay = 1000,
  trigger = 'loop',
  size = 20,
  ...rest
}) => {  
    const cdnLordiconBaseUrl ='https://cdn.lordicon.com/'

    const iconsSchemaJsonFile: Record<Icons, string> = {
      helpCenter: 'njjuilvq.json',
      info: 'aixyixpa.json',
      notificationBell: 'ndydpcaq.json',
      warning: 'rslnizbt.json',
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
      flatArrow: 'iifryyua.json',
    }

    const iconSchemaJsonFile = iconsSchemaJsonFile[icon]

    const lordicon = (
      <lord-icon 
        {...rest}
        colors={`primary:${colors.primary},secondary:${colors.secondary}`}
        src={`${cdnLordiconBaseUrl}${iconSchemaJsonFile}`}
        trigger={trigger}
        delay={delay}
        style={{
            width: size,
            height: size,
        }}
      >
      </lord-icon>
    )

    return lordicon
}

export default Lordicon