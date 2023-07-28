import PostActions from "../components/posts/PostActions";
import Sidebar from "../components/sidebars/Sidebar";
import {
  GetPostDetails,
  getReplyComments,
  getRootComments,
} from "../services/fetch";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Comment from "../components/comments/Comment";
import AddComment from "../components/comments/AddComment";
import { useState } from "react";
import PdImgs from "../components/postDetails/PdImgs";
import PdHeader from "../components/postDetails/PdHeader";
import PdInfoCm from "../components/postDetails/PdInfoCm";
import Footer from "../components/footer/Footer";
import Loading from "../components/loadings/Loading";
import NotFound from "../components/pageErrors/NotFound";

const PostDetails = () => {
  const postId = useLocation().pathname?.split("/")[2];
  const { isLoading, data, error } = GetPostDetails("posts", postId);
  const [isReplying, setIsReplying] = useState(false);
  const [commentParent, setCommentParent] = useState("");
  const [content, setContent] = useState("");

  if (error) return <NotFound />;
  return (
    <div className="pd">
      <Sidebar />
      <div className="pd-container">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p>Somethings went wrong...</p>
        ) : (
          <div className="pd-main">
            <PdImgs data={data} />
            <div className="pd-info">
              <PdHeader data={data} postId={postId} />

              <div className="pd-list-comments">
                <PdInfoCm data={data} />
                {getRootComments(data?.comments)?.map((item) => (
                  <Comment
                    key={item._id}
                    item={item}
                    setIsReplying={setIsReplying}
                    setCommentParent={setCommentParent}
                    replies={getReplyComments(data?.comments, item._id)}
                    postId={data._id}
                    setContent={setContent}
                    postImage={data.image[0]}
                  />
                ))}
              </div>

              <div className="pd-bottom">
                <PostActions
                  postId={data._id}
                  post={data}
                  isPostDetails={postId}
                />
                <p className="pd-likes">{data.likes.length} likes</p>
                <p className="pd-timeago">
                  {moment(data.createdAt).format("ll")}
                </p>

                <AddComment
                  postId={data._id}
                  isReplying={isReplying}
                  setIsReplying={setIsReplying}
                  commentParent={commentParent}
                  author={data.author?._id}
                  postImage={data.image[0]}
                  content={content}
                  setContent={setContent}
                />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default PostDetails;
