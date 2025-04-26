import React from "react";

function InterestBtns({ content, titre }) {
  return (
    <div className="flex flex-col flex-wrap">
      {content.map((list, index) => {
        <div key={index}>
          <h2 className="font-[Open Sans] font-[600] text-[20px] ">{titre}</h2>
          <div className="flex items-center mb-10 mt-4">
            <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
              <input type="button" value={list.texte} />
            </div>
          </div>
          <span>
            <hr />
          </span>
        </div>;
      })}
    </div>
  );
}

export default InterestBtns;
