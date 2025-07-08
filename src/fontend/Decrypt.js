import React, { useState } from 'react';
import './css/Decrypt.css';

export default function Decrypt() {
    const [encryptedCode, setEncryptedCode] = useState('');
    const [decryptedCode, setDecryptedCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
        try {
            setIsLoading(true);
            if (encryptedCode.trim().length === 0) {
                alert("Enter message to decrypt");
                return;
            }

            let codes = encryptedCode.trim().split('--');
            let decryptedResult = '';
            for (let x in codes) {
                let subCodes = codes[x].split(' ');
                let subDecryptedCode = '';
                for (let y in subCodes) {
                    if (decryptionTable[subCodes[y]] === undefined) {
                        alert("Invalid code");
                        return;
                    }
                    subDecryptedCode += decryptionTable[subCodes[y]];
                }
                decryptedResult += subDecryptedCode;
                if (x === (codes.length - 1).toString()) {
                    break;
                }
                decryptedResult += ' ';
            }
            setDecryptedCode(decryptedResult);
        } catch (err) {
            alert("Invalid code");
        } finally {
            setIsLoading(false);
        }
    };

    const handlePaste = async () => {
        try {
            const data = await navigator.clipboard.readText();
            setEncryptedCode(data);
        } catch (err) {
            alert("Failed to read clipboard");
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(decryptedCode);
            alert("Message copied to clipboard");
        } catch (err) {
            alert("Failed to copy message to clipboard");
        }
    };

    return (
        <div className="decrypt-container">
            <div className="decrypt-header">
                <h1 className="decrypt-title">
                    <span className="decrypt-icon">🔓</span> Decrypt Message
                </h1>
                <p className="decrypt-subtitle">Enter your encrypted code to reveal the hidden message</p>
            </div>

            <div className="decrypt-input-container">
                <div className="input-group">
                    <textarea
                        placeholder="Paste encrypted code here..."
                        onChange={(e) => setEncryptedCode(e.target.value)}
                        value={encryptedCode}
                        className="decrypt-textarea"
                        rows="4"
                    />
                    <button
                        className="paste-button"
                        onClick={handlePaste}
                        title="Paste from clipboard"
                    >
                        <span className="button-icon">📋</span> Paste
                    </button>
                </div>
            </div>

            <div className="decrypt-actions">
                <button
                    className="decrypt-button primary"
                    onClick={decrypt}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="loading-spinner"></span>
                    ) : (
                        <>
                            <span className="button-icon">🔍</span> Decrypt
                        </>
                    )}
                </button>

                {decryptedCode.length > 0 && (
                    <button
                        className="decrypt-button secondary"
                        onClick={copyToClipboard}
                    >
                        <span className="button-icon">📋</span> Copy Result
                    </button>
                )}
            </div>

            <div className="decrypt-result-container">
                <h3 className="result-title">Decrypted Message:</h3>
                <div className="result-box">
                    {decryptedCode.length === 0 ? (
                        <p className="placeholder-text">Your decrypted message will appear here</p>
                    ) : (
                        <p className="decrypted-text">{decryptedCode}</p>
                    )}
                </div>
            </div>
        </div>
    );
}