import React from 'react';
import {
    View,
    Animated,
} from 'react-native';
import {connect} from 'react-redux';

import { IconTextButton } from '../components';
import { COLORS, SIZES, icons } from '../constants';

const MainLayout = ({children, isTradeModalVisible}) =>{
    const modalAnimatedValues = React.useRef(new Animated.Value(0)).current;
    React.useEffect(()=>{
        if(isTradeModalVisible){
            Animated.timing(modalAnimatedValues,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start();
        } else{
            Animated.timing(modalAnimatedValues,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }).start();
        }
    },[isTradeModalVisible])

    const modalY = modalAnimatedValues.interpolate({
        inputRange:[0,1],
        outputRange: [SIZES.height, SIZES.height -280]

    })
    return (
        <View style={{flex: 1}}>
            {children}

            {isTradeModalVisible &&
                <Animated.View 
                    style={{
                        position:"absolute",
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundColor:COLORS.transparentBlack
                    }}
                    opacity={modalAnimatedValues}
                />
            }

            {/* Modal */}
            <Animated.View
                style={{
                    position:"absolute",
                    left:0,
                    top: modalY,
                    width:"100%",
                    padding:SIZES.padding,
                    backgroundColor:COLORS.primary,
                }}
            >
                <IconTextButton 
                    label="Transfer"
                    icon={icons.send}
                    Onpress={() => console.log("Transfer")}
                />
                <IconTextButton 
                    label={"Withdraw"}
                    icon={icons.withdraw}
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    Onpress={()=> console.log("withdrawal")}
                />
            </Animated.View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return{
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        }
}

export default connect(mapStateToProps,mapDispatchToprops)(MainLayout);