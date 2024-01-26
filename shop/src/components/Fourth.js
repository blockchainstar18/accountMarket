export const Fourth = ({ title, content }) => {
  return (
    <div className="bg-[#191C24] text-center rounded-[5px] p-3">
      <div className="text-[#9C0EDF] font-bold">{title}</div>
      <div className="text-white relative">{content}</div>
    </div>
  );
};
