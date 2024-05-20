"use server";
import { cookies } from "next/headers";

interface loginActionProps {
  username: string;
  password: string;
}

const loginAction = async ({ password, username }: loginActionProps) => {
  const cookie = cookies();
  const loginUsername = "togya";
  const loginPassword = "togya";
  if (!username || !password) {
    return 0;
  } else if (username != loginUsername || password != loginPassword) {
    return -1;
  } else {
    cookie.set({
      name: username,
      value: password,
      httpOnly: true,
      maxAge: 86400,
    });
    return 1;
  }
};

export default loginAction;
