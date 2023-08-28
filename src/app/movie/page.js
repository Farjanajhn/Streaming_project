
import MovieCard from "../component/MovieCard";
import styles from "@/app/styles/common.module.css"


const Movie = async () => {

  
  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2f18ac7f08msh443de598344affbp1f215fjsn4ff2d2de3824',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
}; 



  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles; 
  console.log(data)

  return (
    <>
       
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movie & Series</h1>
          <div className={styles.card_section}>
      {
        main_data.map((curElement) => {
          return <MovieCard key={curElement.id} {...curElement}/>
        })
            }
            </div>
        </div>

     </section> 
   
    </>
  );
};

export default Movie;