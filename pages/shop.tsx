import { useAnalytics } from '~/components/context/analytics'
import SquigglyLines from '../components/SquigglyLines'
import { CHECKOUT_URL, RATE_LIMIT_COUNT } from '~/utils/constants'

export default () => {
  const { analytics } = useAnalytics()

  return (
    <div>
      <h2 className="mt-10 max-w-5xl pb-10 text-center text-4xl font-bold sm:text-7xl">
        次数用完啦！每天都能用 {RATE_LIMIT_COUNT} 次，请点击
        <span className="relative whitespace-nowrap text-[#3290EE]">
          <SquigglyLines />
          <a
            className="relative text-pink-400 hover:underline"
            href={CHECKOUT_URL}
            onClick={() => analytics.track('ShopLink Clicked')}
          >
            点击购买
          </a>
        </span>
        次数哦，💰
      </h2>
    </div>
  )
}
