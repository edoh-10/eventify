import CategoriesData from '../../utils/categoriesData'


import React from 'react'

function ExploreCategory() {

  return (
    <div className='w-[90%] mx-auto flex flex-col my-[6vh]'>
        <div className='flex justify-start items-center w-[92%] mx-auto'>
            <h2 className='font-[Montserrat] text-[40px] font-[700]'>
                Explore Categories
            </h2>
        </div>
        <div className='flex mt-8'>
            {CategoriesData.map((list1) => (
                <div className='flex flex-col justify-between items-center w-full h-auto'>
                    <img src={list1.image} alt={list1.titre} className='rounded-[100%] w-32 h-32 mb-6'/> <span className='font-[Open Sans] text-[18px] font-[600]'> {list1.titre} </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExploreCategory