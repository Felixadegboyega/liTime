import { memo } from "react"
import Svg, { Path } from "react-native-svg"

function LongHand({ deg }: { deg?: string }) {
  return (
    <Svg
      width="100px"
      style={
        {
          // borderColor: "#fff",
          // borderWidth: 1,
          // transform: [{ rotate: deg }],
          // transformOrigin: "bottom",
          // position: "absolute",
          // bottom: "50%",
        }
      }
      height="100px"
      viewBox="0 0 24 23.5"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      //   {...props}
    >
      <Path
        d="M12 21V3"
        stroke="#c4c4c5"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default memo(LongHand)
