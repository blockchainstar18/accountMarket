export const ChartCompo = ({ height1, height2, id }) => {
  return (
    <div className="text-center">
      <div className="w-[50px] h-[300px] relative bg-[#A08CFB] rounded-[10px]">
        <div
          className="absolute bottom-[0px] w-[50px] bg-[#6C7293] rounded-[10px]"
          style={{ height: height1 }}
        ></div>
        <div
          className="absolute bottom-[0px] w-[50px] bg-[#9C0EDF] rounded-[10px]"
          style={{ height: height2 }}
        ></div>
      </div>
      <div className="text-[#454459] text-[16px]">{id}</div>
    </div>
  );
};
