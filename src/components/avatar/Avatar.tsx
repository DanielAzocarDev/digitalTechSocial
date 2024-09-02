import placeholder from "/placeholder.png";

const Avatar = ({ size, avatar }: { size: number; avatar?: string }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={`border border-purple-600 p-2 rounded-full overflow-hidden`}
    >
      <img
        className="rounded-full"
        src={avatar === "" ? placeholder : avatar}
        alt=""
      />
    </div>
  );
};

export default Avatar;
