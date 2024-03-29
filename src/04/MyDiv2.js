import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
  return (
    <div className="w-4/5 h-4/5 my-5 py-5 flex flex-col justify-center items-center bg-lime-400 text-white">
      <p className="w-4/5 flex justify-start font-bold text-1xl">
      {`${probs.d1} > ${probs.d2}`}
      </p>
        <MyDiv3 d1 = {probs.d1} d2 = {probs.d2} d3 = {probs.d3}/>
    </div>
  )
}
