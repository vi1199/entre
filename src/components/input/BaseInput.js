/* eslint-disable react/prop-types */
import React from "react"
import { TextInput } from "react-native"
import constants from "../../utils/constants"
import inputStyles from "./inputStyles"

const BaseInput = (props) => {
	return (
		<TextInput
			{...props}
			style={[inputStyles.container, { 
				paddingVertical: props.padding, 
				paddingHorizontal: props.paddingHorizontal, 
				backgroundColor: props.color, 
				height: props.height,
				paddingTop: props.paddingTop,
				borderRadius: props.borderRadius || constants.borderRadius,
				borderWidth: props.borderWidth || constants.inputBorderWidth,
				alignSelf: props.alignSelf,
				color: props.textColor,
				fontFamily: props.fontFamily}]}
			maxLength={props.length}
			keyboardType={props.keyboardType}
			multiline={props.multiline}
			numberOfLines={props.numberOfLines}
			textAlignVertical={props.textAlignVertical}
			onSelectionChange={props.onSelectionChange}
			placeholder={props.placeholder}
			placeholderTextColor={props.placeholderTextColor}
			onChangeText={props.onChangeText}
		/>
	)
}
export default BaseInput
