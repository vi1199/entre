import { StyleSheet } from "react-native"
import constants from "../utils/constants"
export default StyleSheet.create({
	container: {
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		flex: 1,
		justifyContent: "flex-end"
	},
	view: {
		borderTopLeftRadius : 22,
		borderTopRightRadius: 22,
		backgroundColor: constants.defaultWhite,
		padding: 19
	}
})