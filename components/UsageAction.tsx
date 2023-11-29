import React from 'react'

export function UsageAction() {
  return (
    <p className="mt-10 text-center text-lg text-gray-500 sm:text-2xl">
      在下面的输入框，直接复制粘贴
      <a
        className="text-sky-400"
        href="https://www.bilibili.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' bilibili.com/youtube.com '}
      </a>
      视频链接 👇
    </p>
  )
}
