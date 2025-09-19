function HerosList({ heros }) {
  return heros.map((hero) => (
    <div className="bg-gray-200 flex p-5 rounded-2xl flex font-bold">
      <div className="flex flex-col justify-center items-center w-48 bg-slate-800 rounded-lg mr-5">
        <img
          className="w-full h-full object-cover"
          src={hero.images.lg}
          alt=""
        />
        <span className="text-white py-1">{hero.id}</span>
      </div>
      <div className="p-5 flex flex-col gap-2 items-start">
        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Name
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.name}
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Full name
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.biography.fullName}
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Gender
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.appearance.gender}
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Race
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.appearance.race}
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Height
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.appearance.height[1]}
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="bg-blue-700 font-medium px-2 py-1 rounded-lg text-white">
            # Weight
          </p>
          <p className="bg-gray-500 font-medium px-2 py-0.5 rounded-lg text-white">
            {hero.appearance.weight[1]}
          </p>
        </div>
      </div>
    </div>
  ));
}

export default HerosList;
