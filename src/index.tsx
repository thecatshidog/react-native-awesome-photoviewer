import { requireNativeComponent, ViewStyle } from 'react-native';

type AwesomePhotoviewerProps = {
  color: string;
  style: ViewStyle;
};

export const AwesomePhotoviewerViewManager = requireNativeComponent<AwesomePhotoviewerProps>(
'AwesomePhotoviewerView'
);

export default AwesomePhotoviewerViewManager;
