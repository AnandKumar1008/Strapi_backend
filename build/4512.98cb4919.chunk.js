(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4512],{34512:(U,p,n)=>{"use strict";n.r(p),n.d(p,{default:()=>y});var g=n(74081),I=n(27279),x=n(70627),h=n.n(x),s=n(72450),c=n(79650),a=n(77970),C=n(93415),f=n(47665),S=n(8175),R=n.n(S),_=n(39642),F=n(95046),l=n.n(F);const k=async(i,j)=>{if(!j)return;const{plugins:P=[]}=i,m=[...P.map(N=>N.pluginName)],V=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],L=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],at=["FontBackgroundColor","FontColor","FontFamily","FontSize"],dt=["List","DocumentList"];await Promise.all(V.filter(({name:N})=>m.includes(N)).map(async({module:N})=>await n(74060)(`./${N}/build/translations/${j}.js`).catch(()=>null))),m.some(N=>L.includes(N))&&await n(98996)(`./${j}.js`).catch(()=>null),m.some(N=>dt.includes(N))&&await n(44042)(`./${j}.js`).catch(()=>null),m.some(N=>at.includes(N))&&await n(42940)(`./${j}.js`).catch(()=>null)},G=async i=>{const j=new URLSearchParams(window.location.search),m=Object.fromEntries(j.entries())["plugins[i18n][locale]"],V=f.I8.getUserInfo().preferedLanguage,{ui:L=V||"en",content:at,textPartLanguage:dt,ignorei18n:N}=i.language||{};if(m){const ut=m.split("-")[0];i.language={ui:typeof i.language=="string"?i.language:L,content:N?at:ut,textPartLanguage:dt},await k(i,i.language.ui),await k(i,i.language.content)}else typeof i.language=="object"?(await k(i,i.language.ui),await k(i,i.language.content)):typeof i.language=="string"?await k(i,i.language):(i.language=V,await k(i,V))},tt=i=>{const{configs:j,configsOverwrite:P}=globalThis.CKEditorConfig||{};let m;return P?m=j:(m=_.Z,j&&Object.keys(j).map(L=>{_.Z.hasOwnProperty(L)?(m[L].fields={..._.Z[L].field,...j[L].field},m[L].styles=j[L].styles||_.Z[L].styles,m[L].editorConfig={..._.Z[L].editorConfig,...j[L].editorConfig}):m[L]=j[L]})),R()(m[i])},et=(i,{responsiveDimensions:j},P)=>{const m=i.editorConfig?.plugins?[...i.editorConfig.plugins.map(V=>V.pluginName)]:[];m.includes("StrapiMediaLib")&&(i.editorConfig.strapiMediaLib={toggle:P}),m.includes("StrapiUploadAdapter")&&(i.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+f.I8.getToken()},backendUrl:strapi.backendURL,responsive:j}),m.includes("WordCount")&&(i.editorConfig.WordCountPlugin=!0)},K=i=>(0,f.WY)(`/${l()}/config/${i}`,{method:"GET"}),nt=async(i,j)=>{const P=tt(i),m=await K("upload");return et(P,m,j),await G(P.editorConfig),{currentConfig:P,uploadPluginConfig:m}},J=(0,s.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,u=(0,s.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,b=(0,s.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,v=(0,s.css)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,W={common:J,light:u,dark:b,additional:v},z=()=>{const i=localStorage.getItem("STRAPI_THEME")||"light",{theme:j,themeOverwrite:P}=globalThis.CKEditorConfig||{},m=P?j:{...W,...j};return(0,s.createGlobalStyle)`
       ${m.common}
       ${m[i]}
       ${m.additional}
   `},M=({isOpen:i,onChange:j,onToggle:P,editor:m,uploadConfig:{responsiveDimensions:V}})=>{const{components:L}=(0,f.yX)(),at=L["media-library"],dt=ut=>{let it="";ut.map(({name:xt,url:wt,alt:jt,formats:lt,mime:Ct})=>{if(Ct.includes("image"))if(lt&&V){let It="",Y=Object.keys(lt).sort((ct,mt)=>lt[ct].width-lt[mt].width);Y.map(ct=>It+=(0,f.CR)(lt[ct].url)+` ${lt[ct].width}w,`),it+=`<img src="${wt}" alt="${jt}" width="${lt[Y[Y.length-1]].width}px" srcset="${It}" />`}else it+=`<img src="${wt}" alt="${jt}" />`;else Ct.includes("application/pdf")&&(it=`<a href="${(0,f.CR)(wt)}" download="${xt}">${xt||"Download PDF"}</a>`)});const Z=m.data.processor.toView(it),X=m.data.toModel(Z);m.model.insertContent(X),P()},N=ut=>{const it=ut.map(Z=>({name:Z.name,alt:Z.alternativeText||Z.name,url:(0,f.CR)(Z.url),mime:Z.mime,formats:Z.formats}));dt(it)};return i?(0,g.jsx)(at,{onClose:P,onSelectAssets:N}):null};M.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},M.propTypes={isOpen:h().bool,onChange:h().func,onToggle:h().func};const ot=M;var Q=n(72958),rt=n(66916);const vt=z(),$t=(0,s.default)("div")`${({editorStyles:i})=>i}`,gt=({onChange:i,name:j,value:P,disabled:m,preset:V,maxLength:L})=>{const[at,dt]=(0,I.useState)(!1),[N,ut]=(0,I.useState)(!1),[it,Z]=(0,I.useState)(null),[X,xt]=(0,I.useState)(null),[wt,jt]=(0,I.useState)(!1),lt=(0,I.useRef)(null),Ct=()=>ut(Y=>!Y),It=Y=>Y>L?jt(!0):jt(!1);return(0,I.useEffect)(()=>{(async()=>{const{currentConfig:Y,uploadPluginConfig:ct}=await nt(V,Ct);xt(Y),Z(ct)})()},[]),(0,g.jsxs)(g.Fragment,{children:[X&&(0,g.jsx)(vt,{}),(0,g.jsxs)($t,{editorStyles:X?.styles,children:[!X&&(0,g.jsx)(Nt,{hasRadius:!0,background:"neutral100",children:(0,g.jsx)(a.a,{children:"Loading..."})}),X&&(0,g.jsx)(c.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:X?.editorConfig,disabled:m,data:P,onReady:Y=>{if(X.editorConfig.WordCountPlugin){const ct=Y.plugins.get("WordCount");ct.on("update",(Rt,At)=>It(At.characters)),lt.current?.appendChild(ct.wordCountContainer)}Y.plugins.has("ImageUploadEditing")&&Y.plugins.get("ImageUploadEditing").on("uploadComplete",(ct,{data:mt,imageElement:Rt})=>Y.model.change(At=>At.setAttribute("alt",mt.alt,Rt))),dt(Y)},onChange:(Y,ct)=>{const mt=ct.getData();i({target:{name:j,value:mt}})}}),X&&X.editorConfig.WordCountPlugin&&(0,g.jsx)(Ut,{color:wt?"danger500":"neutral400",ref:lt,children:!at&&(0,g.jsx)(a.a,{small:!0,children:"Loading..."})}),it&&(0,g.jsx)(ot,{isOpen:N,onToggle:Ct,editor:at,uploadConfig:it})]})]})};gt.defaultProps={value:"",disabled:!1},gt.propTypes={onChange:h().func.isRequired,name:h().string.isRequired,value:h().string,disabled:h().bool};const Ut=(0,s.default)(C.x)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Nt=(0,s.default)(C.x)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Bt=gt;var Ht=n(61020),bt=n(66769),yt=n(58892);const T=({name:i,attribute:j,onChange:P,value:m,intlLabel:V,labelAction:L,disabled:at,error:dt,description:N,required:ut})=>{const{formatMessage:it}=(0,Ht.Z)(),{preset:Z,maxLengthCharacters:X,...xt}=j.options;return(0,g.jsx)(bt.Field,{name:i,id:i,error:dt,hint:N&&it(N),children:(0,g.jsxs)(yt.Stack,{spacing:1,children:[(0,g.jsx)(bt.FieldLabel,{action:L,required:ut,children:it(V)}),(0,g.jsx)(Bt,{disabled:at,name:i,onChange:P,value:m,preset:Z,maxLength:X}),(0,g.jsx)(bt.FieldHint,{}),(0,g.jsx)(bt.FieldError,{})]})})};T.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},T.propTypes={intlLabel:h().object.isRequired,onChange:h().func.isRequired,attribute:h().object.isRequired,name:h().string.isRequired,description:h().object,disabled:h().bool,error:h().string,labelAction:h().object,required:h().bool,value:h().string};const y=T},66916:(U,p,n)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var g={655:(s,c,a)=>{"use strict";a.d(c,{Z:()=>S});var C=a(609),f=a.n(C)()(function(R){return R[1]});f.push([s.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const S=f},609:s=>{"use strict";s.exports=function(c){var a=[];return a.toString=function(){return this.map(function(C){var f=c(C);return C[2]?"@media ".concat(C[2]," {").concat(f,"}"):f}).join("")},a.i=function(C,f,S){typeof C=="string"&&(C=[[null,C,""]]);var R={};if(S)for(var _=0;_<this.length;_++){var F=this[_][0];F!=null&&(R[F]=!0)}for(var l=0;l<C.length;l++){var k=[].concat(C[l]);S&&R[k[0]]||(f&&(k[2]?k[2]="".concat(f," and ").concat(k[2]):k[2]=f),a.push(k))}},a}},62:(s,c,a)=>{"use strict";var C,f=function(){return C===void 0&&(C=Boolean(window&&document&&document.all&&!window.atob)),C},S=function(){var u={};return function(b){if(u[b]===void 0){var v=document.querySelector(b);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}u[b]=v}return u[b]}}(),R=[];function _(u){for(var b=-1,v=0;v<R.length;v++)if(R[v].identifier===u){b=v;break}return b}function F(u,b){for(var v={},A=[],W=0;W<u.length;W++){var z=u[W],M=b.base?z[0]+b.base:z[0],ot=v[M]||0,Q="".concat(M," ").concat(ot);v[M]=ot+1;var rt=_(Q),vt={css:z[1],media:z[2],sourceMap:z[3]};rt!==-1?(R[rt].references++,R[rt].updater(vt)):R.push({identifier:Q,updater:J(vt,b),references:1}),A.push(Q)}return A}function l(u){var b=document.createElement("style"),v=u.attributes||{};if(v.nonce===void 0){var A=a.nc;A&&(v.nonce=A)}if(Object.keys(v).forEach(function(z){b.setAttribute(z,v[z])}),typeof u.insert=="function")u.insert(b);else{var W=S(u.insert||"head");if(!W)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");W.appendChild(b)}return b}var k,G=(k=[],function(u,b){return k[u]=b,k.filter(Boolean).join(`
`)});function tt(u,b,v,A){var W=v?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(u.styleSheet)u.styleSheet.cssText=G(b,W);else{var z=document.createTextNode(W),M=u.childNodes;M[b]&&u.removeChild(M[b]),M.length?u.insertBefore(z,M[b]):u.appendChild(z)}}function et(u,b,v){var A=v.css,W=v.media,z=v.sourceMap;if(W?u.setAttribute("media",W):u.removeAttribute("media"),z&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),u.styleSheet)u.styleSheet.cssText=A;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(A))}}var K=null,nt=0;function J(u,b){var v,A,W;if(b.singleton){var z=nt++;v=K||(K=l(b)),A=tt.bind(null,v,z,!1),W=tt.bind(null,v,z,!0)}else v=l(b),A=et.bind(null,v,b),W=function(){(function(M){if(M.parentNode===null)return!1;M.parentNode.removeChild(M)})(v)};return A(u),function(M){if(M){if(M.css===u.css&&M.media===u.media&&M.sourceMap===u.sourceMap)return;A(u=M)}else W()}}s.exports=function(u,b){(b=b||{}).singleton||typeof b.singleton=="boolean"||(b.singleton=f());var v=F(u=u||[],b);return function(A){if(A=A||[],Object.prototype.toString.call(A)==="[object Array]"){for(var W=0;W<v.length;W++){var z=_(v[W]);R[z].references--}for(var M=F(A,b),ot=0;ot<v.length;ot++){var Q=_(v[ot]);R[Q].references===0&&(R[Q].updater(),R.splice(Q,1))}v=M}}}},704:(s,c,a)=>{s.exports=a(79)("./src/core.js")},492:(s,c,a)=>{s.exports=a(79)("./src/engine.js")},273:(s,c,a)=>{s.exports=a(79)("./src/ui.js")},209:(s,c,a)=>{s.exports=a(79)("./src/utils.js")},79:s=>{"use strict";s.exports=CKEditor5.dll}},I={};function x(s){var c=I[s];if(c!==void 0)return c.exports;var a=I[s]={id:s,exports:{}};return g[s](a,a.exports,x),a.exports}x.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return x.d(c,{a:c}),c},x.d=(s,c)=>{for(var a in c)x.o(c,a)&&!x.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:c[a]})},x.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c),x.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},x.nc=void 0;var h={};(()=>{"use strict";x.r(h),x.d(h,{ClassicEditor:()=>bt});var s=x(273),c=x(492),a=x(209);class C extends s.EditorUI{constructor(y,i){super(y),this.view=i,this._toolbarConfig=(0,s.normalizeToolbarConfig)(y.config.get("toolbar")),this._elementReplacer=new a.ElementReplacer}get element(){return this.view.element}init(y){const i=this.editor,j=this.view,P=i.editing.view,m=j.editable,V=P.document.getRoot();m.name=V.rootName,j.render();const L=m.element;this.setEditableElement(m.name,L),j.editable.bind("isFocused").to(this.focusTracker),P.attachDomRoot(L),y&&this._elementReplacer.replace(y,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const y=this.view,i=this.editor.editing.view;this._elementReplacer.restore(),i.detachDomRoot(y.editable.name),y.destroy()}_initToolbar(){const y=this.view;y.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),y.stickyPanel.limiterElement=y.element,y.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:i})=>i||0),y.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(y.toolbar)}_initPlaceholder(){const y=this.editor,i=y.editing.view,j=i.document.getRoot(),P=y.sourceElement,m=y.config.get("placeholder")||P&&P.tagName.toLowerCase()==="textarea"&&P.getAttribute("placeholder");m&&(0,c.enablePlaceholder)({view:i,element:j,text:m,isDirectHost:!1,keepOnFocus:!0})}}var f=x(62),S=x.n(f),R=x(655),_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};S()(R.Z,_),R.Z.locals;class F extends s.BoxedEditorUIView{constructor(y,i,j={}){super(y),this.stickyPanel=new s.StickyPanelView(y),this.toolbar=new s.ToolbarView(y,{shouldGroupWhenFull:j.shouldToolbarGroupWhenFull}),this.editable=new s.InlineEditableUIView(y,i)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var l=x(704);const k=function(T){return T!=null&&typeof T=="object"},G=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var tt=typeof self=="object"&&self&&self.Object===Object&&self;const et=(G||tt||Function("return this")()).Symbol;var K=Object.prototype,nt=K.hasOwnProperty,J=K.toString,u=et?et.toStringTag:void 0;const b=function(T){var y=nt.call(T,u),i=T[u];try{T[u]=void 0;var j=!0}catch{}var P=J.call(T);return j&&(y?T[u]=i:delete T[u]),P};var v=Object.prototype.toString;const A=function(T){return v.call(T)};var W="[object Null]",z="[object Undefined]",M=et?et.toStringTag:void 0;const ot=function(T){return T==null?T===void 0?z:W:M&&M in Object(T)?b(T):A(T)},Q=function(T,y){return function(i){return T(y(i))}}(Object.getPrototypeOf,Object);var rt="[object Object]",vt=Function.prototype,$t=Object.prototype,gt=vt.toString,Ut=$t.hasOwnProperty,Nt=gt.call(Object);const Bt=function(T){if(!k(T)||ot(T)!=rt)return!1;var y=Q(T);if(y===null)return!0;var i=Ut.call(y,"constructor")&&y.constructor;return typeof i=="function"&&i instanceof i&&gt.call(i)==Nt},Ht=function(T){return k(T)&&T.nodeType===1&&!Bt(T)};class bt extends(0,l.DataApiMixin)((0,l.ElementApiMixin)(l.Editor)){constructor(y,i={}){if(!yt(y)&&i.initialData!==void 0)throw new a.CKEditorError("editor-create-initial-data",null);super(i),this.config.get("initialData")===void 0&&this.config.set("initialData",function(m){return yt(m)?(0,a.getDataFromElement)(m):m}(y)),yt(y)&&(this.sourceElement=y),this.model.document.createRoot();const j=!this.config.get("toolbar.shouldNotGroupWhenFull"),P=new F(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:j});this.ui=new C(this,P),(0,l.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(y,i={}){return new Promise(j=>{const P=new this(y,i);j(P.initPlugins().then(()=>P.ui.init(yt(y)?y:null)).then(()=>P.data.init(P.config.get("initialData"))).then(()=>P.fire("ready")).then(()=>P))})}}function yt(T){return Ht(T)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=h})()},79650:(U,p,n)=>{U=n.nmd(U);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(g,I){U.exports=I(n(27279))})(self,g=>(()=>{var I={703:(c,a,C)=>{"use strict";var f=C(414);function S(){}function R(){}R.resetWarningCache=S,c.exports=function(){function _(k,G,tt,et,K,nt){if(nt!==f){var J=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw J.name="Invariant Violation",J}}function F(){return _}_.isRequired=_;var l={array:_,bigint:_,bool:_,func:_,number:_,object:_,string:_,symbol:_,any:_,arrayOf:F,element:_,elementType:_,instanceOf:F,node:_,objectOf:F,oneOf:F,oneOfType:F,shape:F,exact:F,checkPropTypes:R,resetWarningCache:S};return l.PropTypes=l,l}},697:(c,a,C)=>{c.exports=C(703)()},414:c=>{"use strict";c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:c=>{"use strict";c.exports=g}},x={};function h(c){var a=x[c];if(a!==void 0)return a.exports;var C=x[c]={exports:{}};return I[c](C,C.exports,h),C.exports}h.n=c=>{var a=c&&c.__esModule?()=>c.default:()=>c;return h.d(a,{a}),a},h.d=(c,a)=>{for(var C in a)h.o(a,C)&&!h.o(c,C)&&Object.defineProperty(c,C,{enumerable:!0,get:a[C]})},h.o=(c,a)=>Object.prototype.hasOwnProperty.call(c,a),h.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var s={};return(()=>{"use strict";h.r(s),h.d(s,{CKEditor:()=>Pt,CKEditorContext:()=>pe});var c=h(787),a=h.n(c),C=h(697),f=h.n(C);const S=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},R=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var _=typeof self=="object"&&self&&self.Object===Object&&self;const F=R||_||Function("return this")(),l=function(){return F.Date.now()};var k=/\s/;const G=function(t){for(var e=t.length;e--&&k.test(t.charAt(e)););return e};var tt=/^\s+/;const et=function(t){return t&&t.slice(0,G(t)+1).replace(tt,"")},K=F.Symbol;var nt=Object.prototype,J=nt.hasOwnProperty,u=nt.toString,b=K?K.toStringTag:void 0;const v=function(t){var e=J.call(t,b),o=t[b];try{t[b]=void 0;var r=!0}catch{}var d=u.call(t);return r&&(e?t[b]=o:delete t[b]),d};var A=Object.prototype.toString;const W=function(t){return A.call(t)};var z="[object Null]",M="[object Undefined]",ot=K?K.toStringTag:void 0;const Q=function(t){return t==null?t===void 0?M:z:ot&&ot in Object(t)?v(t):W(t)},rt=function(t){return t!=null&&typeof t=="object"};var vt="[object Symbol]";const $t=function(t){return typeof t=="symbol"||rt(t)&&Q(t)==vt};var gt=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Ht=parseInt;const bt=function(t){if(typeof t=="number")return t;if($t(t))return gt;if(S(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=S(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=et(t);var o=Nt.test(t);return o||Bt.test(t)?Ht(t.slice(2),o?2:8):Ut.test(t)?gt:+t};var yt="Expected a function",T=Math.max,y=Math.min;const i=function(t,e,o){var r,d,w,E,O,H,B=0,Jt=!1,St=!1,ft=!0;if(typeof t!="function")throw new TypeError(yt);function Dt(st){var kt=r,Tt=d;return r=d=void 0,B=st,E=t.apply(Tt,kt)}function Qt(st){var kt=st-H;return H===void 0||kt>=e||kt<0||St&&st-B>=w}function Ft(){var st=l();if(Qt(st))return ht(st);O=setTimeout(Ft,function(kt){var Tt=e-(kt-H);return St?y(Tt,w-(kt-B)):Tt}(st))}function ht(st){return O=void 0,ft&&r?Dt(st):(r=d=void 0,E)}function pt(){var st=l(),kt=Qt(st);if(r=arguments,d=this,H=st,kt){if(O===void 0)return function(Tt){return B=Tt,O=setTimeout(Ft,e),Jt?Dt(Tt):E}(H);if(St)return clearTimeout(O),O=setTimeout(Ft,e),Dt(H)}return O===void 0&&(O=setTimeout(Ft,e)),E}return e=bt(e)||0,S(o)&&(Jt=!!o.leading,w=(St="maxWait"in o)?T(bt(o.maxWait)||0,e):w,ft="trailing"in o?!!o.trailing:ft),pt.cancel=function(){O!==void 0&&clearTimeout(O),B=0,r=H=d=O=void 0},pt.flush=function(){return O===void 0?E:ht(l())},pt};var j="Expected a function";const P=function(t,e,o){var r=!0,d=!0;if(typeof t!="function")throw new TypeError(j);return S(o)&&(r="leading"in o?!!o.leading:r,d="trailing"in o?!!o.trailing:d),i(t,e,{leading:r,maxWait:e,trailing:d})},m=function(){this.__data__=[],this.size=0},V=function(t,e){return t===e||t!=t&&e!=e},L=function(t,e){for(var o=t.length;o--;)if(V(t[o][0],e))return o;return-1};var at=Array.prototype.splice;const dt=function(t){var e=this.__data__,o=L(e,t);return!(o<0)&&(o==e.length-1?e.pop():at.call(e,o,1),--this.size,!0)},N=function(t){var e=this.__data__,o=L(e,t);return o<0?void 0:e[o][1]},ut=function(t){return L(this.__data__,t)>-1},it=function(t,e){var o=this.__data__,r=L(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function Z(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Z.prototype.clear=m,Z.prototype.delete=dt,Z.prototype.get=N,Z.prototype.has=ut,Z.prototype.set=it;const X=Z,xt=function(){this.__data__=new X,this.size=0},wt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},jt=function(t){return this.__data__.get(t)},lt=function(t){return this.__data__.has(t)};var Ct="[object AsyncFunction]",It="[object Function]",Y="[object GeneratorFunction]",ct="[object Proxy]";const mt=function(t){if(!S(t))return!1;var e=Q(t);return e==It||e==Y||e==Ct||e==ct},Rt=F["__core-js_shared__"];var At=function(){var t=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const ao=function(t){return!!At&&At in t};var lo=Function.prototype.toString;const _t=function(t){if(t!=null){try{return lo.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,fo=Object.prototype,po=ho.toString,go=fo.hasOwnProperty,bo=RegExp("^"+po.call(go).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mo=function(t){return!(!S(t)||ao(t))&&(mt(t)?bo:uo).test(_t(t))},ko=function(t,e){return t?.[e]},Et=function(t,e){var o=ko(t,e);return mo(o)?o:void 0},Gt=Et(F,"Map"),Kt=Et(Object,"create"),vo=function(){this.__data__=Kt?Kt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var xo="__lodash_hash_undefined__",wo=Object.prototype.hasOwnProperty;const jo=function(t){var e=this.__data__;if(Kt){var o=e[t];return o===xo?void 0:o}return wo.call(e,t)?e[t]:void 0};var Co=Object.prototype.hasOwnProperty;const _o=function(t){var e=this.__data__;return Kt?e[t]!==void 0:Co.call(e,t)};var Eo="__lodash_hash_undefined__";const Oo=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Kt&&e===void 0?Eo:e,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=vo,Mt.prototype.delete=yo,Mt.prototype.get=jo,Mt.prototype.has=_o,Mt.prototype.set=Oo;const be=Mt,Po=function(){this.size=0,this.__data__={hash:new be,map:new(Gt||X),string:new be}},So=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Yt=function(t,e){var o=t.__data__;return So(e)?o[typeof e=="string"?"string":"hash"]:o.map},Fo=function(t){var e=Yt(this,t).delete(t);return this.size-=e?1:0,e},To=function(t){return Yt(this,t).get(t)},Io=function(t){return Yt(this,t).has(t)},Ro=function(t,e){var o=Yt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function Wt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=Po,Wt.prototype.delete=Fo,Wt.prototype.get=To,Wt.prototype.has=Io,Wt.prototype.set=Ro;const Ao=Wt;var Mo=200;const Wo=function(t,e){var o=this.__data__;if(o instanceof X){var r=o.__data__;if(!Gt||r.length<Mo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new Ao(r)}return o.set(t,e),this.size=o.size,this};function Lt(t){var e=this.__data__=new X(t);this.size=e.size}Lt.prototype.clear=xt,Lt.prototype.delete=wt,Lt.prototype.get=jt,Lt.prototype.has=lt,Lt.prototype.set=Wo;const Lo=Lt,zo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=Et(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ke=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Do=Object.prototype.hasOwnProperty;const ve=function(t,e,o){var r=t[e];Do.call(t,e)&&V(r,o)&&(o!==void 0||e in t)||ke(t,e,o)},Xt=function(t,e,o,r){var d=!o;o||(o={});for(var w=-1,E=e.length;++w<E;){var O=e[w],H=r?r(o[O],t[O],O,o,t):void 0;H===void 0&&(H=t[O]),d?ke(o,O,H):ve(o,O,H)}return o},$o=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var Uo="[object Arguments]";const ye=function(t){return rt(t)&&Q(t)==Uo};var xe=Object.prototype,No=xe.hasOwnProperty,Bo=xe.propertyIsEnumerable;const Ho=ye(function(){return arguments}())?ye:function(t){return rt(t)&&No.call(t,"callee")&&!Bo.call(t,"callee")},qt=Array.isArray,Go=function(){return!1};var we=p&&!p.nodeType&&p,je=we&&!0&&U&&!U.nodeType&&U,Ce=je&&je.exports===we?F.Buffer:void 0;const _e=(Ce?Ce.isBuffer:void 0)||Go;var Ko=9007199254740991,Vo=/^(?:0|[1-9]\d*)$/;const Zo=function(t,e){var o=typeof t;return!!(e=e??Ko)&&(o=="number"||o!="symbol"&&Vo.test(t))&&t>-1&&t%1==0&&t<e};var Qo=9007199254740991;const Ee=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Qo};var $={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$["[object Arguments]"]=$["[object Array]"]=$["[object ArrayBuffer]"]=$["[object Boolean]"]=$["[object DataView]"]=$["[object Date]"]=$["[object Error]"]=$["[object Function]"]=$["[object Map]"]=$["[object Number]"]=$["[object Object]"]=$["[object RegExp]"]=$["[object Set]"]=$["[object String]"]=$["[object WeakMap]"]=!1;const Yo=function(t){return rt(t)&&Ee(t.length)&&!!$[Q(t)]},te=function(t){return function(e){return t(e)}};var Oe=p&&!p.nodeType&&p,Vt=Oe&&!0&&U&&!U.nodeType&&U,ee=Vt&&Vt.exports===Oe&&R.process;const zt=function(){try{var t=Vt&&Vt.require&&Vt.require("util").types;return t||ee&&ee.binding&&ee.binding("util")}catch{}}();var Pe=zt&&zt.isTypedArray;const Xo=Pe?te(Pe):Yo;var Jo=Object.prototype.hasOwnProperty;const Se=function(t,e){var o=qt(t),r=!o&&Ho(t),d=!o&&!r&&_e(t),w=!o&&!r&&!d&&Xo(t),E=o||r||d||w,O=E?$o(t.length,String):[],H=O.length;for(var B in t)!e&&!Jo.call(t,B)||E&&(B=="length"||d&&(B=="offset"||B=="parent")||w&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||Zo(B,H))||O.push(B);return O};var qo=Object.prototype;const oe=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||qo)},Fe=function(t,e){return function(o){return t(e(o))}},tr=Fe(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!oe(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Te=function(t){return t!=null&&Ee(t.length)&&!mt(t)},re=function(t){return Te(t)?Se(t):or(t)},rr=function(t,e){return t&&Xt(e,re(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!S(t))return nr(t);var e=oe(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},ne=function(t){return Te(t)?Se(t,!0):cr(t)},sr=function(t,e){return t&&Xt(e,ne(e),t)};var Ie=p&&!p.nodeType&&p,Re=Ie&&!0&&U&&!U.nodeType&&U,Ae=Re&&Re.exports===Ie?F.Buffer:void 0,Me=Ae?Ae.allocUnsafe:void 0;const ar=function(t,e){if(e)return t.slice();var o=t.length,r=Me?Me(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,d=0,w=[];++o<r;){var E=t[o];e(E,o,t)&&(w[d++]=E)}return w},We=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,Le=Object.getOwnPropertySymbols;const ie=Le?function(t){return t==null?[]:(t=Object(t),dr(Le(t),function(e){return ur.call(t,e)}))}:We,hr=function(t,e){return Xt(t,ie(t),e)},ze=function(t,e){for(var o=-1,r=e.length,d=t.length;++o<r;)t[d+o]=e[o];return t},ce=Fe(Object.getPrototypeOf,Object),De=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)ze(e,ie(t)),t=ce(t);return e}:We,fr=function(t,e){return Xt(t,De(t),e)},$e=function(t,e,o){var r=e(t);return qt(t)?r:ze(r,o(t))},pr=function(t){return $e(t,re,ie)},gr=function(t){return $e(t,ne,De)},se=Et(F,"DataView"),ae=Et(F,"Promise"),le=Et(F,"Set"),de=Et(F,"WeakMap");var Ue="[object Map]",Ne="[object Promise]",Be="[object Set]",He="[object WeakMap]",Ge="[object DataView]",br=_t(se),mr=_t(Gt),kr=_t(ae),vr=_t(le),yr=_t(de),Ot=Q;(se&&Ot(new se(new ArrayBuffer(1)))!=Ge||Gt&&Ot(new Gt)!=Ue||ae&&Ot(ae.resolve())!=Ne||le&&Ot(new le)!=Be||de&&Ot(new de)!=He)&&(Ot=function(t){var e=Q(t),o=e=="[object Object]"?t.constructor:void 0,r=o?_t(o):"";if(r)switch(r){case br:return Ge;case mr:return Ue;case kr:return Ne;case vr:return Be;case yr:return He}return e});const ue=Ot;var xr=Object.prototype.hasOwnProperty;const wr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&xr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ke=F.Uint8Array,he=function(t){var e=new t.constructor(t.byteLength);return new Ke(e).set(new Ke(t)),e},jr=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var Cr=/\w*$/;const _r=function(t){var e=new t.constructor(t.source,Cr.exec(t));return e.lastIndex=t.lastIndex,e};var Ve=K?K.prototype:void 0,Ze=Ve?Ve.valueOf:void 0;const Er=function(t){return Ze?Object(Ze.call(t)):{}},Or=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Pr="[object Boolean]",Sr="[object Date]",Fr="[object Map]",Tr="[object Number]",Ir="[object RegExp]",Rr="[object Set]",Ar="[object String]",Mr="[object Symbol]",Wr="[object ArrayBuffer]",Lr="[object DataView]",zr="[object Float32Array]",Dr="[object Float64Array]",$r="[object Int8Array]",Ur="[object Int16Array]",Nr="[object Int32Array]",Br="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Kr="[object Uint32Array]";const Vr=function(t,e,o){var r=t.constructor;switch(e){case Wr:return he(t);case Pr:case Sr:return new r(+t);case Lr:return jr(t,o);case zr:case Dr:case $r:case Ur:case Nr:case Br:case Hr:case Gr:case Kr:return Or(t,o);case Fr:return new r;case Tr:case Ar:return new r(t);case Ir:return _r(t);case Rr:return new r;case Mr:return Er(t)}};var Qe=Object.create;const Zr=function(){function t(){}return function(e){if(!S(e))return{};if(Qe)return Qe(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Qr=function(t){return typeof t.constructor!="function"||oe(t)?{}:Zr(ce(t))};var Yr="[object Map]";const Xr=function(t){return rt(t)&&ue(t)==Yr};var Ye=zt&&zt.isMap;const Jr=Ye?te(Ye):Xr;var qr="[object Set]";const tn=function(t){return rt(t)&&ue(t)==qr};var Xe=zt&&zt.isSet;const en=Xe?te(Xe):tn;var on=1,rn=2,nn=4,Je="[object Arguments]",qe="[object Function]",cn="[object GeneratorFunction]",to="[object Object]",D={};D[Je]=D["[object Array]"]=D["[object ArrayBuffer]"]=D["[object DataView]"]=D["[object Boolean]"]=D["[object Date]"]=D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Map]"]=D["[object Number]"]=D[to]=D["[object RegExp]"]=D["[object Set]"]=D["[object String]"]=D["[object Symbol]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D["[object Error]"]=D[qe]=D["[object WeakMap]"]=!1;const sn=function t(e,o,r,d,w,E){var O,H=o&on,B=o&rn,Jt=o&nn;if(r&&(O=w?r(e,d,w,E):r(e)),O!==void 0)return O;if(!S(e))return e;var St=qt(e);if(St){if(O=wr(e),!H)return lr(e,O)}else{var ft=ue(e),Dt=ft==qe||ft==cn;if(_e(e))return ar(e,H);if(ft==to||ft==Je||Dt&&!w){if(O=B||Dt?{}:Qr(e),!H)return B?fr(e,sr(O,e)):hr(e,rr(O,e))}else{if(!D[ft])return w?e:{};O=Vr(e,ft,H)}}E||(E=new Lo);var Qt=E.get(e);if(Qt)return Qt;E.set(e,O),en(e)?e.forEach(function(ht){O.add(t(ht,o,r,ht,e,E))}):Jr(e)&&e.forEach(function(ht,pt){O.set(pt,t(ht,o,r,pt,e,E))});var Ft=St?void 0:(Jt?B?gr:pr:B?ne:re)(e);return zo(Ft||e,function(ht,pt){Ft&&(ht=e[pt=ht]),ve(O,pt,t(ht,o,r,pt,e,E))}),O};var an=1,ln=4;const dn=function(t,e){return sn(t,an|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,fn=Object.prototype,eo=hn.toString,pn=fn.hasOwnProperty,gn=eo.call(Object);const bn=function(t){if(!rt(t)||Q(t)!=un)return!1;var e=ce(t);if(e===null)return!0;var o=pn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&eo.call(o)==gn},mn=function(t){return rt(t)&&t.nodeType===1&&!bn(t)};function fe(t,e=new Set){const o=[t],r=new Set;let d=0;for(;o.length>d;){const w=o[d++];if(!(r.has(w)||kn(w)||e.has(w)))if(r.add(w),w[Symbol.iterator])try{for(const E of w)o.push(E)}catch{}else for(const E in w)E!=="defaultValue"&&o.push(w[E])}return r}function kn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function oo(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const d=fe(t,o),w=fe(e,o);for(const E of d)if(w.has(E))return!0;return!1}class ro{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const d of r)d.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class no extends ro{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=P(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,d)=>e.create(r,d),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(d=>{this._editor=d,d.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=d.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return oo(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>mn(o)||r==="context"?o:void 0)}}const q=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Zt=Symbol("MainQueueId");class io extends ro{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Zt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let d;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return d=new no(this._watchdogConfig),d.setCreator(r.creator),d._setExcludedProperties(this._contextProps),r.destructor&&d.setDestructor(r.destructor),this._watchdogs.set(r.id,d),d.on("error",(w,{error:E,causesRestart:O})=>{this._fire("itemError",{itemId:r.id,error:E}),O&&this._actionQueues.enqueue(r.id,()=>new Promise(H=>{d.on("restart",function B(){d.off("restart",B),this._fire("itemRestart",{itemId:r.id}),H()}.bind(this))}))}),d.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const d=this._getWatchdog(r);return this._watchdogs.delete(r),d.destroy()})))}destroy(){return this._actionQueues.enqueue(Zt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Zt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=fe(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return oo(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Zt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const d=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Zt),this._queues.get(e)])).then(o),w=d.catch(()=>{});return this._queues.set(e,w),d.finally(()=>{this._activeActions--,this._queues.get(e)===w&&this._activeActions===0&&this._onEmptyCallbacks.forEach(E=>E())})}}function co(t){return Array.isArray(t)?t:[t]}const so=a().createContext("contextWatchdog");class pe extends a().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return a().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new io(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}pe.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},pe.propTypes={id:f().string,isLayoutReady:f().bool,context:f().func,watchdogConfig:f().object,config:f().object,onReady:f().func,onError:f().func};const ge="Lock from React integration (@ckeditor/ckeditor5-react)";class Pt extends a().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=a().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(ge):this.editor.disableReadOnlyMode(ge)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return a().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof io?this.watchdog=new yn(this.context):this.watchdog=new Pt._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(ge);const d=r.model.document,w=r.editing.view.document;return d.on("change:data",E=>{this.props.onChange&&this.props.onChange(E,r)}),w.on("focus",E=>{this.props.onFocus&&this.props.onFocus(E,r)}),w.on("blur",E=>{this.props.onBlur&&this.props.onBlur(E,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,d=4294967296*Math.random()>>>0,w=4294967296*Math.random()>>>0;return"e"+q[o>>0&255]+q[o>>8&255]+q[o>>16&255]+q[o>>24&255]+q[r>>0&255]+q[r>>8&255]+q[r>>16&255]+q[r>>24&255]+q[d>>0&255]+q[d>>8&255]+q[d>>16&255]+q[d>>24&255]+q[w>>0&255]+q[w>>8&255]+q[w>>16&255]+q[w>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:d,causesRestart:w,error:E})=>{d===this._id&&o(null,{error:E,causesRestart:w})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Pt.contextType=so,Pt.propTypes={editor:f().func.isRequired,data:f().string,config:f().object,watchdogConfig:f().object,onChange:f().func,onReady:f().func,onFocus:f().func,onBlur:f().func,onError:f().func,disabled:f().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Pt.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},Pt._EditorWatchdog=no})(),s})())},59817:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(27279),x=n(20565),h=n(54673),s=n(44747),c=I.forwardRef(({children:a,name:C,error:f,hint:S,id:R,required:_=!1,...F},l)=>{const k=h.useId(R),G=I.useMemo(()=>({name:C,id:k,error:f,hint:S,required:_}),[f,k,S,C,_]);return g.jsx(s.Box,{ref:l,...F,children:g.jsx(x.FieldContext.Provider,{value:G,children:a})})});p.Field=c},53785:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(27279),x=n(72450),h=n(35725),s=n(70321),C=(S=>S&&S.__esModule?S:{default:S})(x).default(h.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,f=I.forwardRef(({label:S,children:R,..._},F)=>g.jsxs(C,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",..._,as:"button",ref:F,children:[g.jsx(s.VisuallyHidden,{as:"span",children:S}),I.cloneElement(R,{"aria-hidden":!0,focusable:!1})]}));p.FieldAction=f},20565:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(27279),I=g.createContext({id:"",required:!1}),x=()=>g.useContext(I);p.FieldContext=I,p.useField=x},28518:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(20565),x=n(11880),h=()=>{const{id:s,error:c}=I.useField();return!c||typeof c!="string"?null:g.jsx(x.Typography,{variant:"pi",as:"p",id:`${s}-error`,textColor:"danger600","data-strapi-field-error":!0,children:c})};p.FieldError=h},63391:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(20565),x=n(11880),h=()=>{const{id:s,hint:c,error:a}=I.useField();return!c||a?null:g.jsx(x.Typography,{variant:"pi",as:"p",id:`${s}-hint`,textColor:"neutral600",children:c})};p.FieldHint=h},20601:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(27279),x=n(72450),h=n(20565),s=n(5529),c=n(44747),a=n(35725),f=(l=>l&&l.__esModule?l:{default:l})(x),S={S:6.5,M:10.5},R=I.forwardRef(({endAction:l,startAction:k,disabled:G=!1,onChange:tt,size:et="M",...K},nt)=>{const{id:J,error:u,hint:b,name:v,required:A}=h.useField();let W;u?W=`${J}-error`:b&&(W=`${J}-hint`);const z=Boolean(u),M=ot=>{!G&&tt&&tt(ot)};return g.jsxs(F,{justifyContent:"space-between",hasError:z,disabled:G,children:[k?g.jsx(c.Box,{paddingLeft:3,paddingRight:2,children:k}):null,g.jsx(_,{id:J,name:v,ref:nt,"aria-describedby":W,"aria-invalid":z,"aria-disabled":G,disabled:G,"data-disabled":G?"":void 0,hasLeftAction:Boolean(k),hasRightAction:Boolean(l),onChange:M,"aria-required":A,$size:et,...K}),l?g.jsx(c.Box,{paddingLeft:2,paddingRight:3,children:l}):null]})}),_=f.default.input`
  border: none;
  border-radius: ${({theme:l})=>l.borderRadius};
  padding-bottom: ${({$size:l})=>`${S[l]/16}rem`};
  padding-left: ${({theme:l,hasLeftAction:k})=>k?0:l.spaces[4]};
  padding-right: ${({theme:l,hasRightAction:k})=>k?0:l.spaces[4]};
  padding-top: ${({$size:l})=>`${S[l]/16}rem`};
  cursor: ${l=>l["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:l})=>l.colors.neutral800};
  font-weight: 400;
  font-size: ${l=>l.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:l})=>l.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,F=f.default(a.Flex)`
  border: 1px solid ${({theme:l,hasError:k})=>k?l.colors.danger600:l.colors.neutral200};
  border-radius: ${({theme:l})=>l.borderRadius};
  background: ${({theme:l})=>l.colors.neutral0};
  ${s.inputFocusStyle()}

  ${({theme:l,disabled:k})=>k?x.css`
          color: ${l.colors.neutral600};
          background: ${l.colors.neutral150};
        `:void 0}
`;p.FieldInput=R,p.InputWrapper=F},69803:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(74081),I=n(27279),x=n(72450),h=n(20565),s=n(63832),c=n(11880),a=n(35725),f=(k=>k&&k.__esModule?k:{default:k})(x),S=s.once(console.warn),R=I.forwardRef(({children:k,action:G,required:tt,...et},K)=>{const{id:nt,required:J}=h.useField(),u=J||tt;return tt!==void 0&&S('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),g.jsxs(_,{ref:K,variant:"pi",textColor:"neutral800",htmlFor:nt,fontWeight:"bold",as:"label",...et,children:[k,u&&g.jsx(F,{textColor:"danger600",children:"*"}),G&&g.jsx(l,{marginLeft:1,children:G})]})}),_=f.default(c.Typography)`
  display: flex;
  align-items: center;
`,F=f.default(c.Typography)`
  line-height: 0;
`,l=f.default(a.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:k})=>k.colors.neutral500};
  }
`;p.FieldLabel=R},66769:(U,p,n)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const g=n(59817),I=n(69803),x=n(20601),h=n(63391),s=n(28518),c=n(20565),a=n(53785);p.Field=g.Field,p.FieldLabel=I.FieldLabel,p.FieldInput=x.FieldInput,p.InputWrapper=x.InputWrapper,p.FieldHint=h.FieldHint,p.FieldError=s.FieldError,p.FieldContext=c.FieldContext,p.useField=c.useField,p.FieldAction=a.FieldAction},63832:(U,p)=>{"use strict";Object.defineProperty(p,Symbol.toStringTag,{value:"Module"});const n="[@strapi/design-system]:",g=I=>{const x=I;let h=!1;if(typeof x!="function")throw new TypeError(`${n} once requires a function parameter`);return(...s)=>{h||(x(...s),h=!0)}};p.PREFIX=n,p.once=g}}]);
