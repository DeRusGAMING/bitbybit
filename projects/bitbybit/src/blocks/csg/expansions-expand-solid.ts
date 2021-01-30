import { ALIGN_RIGHT, Block, Blocks, FieldDropdown } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../resources';
import { createStandardContextIIFE } from '../_shared';
import { getRequired, makeRequiredValidationModelForInputs, HS, ValidationEntityInterface } from '../validations';
import { environment } from '../../environments/environment';
import { solidConstants } from './solid-constants';

export function createExpansionsExpandSolidBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'csg_expansions_expand_solid';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Solid')
                .setCheck('CsgMesh')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_solid_input_solid);
            this.appendValueInput('Delta')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_solid_input_delta.toLowerCase());
            this.appendValueInput('Segments')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_solid_input_segments.toLowerCase());
            this.setOutput(true, 'CsgMesh');
            this.setColour('#fff');
            this.setTooltip(resources.block_jscad_expansions_expand_solid_description);
            this.setHelpUrl(environment.docsUrl + solidConstants.solidExpansionsHelpUrl + '#' + 'expand');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            geometry: (JavaScript as any).valueToCode(block, 'Solid', (JavaScript as any).ORDER_ATOMIC),
            delta: (JavaScript as any).valueToCode(block, 'Delta', (JavaScript as any).ORDER_ATOMIC),
            segments: (JavaScript as any).valueToCode(block, 'Segments', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        HS.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_solid, resources.block_delta, resources.block_segments
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return bitbybit.jscad.expansions.expand(inputs);`
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
            getRequired(resources, resources.block_solid),
        ]
    }, {
        entity: keys[1],
        validations: [
            getRequired(resources, resources.block_delta),
        ]
    }, {
        entity: keys[2],
        validations: [
            getRequired(resources, resources.block_segments),
        ]
    }];
}
