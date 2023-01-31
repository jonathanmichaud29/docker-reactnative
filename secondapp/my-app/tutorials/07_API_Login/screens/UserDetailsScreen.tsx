import { useMemo, useState } from "react";
import { ActivityIndicator, Avatar, Surface, Text } from "react-native-paper";

import { UserDetailsProps } from "../datas/navTypes";
import { IUserProp } from "../datas/userTypes";
import { fetchUser } from "../api/regres";



export default function UserDetailsScreen(props: UserDetailsProps) {

  const { navigation, route } = props;

  const [user, setUser] = useState<IUserProp | null>(null);

  const getUser = () => {
    fetchUser(route.params.id)
      .then((response)=>{
        if( response.status === 200 ){
          setUser(response.data.data);
        }
      })
  }
  useMemo(()=>{
    getUser();
  }, []);

  return (
    <Surface>
      <Text variant="titleLarge">User Details</Text>
      { user !== null && (
        <>
          <Avatar.Image
            source={{uri:user.avatar}}
            size={70}
          />
          <Text>Name: {user.first_name} {user.last_name}</Text>
          <Text>Email: {user.email}</Text>
        </>
      ) || (
        <ActivityIndicator animating={true} size="large" />
      )}
    </Surface>
  )
}
