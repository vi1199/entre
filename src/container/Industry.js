import React, { useState } from "react"
import { FlatList, Modal, TouchableOpacity, View } from "react-native"
import { BaseInput, BaseText, BaseView, EntreIcons } from "../components"
import constants from "../utils/constants"
import industryStyles from "./industry.styles"
let entry = ["Web Development", "Saas", "Devops",]
const Industry = () => {
	const [showSearch, setShowSearch] = useState(false)
	const [selected, setSelected] = useState([ {"id" : 1, "name":"App Development"},
		{"id" : 2, "name":"Accounting"},
		{"id" : 3, "name":"Art"},
		{"id" : 4, "name":"Artificial Intelligence"},
		{"id" : 5, "name":"Auto/Transportation"},
		{"id" : 6, "name":"B2B"},
		{"id" : 7, "name":"Blog"}])

	let selectIndustry = (items) => {
		let options = [...selected]
		console.log("--list---", items)
		for (let item of options) {
			if(item.id == items.id) {
				item.isSelected = (item.isSelected == null) ? true : !item.isSelected
				break
			}
		}
		setSelected(options)
	}
	const renderIndustry = ({item, index}) => {
		return (
			<BaseView
				id={index}
				marginTop={14}
				padding={10}
				marginHorizontal={10}
				flexDirection="row"
				backgroundColor={constants.IndustryListView}
				radius={10}>
				<TouchableOpacity style = {{flexDirection:"row"}} >
					<BaseText 
						fontWeight= {"500"}
						size={12}
						marginRight={3}
						color= {constants.inputTextColor}>{item}</BaseText>
				</TouchableOpacity>
			</BaseView>
		)
	}
	const renderIndustryList = (item) => {
		return (
			<BaseView
				key={item.id}
				marginTop={14}
				padding={10}
				backgroundColor={constants.defaultWhite}
				radius={10}>
				<TouchableOpacity style = {{flexDirection:"row", justifyContent: "space-between"}} onPress ={() => selectIndustry(item, item.id)}>
					<BaseText 
						fontWeight= {"600"}
						size={12}
						marginRight={3}
						color= {item.isSelected ? constants.blueColor : constants.textShade }>{item.name}</BaseText>
					<EntreIcons name= {item.isSelected ? "check-circle" : "checkbox-blank-circle-outline" } 
						size= {16} color= {item.isSelected ?  constants.blueColor : constants.seperator }/>
				</TouchableOpacity>
			</BaseView>
		)
	}
    
	return (
		<BaseView marginTop={25} paddingLeft={26.77} paddingRight={27.59} >
			<BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
				{"Industry"}
			</BaseText>
			<BaseView marginLeft={-10}>
				{/* {
                entry.map((item, index) => (
                    <BaseView
                        key={index}
                        marginTop={14}
                        padding={10}
                        marginLeft={index % 5 == 0 ? 0 : 10}
                        flexDirection="row"
                        backgroundColor={constants.IndustryListView}
                        radius={10}>
                        <TouchableOpacity style = {{flexDirection:"row"}} onPress ={() => toggleExp(item, index)}>
                        <BaseText 
                            fontWeight= {"500"}
                            size={12}
                            marginRight={3}
                            color= {selectExp == index ? constants.blueColor : constants.inputTextColor}>{item}</BaseText>
                        </TouchableOpacity>
                    </BaseView>
                ))
            } */}
				<FlatList
					numColumns={3}
					keyExtractor= {(item, index) => index.toString()}
					data={entry}
					ListFooterComponentStyle= {{alignSelf: "flex-start"}}
					ListFooterComponent={(item, index) => (
						<BaseView
							key={index}
							marginTop={14}
							padding={10}
							marginLeft={10}
							flexDirection="row"
							backgroundColor={constants.IndustryListView}
							radius={10}>
							<TouchableOpacity  onPress ={() => setShowSearch(true)}>
								<BaseText 
									fontWeight= {"500"}
									size={12}
									marginRight={3}
									color= {constants.inputTextColor}>{" + "}</BaseText>
							</TouchableOpacity>
						</BaseView>
					)}
					renderItem={renderIndustry}
				/>
			</BaseView>
			<Modal visible={showSearch} transparent={true} onRequestClose={() => setShowSearch(false)} animationType="slide">
				<View style={industryStyles.container}>
					<View style={industryStyles.view}>
                  
						<BaseText
							fontWeight={"600"}
							fontFamily={"Poppins-Regular"}
							size={15}
							marginTop={29}
							color={"#242134"}>{"Select Industry"}</BaseText>
                           
                           
						<BaseText 
							fontFamily={"Poppins-Regular"}
							fontWeight= {"500"}
							size={11}
							color= {constants.seperator}>{"what industry is your content related to?"}</BaseText>
                           
						<BaseView justifyContent="center" marginVertical={15}>
							<BaseView position={"absolute"} zIndex={3} left={11}>
								<EntreIcons name="magnify" size= {16} color= {constants.seperator}/>
							</BaseView>
							<BaseInput
								alignSelf="stretch"
								keyboardType="default"
								borderRadius={10}
								color={constants.IndustryListView}
								borderWidth= {0.001}
								fontFamily={"Poppins-Regular"}
								padding={5}
								paddingHorizontal={30.11}
								placeholderTextColor={constants.seperator}
								textColor={"#242134"}
								placeholder={"Search industry"}
							/>
						</BaseView>
						<FlatList
							keyExtractor= {(item, index) => index.toString()}
							data={selected}
							renderItem={({ item }) => renderIndustryList(item)}
						/>
						<TouchableOpacity 
							onPress= {() => setShowSearch(false)}
							style= {{
								backgroundColor: constants.blueColor, 
								justifyContent: "center", paddingVertical: 18, alignItems: "center", borderRadius: 8, marginTop: 22.97}}>
							<BaseText
								fontWeight={"600"}
								fontFamily={"Poppins-Regular"}
								size={15}
								color={constants.defaultWhite}>{"Done"}</BaseText>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>


		</BaseView>
	)
}
export default Industry