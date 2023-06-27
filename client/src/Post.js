export default function Post(){
    return(
        <div className='post'>

        <div className='image'>
        <img src='https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg?VersionId=IHJS5Rc94YcMivFNWBjtgZ8XUOyJKOCe&itok=kjpCxb_a' alt=''></img>
        </div>
        
        <div className='texts'>
        <h2>Astronomy and Space</h2>
        <p className='info'>
          <a className='author'> Omar Zouaoui </a>
          <time>2023-06-27 14:38</time>
        </p>
        <p className='summary'>
          The discovery of planets orbiting other stars and the search for life on these worlds.
          Understanding of the origin and evolution of the early universe.
          Understanding of mysterious dark matter and dark energy, which together comprise 95% of the observable universe.</p>
        </div> 

      </div>
    )
}