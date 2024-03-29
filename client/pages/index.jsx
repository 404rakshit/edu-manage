import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";

async function fetchData(email, otp) {
  let data = await axios
    .post(`http://localhost:3001/${email}`, {
      otp,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return data;
}

export default function Home() {
  const [text, setText] = useState("");
  let variable;
  let str = "";

  function tab(ele, key) {
    ele = +ele + 1;
    if (!(key == "Backspace") && Number.isInteger(+key)) {
      document.getElementById(ele).focus();
    } else {
      if (!(key == "Tab")) document.getElementById(ele - 2).focus();
    }
  }

  function load() {
    let sentance =
      "This is a Web Platform to register yourself as a recognised student of University Polytechnic BIT Mesra required for maintain records and keeping you updated over an app.";

    let pos = 0;

    const x = setInterval(() => {
      pos > sentance.length - 1 ? clearInterval(x) : (str += sentance[pos++]),
        setText(str);
    }, 30);
  }

  function loadInp() {
    const inp = document.getElementById("num");
    const btn = document.getElementById("btn");
    inp.classList.remove("opacity-0");
    btn.classList.remove("opacity-0");
  }

  useEffect(() => {
    return () => {
      setTimeout(() => {
        load();
      }, 2000);
      setTimeout(() => {
        loadInp();
      }, 4000);
      setTimeout(() => {
        document.getElementById("i").classList.remove("opacity-0");
      }, 10000);
    };
  }, []);

  function branch(text) {
    document.getElementById("branch").innerText = text;
  }

  function name() {
    const inp = document.getElementById("num");
    const btn = document.getElementById("btn").classList;
    let ran = Math.floor(Math.random() * 9999 + 1000);
    variable = ran;

    const isNumber = function isNumber(value) {
      return Number.isInteger(value);
    };

    function warning() {
      const war = document.getElementById("war");
      war.style.opacity = 1;
      setTimeout(() => {
        war.style.opacity = 0;
      }, 2000);
    }

    function correct() {
      const load = document.getElementById("done");
      load.style.opacity = 1;
      document.getElementById("modal").style.display = "flex";
      setTimeout(() => {
        document.getElementById("modal").classList.remove("opacity-0");
        document.getElementById("main").classList.add("blur-[2px]");
        document.getElementById("1").focus();
      }, 1000);
    }

    function wrong() {
      const load = document.getElementById("undone");
      load.style.opacity = 1;
      setTimeout(() => {
        load.style.opacity = 0;
        document.getElementById("btn").disabled = false;
        document.getElementById("load").style.opacity = 0;
      }, 5000);
    }

    async function loading() {
      const load = document.getElementById("load");
      load.style.opacity = 1;
      let data = await fetchData(inp.value, ran).then((res) => {
        return res;
      });
      console.log(data);
      return data;
    }

    if (inp.value) {
      if (!(inp.value.split("@").length == 2)) {
        return warning();
      }
      document.getElementById("btn").disabled = true;
      loading().then((res) => {
        if (res.status == 200) {
          correct();
        } else {
          wrong();
        }
      });
    }
  }
  return (
    <>
      <Head>
        <title>College Registration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bit.svg" />
      </Head>
      <main
        id="main"
        className="lg:h-[90vh] flex items-center justify-center max-lg:mt-40 transition-all duration-1000 delay-200"
      >
        <div className="lg:relative lg:min-w-[700px] flex flex-col justify-center items-center p-3 gap-4">
          <Image
            className="bg-stone-50 fill-black rounded-full shadow-lg animate-drop-in"
            width={120}
            height={120}
            src="/bit.svg"
          />
          <img
            id="i"
            className="opacity-0 absolute lg:animate-bounce right-2 top-2 p-3 bg-neutral-100 transition-all lg:hover:-translate-y-1  lg:hover:bg-blue-500 duration-200 cursor-pointer rounded-full shadow-lg"
            width={40}
            height={40}
            src="https://img.icons8.com/ios-filled/50/null/information.png"
          />
          <section className="p-1 overflow-hidden ">
            <h3 className="text-3xl max-lg:text-2xl font-bold animate-[drop-in_1200ms_ease-out_1000ms_backwards] ">
              Register Yourself Now
            </h3>
          </section>
          <p
            className={`max-lg:text-sm min-h-[85px] text-lg max-lg:max-w-sm max-w-2xl text-center text-gray-400 ${style.type}`}
          >
            {text}
            <span className="h-2 w-1 bg-black text-black animate-pulse2">
              _
            </span>
          </p>
          <form className="flex flex-col p-3 gap-5 w-4xl">
            <section className="flex justify-center gap-3">
              <input
                autoComplete="off"
                id="num"
                type={"text"}
                // maxLength={10}
                placeholder="Enter Your Email"
                className="bg-gray-100 text-xl py-2 px-3 outline-none rounded-md placeholder:text-base max-lg:w-9/12 transition-all duration-300 opacity-0"
              />
              <button
                id="btn"
                onClick={(e) => {
                  e.preventDefault();
                  name();
                }}
                className="relative animate-[pulse_200ms_cubic-bezier(0.4, 0, 0.6, 1)_infinite] overflow-hidden disabled:opacity-30 p-3 rounded-full font-bold uppercase active:bg-blue-800 bg-blue-600 transition-all duration-700 opacity-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>

                <span
                  id="war"
                  style={{ opacity: 0 }}
                  className="absolute transition-all duration-700 bg-yellow-300 top-0 left-0"
                >
                  <svg
                    className="p-2"
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="#000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                  </svg>
                </span>
                <span
                  id="load"
                  style={{ opacity: 0 }}
                  className="absolute transition-all duration-300 bg-stone-100 top-0 left-0"
                >
                  <svg
                    className="p-2"
                    width="50px"
                    height="50px"
                    viewBox="0 0 120 30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    color="#004cff"
                  >
                    <circle cx="15" cy="15" r="15">
                      <animate
                        attributeName="r"
                        from="15"
                        to="15"
                        begin="0s"
                        dur="0.8s"
                        values="15;9;15"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                      <animate
                        attributeName="fillOpacity"
                        from="1"
                        to="1"
                        begin="0s"
                        dur="0.8s"
                        values="1;.5;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>
                    <circle cx="60" cy="15" r="9" fillOpacity=".3">
                      <animate
                        attributeName="r"
                        from="9"
                        to="9"
                        begin="0s"
                        dur="0.8s"
                        values="9;15;9"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                      <animate
                        attributeName="fillOpacity"
                        from=".5"
                        to=".5"
                        begin="0s"
                        dur="0.8s"
                        values=".5;1;.5"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>
                    <circle cx="105" cy="15" r="15">
                      <animate
                        attributeName="r"
                        from="15"
                        to="15"
                        begin="0s"
                        dur="0.8s"
                        values="15;9;15"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                      <animate
                        attributeName="fillOpacity"
                        from="1"
                        to="1"
                        begin="0s"
                        dur="0.8s"
                        values="1;.5;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                      ></animate>
                    </circle>
                  </svg>
                </span>
                <span
                  id="done"
                  style={{ opacity: 0 }}
                  className="absolute transition-all duration-300 bg-lime-500 top-0 left-0"
                >
                  <svg
                    className="p-2"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="#fff"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </span>
                <span
                  id="undone"
                  style={{ opacity: 0 }}
                  className="absolute transition-all duration-300 bg-red-500 top-0 left-0"
                >
                  <svg
                    className="p-2"
                    width="50"
                    height="50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </section>
          </form>
        </div>
      </main>
      <div
        id="modal"
        style={{ display: "none" }}
        className="absolute justify-center items-center top-0 h-full w-full transition-all duration-500 bg-black bg-opacity-20 opacity-0"
      >
        <div className="max-lg:-translate-y-1/3 max-lg:w-5/6 w-3/6 bg-gray-100 rounded-lg shadow-lg p-5 flex flex-col items-center space-y-6">
          <p className="text-3xl max-lg:text-2xl">Verification</p>
          <span id="0" className="flex justify-center gap-3 items-center">
            <input
              type={"number"}
              id="1"
              onKeyUp={(e) => {
                tab(e.target.id, e.key);
              }}
              className="text-2xl text-center outline-none rounded-lg h-16 w-16"
            />
            <input
              type={"number"}
              id="2"
              onKeyUp={(e) => {
                tab(e.target.id, e.key);
              }}
              className="text-2xl text-center outline-none rounded-lg h-16 w-16"
            />
            <input
              type={"number"}
              id="3"
              onKeyUp={(e) => {
                tab(e.target.id, e.key);
              }}
              className="text-2xl text-center outline-none rounded-lg h-16 w-16"
            />
            <input
              type={"number"}
              id="4"
              onKeyUp={(e) => {
                tab(e.target.id, e.key);
              }}
              className="text-2xl text-center outline-none rounded-lg h-16 w-16"
            />
          </span>
          {/* </div> */}
          <button
            id="5"
            onClick={(e) => {
              let num =
                document.getElementById("1").value +
                document.getElementById("2").value +
                document.getElementById("3").value +
                document.getElementById("4").value;
              if (num == variable) {
                document.getElementById(e.target.id).style.width = "100px";
                document.getElementById(e.target.id).style.backgroundColor =
                  "green";
                document.getElementById(e.target.id).innerText = "Verified";
              } else {
                document.getElementById(e.target.id).style.width = "100%";
                document.getElementById(e.target.id).style.backgroundColor =
                  "red";
                document.getElementById(e.target.id).innerText = "Try Again";
              }
            }}
            className="py-1 text-white w-full bg-blue-500 rounded-md font-bold hover:bg-blue-600 active:bg-blue-800 shadow-md transition-all duration-700 outline-none"
          >
            Check
          </button>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex w-full p-5 max-lg:flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-3 items-center">
              <section className="h-40 w-40 bg-white rounded-full shadow-md"></section>
              <input
                className="px-2 py-1 rounded-sm outline-none w-3/4 placeholder: shadow-md"
                type="text"
                placeholder="ROLL NO"
                name=""
                id=""
              />
            </div>
            <div className="flex max-lg:w-full flex-1 flex-col p-5 gap-3">
              <input
                className="px-2 py-1 rounded-sm outline-none lg:lg:w-3/4 placeholder: shadow-md"
                type="text"
                placeholder="NAME"
                name=""
                id=""
              />
              <input
                className="px-2 py-1 rounded-sm outline-none lg:w-3/4 placeholder: shadow-md"
                type="text"
                placeholder="MOBILE NO"
                maxLength={10}
                name=""
                id=""
              />

              <div className="flex gap-3">
                <span className="">
                  <div className="group inline-block relative">
                    <button className="bg-white w-24 active group-active:rounded-b-none lg:group-hover:rounded-b-none text-gray-400 py-1 px-2 rounded inline-flex items-center shadow-md justify-between">
                      <span id="branch" className="mr-1 ">
                        BRANCH
                      </span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </button>
                    <ul className="lg:group-hover:flex group-active:flex absolute hidden text-gray-700 pt-1 w-full bg-white rounded-b shadow-sm p-1 flex-col gap-1 text-sm">
                      <li
                        onClick={() => {
                          branch("CSE");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        CSE
                      </li>
                      <li
                        onClick={() => {
                          branch("MECH");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        MECH
                      </li>
                      <li
                        onClick={() => {
                          branch("AUTO");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        AUTO
                      </li>
                      <li
                        onClick={() => {
                          branch("EEE");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        EEE
                      </li>
                      <li
                        onClick={() => {
                          branch("ECE");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        ECE
                      </li>
                      <li
                        onClick={() => {
                          branch("MEP");
                        }}
                        className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition-all"
                      >
                        MEP
                      </li>
                    </ul>
                  </div>
                </span>

                <ul className="items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className=" border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3 px-2">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="horizontal-list-radio-license"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        2
                      </label>
                    </div>
                  </li>
                  <li className="border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3 px-2">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="horizontal-list-radio-id"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        4
                      </label>
                    </div>
                  </li>
                  <li className=" dark:border-gray-600">
                    <div className="flex items-center pl-3 px-2">
                      <input
                        id="horizontal-list-radio-passport"
                        type="radio"
                        value=""
                        name="list-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="horizontal-list-radio-passport"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        6
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
