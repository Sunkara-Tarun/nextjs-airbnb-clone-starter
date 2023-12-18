import { UserUpdateManyWithoutListingsInput } from "./UserUpdateManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { TipUpdateManyWithoutListingsInput } from "./TipUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserUpdateManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placAmeneties?: InputJsonValue;
  placespace?: InputJsonValue;
  placeType?: string;
  price?: number;
  tips?: TipUpdateManyWithoutListingsInput;
  title?: string;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
