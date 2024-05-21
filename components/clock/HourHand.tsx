import Svg, { Path } from "react-native-svg"

function Hourhand({ deg }: { deg?: string }) {
  return (
    <Svg
      style={
        {
          // borderColor: "#fff",
          // borderWidth: 1,
        }
      }
      width="60px"
      height="60px"
      viewBox="0 0 24.00 23.00"
      fill="none"
    >
      <Path
        d="M12 19V5"
        stroke="#ccc"
        strokeWidth={0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Hourhand
