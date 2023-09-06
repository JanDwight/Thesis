import React from 'react'

export default function ClassPopUp() {

    const students = [
        {name: "Garcia, Eduardo"},
        {name: "Mendoza, Rosalinda"},
        {name: "Bautista, Fernando"},
        {name: "Magno, Emilia"}
    ]
  return (
    <>
        <div className='flex justify-center font-bold text-4xl text-[#525252] mt-5'>
          Subject 1
        </div>

        <div className='mt-[5%]'>
            <div className='flex '>
                <div className='font-bold'>
                    Instructor:
                </div>

                <div className='ml-[2%]'>
                    John Doe
                </div>
            </div>

            <div>
                <div className='flex items-baseline'>
                    <div className='font-bold'>
                        Students:
                    </div>
                    <div className='text-xs font-bold ml-[30%]'>
                        Total Students: 32
                    </div>
                </div>
                
                {students.map((itemn, index) => (
                  <div className={index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-white"}>
                    {itemn.name}
                  </div>
                ))}
            </div>
        </div>
    </>
  )
}
