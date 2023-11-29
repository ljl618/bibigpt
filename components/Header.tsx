import { Poppins } from '@next/font/google'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import SignIn from '~/components/SignIn'
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip'
import { BASE_DOMAIN } from '~/utils/constants'
import Github from '../components/GitHub'
const poppins = Poppins({ weight: '800', subsets: ['latin'] })

export default function Header({ showSingIn }: { showSingIn: (show: boolean) => void }) {
  return (
    <header className="supports-backdrop-blur:bg-white/60 max-w-8xl sticky top-0 z-40 mx-auto w-full flex-none border-b border-slate-900/10 bg-white/95 pt-2 backdrop-blur  transition-colors duration-500 dark:border-slate-50/[0.06] dark:border-slate-300/10 dark:bg-transparent lg:z-50 lg:mx-0 lg:border-0 lg:border-b lg:border-slate-900/10 lg:px-8">
      <div className="flex items-center justify-between px-3 sm:px-3">
        <div className="flex items-center space-x-3">
          <Image src="/video-off.svg" alt="logo" className="animate-bounce" width={34} height={34} />
          <h2 className={clsx('text-lg sm:text-2xl', poppins.className)}>
              <span className="text-pink-400">哔哔终结者</span> BibiGPT
          </h2>
          <div
            id="banner"
            className="z-50 mx-4 flex hidden w-auto justify-center border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:block lg:border-0 lg:px-8"
          >
          </div>
        </div>
      </div>
    </header>
  )
}
