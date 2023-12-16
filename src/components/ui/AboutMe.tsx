export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col items-center w-screen py-10 text-sm text-start"
      style={{ width: "min(100vw, 800px)" }}
    >
      <h2 className="pb-10">About Me</h2>
      <div className="text-start px-[4%]">
        <p className="pb-4">
          Mohan Rai is a filmmaker, film educator and promoter of film culture
          in Nepal.
        </p>
        <p className="pb-4">
          He is the founding Chair of Centre for Cinematic Arts (CCA), a
          non-profit dedicated to cinema in Nepal.
        </p>
        <p className="pb-4">
          He has written and directed several documentary films. His documentary
          film &quot;Anjali: how long can someone live in other&apos;s
          skin&quot;, chronicling life, struggle and dreams of a transgender
          protagonist, was screened at various film festivals around the world.
        </p>
        <p className="pb-4">
          His feature film &quot;Mahanagar&quot; (One Night in Kathmandu in
          English) has been screened at film festivals around the world,
          including in US, India, Spain, Bangladesh and Nepal.
        </p>
        <p className="pb-4">
          It was awarded Best Film, Best Director, Best Screenwriter, Best Actor
          Female in Nepal International Film Festival 2022. It was also awarded
          Honorable Mention in Nepal America International Film Festival 2022.
          The film also won Jury Special Mention for Male Actor and Award for
          Most Inspirational Theme at Indus Valley International Film Festival,
          2022.
        </p>
        <p className="pb-4">
          He is also editor of a book titled &quot;Juxtaposition&quot;, a book
          on Nepali cinema. He is also the translator and editor of Nepali
          edition of the book on film directing &quot;Directing Feature Films,
          Creative Collaboration between Director, Writer and Actors&quot;,
          written by Mark Travis and originally published by Michael Weise
          Productions USA.
        </p>
        <p className="pb-4">
          Mohan is also working as the Festival Manager for the Nepal-European
          Union Film Festival for the past three years, now in its 13th edition.
        </p>
        <p className="pb-4">
          He is also the Managing Director of{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-500 underline"
            // style={{ color: "blue",  }}
            href="https://middlewayfilms.com"
          >
            Middleway Films
          </a>
          .
        </p>
      </div>
    </div>
  );
}
