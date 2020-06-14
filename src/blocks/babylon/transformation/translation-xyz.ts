import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesService } from '../../../resources';
import { createStandardContextIIFE } from '../../_shared';
import { makeRequiredValidationModelForInputs, BlockValidationService, ValidationEntityInterface } from '../../validations';

export function createTranslationXYZBlock() {

    const resources = ResourcesService.getResources();
    const blockSelector = 'babylon_transformation_translation_xyz';

    Blocks[blockSelector] = {
        init() {
            this.appendValueInput('Translation')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_babylon_input_transformation_translation_xyz);
            this.setOutput(true, 'Matrix');
            this.setColour('#fff');
            this.setTooltip(resources.block_babylon_transformation_translation_xyz_description);
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            translation: JavaScript.valueToCode(block, 'Translation', JavaScript.ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BlockValidationService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_vector
        ]));

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
`
        return new BABYLON.Matrix.Translation(inputs.translation[0], inputs.translation[1], inputs.translation[2]);
`);
        return [code, JavaScript.ORDER_ATOMIC];
    };
}
