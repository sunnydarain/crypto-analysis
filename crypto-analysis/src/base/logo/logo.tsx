import './logo.css'
import Image from "next/image";
export default function Logo() {
  // component logic
  // component render
  return (
    <div className='logo-container'>
      <Image src="/next.svg" width={120} height={28} alt="next" />
    </div>
  );
}