import React from 'react';

const Card = ({title, hashValue = "#travel"}) => {

    // console.log(props.title); if not used direct destructuring 
    console.log(title, hashValue)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://images.pexels.com/photos/31540239/pexels-photo-31540239/free-photo-of-vibrant-pink-iced-drink-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="Sunset in the mountains"/>
        <div className="px-6 py-4 bg-gray-600">
          <div className="font-bold text-xl mb-2">{title}</div> {/*variable inject*/}
          <p className="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 bg-gray-600">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashValue}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashValue}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashValue}</span>
        </div>
      </div>
    );
};

export default Card;