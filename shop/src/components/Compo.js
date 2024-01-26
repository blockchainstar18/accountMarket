export const Compo = ({ Left, Right, Content }) => {
  return (
    <div className="flex items-start justify-center relative bg-[#191C24] rounded-[5px] px-[20px] py-[50px]">
      <div className="absolute top-[10px] left-[20px]">{Left}</div>
      <div className="absolute top-[10px] right-[20px]">{Right}</div>
      {Content}
    </div>
  );
};
