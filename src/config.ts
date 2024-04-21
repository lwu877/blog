import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: "Lex Wu's Blog",
  subtitle: "I'm a musician that does too much stuff.",
  lang: 'en',
  themeHue: 300,
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    {
      name: 'Back to Website',
      url: 'https://lexwu.com',
      external: true,
    },
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/logo.jpg',
  name: 'Lex Wu',
  bio: "I'm a musician that does too much stuff.",
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/lwu877',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/lwu877',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC0',
  url: 'https://creativecommons.org/publicdomain/zero/1.0/',
}
