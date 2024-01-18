import { userType } from "@/types/user";
import Link from "next/link";

type propsType = {
  user: userType;
};

export default function UserProfile(props: propsType) {
  if (props.user.name) {
    return (
      <>
        <div className=''>{props.user.name}</div>
      </>
    );
  }

  return (
    <>
      <div className=''>
        <Link href='/auth/sign-in'>Вход</Link>
      </div>
    </>
  );
}
