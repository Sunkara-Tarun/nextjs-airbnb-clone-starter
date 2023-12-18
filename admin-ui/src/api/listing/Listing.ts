import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Tip } from "../tip/Tip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: Array<User>;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placAmeneties: JsonValue;
  placespace: JsonValue;
  placeType: string;
  price: number;
  tips?: Array<Tip>;
  title: string;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
