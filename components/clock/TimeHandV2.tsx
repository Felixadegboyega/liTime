import { useEffect, useRef, useState } from "react"
import { Animated, Easing, StyleSheet, Text, View } from "react-native"

const TimeHandV2 = ({
  unitInDeg = 6,
  Hand,
  time,
}: {
  unitInDeg?: number
  Hand: JSX.Element
  time: number
}) => {
  return (
    <View
      style={[
        styles.transformOriginView,
        { transform: [{ rotate: `${time * unitInDeg}deg` }] },
      ]}
    >
      {Hand}
      {/* <Text style={{ color: "#fff" }}>{time * unitInDeg}</Text> */}
    </View>
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

export default TimeHandV2
