import React from 'react';
import { Text, TouchableOpacity, Image} from 'react-native';
import sizesDiffer from 'react-native/Libraries/Utilities/differ/sizesDiffer';
import { COLORS,FONTS,SIZES } from '../constants'

const IconTextButton = ({label, icon, containerStyle, Onpress}) => {
    return (
        <TouchableOpacity style={{
            flexDirection:"row", 
            alignItems:'center', 
            justifyContent:"center", 
            height: 50, 
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...containerStyle
        }}
        onPress={Onpress}
        >
            <Image source={icon} resizeMode="contain" style={{width:20, height:20}} />
            <Text
             style={{
                 marginLeft: sizesDiffer.base,
                 ...FONTS.h3
             }}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export default IconTextButton;
