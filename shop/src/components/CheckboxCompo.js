export const CheckboxCompo = ({ content }) => {
  return (
    <div className="w-full border-b-[1px] border-black py-[7px]">
      <label className="text-[#6C7293] flex items-center">
        {/* <input type="checkbox" className="mr-2"></input> */}
        {content}
      </label>
    </div>
  );
};
