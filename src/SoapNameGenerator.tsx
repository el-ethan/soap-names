import React, {useState} from 'react';

const divStyles = {
    textAlign: 'center'
} as React.CSSProperties;

const buttonStyles = {
    borderRadius: 60,
    fontSize: '2em',
    display: 'inline-block',
    background: 'pink'
} as React.CSSProperties;

interface SoapNameGeneratorProps { firstWords:string[], secondWords:string[] }

function SoapNameGenerator(props : SoapNameGeneratorProps) {
    const [soapName, setSoapName] = useState('❀❀❀❀❀❀❀❀❀❀');

    function getRandomItemFrom(items: Array<string>) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function generateSoapName() {
        const newName = `${getRandomItemFrom(props.firstWords)} ${getRandomItemFrom(props.secondWords)}`;
        setSoapName(newName);
    }
    
    return (
        <div style={divStyles}>
            <img src='soap.jpg'></img>
            <div>
            <h1>{soapName}</h1>
            </div>
            <button style={buttonStyles} onClick={generateSoapName}>Generate soap name</button>
        </div>
    )
}

export default SoapNameGenerator;