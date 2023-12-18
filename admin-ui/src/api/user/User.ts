import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Tip } from "../tip/Tip";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  listings?: Listing | null;
  roles: JsonValue;
  tips?: Array<Tip>;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
