import { getTime } from "@/helpers/get-time"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"

const BottomTime = () => {
  const normalizeNum = (x: number) => x.toString().padStart(2, "0")

  const [cTime, setCTime] = useState(getTime())

  useEffect(() => {
    setInterval(() => {
      setCTime(getTime())
    }, 1000)
  }, [])
  return (
    <View>
      <Text style={styles.time}>
        {normalizeNum(cTime.hour)} : {normalizeNum(cTime.min)} :{" "}
        {normalizeNum(cTime.secs)}
      </Text>
      <Text style={styles.date}>{cTime.dateString}</Text>
    </View>
  )
}

export default BottomTime

const styles = StyleSheet.create({
  time: {
    color: "#fff",
    marginTop: 40,
    fontFamily: "Orbitron",
    fontWeight: "500",
    fontSize: 35,
  },

  date: {
    color: "#fff",
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
  },
})
