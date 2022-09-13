type Tag = {
  id: string;
  name: string;
};

type Link = {
  id: string;
  title: string;
  link: string;
};

type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: Tag[];
  links: Link[];
};
