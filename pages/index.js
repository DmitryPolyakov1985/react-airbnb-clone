import houses from "../houses";
import House from "../components/House";
import Layout from "../components/Layout";

const content = (
  <div>
    <h2>Places to stay</h2>
    <div className="houses">
      {houses.map((houses, index) => {
        return <House key={index} {...houses} />;
      })}
    </div>
    <style jsx>{`
      .houses {
        display: grid;
        grid-template-columns: 49% 49%;
        grid-template-rows: 300px 300px;
        grid-gap: 2%;
      }
    `}</style>
    ;
  </div>
);

export default function Home() {
  return <Layout content={content} />;
}
