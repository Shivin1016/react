import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.idx}
      className="w-70 h-75 px-2 py-6 bg-green-900 border-0 rounded-2xl transition-all hover:-translate-y-1.5 hover:shadow-emerald-800 shadow-xl "
    >
      <a
        href={props.elem.url}
        className="cursor-pointer flex flex-col gap-4 items-center "
      >
        <h1 className="text-2xl font-bold leading-snug">{props.elem.author}</h1>
        <img
          className="w-53 h-45 rounded-2xl "
          src={props.elem.download_url}
          alt="userProfile"
        />
      </a>
    </div>
  );
};

export default Card;
