import React, {Component} from 'react'
import {SafeAreaView, Text,View,StyleSheet, Platform, StatusBar,TextInput} from 'react-native'
import {WebView} from 'react-native-webview'

export default class StarMap extends Component {
    constructor() {
        super()
        this.state = {
            longitude:'',
            latitude:''
        }
    }
    render() {
        const {longitude, latitude} = this.state
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
        return(
            <View style = {{flex:1}}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <View style = {{flex:0.3, marginTop:20, alignItems:"center"}}>
                 <Text>Star Map</Text>
                 <TextInput 
                 style = {{height:40, borderColor:'gray', borderWidth:1}}
                 placeholder = "Enter Your Longitude"
                 placeholderTextColor = "green"
                 onChangeText = {(text)=> {
                     this.setState({
                         longitude:text
                     })
                    }
                 }
                 />
                 <TextInput 
                 style = {{height:40, borderColor:'gray', borderWidth:1}}
                 placeholder = "Enter Your Latitude"
                 placeholderTextColor = "green"
                 onChangeText = {(text)=> {
                     this.setState({
                         latitude:text
                     })
                    }
                 }
                 />
                 </View>
                <WebView 
                scalesPageToFit = {true}
                source = {{uri:path}}
                style = {{
                marginTop:20,
                marginBottom:20}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS ==="android" ? StatusBar.currentHeight:0
    }
})