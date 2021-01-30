import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesService } from '../../../../resources';
import { createStandardContextIIFE } from '../../../_shared';
import { makeRequiredValidationModelForInputs, HS } from '../../../validations';
import { environment } from 'projects/bitbybit/src/environments/environment';
import { lineConstants } from './line-constants';

export function createLinesConvertToNurbsCurvesBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'base_geometry_lines_convert_to_nurbs_curves';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Lines')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_base_geometry_lines_convert_to_nurbs_curves);
            this.setOutput(true, 'Array');
            this.setColour('#fff');
            this.setTooltip(resources.block_base_geometry_lines_convert_to_nurbs_curves_description);
            this.setHelpUrl(environment.docsUrl + lineConstants.helpUrl + '#' + 'convertlinestonurbscurves');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            lines: (JavaScript as any).valueToCode(block, 'Lines', (JavaScript as any).ORDER_ATOMIC)
        };

        // this is first set of validations to check that all inputs are non empty strings
        HS.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_line
        ]));

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return bitbybit.line.convertLinesToNurbsCurves(inputs);`
        );
        return [code, (JavaScript as any).ORDER_ATOMIC];
    };
}
