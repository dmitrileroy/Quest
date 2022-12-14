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

import { Alert, Button, SvgIcon, Link, Autocomplete, TextField, Checkbox, FormControlLabel, Avatar, Switch } from '@mui/material';
import Avatar1Image from './assets/images/Avatar_8.png';
import Avatar2Image from './assets/images/Avatar_7.png';
import Avatar3Image from './assets/images/Avatar_6.png';
import Avatar4Image from './assets/images/Avatar_5.png';
import Avatar5Image from './assets/images/Avatar_4.png';
import Avatar6Image from './assets/images/Avatar_3.png';
import Avatar7Image from './assets/images/Avatar_2.png';
import Avatar8Image from './assets/images/Avatar_1.png';
import Avatar9Image from './assets/images/Avatar.png';
import { ReactComponent as ChevronRightFilled1 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronRightFilled2 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronRightFilled3 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronRightFilled4 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ArrowForwardFilled1 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled2 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled3 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled4 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled5 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled6 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled7 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ChevronRightFilled5 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ChevronRightFilled6 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ArrowForwardFilled8 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled9 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled10 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled11 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled12 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ChevronRightFilled7 } from './assets/images/ChevronRightFilled.svg';
import { ReactComponent as ArrowForwardFilled13 } from './assets/images/ArrowForwardFilled.svg';
import { ReactComponent as ArrowForwardFilled14 } from './assets/images/ArrowForwardFilled.svg';
import { styled } from '@mui/material/styles';
import AlertOutlined from './AlertOutlined';
import AlertStandard from './AlertStandard';
import Table from './Table';

 
const Mui59Test1 = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `200px`,  
  boxSizing: `border-box`,  
});
  
const Frame7 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const AlertFilled = styled(Alert)({  
  width: `320px`,  
  margin: `0px`,  
});
  
const AlertOutlined1 = styled(AlertOutlined)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertStandard1 = styled(AlertStandard)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertFilled1 = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const AlertOutlined2 = styled(AlertOutlined)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertStandard2 = styled(AlertStandard)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertFilled2 = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const AlertOutlined3 = styled(AlertOutlined)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertStandard3 = styled(AlertStandard)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertFilled3 = styled(Alert)({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
});
  
const AlertOutlined4 = styled(AlertOutlined)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const AlertStandard4 = styled(AlertStandard)(({ theme }) =>({  
  width: `320px`,  
  margin: `20px 0px 0px 0px`,  
}));
  
const Frame2 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const ButtonContained = styled(Button)({  
  margin: `0px`,  
});
  
const ButtonContained1 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained2 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained3 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText1 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText2 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined1 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined2 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined3 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained4 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained5 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText3 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText4 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText5 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined4 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined5 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonContained6 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonText6 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const ButtonOutlined6 = styled(Button)({  
  margin: `10px 0px 0px 0px`,  
});
  
const Frame4 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Link1 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `0px`,  
}));
  
const Link2 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link3 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link4 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link5 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link6 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Link7 = styled(Link)(({ theme }) =>({  
  color: theme.palette["Primary"]["Main"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Frame3 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Autocomplete1 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `0px`,  
});
  
const Autocomplete2 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete3 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete4 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete5 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Autocomplete6 = styled(Autocomplete)({  
  width: `220px`,  
  margin: `10px 0px 0px 0px`,  
});
  
const Frame9 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Checkbox1 = styled(Checkbox)({  
  margin: `0px`,  
});
  
const Checkbox2 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox3 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox4 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox5 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox6 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox7 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox8 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox9 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox10 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox11 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox12 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox13 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox14 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox15 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox16 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox17 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox18 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox19 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox20 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox21 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox22 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Checkbox23 = styled(Checkbox)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Frame8 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Avatar1 = styled(Avatar)({  
  margin: `0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar2 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar3 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Avatar4 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar5 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar6 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Avatar7 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar8 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar9 = styled(Avatar)({  
  margin: `30px 0px 0px 0px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Frame10 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 30px`,  
});
  
const Switch1 = styled(Switch)({  
  margin: `0px`,  
});
  
const Switch2 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch3 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch4 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch5 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch6 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch7 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch8 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch9 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch10 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch11 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch12 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch13 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch14 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch15 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch16 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch17 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch18 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Switch19 = styled(Switch)({  
  margin: `30px 0px 0px 0px`,  
});
  
const Table1 = styled(Table)(({ theme }) =>({  
  width: `600px`,  
  margin: `0px 0px 0px 30px`,  
}));
 
function Mui59Test() {
  return (
    <Mui59Test1 >
       <Frame7 >
         <AlertFilled variant="filled" severity={"error"}   > Description </AlertFilled>
           <AlertOutlined1   />
         <AlertStandard1   />
         <AlertFilled1 variant="filled" severity={"warning"}   > Description </AlertFilled1>
           <AlertOutlined2   />
         <AlertStandard2   />
         <AlertFilled2 variant="filled" severity={"info"}   > Description </AlertFilled2>
           <AlertOutlined3   />
         <AlertStandard3   />
         <AlertFilled3 variant="filled" severity={"success"}   > Description </AlertFilled3>
           <AlertOutlined4   />
         <AlertStandard4   />
       </Frame7>
       <Frame2 >
         <ButtonContained variant="contained" size="large" color="primary"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled1 } />}  > Large </ButtonContained>
         <ButtonContained1 variant="contained" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled2 } />}  > Large </ButtonContained1>
         <ButtonContained2 variant="contained" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled3 } />}  > Large </ButtonContained2>
         <ButtonContained3 variant="contained" size="large" color="success"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ChevronRightFilled4 } />}  > Large </ButtonContained3>
         <ButtonText variant="text" size="large" color="primary"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled1 } />}  > Large </ButtonText>
         <ButtonText1 variant="text" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled2 } />}  > Large </ButtonText1>
         <ButtonText2 variant="text" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled3 } />}  > Large </ButtonText2>
         <ButtonOutlined variant="outlined" size="large" color="primary"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled4 } />}  > Large </ButtonOutlined>
         <ButtonOutlined1 variant="outlined" size="large" color="info"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled5 } />}  > Large </ButtonOutlined1>
         <ButtonOutlined2 variant="outlined" size="large" color="success"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled6 } />}  > Large </ButtonOutlined2>
         <ButtonOutlined3 variant="outlined" size="large" color="secondary"   endIcon={ <SvgIcon sx={{width: "18px", height: "22px"}} component = { ArrowForwardFilled7 } />}  > Large </ButtonOutlined3>
         <ButtonContained4 variant="contained" size="medium" color="secondary"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ChevronRightFilled5 } />}  > Medium </ButtonContained4>
         <ButtonContained5 variant="contained" size="medium" color="warning"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ChevronRightFilled6 } />}  > Medium </ButtonContained5>
         <ButtonText3 variant="text" size="medium" color="secondary"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ArrowForwardFilled8 } />}  > Medium </ButtonText3>
         <ButtonText4 variant="text" size="medium" color="warning"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ArrowForwardFilled9 } />}  > Medium </ButtonText4>
         <ButtonText5 variant="text" size="medium" color="success"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ArrowForwardFilled10 } />}  > Medium </ButtonText5>
         <ButtonOutlined4 variant="outlined" size="medium" color="error"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ArrowForwardFilled11 } />}  > Medium </ButtonOutlined4>
         <ButtonOutlined5 variant="outlined" size="medium" color="info"   endIcon={ <SvgIcon sx={{width: "16px", height: "20px"}} component = { ArrowForwardFilled12 } />}  > Medium </ButtonOutlined5>
         <ButtonContained6 variant="contained" size="small" color="error"   endIcon={ <SvgIcon sx={{width: "16px", height: "18px"}} component = { ChevronRightFilled7 } />}  > Small </ButtonContained6>
         <ButtonText6 variant="text" size="small" color="error"   endIcon={ <SvgIcon sx={{width: "16px", height: "18px"}} component = { ArrowForwardFilled13 } />}  > Small </ButtonText6>
         <ButtonOutlined6 variant="outlined" size="small" color="warning"   endIcon={ <SvgIcon sx={{width: "16px", height: "18px"}} component = { ArrowForwardFilled14 } />}  > Small </ButtonOutlined6>
       </Frame2>
       <Frame4 >
         <Link1 href="#" underline="always"  >Link</Link1>
         <Link2 href="#" underline="hover"  >Link</Link2>
         <Link3 href="#" underline="none"  >Link</Link3>
         <Link4 href="#" underline="always"  >Link</Link4>
         <Link5 href="#" underline="hover"  >Link</Link5>
         <Link6 href="#" underline="none"  >Link</Link6>
         <Link7 href="#" underline="none"  >Link</Link7>
       </Frame4>
       <Frame3 >
         <Autocomplete1        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="standard" {...params} fullWidth  label={`Label`}  /> )} />
         <Autocomplete2        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="standard" {...params} fullWidth  label={`Label`}  /> )} />
         <Autocomplete3        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="outlined" {...params} fullWidth  label={`Label`}  /> )} />
         <Autocomplete4        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="filled" {...params} fullWidth  label={`Label`}  /> )} />
         <Autocomplete5        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="outlined" {...params} fullWidth  label={`Label`}  /> )} />
         <Autocomplete6        autoHighlight disableClearable openOnFocus blurOnSelect   renderInput={(params) => ( <TextField variant="filled" {...params} fullWidth  label={`Label`}  /> )} />
       </Frame3>
       <Frame9 >
         <FormControlLabel  control={<Checkbox1  size="small" color="info"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox2  size="small" color="primary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox3  size="medium" color="primary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox4  size="medium" color="info"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox5  size="medium" color="secondary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox6  size="medium" color="error"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox7  size="medium" color="warning"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox8  size="medium" color="info"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox9  size="medium" color="success"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox10  size="small" color="secondary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox11  size="small" color="error"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox12  size="small" color="warning"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox13  size="small" color="info"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox14  size="small" color="success"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox15  size="small" color="primary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox16 defaultChecked={true}  size="medium" color="primary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox17  size="medium" color="primary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox18  size="medium" color="secondary"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox19  size="medium" color="error"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox20  size="medium" color="warning"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox21  size="medium" color="info"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox22  size="medium" color="success"/>} label={`Label`} />
               <FormControlLabel  control={<Checkbox23  size="medium" color="primary"/>} label={`Label`} />
             </Frame9>
       <Frame8 >
         <Avatar1 variant="circular" src={Avatar1Image} alt={"Avatar"}   />
         <Avatar2 variant="circular" src={Avatar2Image} alt={"Avatar"}   />
         <Avatar3 variant="circular" src={Avatar3Image} alt={"Avatar"}   />
         <Avatar4 variant="square" src={Avatar4Image} alt={"Avatar"}   />
         <Avatar5 variant="square" src={Avatar5Image} alt={"Avatar"}   />
         <Avatar6 variant="square" src={Avatar6Image} alt={"Avatar"}   />
         <Avatar7 variant="rounded" src={Avatar7Image} alt={"Avatar"}   />
         <Avatar8 variant="rounded" src={Avatar8Image} alt={"Avatar"}   />
         <Avatar9 variant="rounded" src={Avatar9Image} alt={"Avatar"}   />
       </Frame8>
       <Frame10 >
         <Switch1 defaultChecked={false} color="info" size="medium"    />
         <Switch2 defaultChecked={false} color="success" size="medium"    />
         <Switch3 defaultChecked={false} color="info" size="medium"    />
         <Switch4 defaultChecked={true} color="primary" size="medium"    />
         <Switch5 defaultChecked={true} color="secondary" size="medium"    />
         <Switch6 defaultChecked={true} color="error" size="medium"    />
         <Switch7 defaultChecked={true} color="warning" size="medium"    />
         <Switch8 defaultChecked={true} color="info" size="medium"    />
         <Switch9 defaultChecked={true} color="success" size="medium"    />
         <FormControlLabel  control={<Switch10 defaultChecked={false} color="info" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch11 defaultChecked={false} color="primary" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch12 defaultChecked={true} color="primary" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch13 defaultChecked={true} color="info" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch14 defaultChecked={false} color="success" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch15 defaultChecked={true} color="primary" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch16 defaultChecked={true} color="secondary" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch17 defaultChecked={true} color="error" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch18 defaultChecked={true} color="warning" size="medium"  />} label={`Label`} />
         <FormControlLabel  control={<Switch19 defaultChecked={true} color="success" size="medium"  />} label={`Label`} />
       </Frame10>
       <Table1   />
     </Mui59Test1>
   );
}

export default Mui59Test;
