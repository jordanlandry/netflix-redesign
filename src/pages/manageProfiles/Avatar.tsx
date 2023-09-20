type Props = {
  avatar: string;
  handleClick: any;
};

export default function Avatar({ avatar, handleClick }: Props) {
  // Since the images are no longer available (Forbidden from the server), I am just going to use the same image for all of them

  const avatarDefault = "/netflix-redesign/profile.png";
  return (
    <div>
      <img onClick={() => handleClick(avatarDefault)} src={`${avatarDefault}`} loading="lazy" className="pointer" />
    </div>
  );
}
