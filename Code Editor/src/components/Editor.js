import React, {useStste} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor } from 'react-codemirror2'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor({props}) {
    const{ 
        language,
        displayName,
        value,
        onChange
    } = props
    const[open, setOpen] = useState(true)


    function HandleChange(editor, data, value){
        onChange(value)
    }
  return (
    <div className={`editor-container ${open ? '' : 'collasped'}`}>
        <div className='editor-title'>
            {displayName}
            <button
            type="button"
            className="expand-collaspe-btn"
                onClick={() =>setOpen(prevOpen => !prevOpen)}
            >
                < FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt } />
                </button>
        </div>
        <ControlledEditor
            onBeforeChange={HandleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true,
            }}
        />
    </div>
  )
}
