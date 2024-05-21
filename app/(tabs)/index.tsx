import BottomTime from "@/components/clock/BottomTime"
import ClockLines from "@/components/clock/ClockLines"
import Hourhand from "@/components/clock/HourHand"
import LongHand from "@/components/clock/LongHand"
import ShortHand from "@/components/clock/ShortHand"
import TimeHand from "@/components/clock/TimeHand"
import TimeHandV2 from "@/components/clock/TimeHandV2"
import { styles } from "@/constants/TimeHomeStyles"
import { getTime } from "@/helpers/get-time"
import { useEffect, useState } from "react"
import { View, ImageBackground } from "react-native"

const index = () => {
  // const toMilliSec = (x: number) => x * 60000
  const startTime = getTime()

  return (
    <ImageBackground
      source={
        {
          // uri: `https://images.unsplash.com/photo-1549382244-bf08f7a1bf96?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        }
      }
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.clockouter}>
          <ClockLines />
          <TimeHand
            time={startTime.secs}
            duration={60000}
            hand={<LongHand />}
          />
          <IntervalHands startTime={startTime} showSec={false} />
          <View style={styles.clockOrigin} />
        </View>
        <BottomTime />
      </View>
    </ImageBackground>
  )
}

const IntervalHands = ({
  startTime,
  showSec = true,
}: {
  showSec?: boolean
  startTime: ReturnType<typeof getTime>
}) => {
  const [time, setTime] = useState(startTime)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <>
      {showSec && <TimeHandV2 time={time.secs} Hand={<LongHand />} />}
      <TimeHandV2 time={time.min + time.secs / 60} Hand={<ShortHand />} />
      <TimeHandV2
        time={time.hour + time.min / 60}
        unitInDeg={30}
        Hand={<Hourhand />}
      />
    </>
  )
}

export default index
