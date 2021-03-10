/* eslint-disable react/prop-types */
import * as React from "react"
import {TouchableOpacity, View, Text} from "react-native"
import { EntreIcons } from ".."
import headerStyles from "./headerStyles"

const BaseHeader = (props) => {
	return (
		<View style = {headerStyles.container}>
			<TouchableOpacity
				onPress= {props.onPress}
				style={[
					{
						flex: props.flex,
						padding: props.padding,
						paddingHorizontal: props.paddingHorizontal,
						paddingVertical: props.paddingVertical,
						borderRadius: props.radius,
						borderColor: props.borderColor,
						borderWidth: props.borderWidth,
						backgroundColor : props.backgroundColor || headerStyles.container.backgroundColor
					},
				]}>
				<EntreIcons name={"arrow-left"} size= {18}/>
			</TouchableOpacity>
			<Text style = {headerStyles.text}>{props.title}</Text>
		</View>
	)
}
export default BaseHeader
