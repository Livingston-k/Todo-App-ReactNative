import React from 'react'
import {View,Text, StyleSheet,statusBar,Platform, StatusBar,TextInput,TouchableOpacity} from 'react-native'
import {Card} from '../components'
import {COLORS,SIZES,FONTS} from '../constants'

const styles = StyleSheet.create({
container:{
    paddingTop:Platform.OS ==='ios'?40:StatusBar.currentHeight+10,
    flex:1,
    backgroundColor:COLORS.primary,
    paddinf: SIZES.padding,
},
textBoxWrapper:{
    position:'absolute',
    bottom:0,
    left:0,
    flextDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

},
textInput:{
    borderRadius:SIZES.textBoxRadius,
    backgroundColor:COLORS.secondary,
    height:54,
    width:'80%',
    color:COLORS.primary,
    shadowColor:COLORS.secondary,
    shadowOffset:{width:2,height:12},
    shadowRadius:12,

}
})

export default function Homepage (){
    return (
    <View style={styles.container}>
     <Card text={'Livingston Kaddu'}/> 
     <View style={styles.textBoxWrapper}>
<TextInput style={styles.textInput}/>
     </View>
    </View>)
}