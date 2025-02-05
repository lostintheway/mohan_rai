import CardImage from "../CardImage";

export function Publications() {
  const publications = [
    {
      id: 1,
      imageUrl:
        "https://pub-0198217282574dada06155209c57c678.r2.dev/juxtaposition.jpg",
      title: "Juxtaposition",
      description:
        "In-depth conversation about Nepali cinema with major Nepali filmmakers.",
      publisher: "Published by Middleway Films",
    },
    {
      id: 2,
      imageUrl:
        "https://pub-0198217282574dada06155209c57c678.r2.dev/directing_feature_films.webp",
      title:
        "Directing Feature Films: Creative Collaboration between Directors, Writers and Actors",
      description:
        "by Mark Travis and originally published by Michael Wiese Productions USA",
      additionalInfo:
        "Mohan is the translator and editor of the Nepali edition of the book. The book was published by Middleway Films.",
    },
  ];

  return (
    <div className="py-16 px-4 " style={{ width: "min(100vw, 1000px)" }}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight slide-up-container">
        Publications
      </h2>

      <div className=" flex flex-wrap justify-center">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="group w-[min(96vw,440px)] flex flex-col items-center gap-8 hover:bg-gray-50/50 rounded-2xl p-8 
            transition-all duration-500 slide-up-container"
          >
            <CardImage
              imageUrl={pub.imageUrl}
              title=""
              description=""
              className="transform transition-transform duration-500 group-hover:scale-[1.02] shadow-lg max-w-[300px]"
            />

            <div className="space-y-4 max-w-2xl">
              <h4 className="text-2xl font-bold text-gray-900 tracking-tight text-center">
                {pub.title}
              </h4>
              <p className="text-gray-600 leading-relaxed italic text-center">
                {pub.description}
              </p>
              <p className="text-gray-600 leading-relaxed italic text-center">
                {pub.publisher}
              </p>
              {pub.additionalInfo && (
                <p className="text-gray-600 leading-relaxed italic text-center">
                  {pub.additionalInfo}
                </p>
              )}
            </div>
          </div>
        ))}
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
