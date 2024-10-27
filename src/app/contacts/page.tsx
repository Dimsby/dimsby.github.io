import styles from "@/styles/page.module.scss";

export default function Page() {
    return (
        <div className={styles.page} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <div>
                <p>Email: <a href="mailto:dimsby@gmail.com">dimsby@gmail.com</a></p>
                <p>Telegram: <a href="https://t.me/dimsby">t.me/dimsby</a></p>
            </div>
        </div>
    )
}