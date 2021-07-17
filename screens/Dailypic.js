import React, {Component} from 'react'
import {Text,
        View,
        Alert,
        Image,
        ImageBackground,
        TouchableOpacity,
        Platform,
        StatusBar,
        SafeAreaView,
        Linking,
        ScrollView,
        StyleSheet} from 'react-native'
import axios from 'axios'

export default class Dailypic extends Component {
    constructor() {
        super()
        this.state = {
            Data:[]
        }
    }

    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=voSMI76K9KvBhigSd5GGvf4xXBkNI3sVbLJz5zsK")
        .then(response => {
            this.setState({Data: response.data})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }

    renderImage = (url) => {
        <Image source = {{"uri":url}} style = {{width:"!00%", height:300, borderRadius:20, margin:3}}>
        </Image>
    }

    renderVideo = () => {
        <TouchableOpacity onPress = {()=> Linking.openURL(this.state.Data.url).catch(err=>console.error("couldn't Load page",err))}>
            <View>
                <Image source = {require("../assets/play-video.png")} style = {{width:50, height:50}}></Image>
            </View>
        </TouchableOpacity>
    }
    render() {
        const url = this.state.Data.url
        if(Object.keys(this.state.Data).length===0) {
            return(
                <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text>Loading</Text>
                </View>
            )
        }
        else {
            return(
               <View style = {styles.container}>
               <SafeAreaView style = {styles.deroidSafeArea} />
               <ImageBackground 
               source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
               <Text style = {styles.routeText}> Astronomy Pictures Of The Day</Text>
               <Text style = {styles.titelText}>(this.state.Data.title)</Text>
               <TouchableOpacity style = {styles.listContainer}
               onPress = {() => Linking.openURL(this.state.Data.url).catch(err =>console.error("Couldn't Load Page", err))}>
               <View style = {styles.iconContainer}>
               <Image source = {require("../assets/play-video.png")} style = {{ width :50, height:50}}></Image>
               </View>
               </TouchableOpacity>
               <Text style = {styles.explanationText}>{this.state.Data.explanation}</Text>
               </ImageBackground>
               </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    deroidSafeArea: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
    },

    backgroundImage: {
        flex:1,
        resizeMode:'cover'
    },

    routeText: {
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        textAlign:'center'
    },

    titelText: {
        fontSize:25,
        fontWeight:"bold",
        color:"black",
    },

    explanationText: {
        fontSize:15,
        fontWeight:"bold",
        color:"black",
        marginTop:10
    }
})