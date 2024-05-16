import BatteryGauge from 'react-battery-gauge'

function Battery({ value, isCharging = false, ...props }) {
    const config = {
        value,
        size: 200,
        charging: isCharging,
        chargingStartValue: value,
        customization: {
            batteryBody: {
                // strokeColor: color,
                fill: 'white'
            },
            batteryCap: {
                // strokeColor: color
            },
            batteryMeter: {
                noOfCells: 10,
            },
            readingText: {
                // lightContrastColor: color,
                // darkContrastColor: color,
            },
        }
    }

    return (
        <>
            <BatteryGauge {...config}>
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                    </filter>
                </defs>
            </BatteryGauge>
        </>
    )
}

export default Battery