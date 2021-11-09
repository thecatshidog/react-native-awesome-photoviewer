import { NativeModules } from 'react-native';

type AwesomePhotoviewType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AwesomePhotoview } = NativeModules;

export default AwesomePhotoview as AwesomePhotoviewType;
