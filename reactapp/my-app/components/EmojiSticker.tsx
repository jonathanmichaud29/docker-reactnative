import { View, Image, ImageSourcePropType } from 'react-native';

type EmojiStickerProps = { 
  imageSize: number; 
  stickerSource: ImageSourcePropType;
}

export default function EmojiSticker(props: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageSize, height: props.imageSize }}
      />
    </View>
  );
}