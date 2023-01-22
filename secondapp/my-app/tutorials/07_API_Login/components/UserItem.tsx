import React from 'react';
import {Button, Text, View} from 'react-native';

import { UserProp } from '../datas/userTypes';

//export const UserItem = ({user}:{user:UserProp}) => {
export const UserItem = ({item}:{item:UserProp}) => {
  return (
    <View>
      <Text>{item.first_name} {item.last_name} : {item.email}</Text>
      <Button title={`View ${item.first_name} profile`} 
        
      />
    </View>
  );
};