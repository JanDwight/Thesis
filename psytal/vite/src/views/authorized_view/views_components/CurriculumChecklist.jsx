import React from 'react'

export default function CurriculumChecklist() {
  return (
    <div className="w-full h-[500px] px-4 mx-auto  rounded-3xl bg-white shadow-2xl pt-5 pb-12  table-container overflow-y-auto">
        <div className="mt-5 mx-5 pb-5 border-b-2 border-black flex flex-row justify-between items-baseline">
            <div className="font-bold text-6xl text-[#525252]">Curriculum Checklist</div>
        </div>
        <div className="table-container overflow-y-auto">
            <table className="table-auto w-full mt-5 rounded border-separate border-spacing-y-3 " >
		        <thead>
		            <tr>
                        <th className="text-center text-gray-700 bg-gray-200 p-2">Course Code </th>
                        <th className="text-center text-gray-700 bg-gray-200 p-2">Description</th>
                        <th className="text-center text-gray-700 bg-gray-200 p-2">Grade</th>
		            </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="text-center p-2"></td>
                        <td className="text-center p-2"></td>
                        <td className="text-center p-2"></td>
                    </tr>
                </tbody>
	        </table>
        </div>
    </div>
  )
}
