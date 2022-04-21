import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
    import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
    return (
        <div>
            <SEO
                data={{
                    title: "Mohsen Falakedin",
                    description:
                        "A passionate Full Stack Web Developer and Blockchain Developer.",
                    image: "https://avatars3.githubusercontent.com/u/104103618?v=4",
                    url: "https://OxMohsen.ir",
                    keywords: [
                        "Mohsen",
                        "Mohsen Falakedin",
                        "Mohsen Falak",
                        "@oxmohsen",
                        "oxmohsen",
                        "@mohsenjs",
                        "mohsenjs",
                        "Portfolio",
                        "Mohsen Portfolio",
                        "Mohsen Falakedin Portfolio",
                        "Mohsen Falak Portfolio",
                    ],
                }}
            />
            <Navigation />
            <Greetings />
            <Skills />
            <Proficiency />
            <Education />
            <Experience />
            <Projects />
            <GithubProfileCard prof={githubProfileData} />
        </div>
    );
}

Home.prototype = {
    githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
    const githubProfileData = await fetch(
        `https://api.github.com/users/${openSource.githubUserName}`
    ).then((res) => res.json());

    return {
        props: { githubProfileData },
    };
}
