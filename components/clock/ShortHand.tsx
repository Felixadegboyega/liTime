import Svg, { Path } from "react-native-svg"

function ShortHand({ deg }: { deg?: string }) {
  return (
    <Svg
      style={
        {
          // borderColor: "#fff",
          // borderWidth: 1,
        }
      }
      width="100px"
      height="100px"
      viewBox="0 0 24.00 20.00"
      fill="none"
    >
      <Path
        d="M12 19V5"
        stroke="#f3f3f3b2"
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShortHand
