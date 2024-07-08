import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"
import s from './QrCodeGenerator.module.css'
import { GENERATE_DATA } from "../../constants";

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

        setResult(value)
        setValue('')
    }
    
    const onChangeHandler = (event) => {
        setResult('')
        setValue(event.target.value)
    }

    return (
        <div className={s.container}>
            <input type="text" value={value} onChange={onChangeHandler} className={s.input} />
            <button onClick={onClickHandler}>Сгенерировать QR</button>
            {result !== '' && <QRCodeSVG value={result} size="200" />}
        </div>
    )
}