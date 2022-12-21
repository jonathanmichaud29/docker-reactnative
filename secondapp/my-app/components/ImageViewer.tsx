import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  placeholder: ImageSourcePropType;
  selectedImage: string;
}

export default function ImageViewer(props: ImageViewerProps) {
  const imageSource: ImageSourcePropType = props.selectedImage !== ''
    ? { uri: props.selectedImage }
    : props.placeholder;
  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});