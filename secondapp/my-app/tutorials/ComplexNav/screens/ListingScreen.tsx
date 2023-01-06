import { ComplexNavListingProps } from "../datas/types";

import StackNav from "../navs/StackNav";

export default function ListingScreen(props: ComplexNavListingProps) {

  const { navigation } = props;

  return (
    <StackNav />
  );
}