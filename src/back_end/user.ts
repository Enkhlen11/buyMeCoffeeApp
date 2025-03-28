import { UserType } from "@/util/type";

export const getUser = async (): Promise<UserType[]> => {
  return [{ username: "enke", email: "enke@gmail.com" }];
};
