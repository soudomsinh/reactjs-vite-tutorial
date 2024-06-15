import { useState } from "react"
// import 'primeicons/primeicons.css';
import {FaMapMarker} from 'react-icons/fa'    
import { Link } from "react-router-dom"   

const JobListing = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description; 

  if(!showFullDescription){
    description = description.substring(0, 90) + '...'
   
  }

  return (
    <div className='bg-white rounded-lg shadow-md relative'>
            <div className='p-4'>
              <div className='mb-6'>
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>
              <div className="mb-5">
                {description}
              </div>
              <button 
                className="text-green-600 mb-5 hover:text-green-700"
                onClick={() => setShowFullDescription((prevState)=> !prevState)}
              >
                {showFullDescription ? 'Less': 'More'}  {/* conditional statement in ternary syntax */}
              </button>

              <h3 className="text-green-600 mb-2"> {job.salary}/year</h3>
              <div className="border border-gray-100 mb-5"></div>
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className="inline text-lg mb-1 me-1"/>
                  {job.location}
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className='h-[360] bg-green-700 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-center text-sm'
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
  )
}

export default JobListing