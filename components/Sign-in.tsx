import { signIn } from "@/auth";
import { action } from "@/lib/action";

export default function SignIn() {
  return (
    <form action={action}>
      <button type="submit">Signin with Google</button>
    </form>
  );
}
