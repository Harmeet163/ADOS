function IsValidPinCode(Control){if(Control.value.length>0&&Control.value.length!=6){alert("Invalid Pincode");Control.focus();return false;}
else
return true;}
function IsValidLength(Control,Length,ValueType){if(Control.value.length>0&&Control.value.length!=Length){alert("Enter "+Length.toString()+" "+ValueType);Control.focus();return false;}
else
return true;}
function IsAlphabetDigit(key){var specialKeys=new Array();specialKeys.push(8);var keyCode=(key.which)?key.which:key.keyCode;if(keyCode==8||keyCode==37)
return true;if((keyCode>=65&&keyCode<=90)||(keyCode>=97&&keyCode<=122)||(keyCode>=48&&keyCode<=57)||specialKeys.indexOf(keyCode)!=-1){return true;}
else{return false;}}
function IsAlphabetDigitSlash(key){var specialKeys=new Array();specialKeys.push(8);var keyCode=(key.which)?key.which:key.keyCode
if(keyCode==8||keyCode==37||keyCode==47)
return true;if((keyCode>=65&&keyCode<=90)||(keyCode>=97&&keyCode<=122)||(keyCode>=48&&keyCode<=57)||specialKeys.indexOf(keyCode)!=-1){return true;}
else{return false;}}
function IsPositiveInteger(event){var controlKeys=[8,9,13];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsNegativeInteger(Control,event){if(event.which==45&&Control.value.length==0)
return;var controlKeys=[8,9,13];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsAlphabetName(event){var controlKeys=[8,9,13,110,46,32,45,39];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(65<=event.which&&event.which<=90)||(97<=event.which&&event.which<=122)||isControlKey){return;}else{event.preventDefault();}}
function IsPhoneCSV(event){var controlKeys=[8,9,13,44,45];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsDecimal2DigitPositive(control,event){var controlKeys=[8,9,13];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(48<=event.which&&event.which<=57)||(46==event.which&&control.value.toString().length>0&&control.value.toString().lastIndexOf('.')==-1)||isControlKey){if((control.value.toString().indexOf('.')!=-1&&(control.value.toString().length-control.value.toString().indexOf('.'))>2)&&window.getSelection().length==0)
return false;else
return;}else{event.preventDefault();}}
function IsDecimal2DigitNegative(control,event){if(event.which==45&&control.value.length==0)
return;if(control.value.toString().indexOf('.')!=-1&&(control.value.toString().length-control.value.toString().indexOf('.'))>2)
return false;var controlKeys=[8,9,13];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(48<=event.which&&event.which<=57)||(46==event.which&&control.value.toString().length>0&&control.value.toString().lastIndexOf('.')==-1)||isControlKey){return;}else{event.preventDefault();}}
function IsAlphaNumeric(event){var controlKeys=[8,9,13,110];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(65<=event.which&&event.which<=90)||(97<=event.which&&event.which<=122)||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsAlphaNumericSpace(event){var controlKeys=[8,9,13,110,32];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(65<=event.which&&event.which<=90)||(97<=event.which&&event.which<=122)||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsAlphaNumericSpaceDashComma(event){var controlKeys=[8,9,13,110,32,45,44];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(65<=event.which&&event.which<=90)||(97<=event.which&&event.which<=122)||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}
function IsAlphaNumericSlash(event){var controlKeys=[8,9,13,37,110,32,45,47];var isControlKey=controlKeys.join(",").match(new RegExp(event.which));if(!event.which||(65<=event.which&&event.which<=90)||(97<=event.which&&event.which<=122)||(48<=event.which&&event.which<=57)||isControlKey){return;}else{event.preventDefault();}}