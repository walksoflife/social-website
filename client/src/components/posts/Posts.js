import { GetAllPosts } from "../../services/fetch/loadPosts";
import NotFound from "../pageErrors/NotFound";
import PostsSkeleton from "../skeleton/PostsSkeleton";
import Post from "./Post";

const Posts = ({ openCreate }) => {
  const { isLoading, data, error } = GetAllPosts("posts");

  if (error) return <NotFound />;
  return (
    <div className="posts">
      <div className="posts-container">
        {isLoading ? (
          <PostsSkeleton posts={1} />
        ) : error ? (
          <p>Somethings wents wrong...</p>
        ) : (
          data.map((post) => (
            <Post post={post} key={post._id} openCreate={openCreate} />
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
