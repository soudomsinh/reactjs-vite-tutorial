import Hero from '../conmponents/Hero'
import HomeCards from '../conmponents/HomeCards'
import JobListings from '../conmponents/JobListings'
import ViewAllJobs from '../conmponents/ViewAllJobs'


const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage