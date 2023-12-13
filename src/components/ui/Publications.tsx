import CardImage from "../CardImage";

export function Publications() {
  return (
    <div className="recent-works w-full flex flex-col justify-center items-center">
      <h2 className="pb-8">Publications</h2>
      <div className="flex gap-10">
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/Mahanagar.webp"
          }
          title=""
          description="In-depth conversation about Nepali cinema with major Nepali filmmakers.
        Published by Middleway Films"
        />
        <CardImage
          imageUrl={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/directing_feature_films.webp"
          }
          title=""
          description="Creative Collaboration between Directors, Writers and Actors
        by Mark Travis and originally published by Michael Wiese Productions USA
        Mohan is the translator and editor of the Nepali edition of the book. The book was published by
        Middleway Films."
        />
      </div>
    </div>
  );
}

// {` Juxtaposition
// In-depth conversation about Nepali cinema with major Nepali filmmakers.
// Published by Middleway Films

// Directing Feature Films: Creative Collaboration between Directors, Writers and Actors
// by Mark Travis and originally published by Michael Wiese Productions USA
// Mohan is the translator and editor of the Nepali edition of the book. The book was published by
// Middleway Films.`}
