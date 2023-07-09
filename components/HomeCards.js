/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View
} from "react-native";
import { WebView } from 'react-native-webview';

import {
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
    CardFive,
    CardSix,
    CardSeven,
    CardEight,
    CardNine,
    CardTen,
    CardEleven,
    CardTwelve,
    CardEcomOne,
    CardEcomTwo,
    CardEcomThree,
    CardEcomFour
} from "react-native-card-ui";

type = {};
export default function Cards(props) {
    const data = props.data;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <CardEcomFour
                    title={data.CardEcomFour.title}
                    subTitle={data.CardEcomFour.subTitle}
                    price={data.CardEcomFour.price}
                    image={{ uri: data.CardEcomFour.image.uri }}
                    buttonText={data.CardEcomFour.buttonText}
                    buttonColor={data.CardEcomFour.buttonColor}
                    onClickButton={() => alert(data.CardEcomFour.onClickButton)}
                />
                {/* {Platform.OS === "web" ? <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FNithyanandaSangha.Delhi%2Fvideos%2F1449867892422797%2F&show_text=false&width=560&t=0" height={220} style={{ border: "none", overflow: "hidden" }} scrolling={"no"} frameborder={0} allowfullscreen={true} allow={"autoplay, clipboardWrite, encryptedMedia, pictureInPicture, webShare"} allowFullScreen="true"></iframe> :
                    <WebView
                        source={{ html: '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FNithyanandaSangha.Delhi%2Fvideos%2F1449867892422797%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>' }}
                        style={{ marginTop: 20 }}
                    />} */}
                <CardEcomThree
                    title={data.CardEcomThree.title}
                    subTitle={data.CardEcomThree.subTitle}
                    price={data.CardEcomThree.price}
                    image={{ uri: data.CardEcomThree.image.uri }}
                    buttonText={data.CardEcomThree.buttonText}
                    buttonColor={data.CardEcomThree.buttonColor}
                    onClickButton={() => alert(data.CardEcomThree.onClickButton)}
                />
                <CardEcomTwo
                    title={data.CardEcomTwo.title}
                    subTitle={data.CardEcomTwo.subTitle}
                    price={data.CardEcomTwo.price}
                    image={{ uri: data.CardEcomTwo.image.uri }}
                />
                <CardEcomOne
                    title={data.CardEcomOne.title}
                    price={data.CardEcomOne.price}
                    image={{ uri: data.CardEcomOne.image.uri }}
                    icon={data.CardEcomOne.icon}
                    nbStar={3}
                    iconColor={data.CardEcomOne.iconColor}
                    colorList={data.CardEcomOne.colorList}
                    selectColor={data.CardEcomOne.selectColor}
                    getSelectColor={color => alert(color)}
                />
                <CardOne
                    // height={data.CardOne.height}
                    // width={data.CardOne.width}
                    borderRadius={data.CardOne.borderRadius}
                    shadowColor={data.CardOne.shadowColor}
                    image={{ uri: data.CardOne.image.uri }}
                />
                <CardTwo
                    title={data.CardTwo.title}
                    subTitle={data.CardTwo.subTitle}
                    profile={{
                        uri: data.CardTwo.profile.uri
                    }}
                    image={{ uri: data.CardTwo.image.uri }}
                    icon={data.CardTwo.icon}
                    iconColor={data.CardTwo.iconColor}
                />
                <CardThree
                    title={data.CardThree.title}
                    subTitle={data.CardThree.subTitle}
                    profile={{ uri: data.CardThree.profile.uri }}
                    icon={data.CardThree.icon}
                    iconColor={data.CardThree.iconColor}
                />

                <CardFour
                    onClicked={() => {
                        alert(data.CardFour.iconColor);
                    }}
                    image={{
                        uri: data.CardFour.image.uri
                    }}
                    date={data.CardFour.date}
                    off={data.CardFour.off}
                    offText={
                        data.CardFour.offText
                    }
                    buttonText={data.CardFour.buttonText}
                />

                <CardFive
                    title={data.CardFive.date}
                    subTitle={data.CardFive.subTitle}
                    profile={{
                        uri:
                            data.CardFive.profile.uri
                    }}
                    image={{
                        uri:
                            data.CardFive.image.uri
                    }}
                    icon={data.CardFive.icon}
                    nbStar={data.CardFive.nbStar}
                    iconColor={data.CardFive.iconColor}
                />

                <CardSix
                    title={data.CardSix.title}
                    subTitle={data.CardSix.subTitle}
                    profile={{
                        uri:
                            data.CardSix.profile.uri
                    }}
                    image={{
                        uri:
                            data.CardSix.image.uri
                    }}
                    icon1={data.CardSix.icon1}
                    iconColor1={data.CardSix.iconColor1}
                    iconBackground1={data.CardSix.iconBackground1}
                    onClicked1={() => {
                        alert(data.CardSix.onClicked1);
                    }}
                    icon2={data.CardSix.icon2}
                    iconColor2={data.CardSix.iconColor2}
                    iconBackground2={data.CardSix.iconBackground2}
                    onClicked2={() => {
                        alert(data.CardSix.onClicked2);
                    }}
                />

                <CardSeven
                    title={data.CardSeven.title}
                    subTitle={data.CardSeven.title}
                    image={{ uri: data.CardSeven.image.uri }}
                    icon1={data.CardSeven.icon1}
                    iconColor1={data.CardSeven.iconColor1}
                    iconBackground1={data.CardSeven.iconBackground1}
                    onClicked1={() => {
                        alert(data.CardSeven.onClicked1);
                    }}
                    icon2={data.CardSeven.icon2}
                    iconColor2={data.CardSeven.iconColor2}
                    iconBackground2={data.CardSeven.iconBackground2}
                    onClicked2={() => {
                        alert(data.CardSeven.onClicked2);
                    }}
                />
                <CardEight
                    image1={{
                        uri:
                            data.CardEight.image1.uri
                    }}
                    image2={{
                        uri:
                            data.CardEight.image2.uri
                    }}
                    image3={{
                        uri: data.CardEight.image3.uri
                    }}
                />

                <CardNine
                    title={data.CardNine.image.title}
                    subTitle={
                        data.CardNine.subTitle
                    }
                    image={{
                        uri:
                            data.CardNine.image.uri
                    }}
                    price={data.CardNine.price}
                    buttonText={data.CardNine.buttonText}

                    onClicked={() => {
                        alert(data.CardNine.onClicked);
                    }}
                />

                <View style={{ marginBottom: 80 }} />
                <CardTen
                    title={data.CardTen.title}
                    subTitle={data.CardTen.subTitle}
                    image={{
                        uri: data.CardTen.image.uri

                    }}
                    price={data.CardTen.price}
                    star={data.CardTen.star}
                    starsFor={data.CardTen.starsFor}
                />

                <CardEleven
                    price={data.CardEleven.price}
                    title={data.CardEleven.title}
                    subTitle={data.CardEleven.subTitle}
                    stars={data.CardEleven.stars}
                    tags={data.CardEleven.tags}
                    image1={{
                        uri:
                            data.CardEleven.image1.uri
                    }}
                    image2={{
                        uri:
                            data.CardEleven.image2.uri
                    }}
                    backgroundImage={{
                        uri:
                            data.CardEleven.backgroundImage.uri
                    }}
                    onClickedShare={() => alert(data.CardEleven.onClickedShare)}
                    onClickedPlus={() => alert(data.CardEleven.onClickedPlus)}
                />

                {/* <CardTwelve
                    image={{
                        uri:
                            "https://i.pinimg.com/originals/c4/9b/f9/c49bf95e4e02873610daf3bfda54e44a.jpg"
                    }}
                    title={"Card name"}
                    subTitle={"John Bob"}
                    viewProgress={true}
                    progress={2}
                /> */}
            </ScrollView>
            {/*this.state.people.map((item, i) => <Text key={i}>{item.name} </Text>)*/}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});