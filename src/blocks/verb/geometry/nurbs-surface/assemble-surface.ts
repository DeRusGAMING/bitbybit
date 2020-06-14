import { createSurfaceBoundariesBlock } from './surface-boundaries';
import { createSurfaceByCornersBlock } from './surface-by-corners';
import { createSurfaceByKnotsControlPointsWeightsBlock } from './surface-by-knots-control-points-weights';
import { createSurfaceByLoftingCurvesBlock } from './surface-by-lofting-curves';
import { createSurfaceCloneBlock } from './surface-clone';
import { createSurfaceClosestParamBlock } from './surface-closest-param';
import { createSurfaceClosestPointBlock } from './surface-closest-point';
import { createSurfaceControlPointsBlock } from './surface-control-points';
import { createSurfaceDegreeUBlock } from './surface-degree-u';
import { createSurfaceDegreeVBlock } from './surface-degree-v';
import { createSurfaceDerivativesBlock } from './surface-derivatives';
import { createSurfaceDomainUBlock } from './surface-domain-u';
import { createSurfaceDomainVBlock } from './surface-domain-v';
import { createSurfaceIsocurveBlock } from './surface-isocurve';
import { createSurfaceKnotsUBlock } from './surface-knots-u';
import { createSurfaceKnotsVBlock } from './surface-knots-v';
import { createSurfaceNormalBlock } from './surface-normal';
import { createSurfacePointBlock } from './surface-point';
import { createSurfaceReverseBlock } from './surface-reverse';
import { createSurfaceSplitBlock } from './surface-split';
import { createSurfaceTransformBlock } from './surface-transform';
import { createSurfaceWeightsBlock } from './surface-weights';

export function assembleSurfaceBlocks() {
    createSurfaceByCornersBlock();
    createSurfaceByKnotsControlPointsWeightsBlock();
    createSurfaceByLoftingCurvesBlock();
    createSurfaceDegreeUBlock();
    createSurfaceDegreeVBlock();
    createSurfaceKnotsUBlock();
    createSurfaceKnotsVBlock();
    createSurfaceControlPointsBlock();
    createSurfaceWeightsBlock();
    createSurfaceCloneBlock();
    createSurfaceDomainUBlock();
    createSurfaceDomainVBlock();
    createSurfacePointBlock();
    createSurfaceNormalBlock();
    createSurfaceDerivativesBlock();
    createSurfaceClosestParamBlock();
    createSurfaceClosestPointBlock();
    createSurfaceSplitBlock();
    createSurfaceReverseBlock();
    createSurfaceIsocurveBlock();
    createSurfaceBoundariesBlock();
    createSurfaceTransformBlock();
}
