import "../../../assets/styles/projects.scss";
import ProjectItem from "./project-item";
import GuatapayPicture from "../../../assets/pictures/projects/guatapay-vision.webp";
import FlutterIcon from "../../../assets/icons/flutter.svg";
import { useState } from "react";

function ProjectsSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section
      id="projects-section"
      className="bg-background project-section pt-[9vh] max-w-content m-auto"
    >
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
          title="Adamo ID"
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
              <strong>Digital signatures</strong> and{" "}
              <strong>identity verifications</strong>, <strong>lead</strong> the
              <strong>front-end</strong> both the app and the web part, Using
              <strong>Flutter Web</strong> and React JS
            </p>
          }
        />
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="uPOS"
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
              Point of sale system for restaurants, made with{" "}
              <strong>Flutter</strong>, with a{" "}
              <strong>mobile app and a web</strong>. Manage employees, dishes,
              statistics and more.
            </p>
          }
        />
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="LimboScan"
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
              <strong>QR code scanner app</strong>, designed to be as{" "}
              <strong>fast</strong> as possible and <strong>without ads</strong>
              .
            </p>
          }
        />

        {showMoreProjects && (
          <>
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Cuy"
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
                  Website for Latin American <strong>exchange houses</strong>,
                  you can preview <strong>conversions in real time</strong> and
                  make the exchange instantly.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Darxprex"
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
                  Send <strong>remittances</strong> from Latin America, send and
                  receive <strong>any currency</strong>, upload receipts, verify
                  identity, preview <strong>exchange rates</strong> and send
                  money to relatives.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="FMoney"
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
                  <strong>Cryptographic</strong> lottery/lottery platform,
                  allows the purchase of <strong>cryptographic tickets</strong>{" "}
                  and win prizes on the platform's <strong>own token</strong>.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Guatapay Platform"
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
                  Platform that <strong>allows e-commerces</strong> to{" "}
                  <strong>accept and receive cryptocurrency payments</strong> by
                  installing a small add-on in their store.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Darxprex Web"
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
                  Web platform for Darxprex app{" "}
                  <strong>workers to manage their customers</strong>, place
                  orders, track revenue and more.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="uPOS admin"
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
                  Web platform for distributors of the uPOS app, allows to add
                  and manage customers.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="LimboXtractor"
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
                  Practical app made to extract data such as CBU, DNI, phone
                  numbers, coordinates, and more.
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Star wars app"
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
                  App intended to be a Wiki about all the characters of the Star
                  Wars saga, you can read their features, images, powers, ships,
                  etc..
                </p>
              }
            />
            <ProjectItem
              image={GuatapayPicture}
              url=""
              title="Pokedéx"
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
                  App intended to be a Wiki about all the Pokemon anime
                  characters, you can read their characteristics, images,
                  powers, ships, etc...
                </p>
              }
            />
          </>
        )}
      </div>

      <button
        className="border-yellow border-2 border-solid rounded-xl w-[50%] py-2 ml-[25%] mt-12 text-yellow font-bold"
        onClick={() => setShowMoreProjects(!showMoreProjects)}
      >
        Show {showMoreProjects ? "less" : "more"} projects
      </button>
    </section>
  );
}

export default ProjectsSection;
