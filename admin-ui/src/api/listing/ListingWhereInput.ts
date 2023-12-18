import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TipListRelationFilter } from "../tip/TipListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserListRelationFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placAmeneties?: JsonFilter;
  placespace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  tips?: TipListRelationFilter;
  title?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
