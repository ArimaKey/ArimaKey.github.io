export const Skill = ({ link , name }) => {
  return (
    <>
      <div className="relative">
        <img src={link} className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
          <h2 className="text-white text-center absolute inset-0 flex items-center justify-center">{name}</h2>
        </div>
      </div>
    </>

  )
}
