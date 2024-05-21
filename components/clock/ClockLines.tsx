import Svg, { Circle, G, Line } from "react-native-svg"

function ClockLines() {
  const radius = 90
  const centerX = 100
  const centerY = 100
  const angleIncrement = 30 // 30 degrees

  return (
    <Svg width={240} height={240} viewBox="0 0 200 200">
      <Circle
        cx={centerX}
        cy={centerY}
        r={radius}
        // stroke="#333"
        fill="none"
        strokeWidth={2}
      />
      <G stroke="#cccccc">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            const angle = index * angleIncrement
            const startX =
              centerX + radius * Math.cos(((angle - 90) * Math.PI) / 180)
            const startY =
              centerY + radius * Math.sin(((angle - 90) * Math.PI) / 180)
            const endX =
              centerX + (radius - 10) * Math.cos(((angle - 90) * Math.PI) / 180)
            const endY =
              centerY + (radius - 10) * Math.sin(((angle - 90) * Math.PI) / 180)

            return (
              <Line
                key={index}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                strokeWidth={1}
              />
            )
          })}
      </G>
    </Svg>
  )
}

export default ClockLines
