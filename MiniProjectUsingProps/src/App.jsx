import { useState } from "react";
import "./App.css";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";

function App() {
  // array of objects of jobOpenings
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "London, UK",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      role: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      role: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Tokyo, Japan",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      role: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      role: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Berlin, Germany",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "10 weeks ago",
      role: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      role: "AI Researcher",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Toronto, Canada",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "6 days ago",
      role: "Database Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Sydney, Australia",
    },
    {
      brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium",
      companyName: "Adobe",
      datePosted: "12 days ago",
      role: "Product Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Paris, France",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem , idx) {
        return (
         <div key={idx}>
           <Card
            logo={elem.brandLogo}
            company={elem.companyName}
            post={elem.datePosted}
            role={elem.role}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
         </div>
        );
      })}
    </div>
  );
}

export default App;
