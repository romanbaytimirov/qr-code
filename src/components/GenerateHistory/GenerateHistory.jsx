import s from "./GenerateHistory.module.css"
import { GENERATE_DATA } from "../../constants"
import { QRCodeSVG } from "qrcode.react"

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]")

    return (
        <div className={s.container}>
            <h1>Generate History</h1>
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