import Posts from "../posts/Posts";
import Stories from "../stories/Stories";

const Section = ({ openCreate }) => {
  return (
    <div className="section">
      <div className="section-container">
        <Stories />
        <Posts openCreate={openCreate} />
      </div>
    </div>
  );
};

export default Section;
