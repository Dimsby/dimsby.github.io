import Logo from "./Logo";
import Nav from "./Nav";
import Image from 'next/image';
import Link from "next/link";
import githubIcon from "@public/github-mark-white.svg"

const githubLink = 'https://github.com/Dimsby';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Logo />
            <Nav />
            <div className='githubLink'>
                <Link href={githubLink} target='_blank'>
                    <Image
                        unoptimized 
                        src={githubIcon}
                        alt="Github"
                    />
                </Link>
            </div>
        </div>
    )
}