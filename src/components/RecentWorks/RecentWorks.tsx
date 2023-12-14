import Mahanagar from "../../../public/mahanagar.jpg";
import CardImage from "../CardImage";
import "./RecentWorks.css";

export function RecentWorks() {
  return (
    <div className="recent-works-wrapper" id="works">
      <h2 className="pb-8">FILMOGRAPHY</h2>
      <div className="recent-works">
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/Mahanagar.webp"
          }
          title="Beautiful Sunset"
          description="A stunning view of the sunset over the mountains."
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/anjali.webp"
          }
          title="City Skyline"
          description="An impressive city skyline at night."
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/sakhi.webp"
          }
          title="City Skyline"
          description="An impressive city skyline at night."
        />
      </div>
    </div>
  );
}
