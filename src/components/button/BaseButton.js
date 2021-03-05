import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import buttonStyles from './buttonStyles';

export default BaseButton = (props) => {
  return (
    <TouchableOpacity
      onPress= {props.onPress}
      style={[
        buttonStyles.container,
        {
          flex: props.flex,
          padding: props.padding,
          marginHorizontal: props.marginHorizontal,
          paddingHorizontal: props.paddingHorizontal,
          paddingVertical: props.paddingVertical,
          borderRadius: props.radius,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
          backgroundColor : props.backgroundColor || buttonStyles.container.backgroundColor
        },
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};
