/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, ImageResize, ImageInsert, AutoImage } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { SpecialCharacters, SpecialCharactersCurrency, SpecialCharactersMathematical } from '@ckeditor/ckeditor5-special-characters';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import { Style } from '@ckeditor/ckeditor5-style';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport, FullPage, HtmlComment } from '@ckeditor/ckeditor5-html-support';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof TextTransformation | typeof Clipboard | typeof SelectAll | typeof Essentials | typeof UploadAdapter | typeof Paragraph | typeof Heading | typeof Autoformat | typeof Bold | typeof Italic | typeof BlockQuote | typeof CloudServices | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof CKBox | typeof CKFinder | typeof EasyImage | typeof Indent | typeof Link | typeof LinkImage | typeof List | typeof TodoList | typeof MediaEmbed | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof Alignment | typeof CodeBlock | typeof Autosave | typeof WordCount | typeof TextPartLanguage | typeof SpecialCharacters | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Highlight | typeof ExportPdf | typeof ExportWord | typeof GeneralHtmlSupport | typeof HtmlComment | typeof FullPage | typeof Style | typeof HorizontalLine | typeof Markdown | typeof PageBreak | typeof RemoveFormat | typeof PictureEditing)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
            shouldNotGroupWhenFull: boolean;
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
        list: {
            properties: {
                styles: boolean;
                startIndex: boolean;
                reversed: boolean;
            };
        };
        style: {
            definitions: never[];
        };
    };
}
