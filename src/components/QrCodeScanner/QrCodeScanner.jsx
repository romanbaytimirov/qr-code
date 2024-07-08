import { Scanner } from "@yudiel/react-qr-scanner"
import { useState } from "react"
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from './../../constants'

export const QrCodeScanner = () => {
    const [result, setResult] = useState('')
    const scanHandler = (res) => {
        setResult(res[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, res[0].rawValue]))
    }

    const settings = {
        audio: false,
        finder: false,
    }

    const stylesSettings = {
        container: {
            width: 200
        }
    }

    return (
        <div className={s.container}>
            <Scanner 
                allowMultiple 
                onScan={scanHandler} 
                components={settings} 
                styles={stylesSettings} 
            />
            <p className={s.p}>{result}</p>
        </div>
    )
}