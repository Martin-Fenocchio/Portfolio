import "../../../assets/styles/projects.scss";
import ProjectItem from "./project-item";
import GuatapayPicture from "../../../assets/pictures/projects/guatapay-vision.webp";
import FlutterIcon from "../../../assets/icons/flutter.svg";

function ProjectsSection() {
  return (
    <section className="bg-background project-section pt-[9vh] max-w-content m-auto">
      <h2>Projects</h2>

      <div className="grid">
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="Guatapay"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
          ]}
          description={
            <p>
              Billetera <strong>crypto</strong>, recibe y envía{" "}
              <strong>Bitcoin</strong> a quien desees, hecha en Flutter,{" "}
              <strong>lideré el desarrollo FrontEnd</strong> en este proyecto.
            </p>
          }
        />
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="Guatapay"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
          ]}
          description={
            <p>
              Billetera <strong>crypto</strong>, recibe y envía{" "}
              <strong>Bitcoin</strong> a quien desees, hecha en Flutter,{" "}
              <strong>lideré el desarrollo FrontEnd</strong> en este proyecto.
            </p>
          }
        />
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="Guatapay"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
          ]}
          description={
            <p>
              Billetera <strong>crypto</strong>, recibe y envía{" "}
              <strong>Bitcoin</strong> a quien desees, hecha en Flutter,{" "}
              <strong>lideré el desarrollo FrontEnd</strong> en este proyecto.
            </p>
          }
        />
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="Guatapay"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Flutter",
              image: FlutterIcon,
            },
          ]}
          description={
            <p>
              Billetera <strong>crypto</strong>, recibe y envía{" "}
              <strong>Bitcoin</strong> a quien desees, hecha en Flutter,{" "}
              <strong>lideré el desarrollo FrontEnd</strong> en este proyecto.
            </p>
          }
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
