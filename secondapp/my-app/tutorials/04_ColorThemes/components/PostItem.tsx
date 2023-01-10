import { PostContainer, TitleText, PostText } from '../theme/styles';
import { ItemProp } from '../datas/items';

export const PostItem = ({item}:{item:ItemProp}) => {
  
  return (
    <PostContainer>
      <TitleText>{item.name}</TitleText>
      <PostText>{item.body}...</PostText>
    </PostContainer>
  );
};