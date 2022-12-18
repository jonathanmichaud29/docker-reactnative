import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

// import EditScreenInfo from '../components/EditScreenInfo';

import { Text, View } from '../components/Themed';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PlaceholderImage = require('../assets/images/splash.png');

export default function TabThreeScreen() {
  const [selectedImage, setSelectedImage] = useState<String>('');

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Tab</Text>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholder={PlaceholderImage} 
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  /* separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }, */
});
