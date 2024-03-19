import "../../../assets/styles/blog.scss";
import BlogItem from "./blog-item";
import Blog1Picture from "../../../assets/pictures/blog1.svg";

function BlogsSection() {
  return (
    <section
      id="blogs-section"
      className="h-full bg-background blog-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Blogs</h2>
      <p>
        I have a genuine passion for writing about programming, with a
        particular focus on Flutter and JavaScript. Not only does this practice
        deepen my own understanding, but it also allows me to share useful and
        interesting insights with fellow developers.
      </p>

      <BlogItem
        image={Blog1Picture}
        title="Boost Your Flutter App's Performance"
        description={
          <p>
            A <strong>javascript script</strong> that I made to detect the
            <strong>unused libraries</strong> and <strong>assets</strong> to
            save storage and <strong>improve the performance</strong> of an app
          </p>
        }
      />
      <BlogItem
        image={Blog1Picture}
        title="Boost Your Flutter App's Performance"
        description={
          <p>
            A <strong>javascript script</strong> that I made to detect the
            <strong>unused libraries</strong> and <strong>assets</strong> to
            save storage and <strong>improve the performance</strong> of an app
          </p>
        }
      />
      <BlogItem
        image={Blog1Picture}
        title="Boost Your Flutter App's Performance"
        description={
          <p>
            A <strong>javascript script</strong> that I made to detect the
            <strong>unused libraries</strong> and <strong>assets</strong> to
            save storage and <strong>improve the performance</strong> of an app
          </p>
        }
      />
    </section>
  );
}

export default BlogsSection;
