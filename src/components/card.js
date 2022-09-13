import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import CheckBox  from 'expo-checkbox'
import {COLORS,SIZES,FONTS} from '../constants'

const styles = StyleSheet.create({
view:{
width:'100%',
paddingVertical:12,
paddigHorizontal:SIZES.padding,
borderRadius:SIZES.borderRadius,
elevation:5,
shadowColor:COLORS.secondary,
shadowOffset:{width:2,height:12},
shadowRadius:12,
flexDirection:'row',
alignItems:'center',
backgroundColor:COLORS.secondary
},
text:{
    ...FONTS.h2_semiBold,
    color:COLORS.primary
},
checkbox:{   
    borderRadius:5,
    backgroundColor:COLORS.primary,
    marginRight:15
}
})

export default function Card (props){
    return (
    <View style={styles.view}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.text}>{props.text}</Text>
    </View>)
}