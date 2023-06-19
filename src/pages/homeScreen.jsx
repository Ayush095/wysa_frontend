import React from "react";
import { useEffect, useState } from "react";
import { getContentPage, postUserTime } from "../utiils/api";
import Arrow from "../assets/arrow.svg";
import useStore from "../store";
import {useNavigate} from 'react-router-dom';


import { options1 } from "../utiils/data";
function HomeScreen() {
  const [content, setcontent] = useState([]);
  const token = useStore((state) => state.token);
  const [sleepProblem, setsleepProblem] = useState([]);
  const navigate = useNavigate();

  const user = useStore((state) => state.user);

  const getContent = async (num) => {
    const response = await getContentPage(num, token);
    if (response[0]) {
      setcontent(response[1]);
    }
  };

  const postTimeData = async () => {
    const response = await postUserTime({
      email: user,
      num: 1,
      sleepProblem: sleepProblem
    }, token);
    if (response[0]) {
      navigate('/bedtime');
    }
    alert(response[1].Message);
  };

  const getData = async () => {
    await getContent(1);
  };

  const postData = async () => {
    if (content.length !== 0) {
      await postTimeData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async (time) => {
    await setsleepProblem(time);
  };

  return (
    <div>
      <p className="text-left text-white text-5xl p-7 ml-6">
        {content ? content.pageContent : "Welcome to the Wysa World"}
      </p>
      <div className="flex justify-center items-center flex-col">
        {options1.map((option, index) => (
          <button
            className=" bg-slate-500 hover:bg-slate-600 focus:ring focus:ring-slate-400 rounded-md p-5 w-2/3 mb-4"
            onClick={() => handleClick(option)}
          >
            <p className="text-center">{option}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center ">
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

export default HomeScreen;
