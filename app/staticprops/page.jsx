import Link from "next/link";
import { use } from "react";

// getStaticProps in Next 13
async function getCharacters() {
  console.log("terreeeeee")
  return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

const StaticPropsPage = () => {
  
  const allCharacters = use(getCharacters())

  return (
    <div>
      <h2>Server Fetching (getStaticProps)</h2>
      {allCharacters?.results.map(c =>
          <ul key={c.id}>
            <Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
              <li key={c.id}>{c.name}</li>
            </Link>
          </ul>
        )}
    </div>
  );
};

export default StaticPropsPage;
