import { Pressable, StyleSheet, Text, View } from 'react-native';

type NavButtonProps = {
  navigation: any;
}

export default function NavButton(props: NavButtonProps){

  const { navigation } = props;

  const canBack = navigation.canGoBack();

  const tryGoBack = () => {
    const canBack = navigation.canGoBack()
    console.warn('can go back ', canBack );
    if( canBack ){
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </Pressable>

      <Pressable
        onPress={tryGoBack }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
      
      <Pressable
        onPress={() => navigation.popToTop() }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pop to Top</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal:12,
    marginVertical:6,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText:{
    color:'white'
  },
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: "center", 
    justifyContent: "center",
    marginVertical:12,
  },
});