import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getContentPage, postUserTime } from "../utiils/api";
import Arrow from "../assets/arrow.svg";
import useStore from "../store";

function GetUpTime() {
  const [content, setcontent] = useState([]);
  const [selectedTime, setselectedTime] = useState([]);
  const user = useStore((state) => state.user);

  const getContent = async (num) => {
    const response = await getContentPage(num);
    if (response[0]) {
      setcontent(response[1]);
    }
  };

  const getData = async () => {
    await getContent(3);
  };
  const postTimeData = async () => {
    const response = await postUserTime({
      email: user,
      num: 3,
      getUpTime: selectedTime
    });
    if (response[0]) {
      alert("Thanks for complete the process");
    }
    alert(response[1].Message);
  };

  const postData = async () => {
    await postTimeData();
  };

  useEffect(() => {
    getData(3);
  }, []);

  const handleTimeChange = async (event) => {
    await setselectedTime(event.target.value);
  };

  return (
    <div>
      <p className="text-center text-white text-5xl p-7 ml-6">
        {content ? content.pageContent : "Welcome to the Wysa World"}
      </p>
      <div className="flex justify-center items-center flex-col">
        <input
          className=" bg-slate-500 hover:bg-slate-600 focus:ring focus:ring-slate-400 rounded-md p-5 w-2/3 mb-4 mt-20"
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>

      <div className="flex justify-center items-center">
        <img
          onClick={() => {
            postData();
          }}
          className="w-16 h-16 mt-24 cursor-pointer"
          src={Arrow}
          alt="arrowImage"
        />
      </div>
    </div>
  );
}

export default GetUpTime;
