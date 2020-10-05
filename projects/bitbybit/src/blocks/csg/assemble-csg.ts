import { createPrimitive2dPolygonFromPointsBlock } from './primitive-2d-polygon-from-points';
import { createExtrudeLinearPolygonBlock } from './extrude-linear-polygon';
import { createExtrudeLinearPolygonObjectsBlock } from './extrude-linear-polygon-objects';
import { createPrimitive2dRectangleBlock } from './primitive-2d-rectangle';
import { createCsgTransformBlock } from './csg-transform';
import { createPrimitiveSphereBlock } from './primitive-sphere';
import { createPrimitiveCubeBlock } from './primitive-cube';
import { createBooleanSubtractBlock } from './boolean-subtract';
import { createBooleanUnionBlock } from './boolean-union';
import { createBooleanIntersectBlock } from './boolean-intersect';
import { createCsgColourBlock } from './csg-colour';
import { createPrimitiveCuboidBlock } from './primitive-cuboid';
import { createBooleanIntersectObjectsBlock } from './boolean-intersect-objects';
import { createBooleanUnionObjectsBlock } from './boolean-union-objects';
import { createBooleanSubtractObjectsBlock } from './boolean-subtract-objects';
import { createExtrudeRectangularPointsBlock } from './extrude-rectanglar-points';
import { createPrimitive2dPathFromPointsBlock } from './primitive-2d-path-from-points';
import { createExtrudeRectangularPathBlock } from './extrude-rectanglar-path';
import { createPrimitive2dPathCloseBlock } from './primitive-2d-path-close';
import { createPrimitive2dPathAppendPointsBlock } from './primitive-2d-path-append-points';
import { createPrimitive2dPathAppendArcBlock } from './primitive-2d-path-append-arc';
import { createPrimitive2dPathAppendPolylineBlock } from './primitive-2d-path-append-polyline';
import { createPrimitive2dPathAppendCurveBlock } from './primitive-2d-path-append-curve';
import { createPrimitive2dPathEmptyBlock } from './primitive-2d-path-empty';
import { createExtrudeRectangularPathsBlock } from './extrude-rectanglar-paths';
import { createPrimitive2dPathFromPolylineBlock } from './primitive-2d-path-from-polyline';
import { createPrimitive2dPathFromCurveBlock } from './primitive-2d-path-from-curve';
import { createExtrudeRotatePolygonBlock } from './extrude-rotate-polygon';
import { createHullPathsBlock } from './hull-paths';
import { createPrimitive2dPolygonFromPolylineBlock } from './primitive-2d-polygon-from-polyline';
import { createPrimitive2dPolygonFromCurveBlock } from './primitive-2d-polygon-from-curve';
import { createPrimitive2dPolygonFromPathBlock } from './primitive-2d-polygon-from-path';
import { createHullPolygonsBlock } from './hull-polygons';
import { createHullSolidsBlock } from './hull-solids';
import { createHullChainPathsBlock } from './hull-chain-paths';
import { createHullChainPolygonsBlock } from './hull-chain-polygons';
import { createHullChainSolidsBlock } from './hull-chain-solids';
import { createExpansionsExpandPathBlock } from './expansions-expand-path';
import { createCornerTypeBlock } from './csg-corner-type';
import { createExpansionsExpandPolygonBlock } from './expansions-expand-polygon';
import { createExpansionsExpandSolidBlock } from './expansions-expand-solid';
import { createExpansionsExpandPathsBlock } from './expansions-expand-paths';
import { createExpansionsExpandPolygonsBlock } from './expansions-expand-polygons';
import { createExpansionsExpandSolidsBlock } from './expansions-expand-solids';
import { createExpansionsOffsetPathBlock } from './expansions-offset-path';
import { createExpansionsOffsetPolygonBlock } from './expansions-offset-polygon';
import { createExpansionsOffsetPathsBlock } from './expansions-offset-paths';
import { createExpansionsOffsetPolygonsBlock } from './expansions-offset-polygons';
import { createPrimitive2dCircleBlock } from './primitive-2d-circle';
import { createPrimitiveCylinderBlock } from './primitive-cylinder';
import { createPrimitiveSpheresOnCenterPointsBlock } from './primitive-spheres-on-center-points';
import { createPrimitiveCylindersOnCenterPointsBlock } from './primitive-cylinders-on-center-points';
import { createPrimitiveCuboidsOnCenterPointsBlock } from './primitive-cuboids-on-center-points';
import { createPrimitiveCubesOnCenterPointsBlock } from './primitive-cubes-on-center-points';
import { createPrimitive2dEllipseBlock } from './primitive-2d-ellipse';
import { createPrimitiveCylinderEllipticBlock } from './primitive-cylinder-elliptic';
import { createPrimitiveCylindersEllipticOnCenterPointsBlock } from './primitive-cylinders-elliptic-on-center-points';
import { createPrimitiveEllipsoidBlock } from './primitive-ellipsoid';
import { createPrimitiveEllipsoidsOnCenterPointsBlock } from './primitive-ellipsoids-on-center-points';
import { createPrimitiveGeodesicSphereBlock } from './primitive-geodesic-sphere';
import { createPrimitiveGeodesicSpheresOnCenterPointsBlock } from './primitive-geodesic-spheres-on-center-points';
import { createPrimitiveRoundedCuboidBlock } from './primitive-rounded-cuboid';
import { createPrimitiveRoundedCuboidsOnCenterPointsBlock } from './primitive-rounded-cuboids-on-center-points';

export function assembleCsgBlocks(): void {
    createPrimitive2dPolygonFromPointsBlock();
    createPrimitive2dPolygonFromPolylineBlock();
    createPrimitive2dPolygonFromCurveBlock();
    createPrimitive2dPolygonFromPathBlock();
    createPrimitive2dRectangleBlock();
    createPrimitive2dPathFromPointsBlock();
    createPrimitive2dPathFromPolylineBlock();
    createPrimitive2dPathFromCurveBlock();
    createExtrudeLinearPolygonBlock();
    createExtrudeLinearPolygonObjectsBlock();
    createExtrudeRectangularPointsBlock();
    createExtrudeRectangularPathBlock();
    createExtrudeRectangularPathsBlock();
    createExtrudeRotatePolygonBlock();
    createPrimitiveSphereBlock();
    createPrimitiveSpheresOnCenterPointsBlock();
    createPrimitiveGeodesicSphereBlock();
    createPrimitiveGeodesicSpheresOnCenterPointsBlock();
    createPrimitiveCubeBlock();
    createBooleanSubtractBlock();
    createBooleanSubtractObjectsBlock();
    createBooleanUnionBlock();
    createBooleanUnionObjectsBlock();
    createBooleanIntersectBlock();
    createBooleanIntersectObjectsBlock();
    createHullPathsBlock();
    createHullPolygonsBlock();
    createHullSolidsBlock();
    createHullChainPathsBlock();
    createHullChainPolygonsBlock();
    createHullChainSolidsBlock();
    createCsgTransformBlock();
    createCsgColourBlock();
    createPrimitiveCuboidBlock();
    createPrimitive2dPathEmptyBlock();
    createPrimitive2dPathCloseBlock();
    createPrimitive2dPathAppendPointsBlock();
    createPrimitive2dPathAppendArcBlock();
    createPrimitive2dPathAppendPolylineBlock();
    createPrimitive2dPathAppendCurveBlock();
    createExpansionsExpandPathBlock();
    createExpansionsExpandPolygonBlock();
    createExpansionsExpandSolidBlock();
    createExpansionsExpandPathsBlock();
    createExpansionsExpandPolygonsBlock();
    createExpansionsExpandSolidsBlock();
    createExpansionsOffsetPathBlock();
    createExpansionsOffsetPolygonBlock();
    createExpansionsOffsetPathsBlock();
    createExpansionsOffsetPolygonsBlock();
    createCornerTypeBlock();
    createPrimitive2dCircleBlock();
    createPrimitive2dEllipseBlock();
    createPrimitiveCylinderBlock();
    createPrimitiveCylindersOnCenterPointsBlock();
    createPrimitiveCuboidsOnCenterPointsBlock();
    createPrimitiveCubesOnCenterPointsBlock();
    createPrimitiveCylinderEllipticBlock();
    createPrimitiveCylindersEllipticOnCenterPointsBlock();
    createPrimitiveEllipsoidBlock();
    createPrimitiveEllipsoidsOnCenterPointsBlock();
    createPrimitiveRoundedCuboidBlock();
    createPrimitiveRoundedCuboidsOnCenterPointsBlock();
}
