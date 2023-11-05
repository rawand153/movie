import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {

  const [data, setData] = useState({})


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=f02febdb4b20707a46298409369b1816')
    
      .then(res => {
        setData(res.data)
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="app">
        <div className="navbar bg-dark">
          <div><a  to="#">MovieD App</a>
          <a to="#">Trending</a></div>
          <div className='d-flex'>
            <input className='form-control me-2' type="text" placeholder='Movie Search' />
          <button className='btn btn-secondary me-2' >Search</button>
          </div>
          
        </div>

       

          <div className="cards ">

            

              {data.results && data.results.map((result) => {
                return (

                  <>
                  {
                    <div className="card bg-secondary">
                      <img src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`} alt="" />
                      <button className='btn btn-dark'>View More</button>
                    </div>
                  }
                  </>
                )

              }
              )}


          </div>

        </div>


     
    </>
  )
}

export default App
