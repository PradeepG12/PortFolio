import { FaReact, FaPython, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDjango, SiSocketdotio } from 'react-icons/si';

import chat_app_img from '../images/Projects/chat_app_img.png'

const projectData = [
  {
    title: 'Smart Recruitment',
    image: '',
    description: 'AI-powered resume screening and job recommendation system.',
    tech: [FaReact, SiDjango, FaPython],
    demoLink: 'https://yourdemo.com',
    githubLink: 'https://github.com/yourusername/smart-recruitment',
  },
  {
    title: 'Real-Time Chat App',
    image: chat_app_img,
    description: 'Chat with users in real-time based on location.',
    tech: [FaReact, SiSocketdotio, FaPython],
    demoLink: 'https://yourchatapp.com',
    githubLink: 'https://github.com/yourusername/chat-app',
  },
  // Add more projects here
];

export default projectData;
