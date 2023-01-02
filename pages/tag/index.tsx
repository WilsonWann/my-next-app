import useSWR from "swr";
import { TAG } from "../../localstorage/tag";

const fetcher = (url: string) => fetch(`/api${url}`).then((res) => res.json());
console.log(`fetcher:${fetcher}`)
const TagPage = () => {
  const { data: tagsWithID } = useSWR<TAG[]>("/tag", fetcher);
  console.log(`tagsWithID:${tagsWithID}`)

  if (!tagsWithID) return <div>Loading</div>;

  return (
    <>
      <h1>標籤管理-總覽</h1>
      <ol>
        {tagsWithID.map((tag) => 
          <li key={tag.id}>{tag.name}</li>
        )}
      </ol>
    </>
  );
};

export default TagPage;
