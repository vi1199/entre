import React, { useState } from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BaseButton,
  BaseHeader,
  BaseImage,
  BaseInput,
  BaseText,
  BaseView,
  EntreIcons,
} from '../components';
import constants from '../utils/constants';
import EntreIcon from '../components/icon/EntreIcons';
import JobType from '../container/jobType';
import Experience from '../container/Experience';
import Industry from '../container/Industry';


const Home = () => {
  const navigation = useNavigation();
  const [jobTitle, setJobTitle] = useState("")
  const [salaryToggle, setSalaryToggle] = useState(false)
  return (
    <BaseView
      backgroundColor={constants.baseColor}

      flex={1}>
      <StatusBar hidden/>
      <BaseHeader
        title="Create new Job"
      />
      <ScrollView>
      <BaseView
        flexDirection={'row'}
        marginTop={9}
        paddingLeft={26}
        alignItems="center">
        <BaseImage
          source={require('../../assets/images/sample.png')}
          height={49}
          borderRadius={49 / 2}
          width={49}
        />
        <BaseText size={16.87} color={constants.defaultBlack} marginLeft={20.8} bold={"800"}>
          {'Neil Whitfield'}
        </BaseText>
      </BaseView>

      <BaseView marginTop={20} paddingLeft={26.77} paddingRight={27.59}>
        <BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
          {'Job title'}
        </BaseText>
        <BaseInput
          keyboardType="default"
          color={constants.baseColor}
          fontFamily={"Poppins-Regular"}
          paddingHorizontal={18.11}
          placeholderTextColor={constants.inputTextColor}
          placeholder={"Senior Frontend Developer"}
          onChangeText={setJobTitle}
        />
      </BaseView>
      <BaseView marginTop={20} paddingLeft={26.77} paddingRight={27.59}>
        <BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
          {'Description'}
        </BaseText>
        <BaseInput
          keyboardType="default"
          color={constants.baseColor}
          multiline={true}
          numberOfLines={3}
          textAlignVertical={"top"}
          fontFamily={"Poppins-Regular"}
          paddingHorizontal={18.11}
          placeholderTextColor={constants.inputTextColor}
          placeholder={"It takes very fast for a job vacancy as a Senior Devops Engineer!!"}
          onChangeText={setJobTitle}
        />
      </BaseView>
      <BaseView
        marginTop={20}
        marginLeft={26.77}
        marginRight={27.59}
        borderWidth={1}
        borderColor={constants.inputBorderColor}
        radius={constants.borderRadius}>
        <BaseView
          flexDirection="row"
          marginTop={10.47}
          alignItems="center"
          marginBottom={salaryToggle ? 8 : 0}
          paddingRight={30.34}
          justifyContent="space-between" >
          <BaseText
            size={12}
            bold={"600"}
            marginLeft={28.23}
            color={constants.textShade}
            fontFamily={"Poppins-Regular"}>
            {'No salary'}
          </BaseText>
          {
            <TouchableOpacity onPress={() => setSalaryToggle(!salaryToggle)}>
              <EntreIcon name={salaryToggle ? "toggle-switch" : "toggle-switch-off"} size={31} color={salaryToggle ? constants.blueColor : constants.textShade} />
            </TouchableOpacity>
          }
        </BaseView>
        {
          !salaryToggle ?
            <>
              <BaseView
                height={1}
                backgroundColor={constants.seperator}
                marginHorizontal={19.28}
                marginTop={3.76}
              />
              <BaseView flexDirection="row" marginTop={17.6} justifyContent="space-between" marginBottom={15.91}>
                <BaseView marginLeft={28.23} flex={1} marginRight={6.5}>
                  <BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
                    {'From:'}</BaseText>
                    <BaseView justifyContent="center">
                    <BaseView position={"absolute"} zIndex={3} left={11}>
                            <EntreIcons name="currency-usd" size= {18} color= {constants.blueColor}/>
                            </BaseView>
                  <BaseInput
                    keyboardType="default"
                    color={constants.baseColor}
                    fontFamily={"Poppins-Regular"}
                    paddingTop={10}
                    padding={5}
                    placeholderTextColor={constants.inputTextColor}
                    placeholder="10,000"
                    paddingHorizontal={30.11}
                    onChangeText={setJobTitle}
                  />
                  </BaseView>
                </BaseView>
                <BaseView marginRight={29.32} flex={1} marginLeft={6.5}>
                  <BaseText size={11} bold={"500"} color={constants.textShade} fontFamily={"Poppins-Regular"}>
                    {'To:'}</BaseText>
                    <BaseView justifyContent="center">
                    <BaseView position={"absolute"} zIndex={3} left={11}>
                            <EntreIcons name="currency-usd" size= {18} color= {constants.blueColor}/>
                            </BaseView>
                  <BaseInput
                    keyboardType="default"
                    color={constants.baseColor}
                    fontFamily={"Poppins-Regular"}
                    paddingHorizontal={30.11}
                    padding={5}
                    paddingTop={10}
                    placeholder="20,000"
                    placeholderTextColor={constants.inputTextColor}
                    onChangeText={setJobTitle}
                  />
                  </BaseView>
                </BaseView>
              </BaseView>
            </>
            :
            null
        }
      </BaseView>

      <JobType />
      <Experience />
      <Industry />
      <BaseView marginTop={64} flexDirection="row" alignItems="center" justifyContent="center">

      <BaseButton
        paddingHorizontal={45}
        paddingVertical={14}
        radius={9}>
        <BaseText size={12} color="#828282" fontWeight={"600"}>
          {'Cancel'}
        </BaseText>
      </BaseButton>


      <BaseButton
        backgroundColor={constants.blueColor}
        paddingHorizontal={45}
        paddingVertical={14}
        radius={9}>
        <BaseText size={12} color={constants.textInputBackgroud}>
          {'Done'}
        </BaseText>
      </BaseButton>
      </BaseView>
      <BaseView marginTop={55} />
      </ScrollView>
    </BaseView>
  );
};
export default Home;
