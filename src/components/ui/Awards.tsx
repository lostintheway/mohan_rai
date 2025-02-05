export const Awards = () => {
  const awards = [
    {
      id: 1,
      award:
        "Best Film, Best Director, Best Screenwriter, Best Actor Female in Nepal International Film Festival (NIFF) 2022.",
      year: "2022",
      remarks: 'For the film titled "Mahanagar" (One Night in Kathmandu)',
    },
    {
      id: 2,
      award:
        "Honorable Mention in Nepal America International Film Festival 2022",
      year: "2022",
      remarks: 'For the film titled "Mahanagar" (One Night in Kathmandu)',
    },
    {
      id: 3,
      award:
        "Jury Special Mention for Male Actor and Award for Most Inspirational Theme at Indus Valley International Film Festival, 2022.",
      year: "2022",
      remarks: 'For the film titled "Mahanagar" (One Night in Kathmandu)',
    },
  ];

  return (
    <div className="py-16 px-4" style={{ width: "min(100vw, 1000px)" }}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight slide-up-container">
        Awards
      </h2>

      <p className="text-lg text-gray-600 mb-10 text-center slide-up-container">
        One Night in Kathmandu received several awards nationally and
        internationally.
      </p>

      {/* Desktop View - Table */}
      <div className="hidden lg:block overflow-x-auto shadow-lg rounded-lg slide-up-container">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-slate-200 border-b border-gray-200">
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900 w-16">
                SN
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
                Awards
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900 w-24">
                Year
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {awards.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm text-gray-600">{item.id}</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {item.award}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{item.year}</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {item.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet View - Cards */}
      <div className="lg:hidden space-y-6 slide-up-container">
        {awards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                {item.id}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {item.year}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-gray-900 font-medium leading-relaxed">
                {item.award}
              </p>
              <p className="text-sm text-gray-600 italic">{item.remarks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
