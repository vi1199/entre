import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BaseText, BaseView, EntreIcons } from '../components';
import constants from '../utils/constants';
const entry = ['Entry', 'Junior', 'Senior']
const Experience = () => {
    const [selectExp, setSelectExp] = useState(null)
    let toggleExp = (exp, i) => {
        console.log("--exp--", exp, "--i--", i);
        setSelectExp(i)
    }
    return (
        <BaseView marginTop={25} paddingLeft={26.77} paddingRight={27.59}>
            <BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
                {'Experience'}
            </BaseText>
            <BaseView flexDirection= "row">
            {
                entry.map((item, index) => (
                    <BaseView
                        key={index}
                        marginTop={14}
                        padding={10}
                        marginLeft={index % 5 == 0 ? 0 : 10}
                        flexDirection="row"
                        borderWidth={1}
                        borderColor={selectExp == index ? constants.blueColor: constants.inputBorderColor}
                        radius={10}>
                        <TouchableOpacity style = {{flexDirection:"row"}} onPress ={() => toggleExp(item, index)}>
                        <EntreIcons 
                            color= {selectExp == index ? constants.blueColor : constants.inputTextColor}
                            style= {{marginHorizontal: 8}}
                            name= {selectExp == index ? "radiobox-marked" : "radiobox-blank"} 
                            size= {13}/>
                        <BaseText 
                            fontWeight= {"500"}
                            size={12}
                            marginRight={3}
                            color= {selectExp == index ? constants.blueColor : constants.inputTextColor}>{item}</BaseText>
                        </TouchableOpacity>
                    </BaseView>
                ))
            }
            </BaseView>
        </BaseView>
    )
}
export default Experience