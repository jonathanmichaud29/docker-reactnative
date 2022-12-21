import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IconButtonProps = { 
  icon: keyof typeof MaterialIcons.glyphMap; 
  label: String; 
  onPress:(()=>void);
}

export default function IconButton(props: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});