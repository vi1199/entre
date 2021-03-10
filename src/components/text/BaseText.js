/* eslint-disable react/prop-types */
import * as React from "react"
import {Text} from "react-native"
import textStyles from "./textStyles"

const BaseText = (props) => {
	return (
		<Text
			style={[
				textStyles.container,
				{
					fontSize: props.size,
					color: props.color,
					fontWeight: props.fontWeight,
					marginHorizontal: props.marginHorizontal,
					marginVertical: props.marginVertical,
					marginLeft: props.marginLeft,
					marginTop: props.marginTop,
					marginRight: props.marginRight,
					marginBottom: props.marginBottom,
					fontFamily: props.fontFamily || "Montserrat-Regular"
				},
			]}>
			{props.children}
		</Text>
	)
}
export default BaseText
