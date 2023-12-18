import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TipCreateInput = {
  listing: ListingWhereUniqueInput;
  tripinfo: InputJsonValue;
  user: UserWhereUniqueInput;
};
