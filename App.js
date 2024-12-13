import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  const renderNumbers = () => {
    const elements = [];
    for (let i = 0; i <= 15; i++) {
      elements.push(
        <React.Fragment key={i}>
          <Text style={styles.innerText}>{i}</Text>
          <View style={styles.milimeter}></View>
        </React.Fragment>,
      );
    }
    return elements;
  };

  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <View style={styles.row}>{renderNumbers()}</View>

        <View style={[styles.row, styles.secondRow]}>{renderNumbers()}</View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  outerBox: {
    width: '100%',
    height: '10%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-evenly',
  },
  secondRow: {
    alignItems: 'flex-end',
  },
  innerText: {
    // marginRight: 15,
  },
  milimeter: {
    height: 10,
    borderWidth: 1,
  },
});
