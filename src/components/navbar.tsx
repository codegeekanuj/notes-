import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuBurger } from "react-icons/ci";

import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <NavigationMenu
      className="w-full flex justify-between border p-5"
      style={{ minWidth: "100%" }}
    >
      <div className="flex  w-1/3 justify-center gap-7 ml-4">
        <NavigationMenuList className="gap-11 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <CiMenuBurger className="text-2xl  border-none " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-72 flex flex-col gap-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavigationMenuItem>
            <a href="/home">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Notes
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <div className="flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Input
              placeholder="Search..."
              className="border border-gray-300 rounded-full p-2 pl-10 w-72 focus:outline-none"
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
