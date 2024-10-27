import { ReactNode } from "react";
import styles from "@/styles/ui-well.module.scss";

import Image from "next/image";

interface Props {
    imageSrc?: string;
    even?: boolean;
    children?: ReactNode;
}

export default function Well({ children, imageSrc, even }: Props) {
    console.log(imageSrc)
    return (
        <section className={`${styles.well} ${even ? styles.well_even : ''}`}>
            <div className="col-12 col-sm-6">
                {imageSrc ? (
                    <Image src={imageSrc} alt='image' width={600} height={34} />
                ) : ''}
            </div>
            <div className="col-12 col-sm-6">{children}</div>
        </section>
    );
}