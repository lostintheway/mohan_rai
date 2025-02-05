import CardImage from "../CardImage";

export function RecentWorks() {
  return (
    <div
      className="py-16 px-4 mx-auto"
      id="filmography"
      style={{ width: "min(100vw, 1200px)" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight slide-up-container">
        Filmography
      </h2>

      <div className="space-y-32">
        {/* Mahanagar */}
        <div className="group flex flex-col md:flex-row items-center justify-center gap-12 hover:bg-gray-50/50 rounded-3xl p-8 transition-all duration-500 slide-up-container">
          <CardImage
            imageUrl="https://pub-0198217282574dada06155209c57c678.r2.dev/Mahanagar.webp"
            title=""
            description=""
            className="transform transition-transform duration-500 group-hover:scale-[1.02] shadow-lg"
          />
          <div className="space-y-6 w-[min(100vw,500px)] px-10 md:px-0">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">
              One Night in Kathmandu (Mahanagar)
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              The effort by a girl--together with a boy, who she is strange
              to--to save a man injured in a road accident one evening in
              Kathmandu unexpectedly turns out to be a pretext to heal her own
              wounded soul.
            </p>
            <a
              href="https://www.youtube.com/watch?v=7RKwkS8ZgDM"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Anjali */}
        <div className="group flex flex-col md:flex-row items-center justify-center gap-12 hover:bg-gray-50/50 rounded-3xl p-8 transition-all duration-500 slide-up-container">
          <CardImage
            imageUrl="https://pub-0198217282574dada06155209c57c678.r2.dev/anjali.webp"
            title=""
            description=""
            className="transform transition-transform duration-500 group-hover:scale-[1.02] shadow-lg"
          />
          <div className="space-y-6 w-[min(100vw,500px)] px-10 md:px-0">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">
              Anjali: How long can someone live in other{"'"}s skin
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              Life, struggles and dreams of a transgender protagonists in Nepal
            </p>
            <a
              href="https://www.youtube.com/watch?v=6ueWweu8ghw&t=375s"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Sakhi */}
        <div className="group flex flex-col md:flex-row items-center justify-center gap-12 hover:bg-gray-50/50 rounded-3xl p-8 transition-all duration-500 slide-up-container">
          <CardImage
            imageUrl="https://pub-0198217282574dada06155209c57c678.r2.dev/sakhi.webp"
            title=""
            description=""
            className="transform transition-transform duration-500 group-hover:scale-[1.02] shadow-lg"
          />
          <div className="space-y-6 w-[min(100vw,500px)] px-10 md:px-0">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">
              Sahki: Story of friends who could have been enemies
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              Documentary film set against the background of the armed conflict
              between the Maoists and the Nepali state. Dilmaya and Sangita, who
              come from two different communities, reside in the same village.
              The two communities largely were the opposing side of the
              conflict. Both Dilmaya and Sangita lost their father due to the
              enmity between the two communities and their families are at odds
              with each other. Despite this they chose to remain friends for
              life…
            </p>
            <a
              href="https://www.youtube.com/watch?v=txTQAc4V4rw&t=5s"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
