import { Button } from "@/components/ui/button";
import Link from "next/link";

const { default: Logo } = require("./Logo");

const Header = () => {
  return (
    <div className="p-2 flex">
      <Logo />
      <div className="ml-auto">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
