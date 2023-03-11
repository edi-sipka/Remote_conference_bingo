import { useLottie } from 'lottie-react'

const style = {
  opacity: 3,
  width: '45rem',
  height: '70rem'
}

const LottieAnimation = () => {
  const options = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_rajf09bk.json',
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation