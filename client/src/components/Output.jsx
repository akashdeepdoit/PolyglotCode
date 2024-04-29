import { useState, useEffect } from 'react';
import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
const Output = ({ code, language }) => {
    const [extensions, setExtensions] = useState(javascript());

    useEffect(() => {
        switch (language) {
            case 'javascript':
                setExtensions(javascript());
                break;
            case 'python':
                setExtensions(python());
                break;
            case 'cpp':
                setExtensions(cpp());
                break;
            case 'java':
                setExtensions(java());
                break;
            case 'rust':
                setExtensions(rust());
                break;
            default:
                setExtensions(javascript());
                break;
        }
    }, [language]);
    return (
        <div>
            <div >
                <CodeMirror
                    value={code}
                    height='64vh'
                    extensions={extensions}
                    theme='dark'
                />
            </div>
        </div>
    )
}

export default Output
