Blockly.Python['easydim_write'] = function(block) {
  Blockly.Python.definitions_['import_EasyDim'] = 'import EasyDim';
  
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) || "0";

  var code = `EasyDim.write(${value_value})\n`;
  return code;
};
