import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../../../resources';
import { createStandardContextIIFE } from '../../../_shared';
import { getRequired, makeRequiredValidationModelForInputs, HS, ValidationEntityInterface } from '../../../validations';

export function createBezierCurveBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'verb_geometry_bezier_curve_by_points';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Points')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_verb_geometry_bezier_curve_inputs_points);
            this.appendValueInput('Weights')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_verb_geometry_bezier_curve_inputs_weights.toLowerCase());
            this.setOutput(true, 'NurbsCurve');
            this.setColour('#fff');
            this.setTooltip(resources.block_verb_geometry_bezier_curve_description);
            this.setHelpUrl('');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            points: (JavaScript as any).valueToCode(block, 'Points', (JavaScript as any).ORDER_ATOMIC),
            weights: (JavaScript as any).valueToCode(block, 'Weights', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        HS.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_points, resources.block_weights
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return bitbybit.verb.curve.createBezierCurve(inputs);`);
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
            getRequired(resources, resources.block_points),
        ]
    }, {
        entity: keys[1],
        validations: [
            getRequired(resources, resources.block_weights),
        ]
    }];
}
