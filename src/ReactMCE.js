/* eslint-disable camelcase */
import React from 'react'
import { FormControl, Label } from 'raketa-ui'

import 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/paste'

import 'tinymce/plugins/wordcount'

import { Editor } from '@tinymce/tinymce-react'

const getCustomStyles = (customStyles) => {
  const formats = {}
  const style_formats = []

  customStyles.forEach((style) => {
    const { key, title, ...rest } = style

    formats[key] = rest
    style_formats.push({ title, format: key })
  })

  return {
    formats,
    style_formats
  }
}

const ReactMCE = ({ label, value, onChange, customStyles, ...props }) => {
  const handleEditorChange = (content, editor) => {
    onChange(content)
  }

  const { formats, style_formats } = getCustomStyles(customStyles)

  const styleSelect = customStyles ? 'styleselect' : ''

  return (
    <FormControl>
      {label && <Label>{label}</Label>}

      <Editor
        initialValue={value}
        init={{
          skin: false,
          menubar: false,
          formats,
          style_formats,
          plugins: [
            'autoresize',
            'autolink',
            'lists',
            'link',
            'print',
            'preview',
            'anchor',
            'code',
            'fullscreen',
            'paste',
            'code',
            'wordcount'
          ],
          toolbar: `undo redo | formatselect ${styleSelect} | bold italic strikethrough| link | bullist numlist | removeformat code | fullscreen`,
          ...props
        }}
        onEditorChange={handleEditorChange}
      />
    </FormControl>
  )
}

export default ReactMCE
