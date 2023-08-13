import CardImage from "../../components/ui/CardImage";
import Mahanagar from "../../../public/mahanagar.jpg";
import "./RecentWorks.css";

export function RecentWorks() {
  return (
    <div className="recent-works-wrapper">
      <h1>Recent Works</h1>
      <div className="recent-works">
        <CardImage
          imageUrl={Mahanagar}
          title="Beautiful Sunset"
          description="A stunning view of the sunset over the mountains."
        />
        <CardImage
          imageUrl={Mahanagar}
          title="City Skyline"
          description="An impressive city skyline at night."
        />
        <CardImage
          imageUrl={Mahanagar}
          title="City Skyline"
          description="An impressive city skyline at night."
        />
        <CardImage
          imageUrl={Mahanagar}
          title="City Skyline"
          description="An impressive city skyline at night."
        />
      </div>
    </div>
  );
}
