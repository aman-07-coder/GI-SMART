'use client'

const AIFeeStructure = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Fee <span className="font-extrabold italic">Structure</span>
          </h2>
          <div className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white px-4 py-2 rounded text-sm font-semibold">
            CURRENCY IN USD
          </div>
        </div>

        {/* Academic Fees Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
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
                <td className="px-6 py-4 text-center text-gray-900">$45,940</td>
                <td className="px-6 py-4 text-center text-gray-900">$45,540</td>
                <td className="px-6 py-4 text-center text-gray-900">$40,940</td>
                <td className="px-6 py-4 text-center text-gray-900">$30,439</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$162,859</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Academic Immersions</td>
                <td className="px-6 py-4 text-center text-gray-900">$12,754</td>
                <td className="px-6 py-4 text-center text-gray-900">$11,754</td>
                <td className="px-6 py-4 text-center text-gray-900">$11,754</td>
                <td className="px-6 py-4 text-center text-gray-900">$9,254</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$45,515</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Local Business Immersions</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$4,000</td>
                <td className="px-6 py-4 text-center text-gray-900">$3,000</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$15,000</td>
              </tr>
              <tr className="bg-gradient-to-br from-[#d4af37]/20 to-white">
                <td className="px-6 py-4 font-bold text-gray-900">Total Academic Fees (Incl. Taxes)</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$62,694</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$61,294</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$56,694</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$42,693</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$223,374</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Administration Fees Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
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
                <td className="px-6 py-4 text-center text-gray-900">$7,778</td>
                <td className="px-6 py-4 text-center text-gray-900">$6,578</td>
                <td className="px-6 py-4 text-center text-gray-900">$6,778</td>
                <td className="px-6 py-4 text-center text-gray-900">$5,577</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$26,711</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900">Career Development</td>
                <td className="px-6 py-4 text-center text-gray-900">$820</td>
                <td className="px-6 py-4 text-center text-gray-900">$820</td>
                <td className="px-6 py-4 text-center text-gray-900">$820</td>
                <td className="px-6 py-4 text-center text-gray-900">$1,640</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$4,100</td>
              </tr>
              <tr className="bg-gradient-to-br from-[#d4af37]/20 to-white">
                <td className="px-6 py-4 font-bold text-gray-900">Total Admin Fees</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$8,598</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$7,398</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$7,598</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$7,217</td>
                <td className="px-6 py-4 text-center font-bold text-gray-900">$30,811</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Fees */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <th className="px-6 py-4 text-left font-bold text-lg">Total Fees</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Year 1</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Year 2</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Year 3</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Year 4</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <td className="px-6 py-4 font-bold text-lg">Total Fees</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$71,292</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$68,692</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$64,292</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$49,910</td>
                <td className="px-6 py-4 text-center font-bold text-lg">$254,185</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AIFeeStructure

