import { NativeModules } from 'react-native';

interface IImage {
  thumbnailUrl: string;
  url: string;
}
interface IConfig {
  initialIndex?: number;
  images: IImage[];
}

type AwesomePhotoviewType = {
  open(config: IConfig): Promise<boolean>;
};

export const photoView = {
  async open(config: IConfig) {
    const { initialIndex = 0, images = [] } = config;
    const { AwesomePhotoview } = NativeModules;
    if (images.length === 0) {
      return false;
    }
    if (initialIndex > images.length - 1) {
      throw new Error('initialIndex range of images length');
    }
    console.log("photo open begin")
    AwesomePhotoview.open({
      initialIndex,
      images,
    });
    return true;
  },
};

export default photoView as AwesomePhotoviewType;
