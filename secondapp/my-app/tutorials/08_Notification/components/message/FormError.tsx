import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton, Snackbar  } from 'react-native-paper';

import { styles } from '../../datas/styles';

interface IFormError {
  message: string;
}

export default function FormError(props: IFormError) {
  const [visible, setVisible] = useState<boolean>(!!props.message);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(()=>{
    setVisible(!!props.message);
  }, [props.message])

  return (
    <Snackbar
      visible={visible}
      duration={5000}
      onDismiss={onDismissSnackBar}
      style={styles.snackbarError}
      icon="close-circle"
      onIconPress={onDismissSnackBar}
    >
      <View style={styles.rowFlexStart}>
        <IconButton 
          icon="alert-circle"
          iconColor='black'
        />
        <Text style={styles.snackbarErrorColor}>{props.message}</Text>
      </View>
    </Snackbar>
  );
};
