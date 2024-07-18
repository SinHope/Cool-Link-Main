import Image from "next/image"
import CoolLinkLogo from '@/images/logos/Cool-Link.png'

export function Logo(props) {
  return (
    <Image src={CoolLinkLogo} alt="Cool Link Logo" width={209} height={140} {...props} />
  )
}
