const converter=()=>{
    var val=document.querySelector("#val").value;
    var unit=document.querySelector("#unit").value;
    var oval=document.querySelector("#oval");
    var ounit=document.querySelector("#ounit").value;

    if(unit=="meter"&& ounit=="centimeter"){
        let output=val*100;
        oval.value=output;
    }

    else if(unit=="centimeter"&& ounit=="meter"){
        let output=val/100;
        oval.value=output;
    }

    else if(unit=="kilometer"&& ounit=="meter"){
        let output=val*1000;
        oval.value=output;
    }
    else if(unit=="meter"&& ounit=="kilometer"){
        let output=val/1000;
        oval.value=output;
    }
    else if(unit=="kilometer"&& ounit=="centimeter"){
        let output=val*100000;
        oval.value=output;
    }
    else if(unit=="centimeter"&& ounit=="kilometer"){
        let output=val/100000;
        oval.value=output;
    }
    else if(unit=="kilometer"&& ounit=="mile"){
        let output=val*0.62;
        oval.value=output;
    }
    else if(unit=="mile"&& ounit=="kilometer"){
        let output=val/0.62;
        oval.value=output;
    }
    else if(unit=="kilometer"&& ounit=="millimeter"){
        let output=val*1000000;
        oval.value=output;
    }
    else if(unit=="millimeter"&& ounit=="kilometer"){
        let output=val/1000000;
        oval.value=output;
    }
    else if(unit=="meter"&& ounit=="foot"){
        let output=val*3.28;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="meter"){
        let output=val/3.28;
        oval.value=output;
    }
    else if(unit=="meter"&& ounit=="inch"){
        let output=val*39.37;
        oval.value=output;
    }
    else if(unit=="inch"&& ounit=="meter"){
        let output=val/3.28;
        oval.value=output;
    }
    else if(unit=="meter"&& ounit=="millimeter"){
        let output=val*1000;
        oval.value=output;
    }
    else if(unit=="millimeter"&& ounit=="meter"){
        let output=val/1000;
        oval.value=output;
    }
    else if(unit=="mile"&& ounit=="meter"){
        let output=val*1609.344;
        oval.value=output;
    }
    else if(unit=="meter"&& ounit=="mile"){
        let output=val/1609.344;
        oval.value=output;
    }
    else if(unit=="centimeter"&& ounit=="millimeter"){
        let output=val*10;
        oval.value=output;
    }
    else if(unit=="millimeter"&& ounit=="centimeter"){
        let output=val/10;
        oval.value=output;
    }
    else if(unit=="centimeter"&& ounit=="foot"){
        let output=val*0.03281;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="centimeter"){
        let output=val/0.03281;
        oval.value=output;
    }
    else if(unit=="centimeter"&& ounit=="inch"){
        let output=val*0.3937;
        oval.value=output;
    }
    else if(unit=="inch"&& ounit=="centimeter"){
        let output=val/0.3937;
        oval.value=output;
    }
    else if(unit=="mile"&& ounit=="centimeter"){
        let output=val*160934.4;
        oval.value=output;
    }
    else if(unit=="centimeter"&& ounit=="mile"){
        let output=val/160934.4;
        oval.value=output;
    }
    else if(unit=="millimeter"&& ounit=="foot"){
        let output=val*0.00328084;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="millimeter"){
        let output=val/0.00328084;
        oval.value=output;
    }
    else if(unit=="millimeter"&& ounit=="inch"){
        let output=val*0.0394;
        oval.value=output;
    }
    else if(unit=="inch"&& ounit=="millimeter"){
        let output=val/0.0394;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="kilometer"){
        let output=val*0.000305;
        oval.value=output;
    }
    else if(unit=="kilometer"&& ounit=="foot"){
        let output=val/0.000305;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="inch"){
        let output=val*12;
        oval.value=output;
    }
    else if(unit=="inch"&& ounit=="foot"){
        let output=val/12;
        oval.value=output;
    }
    else if(unit=="foot"&& ounit=="mile"){
        let output=val*0.000189394;
        oval.value=output;
    }
    else if(unit=="mile"&& ounit=="foot"){
        let output=val/0.000189394;
        oval.value=output;
    }
    else if(unit=="kilometer"&& ounit=="inch"){
        let output=val*39370.1;
        oval.value=output;
    }
    else if(unit=="mile"&& ounit=="inch"){
        let output=val*63360;
        oval.value=output;
    }
    else if(unit=="inch"&& ounit=="mile"){
        let output=val/63360;
        oval.value=output;
    }
}