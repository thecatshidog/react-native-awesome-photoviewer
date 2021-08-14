import React from 'react';
import {
  requireNativeComponent,
  ImageURISource,
  processColor,
  Image,
} from 'react-native';

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
   * Hide status bar
   */
  hideStatusBar?: boolean;
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

class MerryPhotoView extends React.Component<MerryPhotoViewProps, any> {
  private startPosition = 0;
  static defaultProps = {
    visible: false,
  };
  constructor(props: MerryPhotoViewProps) {
    super(props);
  }

  /**
   * Handle UIColor conversions
   * @param data Photo[]
   */
  processor = (data: Photo[]) => {
    if (data && data.length) {
      return data.map((o) => {
        const d = { ...o };
        if (typeof o.summaryColor === 'string') {
          d.summaryColor = processColor(o.summaryColor);
        }
        if (typeof o.titleColor === 'string') {
          d.titleColor = processColor(o.titleColor);
        }
        // resolve assets
        d.source = Image.resolveAssetSource(o.source);
        return d;
      });
    }
    return data;
  };

  onChange = (event: any) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event.nativeEvent);
    }
  };

  shouldComponentUpdate(nextProps: MerryPhotoViewProps) {
    const { initial, visible } = nextProps;
    const { visible: prevVisible } = this.props;
    if (prevVisible === visible && initial !== this.startPosition) {
      return false;
    }
    return true;
  }

  render() {
    // nothing
    const { visible, data, initial, ...props } = this.props;
    if (visible === false) {
      return null;
    }
    const dataCopy = [...data];

    const transformData = this.processor(dataCopy);

    this.startPosition = initial;
    if (initial < 0) {
      this.startPosition = 0;
    }
    if (initial > dataCopy.length) {
      this.startPosition = dataCopy.length;
    }

    return (
      <MerryPhotoViewManagerManager
        key={this.startPosition}
        {...(props as any)}
        initial={this.startPosition}
        data={transformData}
        onChange={this.onChange}
      />
    );
  }
}

export const MerryPhotoViewManagerManager =
  requireNativeComponent('MerryPhotoView');

export default MerryPhotoView;
