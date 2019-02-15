import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator, createAppContainer }
    from 'react-navigation'
import Teams from './Teams'
import Player from './Player'
import Detail from './Detail'

var AppNavigator = createStackNavigator(
    {
        HalSatu: Teams,
        HalDua: Player,
        HalTiga: Detail

    },
    {
        initialRouteName: 'HalSatu'
    }
)
export default createAppContainer(AppNavigator)