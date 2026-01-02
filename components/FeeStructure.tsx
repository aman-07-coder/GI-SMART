'use client'

const FeeStructure = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Fee <span className="font-extrabold italic">Structure</span>
          </h2>
          <div className="bg-[#1a5d3a] text-white px-4 py-2 rounded text-sm font-semibold">
            CURRENCY IN USD
          </div>
        </div>

        {/* Fee Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a5d3a] text-white">
                <th className="px-6 py-4 text-left">Academic Fees (Incl. Taxes)</th>
                <th className="px-6 py-4 text-center">Year 1</th>
                <th className="px-6 py-4 text-center">Year 2</th>
                <th className="px-6 py-4 text-center">Year 3</th>
                <th className="px-6 py-4 text-center">Year 4</th>
                <th className="px-6 py-4 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Tuition</td>
                <td className="px-6 py-4 text-center text-gray-900">$37,425</td>
                <td className="px-6 py-4 text-center text-gray-900">$37,025</td>
                <td className="px-6 py-4 text-center text-gray-900">$32,425</td>
                <td className="px-6 py-4 text-center text-gray-900">$21,925</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$128,800</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Academic Immersions</td>
                <td className="px-6 py-4 text-center text-gray-900">$10,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$9,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$9,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$6,500</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$34,500</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Local Business Immersions</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$3,000</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$15,000</td>
              </tr>
              <tr className="bg-[#a5d6a7]">
                <td className="px-6 py-4 font-bold text-gray-900">Total Academic Fees (Incl. Taxes)</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$51,425</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$50,025</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$45,425</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$31,425</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$178,300</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full mt-4">
            <thead>
              <tr className="bg-[#1a5d3a] text-white">
                <th className="px-6 py-4 text-left">Administration Fees (Incl. Taxes)</th>
                <th className="px-6 py-4 text-center">Year 1</th>
                <th className="px-6 py-4 text-center">Year 2</th>
                <th className="px-6 py-4 text-center">Year 3</th>
                <th className="px-6 py-4 text-center">Year 4</th>
                <th className="px-6 py-4 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Program Management</td>
                <td className="px-6 py-4 text-center text-gray-900">$5,701</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,499</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,701</td>
                <td className="px-6 py-4 text-center text-gray-900">$3,499</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$18,400</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Career Development</td>
                <td className="px-6 py-4 text-center text-gray-900">$2,046</td>
                <td className="px-6 py-4 text-center text-gray-900">$2,044</td>
                <td className="px-6 py-4 text-center text-gray-900">$2,046</td>
                <td className="px-6 py-4 text-center text-gray-900">$2,864</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$9,000</td>
              </tr>
              <tr className="bg-[#a5d6a7]">
                <td className="px-6 py-4 font-bold text-gray-900">Total Admin Fees</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$7,747</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$6,543</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$6,747</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$6,363</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$27,400</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full mt-4">
            <tbody>
              <tr className="bg-[#1a5d3a] text-white">
                <td className="px-6 py-4 font-bold text-lg">Total Fees</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$59,172</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$56,568</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$52,172</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$37,788</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$205,700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default FeeStructure

