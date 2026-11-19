import{i as e,n as t,o as n}from"./index-Bd9rJVP2.js";import{f as r,n as i}from"./framer-D_PkwIfK.js";var a=t(),o=n(e(),1);function s(e){let{paperType:t=`lined`,lineColor:n=`#d0d0d0`,lineSpacing:r=24,lineWidth:i=1,opacity:s=.3,paperTexture:c=!0,textureStyle:l=`vintage`,textureIntensity:u=30,background:d=`#ffffff`,shadow:f=!1,noise:p=!1,noiseIntensity:m=25}=e,h=`paper-pattern-${t}-${Math.random().toString(36).substr(2,9)}`;`${Math.random().toString(36).substr(2,9)}`;let g=()=>{switch(t){case`lined`:return(0,a.jsx)(`defs`,{children:(0,a.jsx)(`pattern`,{id:h,x:`0`,y:`0`,width:`100%`,height:r,patternUnits:`userSpaceOnUse`,children:(0,a.jsx)(`line`,{x1:`0`,y1:r,x2:`100%`,y2:r,stroke:n,strokeWidth:i,opacity:s})})});case`grid`:return(0,a.jsx)(`defs`,{children:(0,a.jsxs)(`pattern`,{id:h,x:`0`,y:`0`,width:r,height:r,patternUnits:`userSpaceOnUse`,children:[(0,a.jsx)(`line`,{x1:`0`,y1:r,x2:r,y2:r,stroke:n,strokeWidth:i,opacity:s}),(0,a.jsx)(`line`,{x1:r,y1:`0`,x2:r,y2:r,stroke:n,strokeWidth:i,opacity:s})]})});case`dotted`:return(0,a.jsx)(`defs`,{children:(0,a.jsx)(`pattern`,{id:h,x:`0`,y:`0`,width:r,height:r,patternUnits:`userSpaceOnUse`,children:(0,a.jsx)(`circle`,{cx:r/2,cy:r/2,r:i,fill:n,opacity:s})})});case`wavy`:return(0,a.jsx)(`defs`,{children:(0,a.jsx)(`pattern`,{id:h,x:`0`,y:`0`,width:`100`,height:r,patternUnits:`userSpaceOnUse`,children:(0,a.jsx)(`path`,{d:`M 0,${r/2} Q 25,${r/2-8} 50,${r/2} T 100,${r/2}`,fill:`none`,stroke:n,strokeWidth:i,opacity:s})})});default:return null}},_=(0,o.useMemo)(()=>{if(!c)return{};let e=u/100;switch(l){case`vintage`:return{filter:`
                        contrast(${1+e*.4}) 
                        brightness(${1-e*.2}) 
                        saturate(${1-e*.25})
                        sepia(${e*.35})
                        hue-rotate(${e*15}deg)
                    `,backgroundImage:`
                        radial-gradient(ellipse at 20% 30%, rgba(139, 69, 19, ${e*.25}) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 70%, rgba(160, 82, 45, ${e*.22}) 0%, transparent 55%),
                        radial-gradient(ellipse at 40% 80%, rgba(210, 180, 140, ${e*.18}) 0%, transparent 45%),
                        radial-gradient(ellipse at 70% 20%, rgba(222, 184, 135, ${e*.2}) 0%, transparent 50%),
                        radial-gradient(ellipse at 10% 60%, rgba(205, 133, 63, ${e*.15}) 0%, transparent 40%),
                        linear-gradient(45deg, rgba(139, 69, 19, ${e*.08}) 0%, transparent 30%, rgba(160, 82, 45, ${e*.06}) 70%),
                        linear-gradient(-30deg, rgba(222, 184, 135, ${e*.1}) 0%, transparent 40%)
                    `};case`modern`:return{filter:`
                        contrast(${1+e*.15}) 
                        brightness(${1-e*.08})
                        saturate(${1+e*.1})
                    `,backgroundImage:`
                        linear-gradient(45deg, rgba(0, 0, 0, ${e*.04}) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(0, 0, 0, ${e*.04}) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, ${e*.04}) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, ${e*.04}) 75%),
                        radial-gradient(circle at 25% 25%, rgba(100, 100, 100, ${e*.06}) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(120, 120, 120, ${e*.05}) 0%, transparent 45%)
                    `,backgroundSize:`3px 3px, 3px 3px, 3px 3px, 3px 3px, 20px 20px, 25px 25px`,backgroundPosition:`0 0, 0 1.5px, 1.5px -1.5px, -1.5px 0px, 0 0, 10px 10px`};case`rough`:return{filter:`
                        contrast(${1+e*.6}) 
                        brightness(${1-e*.3})
                        blur(${e*.4}px)
                        saturate(${1-e*.2})
                    `,backgroundImage:`
                        radial-gradient(ellipse at 15% 85%, rgba(101, 67, 33, ${e*.3}) 0%, transparent 60%),
                        radial-gradient(ellipse at 85% 15%, rgba(139, 69, 19, ${e*.28}) 0%, transparent 65%),
                        radial-gradient(ellipse at 35% 45%, rgba(160, 82, 45, ${e*.25}) 0%, transparent 55%),
                        radial-gradient(ellipse at 65% 75%, rgba(205, 133, 63, ${e*.22}) 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 20%, rgba(139, 69, 19, ${e*.2}) 0%, transparent 45%),
                        linear-gradient(30deg, rgba(101, 67, 33, ${e*.15}) 0%, transparent 40%, rgba(139, 69, 19, ${e*.12}) 80%),
                        linear-gradient(-60deg, rgba(160, 82, 45, ${e*.18}) 0%, transparent 35%)
                    `};case`smooth`:return{filter:`
                        contrast(${1+e*.08}) 
                        brightness(${1-e*.04})
                        saturate(${1+e*.05})
                    `,backgroundImage:`
                        linear-gradient(0deg, rgba(0, 0, 0, ${e*.02}) 50%, transparent 50%),
                        linear-gradient(90deg, rgba(0, 0, 0, ${e*.02}) 50%, transparent 50%),
                        radial-gradient(circle at 30% 30%, rgba(200, 200, 200, ${e*.04}) 0%, transparent 40%),
                        radial-gradient(circle at 70% 70%, rgba(220, 220, 220, ${e*.03}) 0%, transparent 35%)
                    `,backgroundSize:`1.5px 1.5px, 1.5px 1.5px, 15px 15px, 18px 18px`};default:return{}}},[c,l,u]);return(0,a.jsxs)(`div`,{style:{width:`100%`,height:`100%`,position:`relative`,boxSizing:`border-box`,backgroundColor:d,boxShadow:f?`0 4px 12px rgba(0, 0, 0, 0.15)`:`none`,..._,...e.style},children:[p&&(0,a.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,opacity:m/100,pointerEvents:`none`,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,mixBlendMode:`multiply`}}),c&&(0,a.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,opacity:u/100*.8,backgroundImage:l===`vintage`?`
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.8px,
                                rgba(139, 69, 19, 0.12) 0.8px,
                                rgba(139, 69, 19, 0.12) 1.6px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.8px,
                                rgba(160, 82, 45, 0.1) 0.8px,
                                rgba(160, 82, 45, 0.1) 1.6px
                            ),
                            repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 3px,
                                rgba(222, 184, 135, 0.08) 3px,
                                rgba(222, 184, 135, 0.08) 4px
                            )
                        `:l===`rough`?`
                            repeating-linear-gradient(
                                35deg,
                                transparent,
                                transparent 1.5px,
                                rgba(101, 67, 33, 0.15) 1.5px,
                                rgba(101, 67, 33, 0.15) 2.5px
                            ),
                            repeating-linear-gradient(
                                -55deg,
                                transparent,
                                transparent 2px,
                                rgba(139, 69, 19, 0.12) 2px,
                                rgba(139, 69, 19, 0.12) 3px
                            ),
                            repeating-linear-gradient(
                                80deg,
                                transparent,
                                transparent 4px,
                                rgba(160, 82, 45, 0.1) 4px,
                                rgba(160, 82, 45, 0.1) 5px
                            )
                        `:l===`modern`?`
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.5px,
                                rgba(0, 0, 0, 0.08) 0.5px,
                                rgba(0, 0, 0, 0.08) 1px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.5px,
                                rgba(0, 0, 0, 0.06) 0.5px,
                                rgba(0, 0, 0, 0.06) 1px
                            )
                        `:`
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 0.7px,
                                rgba(0, 0, 0, 0.06) 0.7px,
                                rgba(0, 0, 0, 0.06) 1.4px
                            ),
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 0.7px,
                                rgba(0, 0, 0, 0.04) 0.7px,
                                rgba(0, 0, 0, 0.04) 1.4px
                            )
                        `,pointerEvents:`none`,mixBlendMode:l===`vintage`?`multiply`:`normal`}}),c&&u>40&&(0,a.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,opacity:(u-40)/100*.6,backgroundImage:l===`vintage`?`
                            radial-gradient(circle at 10% 10%, rgba(139, 69, 19, 0.15) 0%, transparent 30%),
                            radial-gradient(circle at 90% 90%, rgba(160, 82, 45, 0.12) 0%, transparent 25%),
                            radial-gradient(circle at 30% 70%, rgba(205, 133, 63, 0.1) 0%, transparent 35%),
                            radial-gradient(circle at 70% 30%, rgba(222, 184, 135, 0.08) 0%, transparent 40%)
                        `:l===`rough`?`
                            radial-gradient(circle at 20% 20%, rgba(101, 67, 33, 0.2) 0%, transparent 40%),
                            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.18) 0%, transparent 35%),
                            radial-gradient(circle at 50% 10%, rgba(160, 82, 45, 0.15) 0%, transparent 30%)
                        `:`
                            radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.03) 0%, transparent 45%)
                        `,pointerEvents:`none`,mixBlendMode:`overlay`}}),(0,a.jsxs)(`svg`,{width:`100%`,height:`100%`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`},children:[g(),t!==`blank`&&(0,a.jsx)(`rect`,{width:`100%`,height:`100%`,fill:`url(#${h})`})]})]})}r(s,{background:{type:i.Color,title:`Background`,defaultValue:`#ffffff`},shadow:{type:i.Boolean,title:`Shadow`,defaultValue:!1,enabledTitle:`On`,disabledTitle:`Off`},noise:{type:i.Boolean,title:`Noise`,defaultValue:!1,enabledTitle:`On`,disabledTitle:`Off`},noiseIntensity:{type:i.Number,title:`Noise Intensity`,defaultValue:25,min:5,max:60,step:5,unit:`%`,hidden:({noise:e})=>!e},paperType:{type:i.Enum,title:`Paper Type`,options:[`lined`,`grid`,`dotted`,`blank`,`wavy`],optionTitles:[`Lined`,`Grid`,`Dotted`,`Blank`,`Wavy`],defaultValue:`lined`,displaySegmentedControl:!0},lineColor:{type:i.Color,title:`Line Color`,defaultValue:`#d0d0d0`,hidden:({paperType:e})=>e===`blank`},lineSpacing:{type:i.Number,title:`Line Spacing`,defaultValue:24,min:8,max:60,step:2,unit:`px`,hidden:({paperType:e})=>e===`blank`},lineWidth:{type:i.Number,title:`Line Width`,defaultValue:1,min:.5,max:4,step:.5,unit:`px`,hidden:({paperType:e})=>e===`blank`},opacity:{type:i.Number,title:`Line Opacity`,defaultValue:.3,min:.1,max:1,step:.1,hidden:({paperType:e})=>e===`blank`},paperTexture:{type:i.Boolean,title:`Paper Texture`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},textureStyle:{type:i.Enum,title:`Texture Style`,options:[`vintage`,`modern`,`rough`,`smooth`],optionTitles:[`Vintage`,`Modern`,`Rough`,`Smooth`],defaultValue:`vintage`,displaySegmentedControl:!0,hidden:({paperTexture:e})=>!e},textureIntensity:{type:i.Number,title:`Texture Intensity`,defaultValue:30,min:10,max:80,step:5,unit:`%`,hidden:({paperTexture:e})=>!e}});var c={exports:{default:{type:`reactComponent`,name:`PaperBackground`,slots:[],annotations:{framerContractVersion:`1`,framerSupportedLayoutWidth:`fixed`,framerSupportedLayoutHeight:`fixed`}},__FramerMetadata__:{type:`variable`}}};export{c as __FramerMetadata__,s as default};