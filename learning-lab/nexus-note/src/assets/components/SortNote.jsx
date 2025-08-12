function SortNote({ sortBy, onSort }) {
  return (
    <select
      className="w-full text-[17px] ring-0 hover:scale-105 transition-all text-center text-[#3C3D37] font-bold tracking-tight cursor-pointer rounded-xl border-1 shadow-2xl border-[#3C3D37] py-2 bg-[#77bad1]"
      name="sort"
      id="sort"
      value={sortBy}
      onChange={onSort}
    >
      <option value="latest">sort based on latest</option>
      <option value="earliest">sort based on earliest</option>
      <option value="completed">sort based on completed</option>
    </select>
  );
}

export default SortNote;
