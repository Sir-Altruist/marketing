import React, { useState } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { makeStyles } from '@material-ui/core/styles'
// import parse from 'html-react-parser'

const useStyles = makeStyles({
    root: {
        width: '90%',
        // minHeight: '100vh',
        borderRadius: '10%',
        margin: '3rem auto 1rem auto'
    }
})
function Editor() {

    const classes = useStyles()

    const [text, setText ] = useState("")
    return (
        <>
        <div className={classes.root}>
           <CKEditor
           editor={ClassicEditor}
           data={text}
           onChange={(event, editor) => {
               const data = editor.getData()
               setText(data)
           }}
        /> 
    </div>
    {/* <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
    </div> */}
    </>
    )
}

export default Editor
