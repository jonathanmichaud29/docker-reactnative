import { useMemo, useState } from "react";
import { List, IconButton, Text, Surface } from "react-native-paper";

import { UserListProps } from "../datas/navTypes";
import { IUserProp } from "../datas/userTypes";

import { fetchUsers } from "../api/regres";


export default function UserListScreen(props: UserListProps) {

  const { navigation } = props;

  const [users, setUsers] = useState<IUserProp[]>([]);
  
  const getUsers = () => {
    fetchUsers()
      .then((response)=>{
        console.info(response);
        if( response.status === 200 ){
          setUsers(response.data.data);
        }
      })
  }
  useMemo(()=>{
    getUsers();
  }, []);

  return (
    <Surface>
      <Text variant="titleLarge">List of users</Text>
      { users.length && users.map((user: IUserProp) => (
        <List.Item
          key={`user-${user.id}`}
          title={`User #${user.id}`}
          description={`${user.first_name} ${user.last_name}`}
          onPress={() => navigation.navigate('UserDetails', {id:user.id})}
          left={ props => <IconButton {...props} icon="account"  /> }
        />
      )) || (
        <Text>No user</Text>
      )}
    </Surface>
  )
}
