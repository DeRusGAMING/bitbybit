import { ALIGN_RIGHT, Block, Blocks, FieldDropdown } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../resources';
import { createStandardContextIIFE } from '../_shared';
import { getRequired, makeRequiredValidationModelForInputs, BitByBitBlockHandlerService, ValidationEntityInterface } from '../validations';
import { environment } from '../../environments/environment';
import { solidConstants } from './solid-constants';

export function createExpansionsExpandPolygonsBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'csg_expansions_expand_polygons';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Polygons')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_polygons_input_polygons);
            this.appendValueInput('Delta')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_polygons_input_delta.toLowerCase());
            this.appendValueInput('Segments')
                .setCheck('Number')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_polygons_input_segments.toLowerCase());
            this.appendValueInput('Corners')
                .setCheck('String')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_expansions_expand_polygons_input_corners.toLowerCase());
            this.setOutput(true, 'Array');
            this.setColour('#fff');
            this.setTooltip(resources.block_jscad_expansions_expand_polygons_description);
            this.setHelpUrl(environment.docsUrl + solidConstants.solidExpansionsHelpUrl + '#' + 'expand');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            geometry: (JavaScript as any).valueToCode(block, 'Polygons', (JavaScript as any).ORDER_ATOMIC),
            delta: (JavaScript as any).valueToCode(block, 'Delta', (JavaScript as any).ORDER_ATOMIC),
            segments: (JavaScript as any).valueToCode(block, 'Segments', (JavaScript as any).ORDER_ATOMIC),
            corners: (JavaScript as any).valueToCode(block, 'Corners', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BitByBitBlockHandlerService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_polygons, resources.block_delta, resources.block_segments, resources.block_corners
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
            getRequired(resources, resources.block_polygons),
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
    }, {
        entity: keys[3],
        validations: [
            getRequired(resources, resources.block_corners),
        ]
    }];
}
