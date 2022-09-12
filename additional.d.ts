type Tag = {
  id: number;
  name: string;
};

type Project = {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  tags: Tag[];
};
