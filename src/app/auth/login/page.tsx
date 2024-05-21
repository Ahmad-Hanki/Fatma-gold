
import Container from "@/components/Container";
import LoginForm from "./LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = () => {
  const cookie = cookies();
  const data = cookie.get('fatima');
  if (data && data.name == 'fatima' && data.value == 'hanki123') {
    redirect('/dashboard');
  }
  return (
    <div>
      <Container>
        <LoginForm/>
      </Container>
    </div>
  );
};

export default page;
