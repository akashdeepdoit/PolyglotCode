import { useState, useEffect, useContext } from 'react';
import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { rust } from '@codemirror/lang-rust';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { useDispatch, useSelector } from 'react-redux';
import { setCode,setLanguage } from '../redux/codeSlice';
const Editor = () => {
    const [newCode, setNewCode] = useState('');
    const [languageEd, setLanguageEd] = useState('javascript');
    const [extensions, setExtensions] = useState(javascript());

    useEffect(() => {
        switch (languageEd) {
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
    }, [languageEd]);
    const dispatch = useDispatch();
    const langSelect = (e) => {
        setLanguageEd(e.target.value);
        dispatch(setLanguage(e.target.value));
    }
    const count = useSelector(state => state.code.code);
    console.log(count);
    return (
        <div>
            <div >
                <div className='p-2'>
                    <select className='p-2 rounded border' value={languageEd} onChange={langSelect}>
                        <option value='javascript'>JavaScript</option>
                        <option value='python'>Python</option>
                        <option value='cpp'>C++</option>
                        <option value='java'>Java</option>
                        <option value='rust'>Rust</option>
                    </select>
                </div>
                <CodeMirror
                    value={newCode}
                    onChange={(value) => {
                        setNewCode(value);
                        console.log(value);
                        dispatch(setCode(value))
                    }}
                    height='64vh'
                    extensions={extensions}
                    theme='dark'
                />
            </div>
        </div>
    )
}

export default Editor
