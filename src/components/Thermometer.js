import { default as Ther } from 'react-thermometer-component'

function Thermometer({ value, ...props }) {
    return (
        <>
            <Ther
                theme="light"
                value={value}
                max="100"
                steps="3"
                format="°C"
            />
        </>
    );
}

export default Thermometer;