# react-native-awesome-photoviewer

## Installation

```sh
npm install react-native-awesome-photoviewer
```

### for ios

```
pod install
```
## Usage

```js
import PhotoViewer from "react-native-awesome-photoviewer";

const photos = [
  {
    source: {
      uri: 'https://pic2.zhimg.com/v2-363a8f12e9bbee97794212a445bce577_1440w.jpg?source=172ae18b'
    }
  },
  {
    source: {
      uri: 'https://z3.ax1x.com/2021/07/29/WbEpjJ.png'
    }
  },
  {
    source: {
      uri: 'https://s3.bmp.ovh/imgs/2021/08/77dcfd438e1c2db2.jpg'
    }
  }
]
<PhotoView
  visible={visible}
  data={photos}
  hideStatusBar={true}
  hideCloseButton={true}
  hideShareButton={true}
  initial={curIndex}
  onDismiss={() => {
    setVisible(false)
    console.log('hello world')
  }}
  onChange={(data) => {
    setCurIndex(data.index)
  }}
/>
```
### 参数

```
export interface Photo {
  /**
   * Same as React Native Image source but not support Array
   * @see https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageSource.js
   */
  source: ImageURISource;
  title?: string;
  summary?: string;
  titleColor?: string | number;
  summaryColor?: string | number;
}
type MerryPhotoViewProps = {
  /**
   * Photos for view
   */
  data: Photo[];
  /**
   * Start position
   */
  initial: number;
  /**
   * Hide close button
   */
  hideCloseButton?: boolean;
  /**
   * Hide share button
   */
  hideShareButton?: boolean;
  /**
   * **Android only**
   * Set share text the default text is `SHARE`
   */
  shareText?: string;
  /**
   * Display or hide the viewer
   */
  visible: boolean;
  /**
   * When viewer has dismissed but you still needs to update the visible state
   */
  onDismiss: () => void;
  onChange?: (data: { index: number; photo: Photo }) => void;
};
```

## License

MIT
