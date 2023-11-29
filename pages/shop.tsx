import { useAnalytics } from '~/components/context/analytics'
import SquigglyLines from '../components/SquigglyLines'
import { CHECKOUT_URL, RATE_LIMIT_COUNT } from '~/utils/constants'

export default () => {
  const { analytics } = useAnalytics()

  return (
    <div>
      <h2 className="mt-10 max-w-5xl pb-10 text-center text-4xl font-bold sm:text-7xl">
      很抱歉：因为站长的账号额度耗尽，目前无 Key 用户无法使用，
        <span className="relative whitespace-nowrap text-[#3290EE]">
          <SquigglyLines />
          <a
            className="relative text-pink-400 hover:underline"
            href={CHECKOUT_URL}
            onClick={() => analytics.track('ShopLink Clicked')}
          >
            购买链接
          </a>
        </span>
        💰
      </h2>
    </div>
  )
}
