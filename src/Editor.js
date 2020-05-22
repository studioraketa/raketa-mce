import React, { Component } from 'react'
import tinymce from 'tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/table'

class Editor extends Component {
  constructor() {
    super()
    this.state = { editor: null }
  }

  componentDidMount() {
    tinymce.init({
      selector: `#${this.props.id}`,
      skin_url: `${process.env.PUBLIC_URL}/skins/lightgray`,
      plugins: 'wordcount table',
      setup: (editor) => {
        this.setState({ editor })
        editor.on('keyup change', () => {
          const content = editor.getContent()
          this.props.onEditorChange(content)
        })
      }
    })
  }

  componentWillUnmount() {
    tinymce.remove(this.state.editor)
  }

  render() {
    return (
      <textarea
        id={this.props.id}
        value={this.props.content}
        onChange={(e) => console.log(e)}
      />
    )
  }
}

export default Editor
