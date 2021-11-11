# react-native-awesome-photoviewer

## Installation
```
npm install react-native-awesome-photoviewer
```
for ios

```
pod install
```

## Usage

```
import PhotoViewer from "react-native-awesome-photoviewer";

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
PhotoViewer.open({
      initialIndex,
      images,
    });
```

## License

MIT
