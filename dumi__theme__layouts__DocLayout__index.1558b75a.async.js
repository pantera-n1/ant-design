"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[367],{49313:function(Pn,U,e){e.d(U,{Z:function(){return xn},f:function(){return S}});var ln=e(667294),S=ln.createContext(!1);function xn(){return ln.useContext(S)}},438746:function(Pn,U,e){e.d(U,{Z:function(){return b}});var ln=e(97857),S=e.n(ln),xn=e(952677),x=e.n(xn),L=e(805574),j=e.n(L),wn=e(385956),s=e(667294),J=e(302559);function l(W){return W.replace("-cn","").replace(/\/$/,"")}function b(){var W=(0,wn.useLocation)(),un=W.search,Q=(0,J.default)(),m=j()(Q,2),r=m[1],c=s.useCallback(function(t,w){var v=l(t);if(r==="cn"&&(v="".concat(v,"-cn")),un&&(v="".concat(v).concat(un)),w){var k;x()(w)==="object"?k=w[r]:k=w,v="".concat(v,"#").concat(k)}return v},[r,un]);return S()(S()({},W),{},{pathname:l(W.pathname),getLink:c})}},361446:function(Pn,U,e){var ln=e(805574),S=e.n(ln),xn=e(719632),x=e.n(xn),L=e(9783),j=e.n(L),wn=e(168400),s=e.n(wn),J=e(667294),l=e(844183),b=e(566254),W=e(647759),un=e(693967),Q=e.n(un),m=e(385956),r=e(472638),c=e(438746),t=e(785893),w,v,k;function mn(F){return F&&/^\d+\.\d+\.\d+$/.test(F)}var vn=(0,W.kc)(function(F){var M=F.css,D=F.token;return{link:M(w||(w=s()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:M(v||(v=s()([`
    margin-inline-end: 0;
  `]))),subtitle:M(k||(k=s()([`
    margin-inline-start: `,`px;
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),D.marginXS,D.fontSizeSM)}}),d=function(M){var D=vn(),R=D.styles,N=M.before,Z=M.after,Y=M.link,A=M.title,B=M.subtitle,tn=M.search,on=M.tag,I=M.className;return!N&&!Z?(0,t.jsxs)(r.Z,{to:"".concat(Y).concat(tn),className:Q()(I,j()({},R.link,on)),children:[(0,t.jsxs)("span",{children:[A,B&&(0,t.jsx)("span",{className:R.subtitle,children:B})]}),on&&(0,t.jsx)(l.Z,{bordered:!1,className:Q()(R.tag),color:mn(on)||on==="New"?"success":"processing",children:on.replace("VERSION",b.Z)})]}):(0,t.jsxs)(r.Z,{to:"".concat(Y).concat(tn),className:I,children:[N,A,B&&(0,t.jsx)("span",{className:R.subtitle,children:B}),Z]})},O=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},D=(0,m.useFullSidebarData)(),R=(0,c.Z)(),N=R.pathname,Z=R.search,Y=(0,m.useSidebarData)(),A=M.before,B=M.after,tn=(0,J.useMemo)(function(){var on,I=x()(Y!=null?Y:[]);if(N.startsWith("/docs/spec")){var _=I.splice(0,1);I.push.apply(I,x()(_))}if(N.startsWith("/docs/react")){var Mn,T=(Mn=Object.entries(D).find(function(C){var g=S()(C,1),H=g[0];return H.startsWith("/changelog")}))===null||Mn===void 0?void 0:Mn[1];T&&I.splice(1,0,T[0])}if(N.startsWith("/changelog")){var u,E=(u=Object.entries(D).find(function(C){var g=S()(C,1),H=g[0];return H.startsWith("/docs/react")}))===null||u===void 0?void 0:u[1];E&&(I.unshift(E[0]),I.push.apply(I,x()(E.slice(1))))}return(on=I==null?void 0:I.reduce(function(C,g){if(g!=null&&g.title)if(N.startsWith("/docs/spec")){var H,q,gn=g.children.reduce(function(f,z){var G,V,dn=(G=(V=z.frontmatter)===null||V===void 0?void 0:V.type)!==null&&G!==void 0?G:"default";return f[dn]||(f[dn]=[]),f[dn].push(z),f},{}),pn=[];pn.push.apply(pn,x()((H=(q=gn.default)===null||q===void 0?void 0:q.map(function(f){return{label:(0,t.jsxs)(r.Z,{to:"".concat(f.link).concat(Z),children:[A,f==null?void 0:f.title,B]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&H!==void 0?H:[])),Object.entries(gn).forEach(function(f){var z=S()(f,2),G=z[0],V=z[1];G!=="default"&&pn.push({type:"group",label:G,key:G,children:V==null?void 0:V.map(function(dn){return{label:(0,t.jsxs)(r.Z,{to:"".concat(dn.link).concat(Z),children:[A,dn==null?void 0:dn.title,B]}),key:dn.link.replace(/(-cn$)/g,"")}})})}),C.push({label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:pn})}else{var hn;C.push({type:"group",label:g==null?void 0:g.title,key:g==null?void 0:g.title,children:(hn=g.children)===null||hn===void 0?void 0:hn.map(function(f){var z,G;return{label:(0,t.jsx)(d,{before:A,after:B,link:f.link,title:f==null?void 0:f.title,subtitle:(z=f.frontmatter)===null||z===void 0?void 0:z.subtitle,search:Z,tag:(G=f.frontmatter)===null||G===void 0?void 0:G.tag}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var sn=g.children||[];sn.every(function(f){var z;return f==null||(z=f.frontmatter)===null||z===void 0?void 0:z.date})&&sn.sort(function(f,z){var G,V;return((G=f.frontmatter)===null||G===void 0?void 0:G.date)>((V=z.frontmatter)===null||V===void 0?void 0:V.date)?-1:1}),C.push.apply(C,x()(sn.map(function(f){var z;return{label:(0,t.jsx)(d,{before:A,after:B,link:f.link,title:f==null?void 0:f.title,search:Z,tag:(z=f.frontmatter)===null||z===void 0?void 0:z.tag}),key:f.link.replace(/(-cn$)/g,"")}})))}return C},[]))!==null&&on!==void 0?on:[]},[Y,D,N,Z,M]);return[tn,N]};U.Z=O},148050:function(Pn,U,e){e.r(U);var ln=e(168400),S=e.n(ln),xn=e(667294),x=e(639389),L=e.n(x),j=e(879587),wn=e(647759),s=e(785893),J,l="https://github.com/ant-design/ant-design/edit/master/",b=(0,wn.kc)(function(un){var Q=un.token,m=un.css,r=Q.colorIcon,c=Q.colorText,t=Q.iconCls;return{editButton:m(J||(J=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),Q.marginXS,t,r,Q.fontSizeLG,Q.motionDurationSlow,c)}}),W=function(Q){var m=Q.title,r=Q.filename,c=b(),t=c.styles;return(0,s.jsx)(j.Z,{title:m,children:(0,s.jsx)("a",{className:t.editButton,href:"".concat(l).concat(r),target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(x.EditOutlined,{})})})};U.default=W},787729:function(Pn,U,e){e.r(U),e.d(U,{default:function(){return lo}});var ln=e(805574),S=e.n(ln),xn=e(693967),x=e.n(xn),L=e(727484),j=e.n(L),wn=e(533852),s=e(667294),J=e(75529),l=e(715778),b=e(385956),W=e(302559),un=e(438746),Q=e(168400),m=e.n(Q),r=e(370917),c=e(647759),t=e(785893),w,v={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},k=function(){var n=(0,c.Fg)(),a=function h(y){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(y,"-").concat(p,` {
  background: `).concat(n["".concat(y,"-").concat(p)],`;
}
`).concat(h(y,p+1),`
    `):""},i=function h(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return y<=13?`
.palette-gray-`.concat(y,` {
  background: `).concat(v[y],`;
}
`).concat(h(y+1),`
    `):""};return(0,t.jsx)(r.xB,{styles:(0,r.iv)(w||(w=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-inline-end: 0;
              }

              .main-color-item {
                margin-inline-end: 0;

                &:hover {
                  margin-inline-end: -`,`px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 `,`px;
            font-size: `,`px;
            text-align: center;
          }

          &-picker {
            margin: `,`px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              font-size: `,`px;
              font-family: Consolas, sans-serif;
              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-inline-start: `,`px;
              color: `,`;
              font-size: `,`px;

              .ant-row-rtl & {
                margin-inline-end: `,`px;
                margin-inline-start: 0;
              }

              &-dark {
                margin-inline-start: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-inline-end: `,`px;
            padding: 0 `,`px;
            font-size: `,`px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all `,`;

            &:first-child {
              border-radius: `,"px ",`px 0 0;
            }

            &:last-child {
              border-radius: 0 0 `,"px ",`px;
            }

            &:hover {
              margin-inline-end: -`,`px;
              border-radius: 0 `,"px ",`px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all `,`;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all `,`;
          }
        }

        .color-title {
          margin: 0 0 `,`px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: `,`px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: `,"px ",`px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-inline-end: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: `,"px ",`px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: `,`px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.paddingXS,n.marginMD,n.fontSizeXL,n.marginLG,n.margin,n.fontSize,n.margin,n.margin,n.colorError,n.fontSize,n.margin,a("blue"),a("purple"),a("cyan"),a("green"),a("magenta"),a("red"),a("volcano"),a("orange"),a("gold"),a("yellow"),a("lime"),a("geekblue"),i(),n.marginXXS,n.paddingSM,n.fontSize,n.motionDurationMid,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.borderRadiusSM,n.marginXS,n.borderRadiusSM,n.borderRadiusSM,n.motionDurationSlow,n.motionDurationSlow,n.marginLG,n.fontSize,n.paddingXL,n.paddingXL-4,n.borderRadiusSM,n.borderRadiusSM,n.paddingXS)})},mn=k,vn,d=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(vn||(vn=m()([`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          > a[aria-hidden]:first-child {
            float: left;
            width: 20px;
            padding-inline-end: `,`px;
            font-size: 0;
            line-height: inherit;
            text-align: right;
            padding-inline-end: `,`px;
            margin-inline-start: -`,`px;

            [data-direction='rtl'] & {
              float: right;
            }

            &:hover {
              border: 0;
            }

            > .icon-link::before {
              font-size: `,`px;
              content: '#';
            }
          }

          &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
            visibility: hidden;
          }
        }
      `])),o.paddingXXS,o.paddingXXS,o.marginLG,o.fontSizeXL)})},O,F=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(O||(O=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),o.colorText,o.fontSize,o.fontFamily,o.lineHeight,o.colorBgContainer)})},M,D=function(){var o=(0,c.Fg)(),n=o.anchorTop;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(M||(M=m()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),n)})},R=e(510274),N,Z=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.colorPrimary;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(N||(N=m()([`
        .markdown {
          color: `,`;
          font-size: `,`px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: `,`px;
          margin-bottom: `,`px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-inline-start: `,`px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: `,`px;
        }

        .markdown h5 {
          font-size: `,`px;
        }

        .markdown h6 {
          font-size: `,`px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: `,`px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: circle;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-inline-start: `,`px;
          padding-inline-start: `,`px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background-color: `,`;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: `,"px ",`px;
            font-size: `,`px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 `,`px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-inline-end: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-inline-start: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-inline-end: 0.8em;
            padding-inline-start: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-inline-start: `,`px;
          opacity: 0;
          transition: opacity `,`;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-inline-start: `,`px;
          text-decoration: none;

          .rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: `,`px;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: `,"px ",`px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all `,`;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: `,`;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: `,`px;
            margin-bottom: `,`px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: `,`px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.fontSize,n.marginXS,n.marginMD,n.colorTextHeading,n.fontFamily,n.marginSM,n.colorTextHeading,n.fontFamily,n.fontSizeLG,n.fontSize,n.fontSizeSM,n.marginLG,n.colorSplit,a,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,n.marginMD,n.paddingXXS,a,n.marginMD,n.paddingXXS,n.siteMarkdownCodeBg,n.colorSplit,n.borderRadiusSM,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.colorBgLayout,n.siteMarkdownCodeBg,n.borderRadius,n.paddingSM,n.paddingMD,n.fontSize,n.marginMD,n.colorTextSecondary,n.colorSplit,n.colorSplit,n.marginXS,n.motionDurationSlow,n.marginXS,n.marginXS,n.marginXS,a,n.colorTextSecondary,n.fontSizeLG,n.motionDurationSlow,n.colorText,n.colorSplit,n.paddingSM,n.paddingLG,n.colorSplit,n.colorSplit,n.colorSplit,n.motionDurationSlow,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.fontWeightStrong,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),a,a,n.marginXS,n.marginXS,a,n.padding,i,new R.C(i).setAlpha(.75).toHex8String(),a,a,n.colorWhite,a,new R.C(i).setAlpha(.75).toHexString(),a,a,new R.C(i).setAlpha(.75).toHexString(),a,a,a,a,new R.C(i).setAlpha(.6).toHexString(),a,a,a)})},Y=Z,A,B=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(A||(A=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: `,"px ",`px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: `,`;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: `,`;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: `,`px 0;
          padding: `,"px ",`px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: `,`;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),o.padding,o.paddingXL,o.colorText,o.fontSize,o.borderRadius,o.colorText,o.lineHeightLG,o.margin,o.paddingSM,o.paddingMD,o.colorBgLayout)})},tn,on=function(){var n=(0,c.Fg)(),a=n.antCls,i=n.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(tn||(tn=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 `,`px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all `,`;

          &.code-box-simplify {
            border-radius: 0;
            margin-bottom: 0;

            .code-box-demo {
              padding: 0;
              border-bottom: 0;
            }
          }

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: `,`px;
            cursor: pointer;
            opacity: 0.75;
            transition: all `,`;
            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: `,`px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: `,`px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: `,`px;

            `,` {
              color: `,`;
              transition: all `,`;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: `,`px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: `,`px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity `,`;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: `,`px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: `,"px ",`px;
              font-size: `,`px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
          display: flex;
          align-items: center;
          column-gap: `,`px;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.lineWidth*2,n.margin,n.colorBgContainer,n.colorSplit,n.borderRadiusLG,n.motionDurationMid,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadiusLG,n.borderRadiusLG,n.colorPrimary,n.fontSizeXL,n.motionDurationSlow,n.colorBgContainer,n.borderRadius,n.borderRadius,n.margin,n.colorText,n.fontSize,n.fontSizeSM,n.paddingXXS,i,n.colorTextSecondary,n.motionDurationSlow,n.colorText,a,a,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.fontSizeSM,n.colorSplit,a,a,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.paddingSM,n.colorSplit,n.motionDurationSlow,n.colorTextSecondary,n.colorText,i,n.fontSize,n.colorBgContainer,i,n.green6,n.colorBgContainer,n.paddingSM,n.padding,n.fontSize,n.purple3,n.purple6,n.marginSM,a)})},I=on,_,Mn=function(){var o=(0,c.Fg)(),n=o.antCls,a=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(_||(_=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: `,`px;
            cursor: pointer;
            transition:
              color `,` ease-in-out,
              background-color `,` ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: `,"px 0 ",`px;
              font-size: 36px;
              transition: transform `,` ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color `,` ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all `,` cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: `,`px;
          background: `,`;
          border-radius: `,`px;
        }
      `])),o.borderRadiusSM,o.motionDurationSlow,o.motionDurationSlow,a,o.marginSM,o.marginXS,o.motionDurationSlow,n,o.motionDurationSlow,o.colorPrimary,a,n,o.motionDurationSlow,o.fontSizeSM,o.colorBgLayout,o.borderRadiusXS)})},T,u=function(){var o=(0,c.Fg)(),n=o.iconCls;return(0,t.jsx)(r.xB,{styles:(0,r.iv)(T||(T=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 `,`px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all `,`;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: `,`px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: `,`px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: `,`px;
                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),o.marginXS,o.colorIcon,o.motionDurationSlow,o.colorIconHover,o.paddingXS,o.colorBorder,o.borderRadiusSM,o.colorTextSecondary,n,o.fontSizeHeading2,o.colorLinkHover)})},E,C=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(E||(E=m()([`
        /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

        .browser-mockup {
          position: relative;
          border-top: 2em solid rgba(230, 230, 230, 0.7);
          border-radius: `,"px ",`px 0 0;
          box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
        }

        .browser-mockup::before {
          position: absolute;
          top: -1.25em;
          left: 1em;
          display: block;
          width: 0.5em;
          height: 0.5em;
          background-color: #f44;
          border-radius: 50%;
          box-shadow:
            0 0 0 2px #f44,
            1.5em 0 0 2px #9b3,
            3em 0 0 2px #fb5;
          content: '';
        }

        .browser-mockup.with-tab::after {
          position: absolute;
          top: -2em;
          left: 5.5em;
          display: block;
          width: 20%;
          height: 0;
          border-right: 0.8em solid transparent;
          border-bottom: 2em solid white;
          border-left: 0.8em solid transparent;
          content: '';
        }

        .browser-mockup.with-url::after {
          position: absolute;
          top: -1.6em;
          left: 5.5em;
          display: block;
          width: calc(100% - 6em);
          height: 1.2em;
          background-color: #fff;
          border-radius: `,`px;
          content: '';
        }
        .browser-mockup > * {
          display: block;
        }
      `])),o.borderRadiusSM,o.borderRadiusSM,o.borderRadiusXS)})},g,H=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(g||(g=m()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-inline-end: 0;
            margin-inline-start: 0;
            padding-inline-end: `,`px;
            padding-inline-start: `,`px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-inline-start: `,`px;
            .ant-row-rtl & {
              margin-inline-end: `,`px;
              margin-inline-start: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: `,`px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: `,`px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: `,`px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 `,`px;
                  font-size: `,`px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: `,`px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: `,`px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;
              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 `,`px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: `,`px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: `,`px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: `,`px;
                    font-size: `,`px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: `,`px;
                    font-size: `,`px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background-image: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');
            background-repeat: no-repeat;
            background-size: cover;
            .ant-row {
              margin: 0 `,`px;
            }

            .page3-block {
              margin-bottom: `,`px;
              padding: `,`px;
              background: `,`;
              border-radius: `,`px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: `,`px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-inline-start: `,`px;
              }
            }
          }
        }
      `])),o.screenLG,o.padding,o.padding,o.margin,o.margin,o.marginMD,o.marginXL,o.fontSize,o.paddingMD,o.fontSize,o.marginXL,o.fontSize,o.colorBgContainer,o.padding,o.colorSplit,o.marginXL,o.marginXXS,o.marginXS,o.fontSizeSM,o.margin,o.fontSizeSM,o.colorLink,o.marginXS,o.marginXL,o.paddingLG,o.colorBgContainer,o.borderRadiusSM,o.fontSizeSM,o.padding)})},q,gn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(q||(q=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary,o.colorPrimary)})},pn,hn=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(pn||(pn=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-inline-start: `,`px;

          .ant-row-rtl & {
            margin-inline-end: `,`px;
            margin-inline-start: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: `,`px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: `,`px;
          color: `,`;
          font-size: `,`px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: `,`px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: `,`px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all `,`;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow:
            0 1px 0 0 #ddd,
            0 3px 0 0 `,`,
            0 4px 0 0 #ddd,
            0 6px 0 0 `,`,
            0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: `,"px 0 ",`px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-inline-end: 12.5%;
            margin-bottom: `,`px;
            padding: `,`px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: `,`px;

            &:last-child {
              margin-inline-end: 0;
            }

            h4 {
              margin: `,"px 0 ",`px;
            }

            p {
              font-size: `,`px;
              line-height: 24px;
            }
          }
        }
      `])),o.marginLG,o.marginLG,o.padding,o.colorPrimary,o.colorError,o.marginMD,o.colorText,o.fontSizeSM,o.colorTextSecondary,o.fontSizeSM,o.paddingSM,o.colorBgContainer,o.borderRadius,o.motionDurationSlow,o.colorBgContainer,o.colorBgContainer,o.marginXXL,o.marginLG,o.marginLG,o.paddingLG,o.borderRadiusSM,o.margin,o.marginXS,o.fontSizeSM)})},sn,f="dumi-default-",z=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(sn||(sn=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),f,o.colorText,o.colorBgContainer,o.colorBgContainer,o.colorTextPlaceholder,f,o.colorBgElevated,o.colorBgElevated,f,o.controlItemBgActive,o.controlItemBgHover,o.colorText,o.colorText)})},G,V=function(){var o=(0,c.Fg)();return(0,t.jsx)(r.xB,{styles:(0,r.iv)(G||(G=m()([`
        .design-inline-cards {
          display: flex;
          margin: 0 -`,`px;
        }
        .design-inline-cards > * {
          flex: 10%;
          margin: 0 `,`px;
        }
        .design-inline-cards img {
          width: 100%;
          max-width: 100%;
        }
        .design-inline-cards h4 {
          margin-bottom: 0;
        }
      `])),o.marginMD,o.marginMD)})},dn=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{}),(0,t.jsx)(D,{}),(0,t.jsx)(Y,{}),(0,t.jsx)(B,{}),(0,t.jsx)(I,{}),(0,t.jsx)(Mn,{}),(0,t.jsx)(u,{}),(0,t.jsx)(C,{}),(0,t.jsx)(H,{}),(0,t.jsx)(gn,{}),(0,t.jsx)(hn,{}),(0,t.jsx)(V,{}),(0,t.jsx)(mn,{}),(0,t.jsx)(d,{}),(0,t.jsx)(z,{})]})},Bn=dn,On=e(97857),X=e.n(On),rn=e(9783),Dn=e.n(rn),Tn=e(639389),Zn=e.n(Tn),Nn=e(469181),Vn=e(344682),Xn=e(11739),$n=e(709894),In=e(883458),le=e(722449),se="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Yn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",_n=function(n){var a=n.direction;return(0,t.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,t.jsx)("path",{d:a==="ltr"?se:Yn})})},de=function(n){return(0,t.jsx)(Zn(),X()(X()({},n),{},{component:function(){return(0,t.jsx)(_n,{direction:n.direction})}}))},pe=de,et=e(840070),Ln=e(373638),oe=e(438199),ge,he,tt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.headerHeight,h=n.colorTextHeading,y=n.fontFamily,p=n.mobileMaxWidth;return{logo:a(ge||(ge=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: `,`px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,h,y,i,h,n.marginSM,p),title:a(he||(he=m()([`
      line-height: 32px;
    `])))}}),ot=function(n){var a=n.isZhCN,i=(0,b.useLocation)(),h=i.search,y=tt(),p=y.styles;return(0,t.jsx)("h1",{children:(0,t.jsxs)(b.Link,{to:Ln.J1("/",a,h),className:p.logo,children:[(0,t.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,t.jsx)("span",{className:p.title,children:"Ant Design"})]})})},rt=ot,at=e(719632),it=e.n(at),fe=e(24768),qn=e(472638),xe,lt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},st=(0,c.kc)(function(o){var n=o.token,a=n.antCls,i=n.iconCls,h=n.fontFamily,y=n.fontSize,p=n.headerHeight,$=n.menuItemBorder,P=n.colorPrimary,nn=n.colorText;return{nav:(0,c.iv)(xe||(xe=m()([`
      height: 100%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-inline-end: `,`px;
          padding-inline-start: `,`px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: '';
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),y,h,a,a,a,40+12*2,p,n.paddingSM,n.paddingSM,p,$,nn,a,i,a,P,a,a)}}),dt=function(n){var a,i,h=n.isZhCN,y=n.isMobile,p=n.responsive,$=n.directionText,P=n.onLangChange,nn=n.onDirectionChange,cn=(0,b.useLocation)(),En=cn.pathname,an=cn.search,fn=(0,W.default)(lt),Cn=S()(fn,1),jn=Cn[0],K=(0,b.useFullSidebarData)(),bn=((a=K["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],en=st(),kn=en.styles,zn=y?"inline":"horizontal",Gn=En.split("/").filter(Boolean).slice(0,-1).join("/"),yn=Gn||"home";En.startsWith("/changelog")?yn="docs/react":En.startsWith("/docs/resources")&&(yn="docs/resources");var Fn,Rn=[{label:(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,t.jsx)(b.FormattedMessage,{id:"app.header.lang"}),onClick:P,key:"switch-lang"},{label:$,onClick:nn,key:"switch-direction"}];y?Fn=Rn:p==="crowded"&&(Fn=[{label:(0,t.jsx)(Tn.MenuOutlined,{}),key:"additional",children:[].concat(Rn)}]);var Hn=[{label:(0,t.jsx)(qn.Z,{to:Ln.J1("/docs/spec/introduce",h,an),children:jn.design}),key:"docs/spec"},{label:(0,t.jsx)(qn.Z,{to:Ln.J1("/docs/react/introduce",h,an),children:jn.development}),key:"docs/react"},{label:(0,t.jsx)(qn.Z,{to:Ln.J1("/components/overview/",h,an),children:jn.components}),key:"components"},bn.length?{label:(0,t.jsx)(qn.Z,{to:Ln.J1(bn.sort(function(Wn,Kn){var ne,Qn;return((ne=Wn.frontmatter)===null||ne===void 0?void 0:ne.date)>((Qn=Kn.frontmatter)===null||Qn===void 0?void 0:Qn.date)?-1:1})[0].link,h,an),children:jn.blog}),key:"docs/blog"}:null,{label:(0,t.jsx)(qn.Z,{to:Ln.J1("/docs/resources",h,an),children:jn.resources}),key:"docs/resources"},h?{label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,t.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,t.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,t.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,t.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(it()((i=Fn)!==null&&i!==void 0?i:[]));return(0,t.jsx)(fe.Z,{mode:zn,selectedKeys:[yn],className:kn.nav,disabledOverflow:!0,items:Hn})},ct=dt,ut=e(879587),ve,be,ye,Se,we,Jn="1.2em",mt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.colorText,h=n.colorBorder,y=n.colorBgContainer,p=n.colorBgTextHover,$=n.borderRadius,P=n.controlHeight,nn=n.motionDurationMid;return{btn:a(ve||(ve=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,h,P,P,$,nn,nn,p,Jn,Jn,Jn),innerDiv:a(be||(be=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Jn,Jn),labelStyle:a(ye||(ye=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Jn,i,i),label1Style:a(Se||(Se=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,y),label2Style:a(we||(we=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(n){var a=n.label1,i=n.label2,h=n.tooltip1,y=n.tooltip2,p=n.value,$=n.pure,P=n.onClick,nn=mt(),cn=nn.styles,En=cn.btn,an=cn.innerDiv,fn=cn.labelStyle,Cn=cn.label1Style,jn=cn.label2Style,K=(0,t.jsx)("button",{onClick:P,className:En,"aria-label":n["aria-label"],children:(0,t.jsxs)("div",{className:"btn-inner",children:[$&&(p===1?a:i),!$&&(0,t.jsxs)("div",{className:an,children:[(0,t.jsx)("span",{className:x()(fn,p===1?Cn:jn),children:a}),(0,t.jsx)("span",{className:x()(fn,p===1?jn:Cn),children:i})]})]})},"lang-button");return h||y?(0,t.jsx)(ut.Z,{title:p===1?h:y,children:K}):K},ce=pt,je,Ce,Me,Ee,ke,Te,De=1120,Le=1200,gt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},ht=(0,c.kc)(function(o){var n=o.token,a=o.css,i="#ced4d9";return{header:a(je||(je=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,i,i,i,n.borderRadiusSM),menuRow:a(Ce||(Ce=m()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      > * {
        flex: none;
        margin: 0;
        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `])),n.paddingSM),dataDirectionIcon:a(Me||(Me=m()([`
      width: 16px;
    `]))),popoverMenu:Dn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Ee||(Ee=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(ke||(ke=m()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(Te||(Te=m()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `])))}}),ft=function(){var n=(0,W.default)(gt),a=S()(n,2),i=a[0],h=a[1],y=(0,b.useSiteData)(),p=y.pkg,$=(0,Ln.Is)(),P=(0,s.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),nn=S()(P,2),cn=nn[0],En=nn[1],an=(0,s.useContext)(oe.Z),fn=an.direction,Cn=an.isMobile,jn=an.bannerVisible,K=an.updateSiteConfig,bn=(0,s.useRef)(null),en=(0,b.useLocation)(),kn=en.pathname,zn=en.search,Gn=ht(),yn=Gn.styles,Fn=(0,s.useCallback)(function(){En(function(Sn){return X()(X()({},Sn),{},{menuVisible:!1})})},[]),Rn=(0,s.useCallback)(function(){En(function(Sn){return X()(X()({},Sn),{},{windowWidth:window.innerWidth})})},[]),Hn=(0,s.useCallback)(function(Sn){En(function(An){return X()(X()({},An),{},{menuVisible:Sn})})},[]),Wn=function(){K({direction:fn!=="rtl"?"rtl":"ltr"})},Kn=function(){K({bannerVisible:!1}),Ln.Fy()&&localStorage.setItem(et.ANT_DESIGN_NOT_SHOW_BANNER,j()().toISOString())};(0,s.useEffect)(function(){Fn()},[en]),(0,s.useEffect)(function(){return Rn(),window.addEventListener("resize",Rn),function(){window.removeEventListener("resize",Rn),bn.current&&clearTimeout(bn.current)}},[]);var ne=(0,s.useCallback)(function(Sn){var An=window.location.href,ie=window.location.pathname;if(/overview/.test(ie)&&/0?[1-39][0-3]?x/.test(Sn)){window.location.href=An.replace(window.location.origin,Sn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(Sn)?"":"/react","/introduce")).replace(/\/$/,"");return}var te=new URL(An.replace(window.location.origin,Sn));te.host.includes("antgroup")?(te.pathname="".concat(te.pathname.replace(/\/$/,""),"/"),window.location.href=te.toString()):window.location.href=te.href.replace(/\/$/,"")},[]),Qn=(0,s.useCallback)(function(){var Sn="".concat(window.location.protocol,"//"),An=window.location.href.slice(Sn.length);Ln.Fy()&&localStorage.setItem("locale",Ln.KE(kn)?"en-US":"zh-CN"),window.location.href=Sn+An.replace(window.location.pathname,Ln.J1(kn,!Ln.KE(kn),zn).pathname)},[en]),so=(0,s.useMemo)(function(){return fn!=="rtl"?"RTL":"LTR"},[fn]),co=(0,s.useMemo)(function(){return fn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[fn]),uo=cn.menuVisible,ae=cn.windowWidth,Ve=cn.searching,Je=X()(Dn()({},p.version,p.version),$==null?void 0:$.docVersions),mo=Object.keys(Je).map(function(Sn){return{value:Je[Sn],label:Sn}}),Qe=["","index","index-cn"].includes(kn),Ye=h==="cn",po=fn==="rtl",me=null;ae<De?me="crowded":ae<Le&&(me="narrow");var go=x()(yn.header,"clearfix",{"home-header":Qe}),_e={isZhCN:Ye,isRTL:po},qe=(0,t.jsx)(ct,X()(X()({},_e),{},{responsive:me,isMobile:Cn,directionText:so,onLangChange:Qn,onDirectionChange:Wn}),"nav"),ee=[qe,(0,t.jsx)(Nn.Z,{size:"small",className:yn.versionSelect,defaultValue:p.version,onChange:ne,dropdownStyle:co,popupMatchSelectWidth:!1,getPopupContainer:function(An){return An.parentNode},options:mo},"version"),(0,t.jsx)(ce,{onClick:Qn,value:Ln.KE(kn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,t.jsx)(ce,{onClick:Wn,value:fn==="rtl"?2:1,label1:(0,t.jsx)(pe,{className:yn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,t.jsx)(pe,{className:yn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,t.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(ce,{value:1,label1:(0,t.jsx)(Tn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ae<De?ee=Ve?[]:[qe]:ae<Le&&(ee=Ve?[]:ee);var nt=Qe?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,t.jsxs)("header",{className:go,children:[Cn&&(0,t.jsx)(Vn.Z,{overlayClassName:yn.popoverMenu,placement:"bottomRight",content:ee,trigger:"click",open:uo,arrow:{pointAtCenter:!0},onOpenChange:Hn,children:(0,t.jsx)(Tn.MenuOutlined,{className:"nav-phone-icon"})}),Ye&&jn&&(0,t.jsx)(J.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,t.jsx)(Xn.Z,{className:yn.banner,message:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:Cn?i.shortMessage:i.message}),(0,t.jsx)("a",{className:yn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var An,ie;(An=(ie=window).gtag)===null||An===void 0||An.call(ie,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Kn})}),(0,t.jsxs)($n.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,t.jsx)(In.Z,X()(X()({},nt[0]),{},{children:(0,t.jsx)(rt,X()(X()({},_e),{},{location:en}))})),(0,t.jsxs)(In.Z,X()(X()({},nt[1]),{},{className:yn.menuRow,children:[(0,t.jsx)("div",{className:"nav-search-wrapper",children:(0,t.jsx)(le.ZP,{})}),!Cn&&ee]}))]})]})},xt=ft,ho=e(945462),Be=e(777502),vt=function(n){var a=n.children,i=n.title,h=n.desc;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:i}),(0,t.jsx)("meta",{property:"og:title",content:i}),h&&(0,t.jsx)("meta",{name:"description",content:h})]}),(0,t.jsx)("div",{style:{minHeight:"100vh"},children:a}),(0,t.jsx)(Be.default,{})]})},bt=vt,yt=e(86198),ze=e(700781),Ae=e(49313),St=function(){var n=(0,b.useRouteMeta)(),a=s.useMemo(function(){var p;if(!n.frontmatter.subtitle&&!n.frontmatter.title)p="404 Not Found - Ant Design";else{var $;p="".concat(n.frontmatter.subtitle||""," ").concat((($=n.frontmatter)===null||$===void 0?void 0:$.title)||""," - Ant Design")}var P=n.frontmatter.description||"";return[p,P]},[n]),i=S()(a,2),h=i[0],y=i[1];return(0,t.jsxs)(b.Helmet,{children:[(0,t.jsx)("title",{children:h}),(0,t.jsx)("meta",{property:"og:title",content:h}),y&&(0,t.jsx)("meta",{name:"description",content:y})]})},Pe=St,wt=e(148050),jt=e(468990),Ct=e(823493),Mt=e.n(Ct),Et=e(658192),Oe,Fe,Re,Ne=["scroll","resize"],kt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.boxShadowSecondary,h=n.antCls;return{affixTabs:a(Oe||(Oe=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity `,`,
        transform `,`;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,n.motionDurationSlow,n.motionDurationSlow,h,h,h),affixTabsFixed:a(Fe||(Fe=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Re||(Re=m()([`
      text-transform: capitalize;
    `])))}}),Ie=32,Tt=function(){var n=s.useRef(null),a=s.useRef([]),i=s.useState(!1),h=S()(i,2),y=h[0],p=h[1],$=s.useState(void 0),P=S()($,2),nn=P[0],cn=P[1],En=kt(),an=En.styles,fn=an.affixTabs,Cn=an.affixTabsFixed,jn=an.span;function K(en){var kn=document.getElementById(en);if(kn){var zn=kn.offsetTop-n.current.offsetHeight-Ie;(0,Et.Z)(zn)}}s.useEffect(function(){var en=document.querySelectorAll("h2[id]");a.current=Array.from(en).map(function(kn){var zn=kn.id;return zn}),p(!0)},[]),s.useEffect(function(){var en=decodeURIComponent((location.hash||"").slice(1));en&&K(en)},[y]);var bn=s.useMemo(function(){function en(){for(var kn=window,zn=kn.scrollY,Gn=n.current.offsetHeight,yn=a.current.length-1;yn>=0;yn-=1){var Fn=a.current[yn],Rn=document.getElementById(Fn),Hn=Rn.offsetTop-Gn-Ie;if(Hn<=zn){cn(Fn);return}}cn(void 0)}return Mt()(en)},[]);return s.useEffect(function(){return Ne.forEach(function(en){return window.addEventListener(en,bn)}),bn(),function(){Ne.forEach(function(en){return window.removeEventListener(en,bn)})}},[]),(0,t.jsx)("div",{className:x()(fn,nn&&Cn),ref:n,children:(0,t.jsx)(jt.Z,{activeKey:nn,centered:!0,size:"large",onChange:K,items:a.current.map(function(en){return{key:en,label:(0,t.jsx)("span",{className:jn,children:en.replace(/-/g," ")})}})})})},Dt=Tt,He,We,Ze,Xe=40,re=1208,ue=24,Lt=function(){var n=(0,Ae.Z)();return(0,c.kc)(function(a){var i=a.token,h=a.css,y=i.antCls;return{resourcePage:h(He||(He=m()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),re),resourceContent:h(We||(We=m()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }
            `,`-col {
              padding-top: `,`px !important;
              padding-bottom: `,`px !important;
            }
          }
        }
      `])),Xe,re,ue,y,i.padding,i.padding),banner:h(Ze||(Ze=m()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: `,`px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Xe,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",re,re,i.fontSizeLG,ue,ue)}})()},Bt=function(n){var a,i=n.children,h=Lt(),y=h.styles,p=(0,b.useRouteMeta)(),$=(0,Ae.Z)(),P=(0,t.jsxs)(yt.Z,{children:[(0,t.jsx)(Pe,{}),(0,t.jsxs)("div",{id:"resources-page",className:y.resourcePage,children:[(0,t.jsx)(Dt,{}),(0,t.jsxs)("div",{className:y.banner,children:[(0,t.jsxs)(ze.Z.Title,{style:{fontSize:30},children:[(a=p.frontmatter)===null||a===void 0?void 0:a.title,(0,t.jsx)(wt.default,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,t.jsx)("section",{children:p.frontmatter.description})]}),(0,t.jsx)("div",{className:y.resourceContent,children:i}),(0,t.jsx)(Be.default,{})]})]});return $?P:(0,t.jsx)(J.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:P})},zt=Bt,At=e(106750),Pt=e(217187),Ot=e(340908),Ft=e(524229),Rt=e(548657),Nt=e(442708),It=function(n){var a=n.children,i=n.fallback,h=i===void 0?(0,t.jsx)(Rt.Z.Input,{active:!0,size:"small"}):i,y=n.delay,p=y===void 0?200:y;return(0,t.jsx)(Nt.df,{triggerOnce:!0,delay:p,children:function(P){var nn=P.inView,cn=P.ref;return(0,t.jsx)("div",{ref:cn,children:(0,t.jsx)(s.Suspense,{fallback:h,children:nn?a:(0,t.jsx)("span",{})})})}})},Un=It,$e,Ht=s.lazy(function(){return Promise.all([e.e(3156),e.e(7721)]).then(e.bind(e,617721))}),Wt=s.lazy(function(){return e.e(9148).then(e.bind(e,349148))}),Zt=s.lazy(function(){return e.e(8301).then(e.bind(e,368301))}),Xt=s.lazy(function(){return e.e(8598).then(e.bind(e,458598))}),$t=s.lazy(function(){return Promise.resolve().then(e.bind(e,777502))}),Ut=s.lazy(function(){return e.e(6720).then(e.bind(e,366720))}),Gt=s.lazy(function(){return Promise.all([e.e(1249),e.e(9285),e.e(5557)]).then(e.bind(e,135557))}),Kt=s.lazy(function(){return Promise.resolve().then(e.bind(e,148050))}),Vt=(0,c.kc)(function(o){var n=o.token,a=o.css;return{articleWrapper:a($e||($e=m()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 `,`px;
      }
    }
  `])),n.screenLG,n.paddingLG*2)}}),Jt=function(n){var a,i,h,y=n.children,p=(0,b.useRouteMeta)(),$=(0,un.Z)(),P=$.pathname,nn=$.hash,cn=(0,s.useContext)(oe.Z),En=cn.direction,an=Vt(),fn=an.styles,Cn=(0,Pt.Z)(!1),jn=S()(Cn,2),K=jn[0],bn=jn[1],en=(0,s.useState)("tsx"),kn=S()(en,2),zn=kn[0],Gn=kn[1],yn=(0,s.useMemo)(function(){var Wn;return((Wn=p.toc)===null||Wn===void 0?void 0:Wn.filter(function(Kn){return Kn._debug_demo}).map(function(Kn){return Kn.id}))||[]},[p]),Fn=yn.includes(nn.slice(1));(0,s.useLayoutEffect)(function(){bn(Fn)},[]);var Rn=(0,s.useMemo)(function(){return{showDebug:K,setShowDebug:bn,codeType:zn,setCodeType:Gn}},[K,zn,yn]),Hn=En==="rtl";return(0,t.jsx)(Ft.Z.Provider,{value:Rn,children:(0,t.jsxs)(In.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Zt,{showDebug:K,debugDemos:yn})}),(0,t.jsxs)("article",{className:x()(fn.articleWrapper,{rtl:Hn}),children:[(a=p.frontmatter)!==null&&a!==void 0&&a.title?(0,t.jsxs)(ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,t.jsxs)(At.Z,{gap:"small",children:[(0,t.jsx)("div",{children:(i=p.frontmatter)===null||i===void 0?void 0:i.title}),(0,t.jsx)("div",{children:(h=p.frontmatter)===null||h===void 0?void 0:h.subtitle}),!P.startsWith("/components/overview")&&(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Kt,{title:(0,t.jsx)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})})]}),P.startsWith("/components/")&&(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Gt,{pathname:P})})]}):null,(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Xt,{})}),!p.frontmatter.__autoDescription&&p.frontmatter.description,p.frontmatter.category==="Components"&&String(p.frontmatter.showImport)!=="false"&&(0,t.jsx)(Ot.Z,{source:!0,component:p.frontmatter.title,filename:p.frontmatter.filename,version:p.frontmatter.tag}),(0,t.jsx)("div",{style:{minHeight:"calc(100vh - 64px)",width:"calc(100% - 10px)"},children:y}),(0,t.jsx)(Un,{children:(0,t.jsx)(Wt,{zhihuLink:p.frontmatter.zhihu_url,yuqueLink:p.frontmatter.yuque_url,juejinLink:p.frontmatter.juejin_url})}),(0,t.jsx)(Un,{fallback:(0,t.jsx)("div",{style:{height:50,marginTop:120}}),children:(0,t.jsx)(Ht,{filename:p.frontmatter.filename})})]}),(0,t.jsx)(Un,{fallback:null,children:(0,t.jsx)(Ut,{rtl:Hn})}),(0,t.jsx)($t,{})]})})},Qt=Jt,Yt=e(650010),_t=e(361446),Ue,Ge,qt=(0,c.kc)(function(o){var n=o.token,a=o.css,i=n.antCls,h=n.fontFamily,y=n.colorSplit;return{asideContainer:a(Ue||(Ue=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: `,`px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: `,`px;
          margin-bottom: `,`px;
          font-size: `,`px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-inline-start: 40px !important;

          `,`-row-rtl & {
            padding-inline-end: 40px !important;
            padding-inline-start: `,`px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-inline-start: `,`px;
            padding-inline-start: 60px;

            `,`-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: `,`px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-inline-start: 80px !important;

            `,`-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: `,`px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `])),h,i,i,i,i,n.fontSize,i,i,n.margin,n.margin,n.fontSize,y,i,i,i,i,i,i,i,i,i,i,i,i,i,n.padding,i,i,n.marginXXS,i,n.padding,i,i,i,n.padding,i,i),mainMenu:a(Ge||(Ge=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
        scrollbar-width: thin;
        scrollbar-color: unset;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),no=function(){var n=(0,b.useSidebarData)(),a=(0,s.useContext)(oe.Z),i=a.isMobile,h=a.theme,y=qt(),p=y.styles,$=(0,_t.Z)(),P=S()($,2),nn=P[0],cn=P[1],En=h.includes("dark"),an=(0,c.Fg)(),fn=an.colorBgContainer,Cn=(0,t.jsx)(J.ZP,{theme:{components:{Menu:{itemBg:fn,darkItemBg:fn}}},children:(0,t.jsx)(fe.Z,{items:nn,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:En?"dark":"light",selectedKeys:[cn],defaultOpenKeys:n==null?void 0:n.map(function(jn){var K=jn.title;return K}).filter(Boolean)})});return i?(0,t.jsx)(Yt.Z,{children:Cn},"Mobile-menu"):(0,t.jsx)(In.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,t.jsx)("section",{className:"main-menu-inner",children:Cn})})},eo=no,Ke,to=(0,c.kc)(function(o){var n=o.css,a=o.token;return{main:n(Ke||(Ke=m()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),oo=function(n){var a=n.children,i=to(),h=i.styles;return(0,t.jsxs)("main",{className:h.main,children:[(0,t.jsx)(Pe,{}),(0,t.jsx)(eo,{}),(0,t.jsx)(Qt,{children:a})]})},ro=oo,ao={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},io=function(){var n=(0,b.useOutlet)(),a=(0,un.Z)(),i=a.pathname,h=a.search,y=a.hash,p=(0,W.default)(ao),$=S()(p,2),P=$[0],nn=$[1],cn=(0,s.useRef)(null),En=(0,s.useContext)(oe.Z),an=En.direction,fn=(0,b.useSiteData)(),Cn=fn.loading;(0,s.useLayoutEffect)(function(){nn==="cn"?j().locale("zh-cn"):j().locale("en")},[]),(0,s.useEffect)(function(){var K=document.getElementById("nprogress-style");K&&(cn.current=setTimeout(function(){var bn;(bn=K.parentNode)===null||bn===void 0||bn.removeChild(K)},0))},[]),(0,s.useEffect)(function(){var K=y.replace("#","");if(K){var bn;(bn=document.getElementById(decodeURIComponent(K)))===null||bn===void 0||bn.scrollIntoView()}},[Cn,y]),(0,s.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+h)},[a]);var jn=s.useMemo(function(){return["","/"].some(function(K){return K===i})||["/index"].some(function(K){return i.startsWith(K)})?(0,t.jsx)(bt,{title:P.title,desc:P.description,children:n}):i.startsWith("/docs/resource")?(0,t.jsx)(zt,{children:n}):i.startsWith("/theme-editor")?n:(0,t.jsx)(ro,{children:n})},[i,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.Helmet,{encodeSpecialCharacters:!1,children:[(0,t.jsx)("html",{lang:nn==="cn"?"zh-CN":nn,"data-direction":an,className:x()({rtl:an==="rtl"})}),(0,t.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,t.jsx)("meta",{property:"og:description",content:P.description}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,t.jsxs)(J.ZP,{direction:an,locale:nn==="cn"?l.default:void 0,children:[(0,t.jsx)(Bn,{}),(0,t.jsx)(xt,{}),jn]})]})},lo=io},840070:function(Pn,U,e){e.r(U),e.d(U,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return D},default:function(){return Z}});var ln=e(97857),S=e.n(ln),xn=e(805574),x=e.n(xn),L=e(667294),j=e(900210),wn=e(368655),s=e(359020),J=e(965516),l=e(471232),b=e(385956),W=e(49313),un=e(217187),Q=e(438746),m=e(513769),r=e.n(m),c=e(75529),t=e(647759),w=e(438199),v=e(785893),k=["children","theme"],mn=64,vn=38,d=function(A){var B=A.children,tn=A.theme,on=r()(A,k),I=(0,L.useContext)(c.ZP.ConfigContext),_=I.getPrefixCls,Mn=I.iconPrefixCls,T=_(),u=J.Z.useToken(),E=u.token,C=(0,L.useContext)(w.Z),g=C.bannerVisible;return L.useEffect(function(){c.ZP.config({theme:tn})},[tn]),(0,v.jsx)(t.f6,S()(S()({},on),{},{theme:tn,customToken:{headerHeight:mn,bannerHeight:vn,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:E.colorFillTertiary,antCls:".".concat(T),iconCls:".".concat(Mn),marginFarXS:E.marginXXL/6*7,marginFarSM:E.marginXXL/3*5,marginFar:E.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:mn+E.margin+(g?vn:0)},children:B}))},O=d,F=L.lazy(function(){return Promise.all([e.e(7898),e.e(4137),e.e(263)]).then(e.bind(e,531434))}),M=768,D="ANT_DESIGN_NOT_SHOW_BANNER",R=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return A.map(function(B){return B==="dark"?J.Z.darkAlgorithm:B==="compact"?J.Z.compactAlgorithm:null}).filter(Boolean)},N=function(){var A=(0,b.useOutlet)(),B=(0,Q.Z)(),tn=B.pathname,on=(0,b.useSearchParams)(),I=x()(on,2),_=I[0],Mn=I[1],T=(0,un.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),u=x()(T,2),E=u[0],C=E.theme,g=C===void 0?[]:C,H=E.direction,q=E.isMobile,gn=E.bannerVisible,pn=gn===void 0?!1:gn,hn=u[1],sn=(0,L.useCallback)(function(rn){hn(function(Zn){return S()(S()({},Zn),rn)});var Dn=_.toString(),Tn=_;Object.entries(rn).forEach(function(Zn){var Nn=x()(Zn,2),Vn=Nn[0],Xn=Nn[1];if(Vn==="direction"&&(Xn==="rtl"?Tn.set("direction","rtl"):Tn.delete("direction")),Vn==="theme"){var $n;Tn=(0,b.createSearchParams)(S()(S()({},Tn),{},{theme:Xn.filter(function(In){return In!=="light"})})),($n=document.querySelector("html"))===null||$n===void 0||$n.setAttribute("data-prefers-color",Xn.includes("dark")?"dark":"light")}}),Tn.toString()!==Dn&&Mn(Tn)},[_,Mn]),f=function(){sn({isMobile:window.innerWidth<M})};(0,L.useEffect)(function(){var rn=_.getAll("theme"),Dn=_.get("direction");return hn({theme:rn,direction:Dn==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",rn.includes("dark")?"dark":"light"),f(),window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}},[]);var z=L.useMemo(function(){return{direction:H,updateSiteConfig:sn,theme:g,isMobile:q,bannerVisible:pn}},[q,H,sn,g,pn]),G=L.useMemo(function(){return{algorithm:R(g),token:{motion:!g.includes("motion-off")},cssVar:!0,hashed:!1}},[g]),V=L.useState(function(){return(0,j.createCache)()}),dn=x()(V,1),Bn=dn[0];(0,b.useServerInsertedHTML)(function(){var rn=(0,j.extractStyle)(Bn,{plain:!0,types:"style"});return(0,v.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:rn}})}),(0,b.useServerInsertedHTML)(function(){var rn=(0,j.extractStyle)(Bn,{plain:!0,types:["cssVar","token"]});return(0,v.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:rn}})}),(0,b.useServerInsertedHTML)(function(){return(0,v.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,s.$Z)()}})});var On=tn.startsWith("/~demos"),X=A;return On||(X=(0,v.jsxs)(l.Z,{children:[A,(0,v.jsx)(L.Suspense,{children:(0,v.jsx)(F,{value:g,onChange:function(Dn){return sn({theme:Dn})}})})]})),(0,v.jsx)(W.f.Provider,{value:g.includes("dark"),children:(0,v.jsx)(j.StyleProvider,{cache:Bn,linters:[j.legacyNotSelectorLinter,j.parentSelectorLinter,j.NaNLinter],children:(0,v.jsx)(w.Z.Provider,{value:z,children:(0,v.jsx)(O,{theme:G,children:(0,v.jsx)(wn.HappyProvider,{disabled:!g.includes("happy-work"),children:X})})})})})},Z=N},777502:function(Pn,U,e){e.r(U),e.d(U,{default:function(){return F}});var ln=e(805574),S=e.n(ln),xn=e(168400),x=e.n(xn),L=e(667294),j=e(639389),wn=e(510274),s=e(647759),J=e(630770),l=e(385956),b=e(391298),W=e(302559),un=e(438746),Q=e(438199),m=e(693399),r=e(785893),c="ant-where-checker",t={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function w(){var M=(0,W.default)(t),D=S()(M,1),R=D[0],N=L.useState(!0),Z=S()(N,2),Y=Z[0],A=Z[1];return L.useEffect(function(){var B=document.createElement("p");B.className=c,B.style.position="fixed",B.style.pointerEvents="none",B.style.visibility="hidden",B.style.width="0",document.body.appendChild(B),(0,m.updateCSS)(`
:where(.`.concat(c,`) {
  content: "__CHECK__";
}
    `),c);var tn=getComputedStyle(B),on=tn.content;A(String(on).includes("CHECK")),document.body.removeChild(B),(0,m.removeCSS)(c)},[]),Y?null:(0,r.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[R.whereNotSupport," ",(0,r.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:R.whereDocUrl,children:R.whereDocTitle})]})})}var v=w,k,mn,vn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},d=function(){var D=(0,L.useContext)(Q.Z),R=D.isMobile;return(0,s.kc)(function(N){var Z=N.token,Y=N.css,A=new wn.C((0,J.Z)("#f0f3fa","#fff")).onBackground(Z.colorBgContainer).toHexString();return{holder:Y(k||(k=x()([`
        background: `,`;
      `])),A),footer:Y(mn||(mn=x()([`
        background: `,`;
        color: `,`;
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: `,`;
        }

        .rc-footer-column {
          margin-bottom: `,`px;
          :last-child {
            margin-bottom: `,`px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: `,`px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: `,`px;
          }
        }
      `])),A,Z.colorTextSecondary,Z.colorText,R?60:0,R?20:0,Z.marginXXL,Z.fontSize)}})()},O=function(){var D=(0,un.Z)(),R=(0,W.default)(vn),N=S()(R,2),Z=N[0],Y=N[1],A=d(),B=A.styles,tn=D.getLink,on=L.useMemo(function(){var I=Y==="cn",_={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:I?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:I?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:I?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},Mn={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,r.jsx)(j.AntDesignOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,r.jsx)(j.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,r.jsx)(j.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(j.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,r.jsx)(j.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};I&&Mn.items.push({icon:(0,r.jsx)(j.UsergroupAddOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:tn("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var T={title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,r.jsx)(j.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,r.jsx)(j.HistoryOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:tn("/changelog"),LinkComponent:l.Link},{icon:(0,r.jsx)(j.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:tn("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,r.jsx)(j.BugOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,r.jsx)(j.IssuesCloseOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,r.jsx)(j.MessageOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,r.jsx)(j.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,r.jsx)(j.QuestionCircleOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},u={icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,r.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,r.jsx)(j.BgColorsOutlined,{}),title:(0,r.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:tn("/theme-editor"),LinkComponent:l.Link}]};return[_,Mn,T,u]},[Y,D.search]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{columns:on,className:B.footer,bottom:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,r.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,r.jsx)("div",{children:Z.owner})]})}),(0,r.jsx)(v,{})]})},F=O},373638:function(Pn,U,e){e.d(U,{J1:function(){return l},Is:function(){return m},Fy:function(){return W},KE:function(){return J},qE:function(){return b}});var ln=e(661227),S=e(805574),xn=e(97857),x=e(385564),L=e(842348),j=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),wn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":j?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function s(r,c,t,w){var v=r.map(function(d){return d.meta}).filter(function(d){return!d.skip}),k=[],mn=function(O,F){return(O.order||0)-(F.order||0)};v.sort(mn).forEach(function(d){if(d.category&&(d.category=d.category[c]||d.category),d.type&&(d.type=d.type[c]||d.type),d!=null&&d.title&&(d.title=d.title[c]||d.title),!d.category){k.push(d);return}if(d.category==="Components"&&d.type){var O=k.find(function(D){return(D==null?void 0:D.title)===d.type});O||(O={type:"type",title:d.type,children:[],order:w[d.type]},k.push(O)),O.children=O.children||[],O.children.push(d);return}var F=k.find(function(D){return(D==null?void 0:D.title)===d.category});if(F||(F={type:"category",title:d.category,children:[],order:t[d.category]},k.push(F)),F.children=F.children||[],d.type){var M=F.children.filter(function(D){return(D==null?void 0:D.title)===d.type})[0];M||(M={type:"type",title:d.type,children:[],order:w[d.type]},F.children.push(M)),M.children=M.children||[],M.children.push(d)}else F.children.push(d)});function vn(d){return d.sort(mn).map(function(O){return O.children?_objectSpread(_objectSpread({},O),{},{children:vn(O.children)}):O})}return vn(k)}function J(r){return/-cn\/?$/.test(r)}function l(r,c,t,w){var v=r.startsWith("/")?r:"/".concat(r),k;if(c?v==="/"?k="/index-cn":v.endsWith("/")?k=v.replace(/\/$/,"-cn/"):(k="".concat(v,"-cn"),k=k.replace(/(-cn)+/,"-cn")):k=/\/?index-cn/.test(v)?"/":v.replace("-cn",""),w){var mn=w[c?"zhCN":"enUS"];k+="#".concat(mn)}return{pathname:k,search:t}}function b(r){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",t=new Image,w,v=function(mn){w||(w=!0,t.src="",r(mn))};return t.onload=function(){return v("responded")},t.onerror=function(){return v("error")},t.src=c,setTimeout(function(){return v("timeout")},1500)}function W(){var r="test",c=window.localStorage;try{return c.setItem(r,"1"),c.removeItem(r),!0}catch(t){return!1}}function un(r){return new Promise(function(c,t){var w=document.createElement("script");w.type="text/javascript",w.src=r,w.onload=c,w.onerror=t,document.head.appendChild(w)})}function Q(r){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(r))return"";var t=flattenDeep(r.filter(function(w){if(Array.isArray(w)){var v=_slicedToArray(w,1),k=v[0];return k==="p"}return!1}).map(function(w){var v=flatten(w),k=_toArray(v),mn=k[0],vn=k.slice(1),d=vn.filter(function(O){return typeof O=="string"&&!c.includes(O)}).join("");return[mn,d]})).find(function(w){return w&&typeof w=="string"&&!c.includes(w)});return t}var m=function(){return wn}},647727:function(Pn,U,e){e.d(U,{Z:function(){return ln.Z}});var ln=e(843534)},471232:function(Pn,U,e){e.d(U,{Z:function(){return mn}});var ln=e(97857),S=e.n(ln),xn=e(805574),x=e.n(xn),L=e(667294),j=e(693967),wn=e.n(j),s=e(73287),J=e(215570),l=e(269924),b=e(890887),W=e(414466),un=e(9783),Q=e.n(un),m=e(286665),r=function(d){var O=d.componentCls,F=d.colorText,M=d.fontSize,D=d.lineHeight,R=d.fontFamily;return Q()({},O,{color:F,fontSize:M,lineHeight:D,fontFamily:R})},c=function(){return{}},t=(0,m.I$)("App",r,c),w=e(785893),v=function(){return L.useContext(W.Z)},k=function(d){var O=d.prefixCls,F=d.children,M=d.className,D=d.rootClassName,R=d.message,N=d.notification,Z=d.style,Y=d.component,A=Y===void 0?"div":Y,B=(0,L.useContext)(s.E_),tn=B.getPrefixCls,on=tn("app",O),I=t(on),_=x()(I,3),Mn=_[0],T=_[1],u=_[2],E=wn()(T,on,M,D,u),C=(0,L.useContext)(W.J),g=L.useMemo(function(){return{message:S()(S()({},C.message),R),notification:S()(S()({},C.notification),N)}},[R,N,C.message,C.notification]),H=(0,J.Z)(g.message),q=x()(H,2),gn=q[0],pn=q[1],hn=(0,b.Z)(g.notification),sn=x()(hn,2),f=sn[0],z=sn[1],G=(0,l.Z)(),V=x()(G,2),dn=V[0],Bn=V[1],On=L.useMemo(function(){return{message:gn,notification:f,modal:dn}},[gn,f,dn]),X=A===!1?L.Fragment:A,rn={className:E,style:Z};return Mn((0,w.jsx)(W.Z.Provider,{value:On,children:(0,w.jsx)(W.J.Provider,{value:g,children:(0,w.jsxs)(X,S()(S()({},A===!1?void 0:rn),{},{children:[Bn,pn,z,F]}))})}))};k.useApp=v;var mn=k},86198:function(Pn,U,e){e.d(U,{Z:function(){return Mn}});var ln=e(719632),S=e.n(ln),xn=e(9783),x=e.n(xn),L=e(805574),j=e.n(L),wn=e(513769),s=e.n(wn),J=e(97857),l=e.n(J),b=e(667294),W=e(693967),un=e.n(W),Q=e(518475),m=e(73287),r=e(121790),c=e(45598),t=e(296708);function w(T,u,E){if(typeof E=="boolean")return E;if(T.length)return!0;var C=(0,c.default)(u);return C.some(function(g){return g.type===t.Z})}var v=e(900210),k=e(286665),mn=function(u){var E=u.componentCls,C=u.bodyBg,g=u.lightSiderBg,H=u.lightTriggerBg,q=u.lightTriggerColor;return x()({},"".concat(E,"-sider-light"),x()(x()({background:g},"".concat(E,"-sider-trigger"),{color:q,background:H}),"".concat(E,"-sider-zero-width-trigger"),{color:q,background:H,border:"1px solid ".concat(C),borderInlineStart:0}))},vn=mn,d=function(u){var E=u.antCls,C=u.componentCls,g=u.colorText,H=u.triggerColor,q=u.footerBg,gn=u.triggerBg,pn=u.headerHeight,hn=u.headerPadding,sn=u.headerColor,f=u.footerPadding,z=u.triggerHeight,G=u.zeroTriggerHeight,V=u.zeroTriggerWidth,dn=u.motionDurationMid,Bn=u.motionDurationSlow,On=u.fontSize,X=u.borderRadius,rn=u.bodyBg,Dn=u.headerBg,Tn=u.siderBg;return x()(x()(x()(x()({},C,l()(l()(x()(x()(x()({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:rn,"&, *":{boxSizing:"border-box"}},"&".concat(C,"-has-sider"),x()({flexDirection:"row"},"> ".concat(C,", > ").concat(C,"-content"),{width:0})),"".concat(C,"-header, &").concat(C,"-footer"),{flex:"0 0 auto"}),"".concat(C,"-sider"),{position:"relative",minWidth:0,background:Tn,transition:"all ".concat(dn,", background 0s"),"&-children":x()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(E,"-menu").concat(E,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:z},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:z,color:H,lineHeight:(0,v.unit)(z),textAlign:"center",background:gn,cursor:"pointer",transition:"all ".concat(dn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:pn,insetInlineEnd:u.calc(V).mul(-1).equal(),zIndex:1,width:V,height:G,color:H,fontSize:u.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Tn,borderStartStartRadius:0,borderStartEndRadius:X,borderEndEndRadius:X,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Bn," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Bn),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:u.calc(V).mul(-1).equal(),borderStartStartRadius:X,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:X}}}}),vn(u)),{},{"&-rtl":{direction:"rtl"}})),"".concat(C,"-header"),x()({height:pn,padding:hn,color:sn,lineHeight:(0,v.unit)(pn),background:Dn},"".concat(E,"-menu"),{lineHeight:"inherit"})),"".concat(C,"-footer"),{padding:f,color:g,fontSize:On,background:q}),"".concat(C,"-content"),{flex:"auto",color:g,minHeight:0})},O=function(u){var E=u.colorBgLayout,C=u.controlHeight,g=u.controlHeightLG,H=u.colorText,q=u.controlHeightSM,gn=u.marginXXS,pn=u.colorTextLightSolid,hn=u.colorBgContainer,sn=g*1.25;return{colorBgHeader:"#001529",colorBgBody:E,colorBgTrigger:"#002140",bodyBg:E,headerBg:"#001529",headerHeight:C*2,headerPadding:"0 ".concat(sn,"px"),headerColor:H,footerPadding:"".concat(q,"px ").concat(sn,"px"),footerBg:E,siderBg:"#001529",triggerHeight:g+gn*2,triggerBg:"#002140",triggerColor:pn,zeroTriggerWidth:g,zeroTriggerHeight:g,lightSiderBg:hn,lightTriggerBg:hn,lightTriggerColor:H}},F=(0,k.I$)("Layout",function(T){return[d(T)]},O,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),M=e(785893),D=["prefixCls","suffixCls","className","tagName"],R=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function N(T){var u=T.suffixCls,E=T.tagName,C=T.displayName;return function(g){var H=b.forwardRef(function(q,gn){return(0,M.jsx)(g,l()({ref:gn,suffixCls:u,tagName:E},q))});return H}}var Z=b.forwardRef(function(T,u){var E=T.prefixCls,C=T.suffixCls,g=T.className,H=T.tagName,q=s()(T,D),gn=b.useContext(m.E_),pn=gn.getPrefixCls,hn=pn("layout",E),sn=F(hn),f=j()(sn,3),z=f[0],G=f[1],V=f[2],dn=C?"".concat(hn,"-").concat(C):hn;return z((0,M.jsx)(H,l()({className:un()(E||dn,g,G,V),ref:u},q)))}),Y=b.forwardRef(function(T,u){var E=b.useContext(m.E_),C=E.direction,g=b.useState([]),H=j()(g,2),q=H[0],gn=H[1],pn=T.prefixCls,hn=T.className,sn=T.rootClassName,f=T.children,z=T.hasSider,G=T.tagName,V=T.style,dn=s()(T,R),Bn=(0,Q.default)(dn,["suffixCls"]),On=b.useContext(m.E_),X=On.getPrefixCls,rn=On.layout,Dn=X("layout",pn),Tn=w(q,f,z),Zn=F(Dn),Nn=j()(Zn,3),Vn=Nn[0],Xn=Nn[1],$n=Nn[2],In=un()(Dn,x()(x()({},"".concat(Dn,"-has-sider"),Tn),"".concat(Dn,"-rtl"),C==="rtl"),rn==null?void 0:rn.className,hn,sn,Xn,$n),le=b.useMemo(function(){return{siderHook:{addSider:function(Yn){gn(function(_n){return[].concat(S()(_n),[Yn])})},removeSider:function(Yn){gn(function(_n){return _n.filter(function(de){return de!==Yn})})}}}},[]);return Vn((0,M.jsx)(r.V.Provider,{value:le,children:(0,M.jsx)(G,l()(l()({ref:u,className:In,style:l()(l()({},rn==null?void 0:rn.style),V)},Bn),{},{children:f}))}))}),A=N({tagName:"div",displayName:"Layout"})(Y),B=N({suffixCls:"header",tagName:"header",displayName:"Header"})(Z),tn=N({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(Z),on=N({suffixCls:"content",tagName:"main",displayName:"Content"})(Z),I=A,_=I;_.Header=B,_.Footer=tn,_.Content=on,_.Sider=t.Z,_._InternalSiderContext=t.D;var Mn=_},715778:function(Pn,U,e){e.r(U),e.d(U,{default:function(){return W}});var ln=e(174219),S=e(97857),xn=e.n(S),x=e(585369),L={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},j=L,wn={lang:xn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},x.Z),timePickerLocale:xn()({},j)};wn.lang.ok="\u786E\u5B9A";var s=wn,J=s,l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",b={locale:"zh-cn",Pagination:ln.Z,DatePicker:s,TimePicker:j,Calendar:J,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",emptyText:"\u6682\u65E0\u6570\u636E",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",deselectAll:"\u53D6\u6D88\u5168\u9009",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00",collapse:"\u6536\u8D77"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},W=b}}]);
