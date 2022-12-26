export type Post = {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  body: string;
  publishedAt: string;
  mainImage: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
  authors: {
    _type: "array";
    of: {
      _type: "reference";
      _ref: string;
    };
  };
  categories: {
    _type: "array";
    of: {
      _type: "reference";
      _ref: string;
    };
  };
  excerpt: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _lang: string;
  _key: string;
};
