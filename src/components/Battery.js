import BatteryGauge from 'react-battery-gauge'

function Battery({ value, isCharging = false, ...props }) {
    return (
        <>
            <BatteryGauge
                size={200}
                value={value}
                charging={isCharging}
                chargingStartValue={value}
                customization={{
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
                }}
            >
                <defs>
                <filter id="shadow">
                    <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
                </filter>
                </defs>
            </BatteryGauge>
        </>
    );
}

export default Battery;