import { createClient } from "contentful";
import BodyCard from "../components/BodyCard";

export async function getStaticProps() {
  const cline = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "body" });

  return {
    props: {
      bodys: res.items,
    },
  };
}

export default function Bodys({ bodys }) {
  console.log(bodys);
  return (
    <div className="body-list">
      {bodys.map((body) => (
        <BodyCard key={body.sys.id} boyd={body} />
      ))}
      <style jsx>{`
        .body-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  );
}
