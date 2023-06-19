import React from "react";
import { useEffect, useState } from "react";
import { getContentPage, postUserTime } from "../utiils/api";
import Arrow from "../assets/arrow.svg";
import useStore from "../store";
import {useNavigate} from 'react-router-dom';


function BedTime() {
  const [content, setcontent] = useState([]);
  const [selectedTime, setselectedTime] = useState([]);
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);
  const navigate = useNavigate();


  const getContent = async (num) => {
    const response = await getContentPage(num, token);
    if (response[0]) {
      setcontent(response[1]);
    } 

  };

  const postTimeData = async () => {
    const response = await postUserTime({
      email: user,
      num: 2,
      bedTime: selectedTime,
    }, token);
    if (response[0]) {
      navigate('/getuptime');
    }
    alert(response[1].Message);
  };

  const postData = async () => {
    await postTimeData();
  };

  const getData = async () => {
    await getContent(2);
  };

  useEffect(() => {
    getData(2);
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

export default BedTime;
