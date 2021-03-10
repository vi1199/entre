import { StyleSheet } from "react-native"
import constants from "../../utils/constants"

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 27,
		paddingLeft: 21,
		alignItems: "center"  
	},
	text: {
		fontSize: 18,
		fontFamily: "Montserrat-Regular",
		fontWeight: "600",
		marginLeft:8.5,
		color: constants.defaultBlack 
	}
})