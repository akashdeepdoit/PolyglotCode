import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';
import Output from '../components/Output';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BugFix = () => {
  const [language, setLanguage] = useState('');
  const [output, setOutput] = useState('');
  const langSelect = (e) => {
    setLanguage(e.target.value);
  }
  const code = useSelector(state => state.code.code);
  const languageEd = useSelector(state => state.code.language);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(languageEd);
    setLanguage(languageEd);
  }, [languageEd]);
  const debug = async () => {
    setLoading(true);
    if (!code) {
      alert('Please enter some code');
      setLoading(false);
      return;
    }
    if (language == !languageEd) {
      setLanguage(languageEd);
    }
    try {
      const res = await fetch('https://polyglotcode.onrender.com/api/fixbug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });
      const data = (await res.text()).trim();
      setOutput(data);
      setLoading(false);
    }
    catch (error) {
      console.error(error);
      setLoading(false);
      alert('Something went wrong');
    }
  }
  const handleClick = () => {
    debug();
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
                {loading ? 'Debugging...' : 'Debug'}
              </button>
              <Link to='/'> <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded ml-2">Translate</button></Link>
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

export default BugFix;
