import React, { useEffect, useRef, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/toastui-editor.css';

const TextEditor = () => {
    const [editorHtml, setEditorHtml] = useState<string>();

    const editorRef = useRef<Editor>(null);
    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol', 'task'],
        ['table', 'link'],
        ['image'],
        ['code'],
        ['scrollSync'],
    ];

    const handleChangeHtml = () => {
        const data = editorRef.current?.getInstance().getHTML();

        setEditorHtml(data);
    };

    useEffect(() => {
        console.log(editorHtml);
    }, [editorHtml]);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '30px', height: '500px' }}>
                <Editor
                    ref={editorRef}
                    initialValue={'asdasdas'} // 글 수정 시 사용
                    initialEditType="wysiwyg" // wysiwyg & markdown
                    previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
                    hideModeSwitch={true}
                    height="calc(100% - 10rem)"
                    theme={'dark'} // '' & 'dark'
                    usageStatistics={false}
                    toolbarItems={toolbarItems}
                    useCommandShortcut={true}
                    plugins={[colorSyntax]}
                    onChange={handleChangeHtml}
                />
            </div>
            <div style={{ padding: '30px' }}>
                <Viewer />
            </div>
        </div>
    );
};

export default TextEditor;
