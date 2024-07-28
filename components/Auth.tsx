import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";


export default function Auth() {
  return (
    <div>
        <SignedOut>
          <Button><SignInButton /></Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
  )
}
