"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[892],{58727:function(R,j,i){i.d(j,{Z:function(){return fe}});var y=i(77117),f=i.n(y),u=i(50959),b=i(43493),G=i(68301),T=i(27803),L=i(18840),d=i.n(L),W=i(18411),A=i(29322),C=i(91305),F=i(68229),D=i(83645),z=i(45228),w=i(67170),I=i(3831),o=i(11527),Y,H,J,X,In=(0,w.kc)(function(e,n){var a=e.css,t=n.x,r=n.y;return{container:a(Y||(Y=d()([`
      position: absolute;
      bottom: `,`px;
      right: `,`px;

      z-index: 100;
      transition: right 0.2s ease;
    `])),r,10+t),visible:a(H||(H=d()([`
      right: 387px;
    `]))),controlAction:a(J||(J=d()([`
      height: 80px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    `]))),measureMap:a(X||(X=d()([`
      border-radius: 4px;
      height: 180px;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
      right: 0;
      bottom: 0;
      position: relative;
    `])))}}),Un=function(n){var a=n.visible,t=a===void 0?!1:a,r=n.className,s=r===void 0?"":r,l=n.position,x=l===void 0?[0,0]:l,p=(0,b._K)(),c=(0,b.Sj)(),g=c.zoom,v=In({x:x[0],y:x[1]}),h=v.styles,N=v.cx,E=function(){p.zoomIn()},Z=function(){p.zoomOut()},k=function(){p.fitView()},B=function(){g===1?p.zoomTo(.5):p.zoomTo(1)};return(0,o.jsxs)("div",{className:N(h.container,t&&h.visible,s),children:[(0,o.jsx)("div",{className:h.controlAction,children:(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(D.ZP,{icon:(0,o.jsx)(W.Z,{}),onClick:Z}),(0,o.jsx)(z.Z,{title:g===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,o.jsxs)(D.ZP,{onClick:B,children:[Math.round(g*100),"%"]})}),(0,o.jsx)(D.ZP,{icon:(0,o.jsx)(A.Z,{}),onClick:E}),(0,o.jsx)(z.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,o.jsx)(D.ZP,{icon:(0,o.jsx)(C.Z,{}),onClick:k})})]})}),(0,o.jsx)(I.a,{className:h.measureMap,pannable:!0,onNodeClick:function(V,O){var K=f()(f()({},O.position),{},{height:O.height,width:O.width});p.fitBounds(K,{padding:.5})}})]})},Mn=Un,$n=i(67855),U=i.n($n),m=function(e){return e.SELECT="SELECT",e.SUB_SELECT="SUB_SELECT",e.DANGER="DANGER",e.SUB_DANGER="SUB_DANGER",e.WARNING="WARNING",e.SUB_WARNING="SUB_WARNING",e.DEFAULT="DEFAULT",e}({}),Zn="nodeSelected",kn="nodeSubSelected",Vn="nodeDanger",Kn="nodeSubDanger",Qn="nodeWarning",Yn="nodeSubWarning",q="edgeSelected",nn="edgeSubSelected",en="edgeDanger",tn="edgeSubDanger",on="edgeWarning",rn="edgeSubWarning",an="initialNode",we="nodeWrap",M=i(70652),sn,ln,dn,cn,pn,un,xn,gn,Hn=(0,w.kc)(function(e){var n=e.css,a=e.cx,t=e.prefixCls;return{nodeWrap:a("".concat(t,"-xx"),n(sn||(sn=d()([`
      width: 320px;
      height: 85px;
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 12px;
      padding: 16px 12px;
      box-sizing: border-box;
      border: 3px solid white;
      flex: 1;
      background-color: white;

      .img {
        width: 48px;
        height: 48px;
      }

      .content {
        width: 230px;
        margin-left: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .title {
          width: 100%;
          display: flex;
          flex: 1;

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 85%);
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }

          .dangerLogo {
            width: 28px;
            height: 16px;
            background: #ffeef1;
            border-radius: 7px;
            margin-left: 8px;
            margin-top: 3px;
            img {
              width: 8px;
              height: 9px;
            }
          }
        }

        .des {
          font-size: 14px;
          color: rgba(0, 0, 0, 45%);
          line-height: 20px;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    `])))),nodeSelected:n(ln||(ln=d()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(dn||(dn=d()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(cn||(cn=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(pn||(pn=d()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(un||(un=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(xn||(xn=d()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(gn||(gn=d()([""])))}}),vn,mn,hn,Jn=function(n,a,t){return t&&a>1?n:n/a},fn=M.ZP.div(vn||(vn=d()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var n=e.zoom;return Jn(24,n,!0)},function(e){var n=e.zoom;return"".concat(2/n,"px ").concat(1/n,"px ").concat(2/n,"px 0")},function(e){var n=e.zoom;return"".concat(14/n,"px")}),bn=M.ZP.div(mn||(mn=d()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),Xn=M.ZP.div(hn||(hn=d()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`])));function Nn(e){switch(e){case m.SELECT:return Zn;case m.SUB_SELECT:return kn;case m.DANGER:return Vn;case m.SUB_DANGER:return Kn;case m.WARNING:return Qn;case m.SUB_WARNING:return Yn;default:return"nodeDefault"}}var qn=function(n){var a=n.title,t=n.logo,r=n.description,s=n.className,l=n.selectType,x=l===void 0?m.SELECT:l,p=n.zoom,c=p===void 0?1:p,g=n.label,v=n.titleSlot,h=Hn(),N=h.styles,E=h.cx;return(0,o.jsxs)(o.Fragment,{children:[g&&(0,o.jsx)(fn,{zoom:c,children:c<=.1?"".concat(String(g).substring(0,3),"..."):g}),(0,o.jsxs)("div",{className:E(N.nodeWrap,N[Nn(x)],s),children:[(0,o.jsx)("img",{className:"img",src:t,alt:""}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("span",{children:a}),!!v&&!!v.value&&v.type==="left"&&(0,o.jsx)(bn,{children:v.value}),!!v&&!!v.value&&v.type==="right"&&(0,o.jsxs)(bn,{children:[(0,o.jsx)("div",{style:{width:"28px"}}),(0,o.jsx)(Xn,{children:v.value})]})]}),(0,o.jsx)("div",{className:"des",children:r})]})]})]})},ne=qn,En,wn,_n,Sn,jn,yn,Dn,An,Cn,On,Pn,Gn,Tn,zn,Bn=(0,w.kc)(function(e){var n=e.css;return{groupWrap:n(En||(En=d()([`
    width: 355px;
    height: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    position: absolute;
    background-color: #f9f9f9;
    z-index: 10;
  `]))),btnWrap:n(wn||(wn=d()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(_n||(_n=d()([`
    width: 110px;
    height: 32px;
    position: absolute;
    z-index: 12;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 32px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 2%);
    font-size: 14px;
    color: rgba(0, 0, 0, 88%);
    line-height: 32px;
    bottom: 16px;
    left: 112px;

    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
      transform: translateY(-1px);
    }
  `]))),groupItemWrap:n(Sn||(Sn=d()([`
    width: 320px;
    height: 83px;
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 12px;
    background-color: white;
    margin-bottom: 24px;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08), 0 4px 6px -2 rgba(25, 15, 15, 0.05);

    &:last-child {
      opacity: 0.5;
    }

    img {
      width: 48px;
      height: 48px;
    }
  `]))),groupItemContent:n(jn||(jn=d()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(yn||(yn=d()([`
    width: 100%;
    font-size: 16px;
    color: rgba(0, 0, 0, 88%);
    line-height: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  `]))),des:n(Dn||(Dn=d()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(An||(An=d()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(Cn||(Cn=d()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(On||(On=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(Pn||(Pn=d()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(Gn||(Gn=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(Tn||(Tn=d()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(zn||(zn=d()([""])))}}),ee=function(n){return n.map(function(a){return a})},te=function(n){var a=Bn(),t=a.styles,r=n.id,s=n.title,l=n.des,x=n.logo;return(0,o.jsxs)("div",{className:t.groupItemWrap,children:[(0,o.jsx)("img",{src:x,alt:""}),(0,o.jsxs)("div",{className:t.groupItemContent,children:[(0,o.jsx)("div",{className:t.groupItemTitle,children:s}),(0,o.jsx)("div",{className:t.des,children:l})]})]},"".concat(r,"-").concat(s))},oe=function(n){var a=n.group,t=n.data,r=n.select,s=r===void 0?m.SELECT:r,l=n.zoom,x=l===void 0?1:l,p=n.label,c=Bn(),g=c.styles;if(!a)return null;if(t.length<7)return(0,o.jsx)("div",{className:g.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var v=ee(t);return(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(fn,{zoom:x,children:x<=.1?"".concat(String(p).substring(0,3),"..."):p}),(0,o.jsxs)("div",{className:(0,w.cx)(g.groupWrap,g[Nn(s)]),children:[v.map(function(h,N){var E=h.data;return h.position={x:0,y:100*N},h.title=E.title,h.logo=E.logo,h.des=E.describe,te(h)}),(0,o.jsx)("div",{className:g.btnWrap}),(0,o.jsxs)("div",{className:g.btn,children:["\u67E5\u770B\u66F4\u591A",(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]})},re=oe,ae=i(79511),Rn=i.n(ae);function ie(e){var n,a,t,r;return(n=e.left)!==null&&n!==void 0&&n.length&&(a=e.right)!==null&&a!==void 0&&a.length?"default":(t=e.left)!==null&&t!==void 0&&t.length?"output":(r=e.right)!==null&&r!==void 0&&r.length?"input":"default"}function se(e,n,a){var t={};return e.forEach(function(r){t[r.id]={id:r.id,group:r.group,data:r.data,select:r.select,right:[],left:[],zoom:a,label:r.label}}),n.forEach(function(r){var s,l,x=r.source,p=r.target;(s=t[x].right)===null||s===void 0||s.push(p),(l=t[p].left)===null||l===void 0||l.push(x)}),t}function le(e,n){var a=new(Rn()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(t){return a.setEdge(t.source,t.target)}),e.forEach(function(t){return a.setNode(t.id,t)}),Rn().layout(a),{_nodes:e.map(function(t){var r=a.node(t.id),s=r.x,l=r.y;return f()(f()({},t),{},{position:{x:s*1.3,y:l*1}})}),_edges:n}}function de(e){var n=e.filter(function(r){var s,l;return((s=r.className)===null||s===void 0?void 0:s.includes("edgeSelected"))||((l=r.className)===null||l===void 0?void 0:l.includes("edgeSubSelected"))}),a=e.filter(function(r){var s,l;return((s=r.className)===null||s===void 0?void 0:s.includes("edgeDanger"))||((l=r.className)===null||l===void 0?void 0:l.includes("edgeSubDanger"))}),t=e.filter(function(r){var s,l,x,p;return!((s=r.className)!==null&&s!==void 0&&s.includes("edgeSelected"))&&!((l=r.className)!==null&&l!==void 0&&l.includes("edgeSubSelected"))&&!((x=r.className)!==null&&x!==void 0&&x.includes("edgeDanger"))&&!((p=r.className)!==null&&p!==void 0&&p.includes("edgeSubDanger"))});return[].concat(U()(t),U()(a),U()(n))}function ce(e){switch(e){case m.SELECT:return q;case m.SUB_SELECT:return nn;case m.DANGER:return en;case m.SUB_DANGER:return tn;case m.WARNING:return on;case m.SUB_WARNING:return rn;default:return"edgeDefault"}}function pe(e){return e.map(function(n){var a=n.source,t=n.target,r=n.select,s=r===void 0?m.DEFAULT:r;return{id:"".concat(a,"-").concat(t),source:a,target:t,type:"smoothstep",className:ce(s)}})}var ue=function(n,a){var t=[],r=pe(a);Object.keys(n).forEach(function(p){var c=n[p],g=c.select,v=g===void 0?m.DEFAULT:g;t.push({sourcePosition:b.Ly.Right,targetPosition:b.Ly.Left,id:c.id,position:{x:0,y:0},type:ie(c),width:320,height:83,className:(0,w.cx)(an),data:{label:c.group?(0,o.jsx)(re,{id:c.id,group:c.group,data:c.data,select:v,zoom:c.zoom,label:c.label}):(0,o.jsx)(ne,{title:c.data.title,description:c.data.describe,logo:c.data.logo,selectType:v,zoom:c.zoom,label:c.label,titleSlot:c.data.titleSlot})}})});var s=le(t,r),l=s._nodes,x=s._edges;return{nodes:l,edges:de(x)}},Ln=i(50508),Wn,xe=(0,w.kc)(function(e){var n=e.css;return{container:n(Wn||(Wn=d()([`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .`,` {
      padding: 0;
      box-sizing: border-box;
      width: 320px;
      height: 83px;
      border: none;
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);
      border-radius: 8px;
      cursor: pointer;
      z-index: 1;
    }

    .`,` path {
      stroke: #1677ff;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #1677ff;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 1;
      z-index: 100;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `])),an,q,nn,en,tn,on,rn)}}),ge=.1,_e=(0,u.createContext)({}),$=function(){},ve=function(n){var a=n.onNodeDragStart,t=a===void 0?$:a,r=n.onPaneClick,s=r===void 0?$:r,l=n.onNodeClick,x=l===void 0?$:l,p=n.nodes,c=n.edges,g=n.miniMap,v=g===void 0?!0:g,h=n.children,N=xe(),E=N.styles,Z=N.cx,k=(0,b.Sj)(),B=k.zoom,_=(0,u.useMemo)(function(){return se(p,c,B)},[p,c,B]),V=(0,u.useMemo)(function(){if(_&&c.length){var S=ue(_,c),P=S.nodes,Q=S.edges;return{nodes:P,edges:Q}}else return{nodes:[],edges:[]}},[_,c]),O=(0,u.useContext)(Ln.b),K=O.miniMapPosition,be=(0,u.useCallback)(function(S,P,Q){t(S,P,Q)},[t]),Ne=(0,u.useCallback)(function(S){s(S)},[s]),Ee=(0,u.useCallback)(function(S,P){x(S,P)},[x]);return(0,o.jsxs)(b.x$,{className:Z(E.container),onNodeDragStart:be,onPaneClick:Ne,onNodeClick:Ee,nodes:V.nodes,edges:V.edges,panOnScroll:!0,fitView:!0,minZoom:ge,children:[v&&(0,o.jsx)(Mn,{position:K,className:"pro-flow-controller"}),(0,o.jsx)(G.A,{id:"1",gap:10,color:"#f1f1f1",variant:G.T.Lines}),h]})},Fn=ve,me=i(38571),he=function(n){var a=(0,u.useContext)(Ln.b),t=a.isUseProvider;return t?(0,o.jsx)(Fn,f()({},n)):(0,o.jsx)(me.G,{children:(0,o.jsx)(Fn,f()({},n))})},fe=he},38571:function(R,j,i){i.d(j,{G:function(){return d}});var y=i(28152),f=i.n(y),u=i(50959),b=i(43493),G=i(50508),T=i(11527),L=function(A){var C=A.children,F=(0,u.useState)([0,0]),D=f()(F,2),z=D[0],w=D[1],I=(0,b._K)();return(0,T.jsx)(G.b.Provider,{value:{isUseProvider:!0,reactFlowInstance:I,miniMapPosition:z,setMiniMapPosition:w},children:C})},d=function(A){var C=A.children;return(0,T.jsx)(b.tV,{children:(0,T.jsx)(L,{children:C})})}},50508:function(R,j,i){i.d(j,{b:function(){return f}});var y=i(50959),f=(0,y.createContext)({})},15855:function(R,j,i){i.d(j,{P:function(){return f},u:function(){return y}});var y=function(u){return u.SELECT="SELECT",u.SUB_SELECT="SUB_SELECT",u.DANGER="DANGER",u.SUB_DANGER="SUB_DANGER",u.WARNING="WARNING",u.SUB_WARNING="SUB_WARNING",u.DEFAULT="DEFAULT",u}({}),f=function(u){return u.default="default",u.radius="radius",u}({})}}]);
