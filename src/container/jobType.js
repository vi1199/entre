import React, { useState } from "react"
import {Picker} from "@react-native-picker/picker"
import { BaseText, BaseView } from "../components"
import constants from "../utils/constants"
const jobTypes = [
	"Co-Founder",
	"Full-Time",
	"Part time",
	"Contract",
	"Internship",
	"Advisor"
]
const JobType = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()
	return (
		<BaseView marginTop={20} paddingLeft={26.77} paddingRight={27.59}>
			<BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
				{"Job Type"}
			</BaseText>
			<BaseView
				marginTop={14}
				borderWidth={1}
				borderColor={constants.inputBorderColor}
				radius={constants.borderRadius}>
				{/* custom dropdown can also be done ////////////////////// 
                <TouchableOpacity 
                    onPress= {() => openJobOptions(!jobOptions)}
                    style = {{
                        padding: 12, 
                        paddingLeft:20, 
                        flexDirection: 'row', 
                        justifyContent: 'space-between'}} >
                <BaseText>{"Co-Founder"}</BaseText>

                <EntreIcons name="chevron-down" size={18} color= {constants.seperator}/>
                </TouchableOpacity> */}
				<Picker
					key= {jobTypes.index}
					selectedValue={selectedLanguage}
					mode={"dropdown"}
					itemStyle= {{color: constants.textShade, fontFamily: "Montserrat-Regular"}}
					onValueChange={(itemValue) =>
						setSelectedLanguage(itemValue)
					}>
					{
						jobTypes.map((item, index) => (
							<Picker.Item label={item} value={item} key= {index}/>
						))
					}
				</Picker>
			</BaseView>
		</BaseView>
	)
}
export default JobType