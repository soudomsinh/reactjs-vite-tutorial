import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: 'block',
    margin: '100px auto'
}
const Spinner = ({loadibg}) => {
  return (
    <ClipLoader 
        color="green"
        loading = {loadibg}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={5}
    
    />
  )
}

export default Spinner
