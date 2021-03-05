import React from 'react';
import {Image} from 'react-native';
import imageStyles from './imageStyles';

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
  );
};
export default BaseImage;
