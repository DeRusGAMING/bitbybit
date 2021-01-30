import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../resources';
import { createStandardContextIIFE } from '../_shared';
import { getRequired, makeRequiredValidationModelForInputs, HS, ValidationEntityInterface } from '../validations';
import { environment } from '../../environments/environment';
import { solidConstants } from './solid-constants';

export function createPrimitiveRoundedCylinderBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'csg_primitive_rounded_cylinder';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Center')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_rounded_cylinder_input_center);
            this.appendValueInput('Height')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_rounded_cylinder_input_height.toLowerCase());
            this.appendValueInput('Radius')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_rounded_cylinder_input_radius.toLowerCase());
            this.appendValueInput('RoundRadius')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_rounded_cylinder_input_round_radius.toLowerCase());
            this.appendValueInput('Segments')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_rounded_cylinder_input_segments.toLowerCase());
            this.setOutput(true, 'CsgMesh');
            this.setColour('#fff');
            this.setTooltip(resources.block_jscad_rounded_cylinder_description);
            this.setHelpUrl(environment.docsUrl + solidConstants.solidShapesHelpUrl + '#' + 'roundedcylinder');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            center: (JavaScript as any).valueToCode(block, 'Center', (JavaScript as any).ORDER_ATOMIC),
            height: (JavaScript as any).valueToCode(block, 'Height', (JavaScript as any).ORDER_ATOMIC),
            radius: (JavaScript as any).valueToCode(block, 'Radius', (JavaScript as any).ORDER_ATOMIC),
            roundRadius: (JavaScript as any).valueToCode(block, 'RoundRadius', (JavaScript as any).ORDER_ATOMIC),
            segments: (JavaScript as any).valueToCode(block, 'Segments', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        HS.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_center, resources.block_height, resources.block_radius,
            resources.block_round_radius, resources.block_segments
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return bitbybit.jscad.shapes.roundedCylinder(inputs);`

        );
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
            getRequired(resources, resources.block_center),
        ]
    }, {
        entity: keys[1],
        validations: [
            getRequired(resources, resources.block_height),
        ]
    }, {
        entity: keys[2],
        validations: [
            getRequired(resources, resources.block_radius),
        ]
    }, {
        entity: keys[3],
        validations: [
            getRequired(resources, resources.block_round_radius),
        ]
    }, {
        entity: keys[4],
        validations: [
            getRequired(resources, resources.block_segments),
        ]
    }];
}
