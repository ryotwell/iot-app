function ArduinoSwitcher({ value, ...props }) {
    return (
        <>
            <button onClick={props.turnOffArduino} className={(value ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600') + ' transition duration-300 p-16 rounded-full border-2 text-slate-100 uppercase font-bold text-xl'}>
                {value ? 'on' : 'off'}
            </button>
        </>
    );
}

export default ArduinoSwitcher;