import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {AlignRight, ChevronDown} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="py-6 px-3 md:px-0 container mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img className="size-8 md:size-10" src="/icon.png" alt="icon" />
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900"
                  variant="ghost"
                >
                  Vehicles
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-48"
                align="start"
                sideOffset={4}
                side="bottom"
              >
                <DropdownMenuItem asChild>
                  <Link href="/">Available In Kenya</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">International Stock</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">Direct Import</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/admin">Admin</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/sell-your-car">Sell Your Car</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/faq">FAQ</Link>
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        <Button className="md:hidden" variant="outline" size="icon">
          <AlignRight />
        </Button>
      </nav>
    </header>
  );
}
