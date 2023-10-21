type MobileNavClass = 'inherit' | 'none';

type Blogpost = {
  slug: string;
  title: string;
  dateAdded: string;
  dateUpdated: string;
  views: number;
};

type HashnodeBlogApiResponse = {
  user: BlogData;
};

type BlogData = {
  publication: {
    posts: readonly Blogpost[];
  };
  publicationDomain: string;
  numPosts: number;
};

type SocialMediaLink = {
  href: string;
  icon: JSX.Element;
};
