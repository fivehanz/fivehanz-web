type Tag = {
  id: number;
  name: string;
};

type Link = {
  id: number;
  title: string;
  link: string;
};

type Project = {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  links: Link[];
};
