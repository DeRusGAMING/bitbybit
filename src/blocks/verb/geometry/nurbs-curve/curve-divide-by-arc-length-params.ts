import { Blocks, ALIGN_RIGHT } from "blockly";
import * as JavaScript from 'blockly/javascript';

export function createCurveDivideByArcLengthParamsBlock() {

    Blocks['verb_geometry_nurbs_curve_divide_by_arc_length_params'] = {
        init: function () {
            this.appendValueInput("Curve")
                .setCheck("NurbsCurve")
                .setAlign(ALIGN_RIGHT)
                .appendField("Divide the curve to params");
            this.appendValueInput("Length")
                .setCheck("Number")
                .setAlign(ALIGN_RIGHT)
                .appendField("by arc length");
            this.setOutput(true, "Array");
            this.setColour("#fff");
            this.setTooltip("Divide curve by arc length to parameters.");
            this.setHelpUrl("");
        }
    };

    JavaScript['verb_geometry_nurbs_curve_divide_by_arc_length_params'] = function (block) {
        let value_curve = JavaScript.valueToCode(block, 'Curve', JavaScript.ORDER_ATOMIC);
        let value_length = JavaScript.valueToCode(block, 'Length', JavaScript.ORDER_ATOMIC);

        let code = `
(() => {
    let crv = ${value_curve};
    let segments = crv.divideByArcLength(${value_length});
    let params = segments.map(s => s.u);
    return points;
})()
        `;
        return [code, JavaScript.ORDER_ATOMIC];
    };
}