export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col items-center py-16"
      style={{ width: "min(100vw, 800px)" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight slide-up-container">
        About Me
      </h2>
      <div className="space-y-6 px-6 md:px-8">
        <p className="text-lg md:text-xl font-medium text-gray-900 text-center leading-relaxed slide-up-container">
          Mohan Rai is a filmmaker, film educator and promoter of film culture
          in Nepal.
        </p>
        <p className="text-lg md:text-xl font-medium text-gray-900 text-center leading-relaxed slide-up-container">
          He is the founding Chair of Centre for Cinematic Arts (CCA), a
          non-profit dedicated to cinema in Nepal.
        </p>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="slide-up-container">
            He has written and directed several documentary films. His
            documentary film &quot;Anjali: how long can someone live in
            other&apos;s skin&quot;, chronicling life, struggle and dreams of a
            transgender protagonist, was screened at various film festivals
            around the world.
          </p>
          <p className="slide-up-container">
            His feature film &quot;Mahanagar&quot; (One Night in Kathmandu in
            English) has been screened at film festivals around the world,
            including in US, India, Spain, Bangladesh and Nepal.
          </p>
          <p className="slide-up-container">
            It was awarded Best Film, Best Director, Best Screenwriter, Best
            Actor Female in Nepal International Film Festival 2022. It was also
            awarded Honorable Mention in Nepal America International Film
            Festival 2022. The film also won Jury Special Mention for Male Actor
            and Award for Most Inspirational Theme at Indus Valley International
            Film Festival, 2022.
          </p>
          <p className="slide-up-container">
            He is also editor of a book titled &quot;Juxtaposition&quot;, a book
            on Nepali cinema. He is also the translator and editor of Nepali
            edition of the book on film directing &quot;Directing Feature Films,
            Creative Collaboration between Director, Writer and Actors&quot;,
            written by Mark Travis and originally published by Michael Weise
            Productions USA.
          </p>
          <p className="slide-up-container">
            Mohan is also working as the Festival Manager for the Nepal-European
            Union Film Festival for the past three years, now in its 13th
            edition.
          </p>
          <p className="slide-up-container">
            He is also the founding Chairperson of Centre for Cinematic Arts
            (CCA), a non-profit dedicated to cinema, and the Managing Director
            of{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 hover:text-blue-800 transition-colors underline group inline-flex items-center"
              href="https://middlewayfilms.com"
            >
              Middleway Films
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
            .
          </p>
        </div>
      </div>
    </div>
  );
}
