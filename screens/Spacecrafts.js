import React, {Component} from 'react'
import {Text,View,FlatList,ImageBackground,Alert,StyleSheet,Image,SafeAreaView,Platform,StatusBar} from 'react-native'
import axios from 'axios'

export default class Spacecrafts extends Component {
    constructor() {
        super()
        this.state = {
            aircrafts:[]
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData=()=> {
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response =>{
            this.setState({ aircrafts: response.data.results })
            console.log(response.data.results)
            // console.log("hey")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    renderItem = ({item}) => {
        return(
            <View style = {{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
                <Image source = {{uri: item.agency.image_url}} style = {{width:"100%",height:200,marginTop:15,marginBottom:15,marginRight:10}}></Image>
                    <Text style = {{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
                    <Text style = {{color:'#696969'}}>{item.agency.name}</Text>
                    <Text>DESCRIPTION</Text>
                    <Text style = {{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
            </View>
        )
    }

    keyExtractor = (item,index) => index.toString()
    render() {
        if(Object.keys(this.state.aircrafts).length===0) {
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
               <View Style = {{flex:0.15,alignItems:'center',justifyContent:'center'}}>
               <Text style = {styles.routeText}>spacecraft</Text>
               </View>
               <View style = {{flex:0.75}}>
                   <FlatList 
                   keyExtractor = {this.keyExtractor}
                   data = {this.state.aircrafts}
                   renderItem = {this.renderItem}
                   initialNumToRender = {10}
                   />
               </View>
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