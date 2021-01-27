import { ALIGN_RIGHT, Block, Blocks } from 'blockly';
import * as JavaScript from 'blockly/javascript';
import { ResourcesInterface, ResourcesService } from '../../resources';
import { createStandardContextIIFE } from '../_shared';
import { getRequired, makeRequiredValidationModelForInputs, BitByBitBlockHandlerService, ValidationEntityInterface } from '../validations';
import { environment } from '../../environments/environment';
import { solidConstants } from './solid-constants';

export function createHullChainPolygonsBlock(): void {

    const resources = ResourcesService.getResources();
    const blockSelector = 'csg_hull_chain_polygons';

    Blocks[blockSelector] = {
        init(): void {
            this.appendValueInput('Polygons')
                .setCheck('Array')
                .setAlign(ALIGN_RIGHT)
                .appendField(resources.block_jscad_chain_hull_polygons_input_polygons);
            this.setOutput(true, 'Polygon');
            this.setColour('#fff');
            this.setTooltip(resources.block_jscad_chain_hull_polygons_description);
            this.setHelpUrl(environment.docsUrl + solidConstants.solidHullsHelpUrl + '#' + 'hullchain');
        }
    };

    JavaScript[blockSelector] = (block: Block) => {
        const inputs = {
            geometry: (JavaScript as any).valueToCode(block, 'Polygons', (JavaScript as any).ORDER_ATOMIC),
        };

        // this is first set of validations to check that all inputs are non empty strings
        BitByBitBlockHandlerService.validate(block, block.workspace, makeRequiredValidationModelForInputs(resources, inputs, [
            resources.block_polygons
        ]));

        // this creates validation model to be used at runtime to evaluate real values of inputs
        const runtimeValidationModel = makeRuntimeValidationModel(resources, Object.keys(inputs));
        (block as any).validationModel = runtimeValidationModel;

        const code = createStandardContextIIFE(block, blockSelector, inputs, true,
            `return bitbybit.jscad.hulls.hullChain(inputs);`
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
    }];
}
