import { signIn } from "@/auth";
import Button from "@/components/Button";
import { action } from "@/lib/action";
import googleIcon from "@/public/google.png";
export default function GoogleSignIn() {
  return (
    <form action={action}>
      <Button
        className="bg-white text-black w-full"
        icon={googleIcon}
        btnName="Continue with Google"
      />
    </form>
  );
}
