import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
const page = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="mt-24">
          <h1 className="text-center text-violet-700 font-semibold text-6xl mb-12">
            ANVA
          </h1>
          <form className="flex flex-col gap-4 items-center">
            <Select>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="Admin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select</SelectLabel>
                  <SelectItem value="apple">Admin</SelectItem>
                  <SelectItem value="banana">Student</SelectItem>
                  <SelectItem value="blueberry">Teacher</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              className="w-96 rounded-full"
              type="userId"
              placeholder="User ID"
            />
            <Input className="w-96 rounded-full" placeholder="Password" />
            <Link
              href="forgot-password"
              className="text-violet-700 hover:underline"
            >
              Forgot Password
            </Link>
            <Button className="rounded-full" type="submit">
              Login
            </Button>
          </form>
        </div>
        <div className="bg-violet-600 h-screen"></div>
      </div>
    </div>
  );
};
export default page;
