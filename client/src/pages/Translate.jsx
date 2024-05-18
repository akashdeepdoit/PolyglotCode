import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';
import Output from '../components/Output';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Translate = () => {
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const langSelect = (e) => {
    setLanguage(e.target.value);
  }
  const code = useSelector(state => state.code.code);
  const languageEd = useSelector(state => state.code.language);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(languageEd);
  }, [languageEd]);
  const translate = async () => {
    setLoading(true);
    if (!code) {
      alert('Please enter some code');
      setLoading(false);
      return;
    }
    if (language === languageEd) {
      alert('Please select a different language');
      return;
    }
    const res = await fetch('https://polyglotcode.onrender.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language })
    });
    const data = (await res.text()).trim();
    setOutput(data);
    setLoading(false);
  }
  const handleClick = () => {
    translate();
  }

  return (
    <>
      <div className="flex-grow flex justify-center items-center mt-8">
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">EDITOR</h2>
          <Editor />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4">OUTPUT</h2>
          <div className="flex justify-between items-center mb-4">
            <select className="p-2 rounded border" value={language} onChange={langSelect}>
              <option value='javascript'>JavaScript</option>
              <option value='python'>Python</option>
              <option value='cpp'>C++</option>
              <option value='java'>Java</option>
              <option value='rust'>Rust</option>
            </select>
            <div className="">
              <button disabled={loading} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                onClick={handleClick}>
                {loading ? 'Translating...' : 'Translate'}
              </button>
              <Link to='/bugfix'> <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded ml-2">Bug Fix</button></Link>
            </div>
          </div>
          <Output language={language} code={output} />
        </div>
      </div>
      <div className='mt-2'>
      </div>
    </>
  );
};

export default Translate;
