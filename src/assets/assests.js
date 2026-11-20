import { color } from "framer-motion";
import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovation',
        description: 'I love creating unique solutions to complex problms with cutting-edge technologies ',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Beautiful design and user experience are at the heart of everything i create',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I write maintainable efficient cod3 following best practice and modern patterns'
    }
]
export const skills = [
    {
        title: 'HTML5',
        icon: FaHtml5,
        description:'Building well-structed and semantic web pages.',
        tags:['HTML5','Semantic HTML','Forms']
    },
    {
        title: 'CSS3',
        icon:FaCss3Alt,
        description:'Creating responsive and attractive website designs',
        tags:['CSS3','Flexbox','Grid','Media Queries']
    },
    {
        title:'Javascript',
        icon: FaJs,
        description:'Building interactive and dynamic web applications.',
        tags:['ES6+','DOM','Events','Array & Objects']
    },
    {
        title:'React.JS',
        icon:FaReact,
        description:'Building reusable and interactive user interfaces.',
        tags:['React','JSX','Props','Components']
    },
    {
        title:'tailwind CSS',
        icon:SiTailwindcss,
        description:'Designing responsive interfaces using utility-first CSS.',
        tags:['Tailwind CSS','Responsive Design']
    },
    {
        title:'Git & Github',
        icon:FaGithub,
        description:'Managing projects and tracking code using Git and Github',
        tags:['Git','Github','Version','Control']
    },
];
export const projects=[
    {
        title:"Technology Website",
        description:"A modern and responsive technology company website designed to showcase digital services and solutions.",
        image: "/techhh.png",
        icons:[FaHtml5,FaCss3Alt],
        demo:"#",
        code:"#",
    },
    {
    title: "Quiz App",
    description: "An interactive quiz application where users can answer questions, check correct answers and view their final score.",
    image: "/quiz.png",
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
},
{
    title: "Todo App",
    description: "A task management application that allows users to add, edit, delete and manage their daily tasks.",
    image: "/Todo.png",
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "#",
    code: "#",
},
]
