import React, {useState} from 'react';
import './css/Decrypt.css';

export default function Decrypt() {
    const [encryptedCode, setEncryptedCode] = useState('')
    const [decryptedCode, setDecryptedCode] = useState('')

    const decryptionTable = {
        76: '-', 85: '&', 89: '.', 91: '"', 92: "'", 93: '+',
        98: '/', 100: '!', 103: '?', 104: '%', 105: '*', 106: '$',
        107: ',', 109: '<', 110: '=', 112: '>', 113: '0', 115: '_',
        116: '1', 118: '(', 119: '2', 121: ')', 122: '3', 123: '@',
        124: ':', 125: '4', 127: ';', 128: '5', 131: '6', 134: '7',
        137: '8', 139: '[', 140: '9', 142: ']', 143: '^', 145: '{',
        148: '}', 154: '`', 176: 'A', 179: 'B', 182: 'C', 185: 'D',
        188: 'E', 189: '~', 191: 'F', 194: 'G', 197: 'H', 200: 'I',
        203: 'J', 206: 'K', 209: 'L', 212: 'M', 215: 'N', 218: 'O',
        221: 'P', 224: 'Q', 227: 'R', 230: 'S', 233: 'T', 236: 'U',
        239: 'V', 242: 'W', 245: 'X', 248: 'Y', 251: 'Z', 272: 'a',
        275: 'b', 278: 'c', 281: 'd', 284: 'e', 287: 'f', 290: 'g',
        293: 'h', 296: 'i', 299: 'j', 302: 'k', 305: 'l', 308: 'm',
        311: 'n', 314: 'o', 317: 'p', 320: 'q', 323: 'r', 326: 's',
        329: 't', 332: 'u', 335: 'v', 338: 'w', 341: 'x', 344: 'y',
        347: 'z', 777: ''
    };

    const decrypt = () => {
        try{
            if(encryptedCode.trim().length === 0){
                return alert("Enter message to decrypt")
            }

            let codes = (encryptedCode.trim()).split('--');
            let decryptedCode = '';
            for(let x in codes){
                let subCodes = codes[x].split(' ');
                let subDecryptedCode = '';
                for(let y in subCodes){
                    if(decryptionTable[subCodes[y]] === undefined){
                        return alert("Invalid code")
                    }
                    subDecryptedCode += decryptionTable[subCodes[y]];
                }
                decryptedCode += subDecryptedCode;
                if(x === (codes.length-1).toString()){
                    break;
                }
                decryptedCode += ' '
            }
            setDecryptedCode(decryptedCode)
        }catch(err){
            alert("Invalid code")
        }
    }

    const handlePaste = async () => {
        try{
            let data = await navigator.clipboard.readText()
            setEncryptedCode(data)
        }catch (err){
            alert("Failed to read clipboard")
        }
    }

    const copyToClipboard = async () => {
        try{
            await navigator.clipboard.writeText(decryptedCode)
            alert("Message copied to clipboard")
        }catch(err){
            alert("Failed to copy message to clipboard")
        }
    }

    return (
        <div className="decryptforge-wrapper">
            <h1 className="decryptforge-title">🔓 Decryption Panel</h1>

            <div className="decryptforge-input-group">
                <input
                    type="text"
                    placeholder="Enter the encrypted code..."
                    onChange={(e) => setEncryptedCode(e.target.value)}
                    value={encryptedCode}
                    className="decryptforge-input"
                />
                <button className="decryptforge-btn paste-btn" onClick={handlePaste}>
                    Paste 📋
                </button>
            </div>

            <div className="decryptforge-btn-group">
                <button className="decryptforge-btn" onClick={decrypt}>
                    Decrypt 🧩
                </button>

                {decryptedCode.length > 0 && (
                    <button className="decryptforge-btn secondary" onClick={copyToClipboard}>
                        Copy 📋
                    </button>
                )}
            </div>

            <h2 className="decryptforge-output">
                {decryptedCode.length === 0
                    ? "Enter message to decrypt"
                    : `🔓 ${decryptedCode}`}
            </h2>
        </div>
    )
}