import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Program',
      links: [
        {
          text: 'Program Kami',
          href: getPermalink('/program'),
        },
        {
          text: 'Alur Program',
          href: getPermalink('/alur-program'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/tentang-kami'),
    },
    {
      text: 'Kontak Kami',
      href: getPermalink('/kontak'),
    },
  ],
  actions: [
    {
      text: 'Daftar Sekarang',
      href: 'https://api.whatsapp.com/send?phone=6281928866777&text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%21%20Saya%20ingin%20mendapatkan%20informasi%20lebih%20lanjut%20tentang%20Program%20Magang%20ke%20Jepang.%20Terima%20kasih.',
      target: '_blank',
      varian: 'primary',
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/hoshi_gakuen_bali' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/lpkhoshigakuenbali/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://karyasuta.com/"> Karyasuta.com</a> © ${currentYear} LPK Hoshi Gakuen Bali · All rights reserved.
  `,
};
