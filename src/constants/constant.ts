import { userObject } from "@/models/User"; // Ensure this is correctly defined
import { NavItems } from "@/models/Header"; // Ensure this is correctly defined

export const userInfo: userObject = {
    name: 'Syeda Bismah Jaffery',
    // Use relative path or URL for an image stored in the public folder
    picture: '/assets/pic.jpeg', // Replace with actual image filename
    heading: 'As a passionate front-end web developer, I am committed to creating intuitive and visually appealing websites. With a strong foundation in HTML, CSS, and JavaScript, I continuously strive to enhance user experience and design.',
    about:  `
    <p>I am a passionate front-end web developer with expertise in HTML, CSS, and JavaScript.Continuously learning modern frameworks like React.js, I aim to improve my skills.</p>
 <p>With a keen interest in UI/UX design.My goal is to contribute to creative and innovative web projects. I'm excited to grow as a developer and collaborate on meaningful solutions.</p>
    `,


    skills: [ 'HTML', 'CSS', 'Javascript', 'Typescript', 'React']
}

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },  // Routing to the home page
    about: { label: 'About', page: 'about' },  // Routing to the about page
    projects: { label: 'Projects', page: 'projects' },  // Routing to the projects page
}

export const projects = {
    gmail : {image: "/assets/pic1.png"},
   indeed: {image: "/assets/pro_01.png"},
   curd: {image: "/assets/pro_02.png"}
}