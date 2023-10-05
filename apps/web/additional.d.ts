type Tag = {
  id: string;
  name: string;
};

type Link = {
  id: string;
  title: string;
  href: string;
  external: boolean;
};

type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  links: Link[];
};

type MobileNavClass = 'inherit' | 'none';

type Blogpost = {
  guid?: string;
  title: string;
  description?: string;
  pubDate: string;
  link: string;
  creator?: string;
};
