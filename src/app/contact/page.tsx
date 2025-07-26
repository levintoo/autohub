import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Phone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Twitter } from "@/components/icons/twitter";
import { Facebook } from "@/components/icons/facebook";
import { Instagram } from "@/components/icons/instagram";
import { Whatsapp } from "@/components/icons/whatsapp";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="py-6 container mx-auto flex-col gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-6 container mx-auto flex gap-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815510725639!2d36.8234924!3d-1.284634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6411c0001%3A0x4a342ccd950de0bb!2sIPS%20Building%2C%2010th%20floor%20Kimathi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1753544843040!5m2!1sen!2ske"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
