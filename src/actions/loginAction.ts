"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface loginActionProps {
  username: string;
  password: string;
}

const loginAction = async ({ password, username }: loginActionProps) => {
  const cookie = cookies();
  const loginUsername = "fatima";
  const loginPassword = "hanki123";
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

    redirect('/dashboard');
  }
};

export default loginAction;
