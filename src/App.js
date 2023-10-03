import logo from "./logo.svg";
import "./App.css";
import './index.css'
import React from "react";

function App() {
  const [footerColor, setFooterColor] = React.useState(0);
  const [logoColor, setLogoColor] = React.useState(0);
  const [backColor, setBackColor] = React.useState(0);
  const [shnurokColor, setShnurokColor] = React.useState(0);

  return (
    <div className="App h-[100vh] gap-4">
      <div className="container ">
        <img
          style={{ position: "absolute", zIndex: 1 }}
          className={""}
          src={"/cross/full.webp"}
        />
        <img
          style={{ position: "absolute", zIndex: 2 }}
          className={
            footerColor === 0
              ? "hue-rotate-[50deg]"
              : footerColor === 1
              ? "hue-rotate-[270deg]"
              : footerColor === 2
              ? "hue-rotate-[175deg]"
              : "hue-rotate-[195deg]"
          }
          src={"/cross/footer.webp"}
        />
        <img
          style={{ position: "absolute", zIndex: 2 }}
          className={
            logoColor === 0
              ? "hue-rotate-[50deg]"
              : logoColor === 1
              ? "hue-rotate-[270deg]"
              : logoColor === 2
              ? "hue-rotate-[175deg]"
              : "hue-rotate-[195deg]"
          }
          src={"/cross/logo.webp"}
        />
        <img
          style={{ position: "absolute", zIndex: 2 }}
          className={
            backColor === 0
              ? "hue-rotate-[50deg]"
              : backColor === 1
              ? "hue-rotate-[270deg]"
              : backColor === 2
              ? "hue-rotate-[175deg]"
              : "hue-rotate-[195deg]"
          }
          src={"/cross/back.webp"}
        />
        <img
          style={{ position: "absolute", zIndex: 2 }}
          className={
            shnurokColor === 0
              ? "hue-rotate-[50deg]"
              : shnurokColor === 1
              ? "hue-rotate-[270deg]"
              : shnurokColor === 2
              ? "hue-rotate-[175deg]"
              : "hue-rotate-[195deg]"
          }
          src={"/cross/shnurok.webp"}
        />
      </div>
      <div className="buttons grid gap-3">
        <div>
          <h2 className={'font-bold pb-1'}>Подошва</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setFooterColor(0)}
              className={
                `bg-blue-500 rounded-full min-h-[20px] min-w-[20px] ${footerColor === 0
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setFooterColor(1)}
              className={
                `bg-green-500 rounded-full min-h-[20px] min-w-[20px] ${footerColor === 1
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setFooterColor(2)}
              className={
                `bg-red-500 rounded-full min-h-[20px] min-w-[20px] ${footerColor === 2
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setFooterColor(3)}
              className={
                `bg-orange-500 rounded-full min-h-[20px] min-w-[20px] ${footerColor === 3
                  ? "border-2 border-black"
                  : ""}`}></button>
          </div>
        </div>
        <div>
          <h2 className={'font-bold pb-1'}>Логотип</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setLogoColor(0)}
              className={
                `bg-blue-500 rounded-full min-h-[20px] min-w-[20px] ${logoColor === 0
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setLogoColor(1)}
              className={
                `bg-green-500 rounded-full min-h-[20px] min-w-[20px] ${logoColor === 1
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setLogoColor(2)}
              className={
                `bg-red-500 rounded-full min-h-[20px] min-w-[20px] ${logoColor === 2
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setLogoColor(3)}
              className={
                `bg-orange-500 rounded-full min-h-[20px] min-w-[20px] ${logoColor === 3
                  ? "border-2 border-black"
                  : ""}`}></button>
          </div>
        </div>
        <div>
          <h2 className={'font-bold pb-1'}>Задник</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setBackColor(0)}
              className={
                `bg-blue-500 rounded-full min-h-[20px] min-w-[20px] ${backColor === 0
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setBackColor(1)}
              className={
                `bg-green-500 rounded-full min-h-[20px] min-w-[20px] ${backColor === 1
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setBackColor(2)}
              className={
                `bg-red-500 rounded-full min-h-[20px] min-w-[20px] ${backColor === 2
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setBackColor(3)}
              className={
                `bg-orange-500 rounded-full min-h-[20px] min-w-[20px] ${backColor === 3
                  ? "border-2 border-black"
                  : ""}`}></button>
          </div>
        </div>
        <div>
          <h2 className={'font-bold pb-1'}>Шнурки</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShnurokColor(0)}
              className={
                `bg-blue-500 rounded-full min-h-[20px] min-w-[20px] ${shnurokColor === 0
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setShnurokColor(1)}
              className={
                `bg-green-500 rounded-full min-h-[20px] min-w-[20px] ${shnurokColor === 1
                  ? "border-2 border-black"
                  : ""}`
              }></button>
            <button
              onClick={() => setShnurokColor(2)}
              className={
                `bg-red-500 rounded-full min-h-[20px] min-w-[20px] ${shnurokColor === 2
                  ? "border-2 border-black"
                  : ""}`}></button>
            <button
              onClick={() => setShnurokColor(3)}
              className={
                `bg-orange-500 rounded-full min-h-[20px] min-w-[20px] ${shnurokColor === 3
                  ? "border-2 border-black"
                  : ""}`}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
