import Mahanagar from "../../../public/mahanagar.jpg";
import CardImage from "../CardImage";
import "./RecentWorks.css";

export function RecentWorks() {
  return (
    <div className="recent-works-wrapper" id="fiction">
      <h2>Fiction</h2>
      <div className="recent-works">
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
          }
          title="Beautiful Sunset"
          description="A stunning view of the sunset over the mountains."
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
          }
          title="City Skyline"
          description="An impressive city skyline at night."
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
          }
          title="City Skyline"
          description="An impressive city skyline at night."
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
          }
          title="City Skyline"
          description="An impressive city skyline at night."
        />
      </div>
    </div>
  );
}
