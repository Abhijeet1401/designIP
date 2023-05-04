import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
FontAwesome.loadFont();
MaterialIcons.loadFont();
AntDesign.loadFont();

const Design = () => {
  const data = [
    { key: "1", text: "information on covid 19 vaccination Programme" },
    { key: "2", text: "Covid advisory" },
    { key: "3", text: "Get your favourite food through e-catering" },
  ];
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "blue" }}>{"\u2022"}</Text>

      <Text style={{ marginRight: 5, color: "blue" }}>
        <Text>{item.text}</Text>
      </Text>
    </View>
  );

  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={Styles.title}>
          <AntDesign name="left" size={20} style={{ fontWeight: "bold" }} />
          Train Tickets
        </Text>
        <MaterialIcons
          name="support-agent"
          size={30}
          style={Styles.icon}
          color="blue"
        />
        <FontAwesome name="rupee" size={30} style={Styles.icon} color="green" />
      </View>

      <View style={Styles.container2}>
        <Image
          source={require("../images/img.jpeg")}
          style={{ height: 400, width: 200, resizeMode: "stretch" }}
        />
        <View style={Styles.stepContainer}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="profile" size={20} style={{ color: "blue" }} />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>Step1</Text>
              <Text style={{ color: "black" }}> KYC Complete</Text>
            </View>
          </View>
          <View
            style={{
              borderLeftWidth: 2,
              borderLeftColor: "#ddd",
              height: 55,
              paddingRight: 6,
            }}
          />

          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="form-select"
              size={20}
              style={{ color: "blue" }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold" }}>Step2</Text>
              <Text style={{ color: "black" }}>Select Plan</Text>
            </View>
          </View>
          <View
            style={{ borderLeftWidth: 2, borderLeftColor: "#ddd", height: 60 }}
          />
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="ticket" size={20} style={{ color: "blue" }} />
            <View>
              <Text style={{ fontWeight: "bold" }}>Step3</Text>
              <Text style={{ color: "black" }}>Start booking</Text>
            </View>
          </View>
        </View>
      </View>
      <Text></Text>
      <TouchableOpacity style={Styles.btnContainer}>
        <Text style={Styles.btnTxt}>
          <Text style={{ justifyContent: "center" }}>Buy Plan</Text>
        </Text>
      </TouchableOpacity>

      <View style={Styles.linkContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20 }}>
          Important Links
        </Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          style={{ flexDirection: "column", marginTop: 30, paddingLeft: 20 }}
        />
       <Text style={{ marginLeft: 180,color:'blue',textDecorationLine:'underline' }}>see more</Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    width: "100%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 60,
    paddingLeft: 40,
    marginRight: 90,
  },
  icon: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "10%",
    justifyContent: "space-around",
  },
  btnContainer: {
    // justifyContent: "space-between",
    alignItems: "center",
  },
  btnTxt: {
    backgroundColor: "blue",
    padding: 15,
    width: "45%",
    marginTop: 30,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    paddingRight: 7,
  },
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // item: {
  //   flexDirection: "column",

  // },
  step1: {
    fontSize: 14,
    flexDirection: "row",
    paddingLeft: 30,
  },
  stepContainer: {
    padding: 30,
    margin: 20,
  },
});
export default Design;
