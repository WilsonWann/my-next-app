import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import { TAG } from "../../localstorage/tag";

// const fetcher = (url: string, id: string) =>
//   fetch(`/api${url}/${id}`).then((res) => res.json());
const fetcher = (url: string) => fetch(`${url}`).then((res) => res.json());
console.log(`fetcher:${fetcher}`);

const TagCRUD = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(`id:${id}`);
  const tagText = "/tag";
  console.log(`tagText:${tagText}`);
  console.log(`/api${tagText}/${id}`);
  //   const { data: tagWithID } = useSWR<TAG>(id ? ["/tag", id] : null, fetcher);
  const { data: tagWithID } = useSWR<TAG>(
    id ? `/api${tagText}/${id}` : null,
    fetcher
  );

  //   console.log(`tagWithID:${tagWithID}`);
  if (!tagWithID) return <div>Loading</div>;

  return (
    <>
      <h1>標籤管理-選擇</h1>
      <p key={tagWithID.id}>{tagWithID.name}</p>
    </>
  );
};

export default TagCRUD;
