import Axios from "axios";
import React from "react";
import styles from '../../styles/Coin.module.css';

const CoinDetail = ({ coin }) => {
  const coinData = coin.data.coin;

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{coinData.name}</h1>
      <img src={coinData.icon}/>
      {Object.keys(coinData).map((item, key) => {
        if (item === 'icon' || item === 'name' || item === 'exp') {
          return null;
        }
        return <p className={styles.item} key={key}>{`${item}: ${coinData[item]}`}</p>;
      })}
    </div>
  );
};

export async function getStaticPaths() {
  const data = await Axios.get("https://api.coinstats.app/public/v1/coins/");
  console.log(data);
  const paths = data.data.coins.map((coin) => ({
    params: { id: coin.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await Axios.get(
    `https://api.coinstats.app/public/v1/coins/${params.id}/`
  );
  const coinData = response.data;

  const headers = {
    "content-type": response.headers["content-type"],
    ...(response.headers["authorization"] && {
      authorization: response.headers["authorization"],
    }),
  };

  return {
    props: {
      coin: {
        data: coinData,
        headers,
      },
    },
  };
}

export default CoinDetail;
