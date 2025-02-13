import React from "react";
import withLogger from "../utils/withLogger";

const PostWithLogger = withLogger(Post);

interface PostProps {
  title: string;
  author: string;
  content: string;
  date: string;
}

const Post: React.FC<PostProps> = React.memo(
  ({ title, author, content, date }) => {
    return (
      <div className="post">
        <h2>{title}</h2>
        <p>
          <strong>{author}</strong> | {date}
        </p>
        <p>{content.substring(0, 100)}...</p>
      </div>
    );
  }
);

const isNewPost = new Date().getTime() - new Date(date).getTime() < 86400000;

return (
  <div className="post">
    <h2>{title}</h2>
    <p>
      <strong>{author}</strong> | {date}
    </p>
    {isNewPost && <span className="new-badge">New!</span>}
    <p>{content.substring(0, 100)}...</p>
  </div>
);

export default Post;
