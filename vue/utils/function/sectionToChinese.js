function sectionToChinese(section){
    let chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
    let chnUnitChar = ["","十","百","千","万","亿","万亿","亿亿"];
    let strIns = '', chnStr = '';
    let unitPos = 0;
    let zero = true;
    while(section > 0){
        let v = section % 10;
        if(v === 0){
            if(!zero){
                zero = true;
                chnStr = chnNumChar[v] + chnStr;
            }
        }else{
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];
            chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10)
    }
    return chnStr;
}

export default sectionToChinese;
