'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Heading, { Level } from '@tiptap/extension-heading'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import clsx from 'clsx'
import {
  CiTextAlignCenter,
  CiTextAlignJustify,
  CiTextAlignLeft,
  CiTextAlignRight
} from 'react-icons/ci'
import Color from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import { font_names } from '@/app/fonts'
import { useRef } from 'react'
import Underline from '@tiptap/extension-underline'

export default function EditTemplate ({}) {
  const ref = useRef<HTMLDivElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline,
      Document,
      Paragraph,
      Heading,
      TextStyle,
      Text,
      Color,
      FontFamily
    ],
    content: '<h1>Құрметті қонақтар!</h1>'
  })

  if (!editor) {
    return null
  }

  const handleClick = () => {
    if (ref.current) {
      ref.current.innerHTML = editor.getHTML()
    }
  }

  return (
    <div className='mt-5 w-full flex flex-col gap-5 items-center'>
      <div className='w-full border border-gray-200 rounded-md'>
        <div className='p-1 flex items-center gap-2'>
          <select
            className='border rounded-md text-sm p-1'
            onChange={e => {
              editor
                .chain()
                .focus()
                .setFontFamily(e.target.value || '')
                .run()
            }}
            value={
              font_names
                .map(item =>
                  editor.isActive('textStyle', { fontFamily: item.var })
                    ? item.var
                    : null
                )
                .filter(item => item !== null)[0] || ''
            }
          >
            <option value=''></option>
            {font_names.map(item => (
              <option key={item.title} value={item.var}>
                {item.title}
              </option>
            ))}
          </select>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive('bold') ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            B
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive('italic') ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            I
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive('strike') ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            S
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive('underline') ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            U
          </button>
          <select
            className='border rounded-md text-sm p-1'
            onChange={e =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: Number(e.target.value) as Level })
                .run()
            }
            value={
              editor.isActive('heading', { level: 1 })
                ? 1
                : editor.isActive('heading', { level: 2 })
                ? 2
                : editor.isActive('heading', { level: 3 })
                ? 3
                : editor.isActive('heading', { level: 4 })
                ? 4
                : editor.isActive('heading', { level: 5 })
                ? 5
                : editor.isActive('heading', { level: 6 })
                ? 6
                : 0
            }
          >
            <option value={0}></option>
            <option value={1}>H1</option>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
            <option value={4}>H4</option>
            <option value={5}>H5</option>
            <option value={6}>H6</option>
          </select>
          <button
            className={clsx(
              'w-20 p-1 border rounded-md text-sm italic',
              editor.isActive('paragraph') ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().setParagraph().run()}
          >
            Paragraph
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive({ textAlign: 'left' }) ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
          >
            <CiTextAlignLeft className='h-5 w-5' />
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive({ textAlign: 'center' }) ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
          >
            <CiTextAlignCenter className='h-5 w-5' />
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive({ textAlign: 'right' }) ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
          >
            <CiTextAlignRight className='h-5 w-5' />
          </button>
          <button
            className={clsx(
              'w-10 p-1 border rounded-md text-sm italic',
              editor.isActive({ textAlign: 'justify' }) ? 'bg-primary' : ''
            )}
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          >
            <CiTextAlignJustify className='h-5 w-5' />
          </button>
          <input
            className='text-md'
            type='color'
            onChange={event =>
              editor
                .chain()
                .focus()
                .setColor(event.target.value || 'none')
                .run()
            }
            value={editor.getAttributes('textStyle').color}
            // data-testid='setColor'
          />
        </div>
      </div>
      <div className='w-full'>
        <EditorContent editor={editor} />
        <button onClick={handleClick}>View</button>
        <div ref={ref} className='mt-10'></div>
      </div>
    </div>
  )
}
