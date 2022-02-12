import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from 'react-redux';
import { setTradeModalVisibility } from "../stores/tab/tabActions";

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, icons } from "../constants"
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) =>{
    return (
        <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const Tabs = ({setTradeModalVisibility, isTradeModalVisible}) => {

    const tradeTabButtonOnClickHandler = () =>{
        setTradeModalVisibility(!isTradeModalVisible)
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 140,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused }) =>{
                        return !isTradeModalVisible && (
                            <TabIcon focused={focused}
                            icon = {icons.home}
                            label="Home"
                            />
                        )  
                    }
                }}
                listeners={{
                    tabPress:e => {
                        if(isTradeModalVisible){
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({focused }) =>{
                        return !isTradeModalVisible && (
                            <TabIcon focused={focused}
                            icon = {icons.briefcase}
                            label="Portfolio"
                            />
                        )  
                    }
                }}
                listeners={{
                    tabPress:e => {
                        if(isTradeModalVisible){
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{
                    tabBarIcon: ({focused }) =>{
                        return (
                            <TabIcon focused={focused}
                            icon = {isTradeModalVisible ? icons.close : icons.trade}
                            label="Trade"
                            iconStyle={isTradeModalVisible && {
                                height:15,
                                width:15
                            }}
                            isTrade={true}
                            />
                        )
                    },
                    tabBarButton:(props) => {
                        return(
                        <TabBarCustomButton 
                            {...props}
                            onPress={()=> tradeTabButtonOnClickHandler()}
                        />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({focused }) =>{
                        return !isTradeModalVisible && (
                            <TabIcon focused={focused}
                            icon = {icons.market}
                            label="Market"
                            />
                        )  
                    }
                }}
                listeners={{
                    tabPress:e => {
                        if(isTradeModalVisible){
                            e.preventDefault();
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused }) =>{
                        return !isTradeModalVisible && (
                            <TabIcon focused={focused}
                            icon = {icons.home}
                            label="Home"
                            />
                        )  
                    }
                }}
                listeners={{
                    tabPress:e => {
                        if(isTradeModalVisible){
                            e.preventDefault();
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const mapStateToProps = (state) => {
    return{
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        setTradeModalVisibility: (isVisible) => {return dispatch(setTradeModalVisibility(isVisible))}
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Tabs);