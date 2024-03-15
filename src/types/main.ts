export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: string;
  name: string;
  email: string;
  body: string;
};
