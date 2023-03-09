import React, { useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import fontSize from 'tui-editor-plugin-font-size';
import 'tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { toPng } from 'html-to-image';

const TextEditor = () => {
    const [image, setImage] = useState<string>();

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

        const node = document.getElementsByClassName('ProseMirror toastui-editor-contents');

        if (node && node[0]) {
            toPng(node[0] as HTMLElement).then((url) => {
                console.log(url);
                setImage(url);
            });
        }
    };

    return (
        <div>
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
                    plugins={[
                        [
                            colorSyntax,
                            {
                                preset: ['#1F2E3D', '#4c5864', '#ED7675'],
                            },
                        ],
                        fontSize,
                    ]}
                    onChange={handleChangeHtml}
                />
            </div>
            <div style={{ padding: '30px' }}>{image && <img src={image} />}</div>
        </div>
    );
};

export default TextEditor;
