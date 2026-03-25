// import React, {useContext} from "react";
// import "./StartupProjects.scss";
// // import {bigProjects} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// const bigProjects = {
//   title: "Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("../../assets/images/AozoomIndia.png"),
//       projectName: "Aozoom India Erp",
//       projectDesc: "Warranty & Claim Management System",
//       footerLink: [
//         {
//           name: "Aozoom India",
//           url: "https://aozoomclient.srijansynergy.com/"
//         }
//       ]
//     },
//     {
//       image: require("../../assets/images/ssn.jpg"),
//       projectName: "SSN",
//       projectDesc: "Educational Platform",
//       footerLink: [
//         {
//           name: "Sanskrit Shiksha Lokam",
//           url: "https://www.sanskritlokam.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// export default function StartupProject() {
//   function openUrlInNewTab(url) {
//     if (!url) {
//       return;
//     }
//     var win = window.open(url, "_blank");
//     win.focus();
//   }

//   const {isDark} = useContext(StyleContext);
//   if (!bigProjects.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="projects">
//         <div>
//           <h1 className="skills-heading">{bigProjects.title}</h1>
//           <p
//             className={
//               isDark
//                 ? "dark-mode project-subtitle"
//                 : "subTitle project-subtitle"
//             }
//           >
//             {bigProjects.subtitle}
//           </p>

//           <div className="projects-container">
//             {bigProjects.projects.map((project, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={
//                     isDark
//                       ? "dark-mode project-card project-card-dark"
//                       : "project-card project-card-light"
//                   }
//                 >
//                   {project.image ? (
//                     <div className="project-image">
//                       <img
//                         src={project.image}
//                         alt={project.projectName}
//                         className="card-image"
//                       ></img>
//                     </div>
//                   ) : null}
//                   <div className="project-detail">
//                     <h5
//                       className={isDark ? "dark-mode card-title" : "card-title"}
//                     >
//                       {project.projectName}
//                     </h5>
//                     <p
//                       className={
//                         isDark ? "dark-mode card-subtitle" : "card-subtitle"
//                       }
//                     >
//                       {project.projectDesc}
//                     </p>
//                     {project.footerLink ? (
//                       <div className="project-card-footer">
//                         {project.footerLink.map((link, i) => {
//                           return (
//                             <span
//                               key={i}
//                               className={
//                                 isDark ? "dark-mode project-tag" : "project-tag"
//                               }
//                               onClick={() => openUrlInNewTab(link.url)}
//                             >
//                               {link.name}
//                             </span>
//                           );
//                         })}
//                       </div>
//                     ) : null}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }

import React, {useContext} from "react";
import "./StartupProjects.scss";
// import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const bigProjects = {
  title: "Projects",
  subtitle:
    "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH (WEB & MOBILE APPS)",
  projects: [
    {
      type: "web",
      image: require("../../assets/images/AozoomIndia.png"),
      projectName: "Aozoom India ERP",
      techStack: "React.js, Redux, Node.js",
      footerLink: [
        {
          name: "Aozoom India",
          url: "https://aozoomclient.srijansynergy.com/"
        }
      ]
    },
    {
      type: "web",
      image: require("../../assets/images/ssn.jpg"),
      projectName: "SSN",
      techStack: "React.js, Firebase",
      footerLink: [
        {
          name: "Sanskrit Shiksha Lokam",
          url: "https://www.sanskritlokam.com/"
        }
      ]
    },
    {
      type: "app",
      image: require("../../assets/images/AozoomApp.webp"),
      projectName: "Aozoom India App",
      techStack: "React Native CLI, Zustand",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.aozoom"
        }
      ]
    },
    {
      type: "app",
      image: require("../../assets/images/Servoji.png"),
      projectName: "Car Washing App",
      techStack: "React Native CLI, Redux Toolkit",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.servoji"
        }
      ]
    }
  ],
  display: true
};

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              const isApp = project.type === "app";

              return (
                <div
                  key={i}
                  className={`project-card ${
                    isDark
                      ? "dark-mode project-card-dark"
                      : "project-card-light"
                  } ${isApp ? "project-card-app" : ""}`}
                >
                  {/* Image + Badge */}
                  {project.image && (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                      <span
                        className={`project-type-badge ${
                          isApp ? "badge-app" : "badge-web"
                        }`}
                      >
                        {isApp ? "APP" : "WEB"}
                      </span>
                    </div>
                  )}

                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.techStack}
                    </p>

                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, index) => (
                          <span
                            key={index}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
