/* eslint-disable react/prop-types */
import React from "react"
import {View} from "react-native"
import styles from "./viewStyles"

const BaseView = (props) => {
	return (
		<View
			style={[
				styles.container,
				{
					flex: props.flex,
					flexDirection: props.flexDirection,
					justifyContent: props.justifyContent,
					alignItems: props.alignItems,
					height: props.height,
					backgroundColor: props.backgroundColor,
					margin: props.margin,
					marginTop: props.marginTop,
					marginHorizontal: props.marginHorizontal,
					marginLeft: props.marginLeft,
					marginRight: props.marginRight,
					marginBottom: props.marginBottom,
					marginVertical: props.marginVertical,
					alignSelf: props.alignSelf,
					elevation: props.elevation,
					padding: props.padding,
					borderRadius: props.radius,
					borderWidth: props.borderWidth,
					borderColor: props.borderColor,
					paddingLeft: props.paddingLeft,
					paddingRight: props.paddingRight,
					position: props.position,
					top: props.top,
					left: props.left,
					right: props.right,
					zIndex: props.zIndex
				},
			]}>
			{props.children}
		</View>
	)
}
export default BaseView
