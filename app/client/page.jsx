"use client";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (path) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

const ClientPage = () => {
  const characters = useSWR("api/character", fetcher);

  return (
    <>
      <h2>Client Fetching</h2>
      {characters?.data?.results?.map(c =>
          <ul key={c.id}>
            <Link href={`/staticprops/${c.name}`}>
              <li>
                {c.name}
              </li>
            </Link>
          </ul>
        )}
    </>
  );
};

export default ClientPage;
