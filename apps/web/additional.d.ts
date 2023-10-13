type MobileNavClass = 'inherit' | 'none';

type Blogpost = {
  guid?: string;
  title: string;
  description?: string;
  pubDate: string;
  link: string;
  creator?: string;
};

type SocialMediaLink = {
  href: string;
  icon: JSX.Element;
};
