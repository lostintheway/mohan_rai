import Mahanagar from "../../../public/mahanagar.jpg";
import CardImage from "../CardImage";
import "./RecentWorks.css";

export function RecentWorks() {
  return (
    <div className="recent-works-wrapper" id="filmography">
      <h2 className="pb-8">FILMOGRAPHY</h2>
      <div className="recent-works">
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/Mahanagar.webp"
          }
          title=""
          description=""
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/anjali.webp"
          }
          title=""
          description=""
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/sakhi.webp"
          }
          title=""
          description=""
        />
      </div>
    </div>
  );
}
