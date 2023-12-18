import { UserCreateNestedManyWithoutListingsInput } from "./UserCreateNestedManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { TipCreateNestedManyWithoutListingsInput } from "./TipCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy?: UserCreateNestedManyWithoutListingsInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placAmeneties: InputJsonValue;
  placespace: InputJsonValue;
  placeType: string;
  price: number;
  tips?: TipCreateNestedManyWithoutListingsInput;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
