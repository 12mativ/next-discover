import Link from "next/link";
import styles from '../styles/link.module.css'

export default function A({href, text}) {
    return (
        <Link href={href} className={styles.link}>
            {text}
        </Link>
    )
}