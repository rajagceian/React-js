import React from 'react'
import Cards from './components/Cards'
import Header from './components/Header';

const App = () => {
  const jobs = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfGyEcEdPfzca-b4iATLHuHIk80_yYMtRWw&s",
      companyName: "Google",
      role: "Frontend Engineer",
      post: "Software Engineering",
      location: "Bangalore, India",
      posted: "2 days ago",
      pay: "₹25-40 LPA",
      tags: ["Full Time", "Remote"]
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5wT5R7vumVlrrcVIzxKqoqNYtNmpJqwMIQ&s",
      companyName: "Amazon",
      role: "Backend Developer",
      post: "SDE-1",
      location: "Hyderabad, India",
      posted: "1 week ago",
      pay: "₹20-35 LPA",
      tags: ["Full Time"]
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
      companyName: "Apple",
      role: "iOS Developer",
      post: "Mobile Development",
      location: "California, USA",
      posted: "3 days ago",
      pay: "$120k-$180k",
      tags: ["Full Time"]
    },
    {
      logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      role: "Data Engineer",
      post: "Data Team",
      location: "Remote",
      posted: "5 days ago",
      pay: "$130k-$200k",
      tags: ["Remote"]
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez1McrNMsAAXCEyFxpBq-TMyzkYZ7fe1S-w&s",
      companyName: "Meta",
      role: "Full Stack Developer",
      post: "Software Engineer",
      location: "London, UK",
      posted: "1 day ago",
      pay: "£70k-£110k",
      tags: ["Full Time"]
    },
    {
      logo: "https://i-invdn-com.investing.com/trkd-images/LYNXNPEL9603M_L.jpg",
      companyName: "Tesla",
      role: "Embedded Engineer",
      post: "Hardware Team",
      location: "Texas, USA",
      posted: "4 days ago",
      pay: "$100k-$150k",
      tags: ["Full Time"]
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1982812857570836480/PpMZQXvi.jpg",
      companyName: "Adobe",
      role: "UI/UX Designer",
      post: "Design Team",
      location: "Noida, India",
      posted: "6 days ago",
      pay: "₹15-25 LPA",
      tags: ["Part Time"]
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMUAvrCORnXn4DyTMRmEq77tPfHArnO62gg&s",
      companyName: "Airbnb",
      role: "Product Engineer",
      post: "Product Team",
      location: "Remote",
      posted: "2 weeks ago",
      pay: "$110k-$160k",
      tags: ["Remote"]
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s",
      companyName: "Nvidia",
      role: "AI Engineer",
      post: "AI/ML Team",
      location: "Pune, India",
      posted: "3 days ago",
      pay: "₹30-50 LPA",
      tags: ["Full Time"]
    },
    {
      logo: "https://cdn.vectorstock.com/i/500p/89/00/x-logo-icon-vector-51648900.jpg",
      companyName: "X (Twitter)",
      role: "DevOps Engineer",
      post: "Cloud Infrastructure",
      location: "San Francisco, USA",
      posted: "1 week ago",
      pay: "$120k-$170k",
      tags: ["Full Time"]
    }
  ];
  return (
    <>
    <Header />
    <div className='parent'>
        {jobs.map((job,idx) =>{
          return (
          <div key={idx}>
            <Cards logo={job.logo} companyName={job.companyName} role={job.role} post={job.post} location={job.location} posted={job.posted} pay = {job.pay} tags = {job.tags} />   
          </div>
          )

        })}

    </div>
    </>

  )
}

export default App
