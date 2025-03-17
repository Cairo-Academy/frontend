import {Link} from "@heroui/link";
import {siteConfig} from "@/config/site";
import {Navbar as NextUINavbar, NavbarContent, NavbarItem} from "@heroui/navbar";
import {DiscordIcon, GithubIcon, TwitterIcon,} from "@/components/icons";


export default function Footer() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="flex flex-col md:flex-row items-center">
      <NavbarContent as="li" className="gap-3 lg:max-w-fit lg:hidden flex flex-col justify-center items-center w-full">

        <NavbarItem className="flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500"/>
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500"/>
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500"/>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="md:flex basis-full hidden"
        justify="center"
      >
        <NavbarItem className="flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500"/>
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500"/>
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500"/>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}
