function ArduinoSwitcher({ data, setData, ...props }) {
    const handleSwitch = () => {
        setData({...data, arduino_swicth: !data.arduino_swicth})
    }

    return (
        <>
            <button onClick={handleSwitch} className={(data.arduino_swicth ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600') + ' transition duration-300 p-16 rounded-full border-2 text-slate-100 uppercase font-bold text-xl'}>
                {data.arduino_swicth ? 'on' : 'off'}
            </button>
        </>
    )
}

export default ArduinoSwitcher