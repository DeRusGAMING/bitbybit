
import { BitByBitBlocklyHelperService } from '../../bit-by-bit-blockly-helper.service';
import * as Inputs from '../inputs/inputs';

/**
 * Time functions help to create various interactions which happen in time
 */

export class Time {

    /**
     * Registers a function to render loop
     * @param update The function to call in render loop
     */
    registerRenderFunction(update: (timePassedMs: number) => void): void {
        BitByBitBlocklyHelperService.renderLoopBag.push((timePassedMs) => {
            update(timePassedMs);
        });
    }

}
