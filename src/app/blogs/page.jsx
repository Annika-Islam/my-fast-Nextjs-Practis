import React from 'react'
 import Datacomp from "@/app/components/Datacomp";
  
const Alldata = [
  {
    id: 1,
    name: "Rahim",
    email: "rahim@gmail.com",
    age: 22,
    city: "Dhaka"
  },
  {
    id: 2,
    name: "Karim",
    email: "karim@gmail.com",
    age: 25,
    city: "Chittagong"
  },
  {
    id: 3,
    name: "Nusrat",
    email: "nusrat@gmail.com",
    age: 21,
    city: "Rajshahi"
  },
    {
    id: 4,
    name: "kanij",
    email: "kanis@gmail.com",
    age: 21,
    city: "Dhamondu"
  },
  {
    id: 5,
    name: "Sadia",
    email: "sadia@gmail.com",
    age: 24,
    city: "Sylhet"
  },
  {
    id: 7,
    name: "Hasan",
    email: "hasan@gmail.com",
    age: 23,
    city: "Khulna"
  }
];
  

const Blogespage = () => {
  return (
    <div className=' grid grid-cols-2  mt-7 gap-6'>
        {
            Alldata.map(verName => <Datacomp
                key={verName.id}
                datareceve ={verName}
            ></Datacomp>)
        }
    </div>
  )
}

export default Blogespage