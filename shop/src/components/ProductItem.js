export const ProductItem = ({ img, title, content }) => {
  return (
    <div className="border-[1px] border-[#EBEBFF] rounded-[10px] p-[20px] shadow-lg flex items-center relative">
      <img className="ml-6" src={img} width={100}></img>

      <div className="ml-6">
        <div className="text-[#00106D] font-bold mr-3">{title}</div>

        <div className="text-[#707DA0] font-bold">{content}</div>
      </div>
    </div>
  );
};
