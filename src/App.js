import React, { useState } from 'react'
import Battery from './components/Battery'
import Gauge from './components/Gauge'
import Card from './components/Card'
import Thermometer from './components/Thermometer'
import Tank from './components/Tank'
import ArduinoSwitcher from './components/ArduinoSwitcher'
import Welcome from './components/Welcome'

function App(props) {
    const [data, setData] = useState({...{
        kualitas_oksigen: 64,
        suhu_ruangan: 12,
        debit_air: 14,
        arduino_swicth: true,
        arduino_battery: {
            value: 71,
            isCharging: false,
        }
    }})

    return (
        <>
            <div className='p-8 font-sans antialiased text-slate-600'>
                <span className='hidden bg-slate-100'></span>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <Welcome {...{ data, setData }} />
                    <Card {...{ title: 'Kualitas Oksigen' }}>
                        <Gauge {...{ value: data.kualitas_oksigen }} />
                    </Card>
                    <Card {...{ title: 'Suhu Ruangan' }}>
                        <Thermometer {...{ value: data.suhu_ruangan }} />
                    </Card>
                    <Card {...{ title: 'Debit Air' }}>
                        <Tank {...{ value: data.debit_air }} />
                    </Card>
                    <Card {...{ title: 'Arduino Power' }}>
                        <Battery {...{ value:data.arduino_battery.value, isCharging: data.arduino_battery.isCharging }} />
                    </Card>
                    <Card {...{ title: 'Arduino ON/OFF' }}>
                        <ArduinoSwitcher {...{ data, setData }} />
                    </Card>
                </div>
            </div>
        </>
    );
}

export default App