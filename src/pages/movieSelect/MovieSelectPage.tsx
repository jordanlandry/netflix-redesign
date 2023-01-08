import React, { useContext } from "react";
import { UserContext } from "../../App";

type Props = {};

export default function MovieSelectPage({}: Props) {
  const user = useContext(UserContext)!;
  return <div>{user.name}</div>;
}
