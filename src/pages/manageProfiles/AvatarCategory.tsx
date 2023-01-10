import React from "react";
import nextId from "react-id-generator";

type Props = {
  name: string;
  avatars: string[];
};

export default function AvatarCategory({ name, avatars }: Props) {
  const avatarElements = avatars.map((avatar) => {
    return <img key={nextId()} src={`${avatar}png`} loading="lazy" />;
  });

  return (
    <div className="avatar-category">
      <h2>{name}</h2>
      <div className="avatar__wrapper">{avatarElements}</div>
    </div>
  );
}
