export const Skill = ({ link , name }) => {
  return (
    <div className="animate__animated animate__fadeIn relative w-20 h-20">
      <img src={link} className="" />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity ">
        <h2 className="text-white text-center absolute inset-0 flex items-center justify-center">{name}</h2>
      </div>
    </div>
  )
}
