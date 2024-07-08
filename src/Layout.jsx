import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation/Navigation"
import { QrCodeGenerator } from "./components/QrCodeGenerator/QrCodeGenerator"
import { QrCodeScanner } from "./components/QrCodeScanner/QrCodeScanner"
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory"
import { ScanHistory } from "./components/ScanHistory/ScanHistory"

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generate-history" element={<GenerateHistory />} />
                <Route path="/scan-history" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}