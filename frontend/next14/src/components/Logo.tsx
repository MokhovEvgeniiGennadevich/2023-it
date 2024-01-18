import Link from "next/link";

export default function LogoComponent() {
  return (
    <>
      <div className='uppercase font-bold'>
        <Link href='/'>
          Ев
          <span className='bg-black m-1 text-white dark:bg-white dark:text-black p-1'>
            Мох
          </span>
          <span className='text-red-700 weight-bold'>
            IT
          </span>
        </Link>
      </div>
    </>
  );
}
