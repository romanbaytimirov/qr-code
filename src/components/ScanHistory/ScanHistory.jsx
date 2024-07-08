import s from "./ScanHistory.module.css"
import { SCAN_DATA } from "../../constants"
import { QRCodeSVG } from "qrcode.react"

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]")

    return (
        <div className={s.container}>
            <h1>Scan History</h1>
            {
                data.map((el) => (
                    <div key={el}>
                        <span>{el}</span>&nbsp;
                        <QRCodeSVG value={el} size="40" />
                    </div>
                ))
            }
        </div>
    )
}