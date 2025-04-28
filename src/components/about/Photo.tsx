import profileImage from "../../assets/Sultan.jpg";

export default function Photo() {
  return (
    <div className="relative w-full max-w-[200px] md:max-w-[300px] aspect-square mx-auto lg:mx-0 mt-10 group">
      <div className="absolute inset-0 rounded-xl border-2 rotate-12 border-textSecondary group-hover:border-accent transition-all duration-300 ease-in-out" />
      <div className="absolute inset-2 rounded-lg group-hover:-rotate-12 group-hover:bg-accent transition-all duration-300 ease-in-out" />
      <img
        src={profileImage}
        alt="Profile"
        className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out relative z-10 border-2 border-textSecondary group-hover:border-accent"
      />
    </div>
  );
}
