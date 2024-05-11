import React from 'react';
import Card from './Card';

function Welcome({ data, regenerateData, ...props }) {
    return (
        <>
            <Card {...{ title: 'Dashboard', center: false, className: 'p-4 text-sm' }}>
                <p className='mb-4 w-full'>
                    Selamat datang <span className='font-semibold text-blue-600'>{`ZULZARIO ZAERI (220602030)`}</span> di aplikasi monitoring tanaman.
                </p>
                <div className='mb-4'>
                    <div>
                        Suhu Rangan: <span className='text-blue-500'>{`${data.suhu_ruangan}°C`}</span>
                    </div>
                    <div>
                        Kualitas Oksigen: {`${data.kualitas_oksigen}%`}
                    </div>
                    <div>
                        Debit Air: {`${data.debit_air}%`}
                    </div>
                    <div>
                        Arduino: {`${data.arduino_battery.value}%`}
                    </div>
                </div>
                <button onClick={regenerateData} className='bg-blue-600 hover:bg-blue-700 active:bg-blue-700 py-2 px-4 rounded-lg text-slate-100'>
                    Generate Data
                </button>
            </Card>            
        </>
    );
}

export default Welcome;