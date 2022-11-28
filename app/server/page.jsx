// getServerSideProps in Next 13
import { use } from "react";

async function getCharacters() {
  return await (await fetch("https://rickandmortyapi.com/api/character", { cache: "no-store" })).json();
}

const ServerPage = () => {

  const characters = use(getCharacters());

  return (
    <div>
      <h2>Server Fetching (getServerSideProps)</h2>
      {characters?.results?.map((c) => {
        return (
          <ul key={c.id}>
            <li>{c.name}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default ServerPage
