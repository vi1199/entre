/* eslint-disable react/prop-types */
import React from "react"
import {View} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

let IconComponent = MaterialCommunityIcons

const EntreIcon= ({name, size, color, style})=> (
	<View
		style={{
			justifyContent: "center",
			alignItems: "center",
			...style
		}}
	>
		<IconComponent name= {name} size= {size} color= {color}/>
	</View>
)
export default EntreIcon


