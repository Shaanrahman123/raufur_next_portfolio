import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import canva from "../app/assets/svg/skills/canva.svg";
import css from "../app/assets/svg/skills/css.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import gcp from "../app/assets/svg/skills/gcp.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import java from "../app/assets/svg/skills/java.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";

import mongoDB from "../app/assets/svg/skills/mongoDB.svg";

import nextJS from "../app/assets/svg/skills/nextJS.svg";

import picsart from "../app/assets/svg/skills/picsart.svg";

import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";

import typescript from "../app/assets/svg/skills/typescript.svg";

import vitejs from "../app/assets/svg/skills/vitejs.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "java":
      return java;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "figma":
      return figma;
    case "picsart":
      return picsart;
    case "canva":
      return canva;
    default:
      break;
  }
};
