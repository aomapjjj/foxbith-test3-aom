import Image from "next/image"
import logo from "../../../public/logo.svg"

const Logo = () => {
  return (
    <>
      <Image
        alt="Logo"
        src={logo}
       
        style={{
          width: "200px",
          height: "80px"
        }}
      />
    </>
  )
}
export default Logo
