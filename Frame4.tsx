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

import { styled } from '@mui/material/styles';
import { Frame4Props } from '../../types';

 
const Frame41: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `225px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Frame5: any = styled("div")({  
  backgroundImage: `url(../../utils/assets/images/Frame4_Frame_5.png)`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  width: `119px`,  
  height: `101px`,  
  left: `19px`,  
  top: `12px`,  
  overflow: `hidden`,  
});
  
const Frame6: any = styled("img")({  
  height: `101px`,  
  width: `119px`,  
  objectFit: `cover`,  
  position: `absolute`,  
  left: `19px`,  
  top: `118px`,  
});
 
function Frame4(props: Frame4Props): JSX.Element {
  return (
    <Frame41 className={props.className} >
      <Frame5 >
      </Frame5>
      <Frame6  src={`../../utils/assets/images/Frame4_Frame_6.jpg`} alt={"Frame 6"}/>
    </Frame41>
  );
}

export default Frame4;
