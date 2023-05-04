import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

FontAwesome.loadFont();
MaterialIcons.loadFont();

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('./image.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <Image source={require('./icon1.png')} style={styles.icon} />
            <Text style={styles.text}>Text 1</Text>
          </View>
          <View style={styles.textRow}>
            <Image source={require('./icon2.png')} style={styles.icon} />
            <Text style={styles.text}>Text 2</Text>
          </View>
          <View style={styles.textRow}>
            <Image source={require('./icon3.png')} style={styles.icon} />
            <Text style={styles.text}>Text 3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
