import './App.css';
import Container from './Container.js'
let courses=
  [
    {
      "title": "Learn Python: The Complete Python Programming Course",
      "author": "Avinash Jain, The Codex",
      "rate": 4.4,
      "reviewers": "(2,923)",
      "image": "https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      "price": "E£679.99"
    },
    {
      "title": "Learning Python for Data Analysis and Visualization",
      "author": "Jose Portilla",
      "rate": 4.4,
      "reviewers": "(2,923)",
      "image": "https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      "price": "E£1,599.99"
    },
    {
      "title": "Python for Beginners - Learn Programming from scratch",
      "author": "Jose Portilla",
      "rate": 4.4,
      "reviewers": "(2,923)",
      "image": "https://img-b.udemycdn.com/course/480x270/405878_e5a0_3.jpg",
      "price": "E£679.99"
    },
    {
      "title": "Learn Python: Python for Beginners",
      "author": "Avinash Jain, The Codex",
      "rate": 4.4,
      "reviewers": "(2,923)",
      "image": "https://img-b.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      "price": "E£319,99"
    },
    {
      "title": "Python Beyond the Basics - Object-Oriented Programming",
      "author": "Avinash Jain, The Codex",
      "rate": 4.4,
      "reviewers": "(2,923)",
      "image": "https://img-b.udemycdn.com/course/240x135/449532_2aa9_7.jpg",
      "price": "E£519,9"
    }];
function App() {
  return (
   <Container courses={courses}/>
  );
}

export default App;