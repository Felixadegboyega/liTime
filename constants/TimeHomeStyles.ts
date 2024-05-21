import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "center",
	},
	clockOrigin: {
		backgroundColor: "#f3f3f3",
		height: 10,
		width: 10,
		position: "absolute",
		borderRadius: 1000,
	},

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	bg: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#000000a1",
		justifyContent: "center",
	},
	clockouter: {
		backgroundColor: "#000",
		shadowColor: "#ccc",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
		height: 240,
		width: 240,
		borderRadius: 1000,
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},

	footer: {
		paddingBottom: 60,
		color: '#fff',
		textAlign: 'center',
		fontSize: 12
	}
})