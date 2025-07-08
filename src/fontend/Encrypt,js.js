import React, { useState } from 'react';
import './css/Encrypt.css';

export default function Encrypt() {
    const [messageToEncrypt, setMessageToEncrypt] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const encryptionTable = {
        // formula = (ASCII of character) x 3 - 19
        // Uppercase A–Z
        'A': 176, 'B': 179, 'C': 182, 'D': 185, 'E': 188, 'F': 191,
        'G': 194, 'H': 197, 'I': 200, 'J': 203, 'K': 206, 'L': 209,
        'M': 212, 'N': 215, 'O': 218, 'P': 221, 'Q': 224, 'R': 227,
        'S': 230, 'T': 233, 'U': 236, 'V': 239, 'W': 242, 'X': 245,
        'Y': 248, 'Z': 251,

        // Lowercase a–z
        'a': 272, 'b': 275, 'c': 278, 'd': 281, 'e': 284, 'f': 287,
        'g': 290, 'h': 293, 'i': 296, 'j': 299, 'k': 302, 'l': 305,
        'm': 308, 'n': 311, 'o': 314, 'p': 317, 'q': 320, 'r': 323,
        's': 326, 't': 329, 'u': 332, 'v': 335, 'w': 338, 'x': 341,
        'y': 344, 'z': 347,

        // Digits 0–9
        '0': 113, '1': 116, '2': 119, '3': 122, '4': 125,
        '5': 128, '6': 131, '7': 134, '8': 137, '9': 140,

        // Special characters
        '.': 89, ',': 107, '?': 103, "'": 92, '!': 100,
        '/': 98, '(': 118, ')': 121, '&': 85, ':': 124,
        ';': 127, '=': 110, '+': 93, '-': 76, '_': 115,
        '"': 91, '$': 106, '@': 123, '#': 98, '%': 104,
        '*': 105, '<': 109, '>': 112, '[': 139, ']': 142,
        '{': 145, '}': 148, '\\': 137, '|': 140, '^': 143,
        '`': 154, '~': 189, '': 777,
    };

    const encrypt = () => {
        try {
            setIsLoading(true);
            let words = messageToEncrypt.split(' ');
            words = words.filter(word => word.length > 0);
            let encryptString = '';
            for (let x in words) {
                let subEncryptString = ''
                for (let y in words[x]) {
                    subEncryptString += encryptionTable[words[x][y]];
                    if (y === ((words[x].length) - 1).toString()) {
                        continue;
                    }
                    subEncryptString += ' ';
                }
                encryptString += subEncryptString;
                if (x === (words.length - 1).toString()) {
                    break;
                }
                encryptString += '--'
            }

            setEncryptedMessage(encryptString.trim())
        } catch (err) {
            alert("Invalid message")
        } finally {
            setIsLoading(false);
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(encryptedMessage)
            alert("Encrypted message copied to clipboard")
        } catch (err) {
            alert("Failed to copy message to clipboard")
        }
    }

    const clearAll = () => {
        setMessageToEncrypt('');
        setEncryptedMessage('');
    }

    return (
        <div className="encrypt-container">
            <div className="encrypt-header">
                <h1 className="encrypt-title">
                    <span className="encrypt-icon">🔐</span> Encrypt Message
                </h1>
                <p className="encrypt-subtitle">Transform your message into secure code</p>
            </div>

            <div className="input-section">
                <textarea
                    value={messageToEncrypt}
                    onChange={(e) => setMessageToEncrypt(e.target.value)}
                    rows={6}
                    placeholder="Type your secret message here..."
                    className="message-textarea"
                />
            </div>

            <div className="action-buttons">
                <button
                    className="encrypt-button primary"
                    onClick={encrypt}
                    disabled={isLoading || messageToEncrypt.trim().length === 0}
                >
                    {isLoading ? (
                        <span className="loading-spinner"></span>
                    ) : (
                        <>
                            <span className="button-icon">✨</span> Encrypt
                        </>
                    )}
                </button>

                {encryptedMessage.length > 0 && (
                    <>
                        <button
                            className="encrypt-button secondary"
                            onClick={copyToClipboard}
                        >
                            <span className="button-icon">📋</span> Copy Code
                        </button>
                        <button
                            className="encrypt-button clear-button"
                            onClick={clearAll}
                        >
                            <span className="button-icon">🗑️</span> Clear
                        </button>
                    </>
                )}
            </div>

            <div className="result-section">
                <h3 className="result-title">Encrypted Result:</h3>
                <div className="result-box">
                    {encryptedMessage.length === 0 ? (
                        <p className="placeholder-text">Your encrypted code will appear here</p>
                    ) : (
                        <p className="encrypted-code">{encryptedMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
}