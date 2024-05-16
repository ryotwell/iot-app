import { default as CreateThermometer } from 'react-thermometer-component'

function Thermometer({ value, ...props }) {
    const config = {
        value,
        max: 100,
        steps: 3,
        format: '°C',
        theme: 'light'
    }

    return (
        <>
            <CreateThermometer {...config}/>
        </>
    )
}

export default Thermometer