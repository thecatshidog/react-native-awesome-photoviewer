import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AwesomePhotoview from 'react-native-awesome-photoview';

export default function App() {
  const handleOpen = () => {
    const images = [
      {
        url: 'http://img6.16fan.com/201510/11/004847l7w568jc5n5wn385.jpg',
        thumbnailUrl:
          'http://img6.16fan.com/201510/11/004847l7w568jc5n5wn385.jpg',
      },
      {
        url: 'https://wx4.sinaimg.cn/mw2000/001VFbaMgy1gw8q2122k9j60h838xtxk02.jpg',
        thumbnailUrl:
          'https://wx4.sinaimg.cn/mw2000/001VFbaMgy1gw8q2122k9j60h838xtxk02.jpg',
      },
    ];
    AwesomePhotoview.open({ images, initialIndex: 0 }).then((res) => {
      console.log(res);
    });
    console.log("photo open done");
  };

  return (
    <View style={styles.container}>
      <Text>Result: {0}</Text>
      <View onTouchStart={handleOpen}>
        <Text>open</Text>
      </View>
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
  },
});
