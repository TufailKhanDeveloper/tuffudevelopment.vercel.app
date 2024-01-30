import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRemix,
    SiRust,
    SiSolidity,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
    SiWeb3Dotjs,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "My Projects",
        description:
            "These are the projects I have built, and some projects I'm still working on. They will be added to this section soon.",
        technologies: [SiTypescript, SiSolidity, SiWeb3Dotjs, SiNextdotjs, SiReact,],
        techNames: ["TypeScript", "Solidity", "Web3.js", "Next.js", "React.js", ],
        techLinks: ["https://www.typescriptlang.org/", "https://soliditylang.org/", "https://web3js.org/", "https://nextjs.org/", "https://react.dev/"],
        github: "https://github.com/TufailKhanDeveloper/www.tuffudevelopment.vercel.com",
        demo: "https://tuffudevelopment.vercel.com/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    // {
    //     id: 1,
    //     name: "Code Wars Solutions",
    //     description:
    //         "Just a couple of solutions for www.codewars.com problems. I'm currently ranked 7 kyu.",
    //     technologies: [SiCplusplus, SiRust, SiNeovim],
    //     techNames: ["C++", "Rust", "Neovim"],
    //     techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
    //     github: "https://github.com/TufailKhanDeveloper/codewars",
    //     demo: "https://www.codewars.com/",
    //     image: "/projects/codewars.webp",
    //     available: true,
    // },
    {
        id: 1,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
            technologies: [SiTypescript, SiSolidity, SiWeb3Dotjs, SiNextdotjs, SiReact,],
            techNames: ["TypeScript", "Solidity", "Web3.js", "Next.js", "React.js", ],
            techLinks: ["https://www.typescriptlang.org/", "https://soliditylang.org/", "https://web3js.org/", "https://nextjs.org/", "https://react.dev/"],
        github: "https://github.com/TufailKhanDeveloper",
        demo: "https://github.com/TufailKhanDeveloper",
        image: "/projects/construction.webp",
        available: false,
    },
];
