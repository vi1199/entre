/* eslint-disable react/prop-types */
import React from "react"
import {Image} from "react-native"

const BaseImage = (props) => {
	return (
		<Image
			source={props.source}
			style={[
				{
					height: props.height,
					width: props.width,
					borderRadius: props.borderRadius,
					marginHorizontal: props.marginHorizontal,
					marginLeft: props.marginLeft
				},
			]}>
			{props.children}
		</Image>
	)
}
export default BaseImage
