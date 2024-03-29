import travel from '/public/image/travel.jpg';
import SHG from '/public/image/SHG.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Non Network Intensive Record Keeping System',
        description: "Me and my team worked worked on this app during Smart India Hackathon, where we reached till final stage. This app allow self help groups to store data with low or no network connectivity. ",
        tools: ['Android', 'Kotlin', 'Java', 'WorkManager API', 'Django'],
        role: 'Android Developer',
        code: '',
        demo: '',
        image: SHG,
    },
    {
        id: 2,
        name: 'Portfolio Management System',
        description: 'Portfolio Management System is a set of APIs made in nodeJS which gives functionalities such as: Create trade, Get all created trades, Get portfolio and Get portfolio returns',
        tools: ['TypeScript', 'NodeJS', "ExpressJS", "JWT", "MongoDB", "Mongoose"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
