/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import SwitchLightImage from './assets/images/switch_light.png';
import SwitchDarkImage from './assets/images/switch_dark.png';
import { styled } from '@mui/material/styles';

 
const PricingLight: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Left: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  margin: `0px`,  
}));
  
const SwitchLight: any = styled("img")({  
  height: `38px`,  
  width: `58px`,  
  margin: `0px 0px 0px 2px`,  
});
  
const SwitchDark: any = styled("img")({  
  height: `38px`,  
  width: `58px`,  
  margin: `0px 0px 0px 2px`,  
});
  
const Right: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,  
  opacity: `0.30000001192092896`,  
  margin: `0px 0px 0px 2px`,  
}));
 
function DarkModeSwitch(): JSX.Element {
  return (
    <PricingLight >
       <Left >
         {`Light Mode`}
           </Left>
       <SwitchLight  src={SwitchLightImage} alt={"switch_light"}/>
       {false &&
           <SwitchDark  src={SwitchDarkImage} alt={"switch_dark"}/>
       }
       <Right >
         {`Dark Mode`}
           </Right>
     </PricingLight>
   );
}

export default DarkModeSwitch;
