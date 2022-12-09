import FlexSeatsLogo from '../assets/img/flexseats-logo.png'
import FlexSeatsPic from '../assets/img/flexseats-pic.png'
import MemoryLaneLogo from '../assets/img/memory-lane-logo.png'
import MemoryLanePic from '../assets/img/memory-lane-pic.png'
import MyGradebookLogo from '../assets/img/my-gradebook-logo.png'
import MyGradebookPic from '../assets/img/my-gradebook-pic.png'
import PetRescueLogo from '../assets/img/pet-rescue.png'
import PetRescuePic from '../assets/img/pet-rescue-pic3.png'
import StudentAgendasLogo from '../assets/img/student-agendas-logo.png'
import StudentAgendasPic from '../assets/img/student-agendas-pic.png'

export const myProjects = [
  {
    id: 1,
    title: "Student Agendas",
    liveLink: "https://studentagendas.herokuapp.com",
    liveLinkMobile: true,
    titleImage: StudentAgendasLogo,
    titleDescription: "React/Redux front-end with Rails API backend",
    appImage: StudentAgendasPic,
    description: "Student Agendas was the tool I always wanted as an educator but could never quite find. It allows teachers to create individualized video agendas for students, as well as assess their understanding using reflection questions.  Every inch of the app is built with teachers and students in mind, such as a queue of 'To Be Graded' agenda items to ease grading for teachers.",
    githubUrl: "https://github.com/mathycoder/student-agendas-fullstack",
    demoUrl: "https://www.youtube.com/embed/VXla-HpaPUI",
    bullets: [
      "Developed a Rails API backend with endpoints for classes, students, progressions, videos, and reflections.",
      "Implemented user interface employing React and normalized state-shaped Redux with CSS for styling.",
      "Utilized react-beautiful-dnd to provide a visually interactive experience when ordering progressions and agendas.",
      "Utilized YouTube and Vimeo APIs to query videos for integration into customizable progressions."
    ]
  },
  {
    id: 2,
    title: "FlexSeats",
    liveLink: "https://flexseats.herokuapp.com/",
    liveLinkMobile: true,
    titleImage: FlexSeatsLogo,
    titleDescription: "React Hooks/Redux front-end with Rails API backend",
    appImage: FlexSeatsPic,
    description: "As a teacher, I always struggled to create a seating chart that arranged students by both their ability and behavior.  To make life easy for teachers everywhere, FlexSeats does just that, using algorithms to sort students homogenously or heterogenously into pairs or groups.",
    githubUrl: "https://github.com/mathycoder/seating-chart",
    demoUrl: "https://www.youtube.com/embed/MsofdmXUr-g",
    animatedGif: "https://www.dropbox.com/s/m10qr7rp86mwm0g/flexseats-demo2-gif.gif?raw=1",
    bullets: [
      "Developed a Rails API backend with endpoints for teachers, klasses, and students.",
      "Developed sorting algorithms for placing students in groups heterogenously or homogenously, which are constantly evolving.",
      "The React front-end is created 100% with functional components, and utilizes React Hooks",
      "Utilized react-dnd for both desktop and mobile drag-and-drop capability",
      "Creating accompanying React Native front-end, with the hope of an App Store FlexSeats in the future!"
    ]
  },
  {
    id: 3,
    title: "MyGradebook",
    liveLink: "https://my-gradebook.herokuapp.com",
    liveLinkMobile: false,
    titleImage: MyGradebookLogo,
    titleDescription: "jQuery/VanillaJS front-end with Rails API backend",
    appImage: MyGradebookPic,
    description: "I built MyGradebook to make standards-based grading easier and more intuitive for teachers.  The application makes it easy for teachers to see how their students are doing on the Common Core Standards.  Line and bar graphs give teachers immediate feedback on who knows what, and where to go next.  For any school hoping to make the jump to standards-based grading, this app would definitely help them on that journey!",
    githubUrl: "https://github.com/mathycoder/mygradebook-js",
    demoUrl: "https://www.youtube.com/embed/6h50pqRM3aI",
    bullets: [
      "Developed a Rails API backend with endpoints for classes, students, learning targets, assignments, and grades.",
      "Integrated BCrypt and OmniAuth for server-side authentication.",
      "Utilized Common Standards Project API to link grade- and content-specific Common Core standards to assignments.",
      "Implemented user interface employing jQuery and JS Model Objects with CSS for styling.",
      "Employed Chartkick.js for displaying student and class mastery data."

    ]
  },
  {
    id: 4,
    title: "MemoryLane",
    titleImage: MemoryLaneLogo,
    titleDescription: "Built with Ruby/Sinatra MVC",
    appImage: MemoryLanePic,
    description: "MemoryLane provides a more intimate way to share memories than Facebook or Instagram.  Users start by creating a lane with two or more people.  Then anyone in the lane can add a memory or contribute to other memories by adding their own recollections and photos.  The app is a great place for users to reminisce on old memories and recollections, or record brand new memories and share photos from new adventures!",
    githubUrl: "https://github.com/mathycoder/memory_lane",
    demoUrl: "https://www.youtube.com/embed/d3hfnxCV2V4",
    bullets: [
      "Developed a Sinatra backend with routes for users, lanes, memories, recollections, and images.",
      "Utilized Sqlite3 and ActiveRecord for database management.",
      "Developed a Sinatra front-end using the MVC pattern with ERB and CSS.",
      "My first exploration of CSS Flexbox and CSS Grid"
    ]
  },
  {
    id: 5,
    title: "Pet Rescue!",
    liveLink: "http://www.codeskulptor.org/#user45_K6NyFvtQe5_9.py",
    titleImage: PetRescueLogo,
    titleDescription: "Built with Python",
    appImage: PetRescuePic,
    description: "Before attending Flatiron, I began my coding journey on Coursera learning Python.  After a course where we created Pong and a version of Asteroids, I decided to try and create a platformer from scratch.  The result is a fun side-scrolling video game, where my niece attempts to rescue all of her missing pets.  This 'pet' project allowed me to explore a visual GUI, something I hope to one day do within educational applications.",
    demoUrl: "https://www.youtube.com/embed/ti942vuIiPI",
    bullets: [
      "Explored object-oriented programming to organize behavior of main character, enemies, and game elements.",
      "Utilized SimpleGUI and recursion to animate sprites and other graphics.",
      "Utilized basic physics around velocity, acceleration, and friction to mimic gravity and surfaces.",
      "Developed various levels using Python dictionaries and lists, setting the stage for arrays, objects, and hashes in Ruby and JavaScript."
    ]
  }
]
