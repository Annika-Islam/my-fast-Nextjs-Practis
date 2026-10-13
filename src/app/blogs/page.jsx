import React from 'react'
import Post from '../components/Post';


  
const BlogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Annika Akter",
    category: "Web Development",
    description: "Learn the basics of React, including components, Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo magnam incidunt quam nulla, dignissimos excepturi. Deserunt cupiditate minus mollitia expedita dolor neque, quidem adipisci voluptatem. Blanditiis natus enim quae! props, and state."
  },
  {
    id: 2,
    title: "Introduction to Next.js",
    author: "Rahim Ahmed",
    category: "Web Development",
    description: "Discover how Next.js helps developers build  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque animi sequi qui neque, id voluptatem quisquam perspiciatis modi deserunt cum reprehenderit quo eius doloremque esse facilis quam fugit autem corporis. modern web applications."
  },
  {
    id: 3,
    title: "Mastering JavaScript Basics",
    author: "Nusrat Jahan",
    category: "Programming",
    description: "Explore variables, functions, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non quam dolores soluta? Non velit delectus, ratione exercitationem aspernatur facilis consequuntur debitis perferendis quibusdam, nihil officia quod temporibus, cupiditate ea. arrays, and objects in JavaScript."
  },
  {
    id: 4,
    title: "Why Tailwind CSS Is Popular",
    author: "Karim Hasan",
    category: "CSS",
    description: "Learn how Tailwind CSS makes Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore rerum fugit in officiis perferendis, et optio quos ut neque ipsum omnis! Enim totam ad dolor, omnis aut tempore fuga! website styling faster and easier."
  },
  {
    id: 5,
    title: "Building Your First Portfolio",
    author: "Sadia Islam",
    category: "Career",
    description: "Create a professional portfolio to Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis impedit error facilis nobis similique. At ducimus magnam praesentium distinctio ea qui nihil, laborum totam hic aspernatur aperiam odio cum. showcase your development skills."
  },

  {
    id: 2,
    title: "Introduction to Next.js",
    author: "Rahim Ahmed",
    category: "Web Development",
    description: "Discover how Next.js helps developers build  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque animi sequi qui neque, id voluptatem quisquam perspiciatis modi deserunt cum reprehenderit quo eius doloremque esse facilis quam fugit autem corporis. modern web applications."
  },
];

 

const BlogPage = () => {
  return (
    <div className=' grid grid-cols-2 gap-3 mt-5'>
       
       
       {
        BlogsData.map(blog => <Post
         key={BlogsData.id}
         datajabe = {blog}
        ></Post>)
       }


    </div>
  )
}

export default BlogPage