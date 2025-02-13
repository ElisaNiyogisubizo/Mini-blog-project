import React from "react";
import Post from "./Post";

interface PostData {
  title: string;
  author: string;
  content: string;
  date: string;
}

const posts: PostData[] = [
  {
    title: "Learning React Basics",
    author: "Jane Doe",
    content: "React is a popular library for building user interfaces...",
    date: "2025-02-12",
  },
  {
    title: "Why TypeScript is Great",
    author: "John Smith",
    content: "TypeScript adds type safety to JavaScript...",
    date: "2025-02-10",
  },
];

const PostList: React.FC = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostList;
