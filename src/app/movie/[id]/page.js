import styles from  "@/app/styles/common.module.css"

import Image from "next/image";
const page = async({ params }) => {
  const id = params.id;
  const url =`https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2f18ac7f08msh443de598344affbp1f215fjsn4ff2d2de3824',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  }; 

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>NetFlix / <span>{main_data.type}</span></h2>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} width={250} height={200}></Image>
          <div className={styles.card_data}>
            <h2>
              {main_data.title}

            </h2>
            <p>
              {main_data.synopsis}
            </p>
            
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default page;