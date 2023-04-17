import Axios from "axios";
import styles from "../../styles/Coins.module.css";
import Link from "next/link";

export default function Coins({ coinData }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coins List</h1>
      <div className={styles.coins}>
        {coinData.coins.map((coin, key) => {
          return (
            <div key={key} className={styles.coin}>
              <Link className={styles.link} href={`/coins/${coin.id}`}>
                <div className={styles.content}>
                  <h3 className={styles.name}>{coin.name}</h3>
                  {coin.icon ? (
                    <img src={coin.icon} style={{ width: 50, height: 50 }} />
                  ) : (
                    <p>no image</p>
                  )}
                  <p className={styles.price}>{coin.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
}
