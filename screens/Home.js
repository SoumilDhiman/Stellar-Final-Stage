import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image} from 'react-native'

    export default class Home extends Component{
        render() {
            return(
                <View style = {{flex:1}}>
            <SafeAreaView style = {styles.droidSafeArea}/>
            <ImageBackground source = {require('../assets/space.gif')} style = {styles.backgroundImage}>
            <View style = {styles.titleBar}>
            <Text style = {styles.titleText}>Stellar</Text>
            </View>
            <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("Spacecrafts")}>
                <Text style = {styles.routeText}>Spacecraft</Text>
                <Text style = {styles.knowMore}>{"know More--->"}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("StarMap")}>
                <Text style = {styles.routeText}>Star Map</Text>
                <Text style = {styles.knowMore}>{"know More--->"}</Text>
                <Text style = {styles.bgDigit}>2</Text>
                <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("Dailypic")}>
                <Text style = {styles.routeText}>Daily pic</Text>
                <Text style = {styles.knowMore}>{"know More--->"}</Text>
                <Text style = {styles.bgDigit}>3</Text>
                <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>
            </TouchableOpacity>
            </ImageBackground>
            </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        droidSafeArea: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
        },
        routeCard: {
            flex: 0.25,
            marginLeft: 50,
            marginRight: 50,
            marginTop: 50,
            borderRadius: 30,
            backgroundColor: 'white'
        },
        titleBar: {
            flex: 0.15,
            justifyContent: "center",
            alignItems: "center"
        },
        titleText: {
            fontSize: 25,
            fontWeight: "bold",
            color: "white"
        },
        routeText: {
            fontSize: 27,
            fontWeight: "bold",
            color: "black",
            marginTop: 50,
            paddingLeft: 30
        },
        knowMore: {
            paddingLeft: 30,
            color: "red",
            fontSize: 15
        },
        bgDigit: {
            position: "absolute",
            color: "rgba(183, 183, 183, 0.5)",
            fontSize: 150,
            right: 20,
            bottom: -15,
            zIndex: -1
        },
        iconImage: {
            position: "absolute",
            height: 180,
            width: 180,
            resizeMode: "contain",
            right: 0,
            top: -50
        }
    });