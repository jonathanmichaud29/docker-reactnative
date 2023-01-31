import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
    justifyContent: "center", 
    marginHorizontal: 30 
  },
  input: { 
    marginVertical: 5 
  },
  rowToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  rowFlexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  snackbarError:{
    backgroundColor:'tomato',
  },
  snackbarErrorColor:{
    color:'white',
  }
});

