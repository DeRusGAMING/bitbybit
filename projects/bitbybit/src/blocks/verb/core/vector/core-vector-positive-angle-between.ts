import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../../../resources';
import { createStandardContextIIFE } from '../../../_shared';
import { getRequired, makeRequiredValidationModelForInputs, BitByBitBlockHandlerService, ValidationEntityInterface } from '../../../validations';

export function createCoreVectorPositiveAngleBetweenBlock() {

    const resources = ResourcesService.getResources();
    const blockSelector = 'verb_core_vector_positive_angle_between';

    Blocks[blockSelector] = {
        init() {
            this.appendValueInput('First')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_verb_core_vector_positive_angle_between_input_first);
            this.appendValueInput('Second')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_verb_core_vector_positive_angle_between_input_second.toLowerCase());
            this.appendValueInput('Reference')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_verb_core_vector_positive_angle_between_input_reference.toLowerCase());
            this.setOutput(true, 'Number');
            this.setColour('#fff');
            this.setTooltip(resources.block_verb_core_vector_positive_angle_between_description);
            this.setHelpUrl('');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            first: (JavaScript as any).valueToCode(block, 'First', (JavaScript as any).ORDER_ATOMIC),
            second: (JavaScript as any).valueToCode(block, 'Second', (JavaScript as any).ORDER_ATOMIC),
            reference: (JavaScript as any).valueToCode(block, 'Reference', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BitByBitBlockHandlerService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_vector, resources.block_vector, resources.block_vector
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return BitByBit.verb.core.Vec.positiveAngleBetween(inputs.first, inputs.second, inputs.reference);`);
        return [code, (JavaScript as any).ORDER_ATOMIC];
    };
}

function makeRuntimeValidationModel(
    resources: ResourcesInterface,
    keys: string[]
): ValidationEntityInterface[] {

    return [{
        entity: keys[0],
        validations: [
            getRequired(resources, resources.block_vector),
        ]
    }, {
        entity: keys[1],
        validations: [
            getRequired(resources, resources.block_vector),
        ]
    }, {
        entity: keys[2],
        validations: [
            getRequired(resources, resources.block_vector),
        ]
    }];
}
