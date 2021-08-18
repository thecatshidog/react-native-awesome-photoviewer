import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import MerryPhotoViewManager from 'react-native-awesome-photoviewer';

const photos = [
  {
    source: {
      uri: 'https://images.pexels.com/photos/142615/pexels-photo-142615.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    },
  },
  {
    source: {
      uri: 'https://z3.ax1x.com/2021/07/29/WbEpjJ.png',
    },
  },
  {
    source: {
      uri: 'https://s3.bmp.ovh/imgs/2021/08/77dcfd438e1c2db2.jpg',
    },
  },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.box}
        onPress={() => {
          setIndex(1);
          setVisible(true);
        }}
      >
        <Text>asdf</Text>
      </TouchableWithoutFeedback>
      <MerryPhotoViewManager
        visible={visible}
        data={photos}
        hideCloseButton={false}
        hideShareButton={true}
        initial={index}
        onDismiss={() => {
          setVisible(false);
        }}
        onChange={(data: any) => {
          setIndex(data.index);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    backgroundColor: 'green',
  },
});
