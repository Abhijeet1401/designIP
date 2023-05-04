import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,

} from "react-native";
import React, { useState, useRef } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useFonts,Roboto_400Regular_Italic  } from '@expo-google-fonts/roboto';
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";


export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

AntDesign.loadFont();
MaterialIcons.loadFont();
FontAwesome.loadFont();

const data = [
  {
    id: 1,
    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Success",
    // Phone_number: "912234565",
    // Designation: "Manager",
  },
  {
    id: 2,
    // name: "Vinod Sharma",
    // Email: "S.kumar@greenfoods.com",
    // Phone_number: "9802424122",
    // Designation: "Cashier(shop3)",

    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Success",
  },
  {
    id: 3,
    //OrderId: "Order ID",
    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Success",
  },
  {
    id: 4,
    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Success",
  },
  {
    id: 5,
    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Failed",
  },
  {
    id: 6,
    TxnID: "87465738695748",
    Amount: "-4,500",
    Date: "13/04/22",
    time: "17:24:50",
    status: "Pending",
  },
];
// carousel data
export const data2 = [
  {
    id: 1,
    name: "Bookings",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "245",
    IrctcId: "iinspay01993",
  },
  {
    id: 2,
    name: "Bookings",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "345",
    IrctcId: "iinspay01993",
  },
  {
    id: 3,
    name: "Bookings:",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "245",
    IrctcId: "iinspay01993",
  },
  {
    id: 4,
    name: "Bookings:",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "245",
    IrctcId: "iinspay01993",
  },
  {
    id: 5,
    name: "Bookings",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "245",
    IrctcId: "iinspay01993",
  },
  {
    id: 6,
    name: "Bookings",
    Today: "35",
    ThisWeek: "89",
    ThisMonth: "245",
    IrctcId: "iinspay01993",
  },
];
const Design5 = () => {
  const getStatusColor = (status) => {
    return status === "Success"
      ? "green"
      : status === "Failed"
      ? "red"
      : status === "Pending"
      ? "#ffff00"
      : "black";
  };
  const [text, setText] = useState();
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  const renderItem = ({ item }) => {
    return (
      <View style={Styles.border}>
        <View style={Styles.Cards}>
          <View style={Styles.row}>
            <View style={Styles.column}>
              <Text
                style={{
                 // color: "red",
                  //fontWeight: "bold",
                  fontFamily:'Roboto_400Regular_Italic',
                  fontSize: 20,
                  
                }}
              >
                {item.OrderId}
              </Text>
            </View>
            <View style={Styles.column}></View>
          </View>

          <View style={Styles.row}>
            <View style={[Styles.column, Styles.label]}>
              <Text
                style={{ color: "black", fontFamily:'Roboto_400Regular_Italic', fontSize: 20 }}
              >
                {item.TxnID}
              </Text>
            </View>
            <View style={[Styles.column, Styles.value]}>
              <Text style={{ color: "black", fontSize: 20,fontFamily:'Roboto_400Regular_Italic', }}>
                {item.Amount}
              </Text>
            </View>
          </View>

          <View style={Styles.row}>
            <View style={[Styles.column, Styles.label]}>
              <Text style={{ color: "black", opacity: 0.5 }}>{item.Date}</Text>
              <Text style={{ color: "black", opacity: 0.5 }}>{item.time}</Text>
            </View>
            <View style={[Styles.column, Styles.value]}>
              <Text
                style={{
                 // fontWeight: "bold",
                  fontFamily:'Roboto_400Regular_Italic',
                  color: getStatusColor(item.status),
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  //const element = <TextInput.AntDesign name="search1" />
  // Carousel render Item
  const renderItem2 = ({ item }) => {
    return (
      <View style={Styles.item}>
        <View>
          <Text style={{ marginBottom: 150, marginLeft: 30 }}>Bookings:</Text>
        </View>

        <View style={Styles.BookingList}>
          <View style={Styles.CrslRow}>
            <View style={Styles.CrslColumn}>
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 22 }}>
                {item.Today}
              </Text>
              <Text style={{ color: "black", fontSize: 14, opacity: 0.5 }}>
                Today
              </Text>
            </View>
          </View>

          <View style={Styles.CrslRow}>
            <View style={Styles.CrslColumn}>
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 22 }}>
                {item.ThisWeek}
              </Text>
              <Text style={{ color: "black", fontSize: 14, opacity: 0.5 }}>
                ThisWeek
              </Text>
            </View>
          </View>

          <View style={Styles.CrslRow}>
            <View style={Styles.column}>
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 22 }}>
                {item.ThisMonth}
              </Text>
              <Text style={{ color: "black", fontSize: 14, opacity: 0.5 }}>
                ThisMonth
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.loginId}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#f0f8ff",
              width: 300,
              marginLeft: -130,
              padding: 15,
              borderRadius: 10,
              marginTop: 30,
            }}
          >
            <Text style={{ opacity: 0.4 }}>IRCTC Login ID</Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>
              {item.IrctcId}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  // End of Carousel render Item

  return (
    <View style={Styles.container}>
      <ScrollView>
        {/* header section */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={Styles.title}>
            <AntDesign name="left" size={25} style={{ fontWeight: "bold" }} />
            Train Tickets
          </Text>
          <MaterialIcons
            name="support-agent"
            size={30}
            style={Styles.icon}
            color="blue"
          />
          <FontAwesome
            name="rupee"
            size={30}
            style={Styles.icon}
            color="green"
          />
        </View>
        {/* carousel container */}
        <View>
          <Carousel
            ref={isCarousel}
            data={data2}
            renderItem={renderItem2}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
          />

          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: "blue",
            }}
            tappableDots={true}
            inactiveDotStyle={{
              backgroundColor: "black",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        {/* carousel container End */}

        {/* // search Bar container */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 30,
            marginRight: 60,
            width: "75%",
            backgroundColor: "#f0f8ff",
            height: 50,
            paddingHorizontal: -30,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        >
          <TextInput
            onChangeText={setText}
            value={text}
            style={{ flex: 1, fontSize: 14, marginRight: 22, paddingLeft: 5 }}
            placeholder="Search(set date for past transactions)"
          />
          <AntDesign
            name="search1"
            style={{ color: "blue", marginRight: 20 }}
            size={20}
          />
          {/* <AntDesign
            name="filter"
            style={{
              //width: "100%",
              marginRight: 0,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            size={20}
          /> */}
        </View>
        <AntDesign
          name="filter"
          style={{
            flex: 1,
            marginTop: -35,
            // width: "60%",
            marginLeft: 340,
            flexDirection: "row",
            color: "blue",
            fontWeight: "bold",
            // justifyContent: "space-between",
          }}
          size={20}
        />

        {/* // 3rd container bookings List*/}
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(data) => data.id}
          />
        </View>

        {/* // button container */}
        <View>
          <TouchableOpacity style={Styles.btnContainer}>
            <Text style={Styles.btnTxt}>
                Book Tickets
              </Text>
            
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 60,
    paddingLeft: 30,
    marginRight: 90,
  },
  icon: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "10%",
    justifyContent: "space-around",
  },
  Cards: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",

    //width: "85%",
    // padding: 8,
    marginLeft: 30,
    marginRight: 30,
    // marginTop: 10,
  },
  row: {
    flex: 1,
    marginHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor:'black'
  },
  column: {
    //flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 3,

    // marginLeft:20
  },

  CarouselBox: {
    marginVertical: 10,
  },
  // btnContainer: {
  
  //   position:'absolute',
  //   width:300,
  //    height: 90,
  //    alignItems: 'center',
  //    justifyContent: 'center',
  //    //right: 250,
  //    left:20,
  //    bottom: 70,
    
    
  // },
  btnTxt: {
    backgroundColor: "blue",
    padding: 15,
    width: "60%",
    marginTop: 30,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    marginLeft: 80,
    paddingLeft:70
    
   // justifyContent: "center",
  },
  item: {
    //flex: 1,
    width: "95%",
    // borderWidth: 1,
    // padding: 20,
    elevation: 10,
    //  marginLeft: 50,
    marginTop: 20,
    marginBottom: 3,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    //height: 150,
  },
  CrslRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //marginLeft:-40,
    paddingRight: 35,
  },
  CrslColumn: {
    //flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  border: {
    borderBottomWidth: 0.5,
    borderStyle: 'dashed',
     borderBottomColor:'#ddd',
    //opacity: 0.4,
    paddingBottom:15,
    
  },

  BookingList: {
    flexDirection: "row",
    marginTop: -70,
    width: "100%",
  },
  loginId: {
    marginLeft: -170,
    width: 200,
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Design5;
