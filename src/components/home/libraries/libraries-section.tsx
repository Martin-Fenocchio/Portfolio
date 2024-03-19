import "../../../assets/styles/libraries.scss";
import UniversumPicture from "../../../assets/pictures/universum.webp";
import LibraryItem from "./library-item";

function LibrariesSection() {
  return (
    <section
      id="libraries-section"
      className=" bg-background libraries-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Libraries</h2>
      <p>
        I've built these Flutter and React packages with pure coding love,
        aiming to simplify life for developers, just like me, who crave
        practical solutions.
      </p>

      <LibraryItem
        title="Universal Picture"
        image={UniversumPicture}
        description={
          <p>
            A versatile <strong>Flutter library</strong> for rendering images
            <strong>regardless</strong> of their <strong>format</strong> or
            source. This widget simplifies the process of loading and{" "}
            <strong>displaying images</strong>.
          </p>
        }
      />
      <LibraryItem
        title="Universal Picture"
        image={UniversumPicture}
        description={
          <p>
            A versatile <strong>Flutter library</strong> for rendering images
            <strong>regardless</strong> of their <strong>format</strong> or
            source. This widget simplifies the process of loading and{" "}
            <strong>displaying images</strong>.
          </p>
        }
      />
      <LibraryItem
        title="Universal Picture"
        image={UniversumPicture}
        description={
          <p>
            A versatile <strong>Flutter library</strong> for rendering images
            <strong>regardless</strong> of their <strong>format</strong> or
            source. This widget simplifies the process of loading and{" "}
            <strong>displaying images</strong>.
          </p>
        }
      />
    </section>
  );
}

export default LibrariesSection;
