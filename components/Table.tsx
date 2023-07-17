import React from 'react'

const Table = ({ headers, data }) => {
  return (
    <div className="p-4 md:px-20 md:py-28">

      <h2 className="leading-[45px] text-[40px] font-bold md:pb-12">Membership Perks</h2>

      <div className="flex flex-wrap border-b border-[#536079]">
        {headers.map((header, index) => (
          <div key={index} className="w-full text-[#536079] font-bold text-lg sm:w-1/5 py-2">
            {header}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap border-b border-[#536079]">
          {row.map((item, itemIndex) => (
            <div key={itemIndex} className="w-full font-semibold pt-5 sm:w-1/5 py-2">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Table