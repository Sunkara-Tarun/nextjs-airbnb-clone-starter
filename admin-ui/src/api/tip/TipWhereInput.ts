import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TipWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  tripinfo?: JsonFilter;
  user?: UserWhereUniqueInput;
};
