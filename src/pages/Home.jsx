import React from 'react'
import { ImgWithBlurredCaption } from '../component/post'
import image from "./post.png"

export const Home = () => {
  const data=[
    {
      image:image,
      des:"this my new blog welcome",
      commentaire:[
        {
          commentaire: "this my new blog welcome this my new blog welcomethis my new blog welcome this my new blog welcome this my new blog welcome this my new blog welcome",
          user:{
            name:'John',
            image:'https://docs.material-tailwind.com/img/face-2.jpg'
          },
        },
        {
          commentaire: "this my new blog welcome this my new blog welcomethis my new blog welcome this my new blog welcome this my new blog welcome this my new blog welcome",
          user:{
            name:'John',
            image:'https://docs.material-tailwind.com/img/face-2.jpg'
          },
        },
        {
          commentaire: "this my new blog welcome this my new blog welcomethis my new blog welcome this my new blog welcome this my new blog welcome this my new blog welcome",
          user:{
            name:'John',
            image:'https://docs.material-tailwind.com/img/face-2.jpg'
          },
        },
        {
          commentaire: "this my new blog welcome this my new blog welcomethis my new blog welcome this my new blog welcome this my new blog welcome this my new blog welcome",
          user:{
            name:'John',
            image:'https://docs.material-tailwind.com/img/face-2.jpg'
          },
        },
      ]    
    },
    {
      image:image,
      des:"this my new blog welcome",
    },  {
      image:image,
      des:"this my new blog welcome",
    },  {
      image:image,
      des:"this my new blog welcome",
    },  {
      image:image,
      des:"this my new blog welcome",
    },  {
      image:image,
      des:"this my new blog welcome",
    },  {
      image:image,
      des:"this my new blog welcome",
    },
  ]
  return (
    <div className='w-full flex flex-col items-center gap-10 mt-12'>
      {data.map((blog , index)=>(
      <ImgWithBlurredCaption key={index} blog={blog} />
      ))}
    </div>
  )
}
