import React from "react";

const Input = ({onChanges,name,value}) => {
  return (
    <div style={{flex:1,flexDirection:'column',display:"flex",marginBottom:20}}>
        <text style={{fontSize:25,fontFamily:"sans-serif",marginBottom:10}}>{name}</text>
        <input
        style={{boxShadow: "3px 3px 10px #9E9E9E",width:300,marginLeft:20,fontSize:20,borderColor:"#9F8B87",borderRadius:20,fontFamily:"sans-serif"}}
        type="text"
        value={value}
        name={name}
        onChange={e => onChanges(e.target.value)}
        />
    </div>
  );
};
export default Input;