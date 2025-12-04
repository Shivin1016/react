import React, { useState } from "react";
import { Trash } from "lucide-react";

const Notes = () => {
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  // task array store notes inside that
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ text, detail });

    setTask(copyTask);

    // empty input after submit
    setText("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyNote = [...task];
    copyNote.splice(idx, 1);
    setTask(copyNote);
    console.log(copyNote);
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="p-2 m-2 text-3xl text-teal-100 font-bold border-2 rounded-1xl text-center">
        Daily Notes
      </h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center sm:justify-around gap-0 text-gray-100 my-6 mx-20 py-2 px-4 "
      >
        <div className="flex flex-col gap-6 w-4/5 sm:w-1/2 items-start">
          {/* heading for notes */}
          <input
            className="w-full py-2 px-4 border-2  outline-none rounded-2xl border-teal-500 text-1xl font-medium"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter Notes Heading"
          />
          {/* description for note */}
          <textarea
            className="w-full h-32 py-2 px-4 border-4 outline-none rounded-2xl border-teal-500 font-medium"
            placeholder="Enter Details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <button className="bg-teal-800 w-full text-gray-100 outline-none transition-all hover:bg-gray-100 hover:text-teal-800 active:scale-50 text-2xl font-bold px-5 py-2 rounded-2xl">
            Add Notes
          </button>
        </div>
        <img
          className="h-52 rotate-y-180  hidden sm:flex"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="notesImg"
        />
      </form>
      <div className="mx-auto my-3 p-10 h-full w-9/10 flex flex-col items-start gap-4 bg-teal-900 text-white border-l-4 rounded-2xl">
        <h1 className="text-4xl font-medium text-shadow-teal-900 text-teal-100 border-b-4 ">
          Your Recent Notes
        </h1>
        <div className="flex flex-wrap items-start justify-start gap-5 ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative mx-2 my-4 pt-10 pb-2 px-4 w-55 min-h-52 flex flex-col gap-2 rounded-2xl bg-teal-500 bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] bg-cover"
              >
                <div
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute cursor-pointer transition-all hover:scale-105 top-5 right-5"
                >
                  <Trash size={20} color="#0B4F4A" />
                </div>
                <h3 className="pt-2 text-center uppercase leading-tight text-1xl text-teal-950 font-bold">
                  {elem.text}
                </h3>
                <p className="pl-4 text-lg font-medium text-teal-900">
                  {elem.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
