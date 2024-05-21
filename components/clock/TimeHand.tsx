import { memo, useEffect, useRef } from "react"
import { Animated, Easing, StyleSheet } from "react-native"

const TimeHand = ({
  oneSecInDeg = 6,
  duration,
  hand,
  time,
}: {
  oneSecInDeg?: number
  hand: JSX.Element
  duration: number
  time: number
}) => {
  const rotate = useRef(new Animated.Value(0)).current
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: [`${time * oneSecInDeg}deg`, `${360 + time * oneSecInDeg}deg`],
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  }, [rotate])

  return (
    <Animated.View
      style={[styles.transformOriginView, { transform: [{ rotate: spin }] }]}
    >
      {hand}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  transformOriginView: {
    position: "absolute",
    bottom: "50%",
    // width: 100,
    // height: 100,
    transformOrigin: "bottom",
  },
})

const MemoTimeHand = memo(TimeHand)
export default MemoTimeHand
