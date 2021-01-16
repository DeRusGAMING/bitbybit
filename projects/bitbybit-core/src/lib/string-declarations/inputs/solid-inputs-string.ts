import { simplifyDeclaration } from '../simplify-declaration';

export const solidInputsString = simplifyDeclaration(`
import { LinesMesh, Mesh } from '@babylonjs/core';
import { Polyline } from './polyline-inputs';
export declare namespace Solid {
    class DrawSolidMeshDto {
        /**
         * Provide options without default values
         */
        constructor(mesh?: any[]);
        /**
         * Solid Jscad mesh
         */
        mesh: any;
        /**
         * Value between 0 and 1
         */
        opacity: number;
        /**
         * Hex colour string
         */
        colour: string;
        /**
         * Indicates wether this solid will be transformed in time
         */
        updatable: boolean;
        /**
         * Solid mesh variable in case it already exists and needs updating
         */
        jscadMesh?: Mesh;
    }
    class DrawSolidsMeshDto {
        /**
         * Provide options without default values
         */
        constructor(meshes?: any[]);
        /**
         * Solid Jscad meshes
         */
        meshes: any[];
        /**
         * Value between 0 and 1
         */
        opacity: number;
        /**
         * Hex colour string
         */
        colour: string;
        /**
         * Indicates wether this solid will be transformed in time
         */
        updatable: boolean;
        /**
         * Solid mesh variable in case it already exists and needs updating
         */
        jscadMesh?: Mesh;
    }
    class DrawPathDto {
        /**
         * Provide options without default values
         */
        constructor(path?: any[]);
        /**
         * 2D Path to draw
         */
        path: any;
        /**
         * Colour of the path
         */
        colour: string;
        /**
         * Opacity of the path
         */
        opacity: number;
        /**
         * Width of the path
         */
        width: number;
        /**
         * Indicates wether the path will change in time
         */
        updatable: boolean;
        /**
         * Path mesh variable that will be updated if updatable property is set to true
         */
        pathMesh?: LinesMesh;
    }
    class TransformSolidsDto {
        /**
         * Solids to be transformed
         */
        solids: any[];
        /**
         * Transformation matrix or a list of transformation matrixes
         */
        matrix: number[][] | number[][][];
    }
    class TransformSolidDto {
        /**
         * Solid to be transformed
         */
        solid: any;
        /**
         * Transformation matrix or a list of transformation matrixes
         */
        matrix: number[][] | number[][][];
    }
    class DownloadSolidDto {
        /**
         * Solid to be downloaded
         */
        solid: any;
        /**
         * File name
         */
        fileName: string;
    }
    class DownloadSolidsDto {
        /**
         * Solids to be downloaded
         */
        solids: any[];
        /**
         * File name
         */
        fileName: string;
    }
    class BooleanObjectsDto {
        /**
         * Contains solid Jscad mesh objects that will be used to perform boolean operation
         */
        objects: any[];
    }
    class ExpansionDto {
        /**
         * Delta (+/-) of expansion
         */
        delta: number;
        /**
         * Type of corner to create during of expansion; edge, chamfer, round
         */
        corners: SolidCornerTypeEnum;
        /**
         * Integer number of segments when creating round corners
         */
        segments: number;
        /**
         * Can contain various Jscad entities from Solid category
         */
        geometry: any[];
    }
    class OffsetDto {
        /**
         * Delta (+/-) of offset
         */
        delta: number;
        /**
         * Type of corner to create during the offset; edge, chamfer, round.
         */
        corners: SolidCornerTypeEnum;
        /**
         * Integer number of segments when creating round corners
         */
        segments: number;
        /**
         * Can contain various Jscad entities from Solid category
         */
        geometry: any[];
    }
    class ExtrudeLinearDto {
        /**
         * Height of linear extrude
         */
        height: number;
        /**
         * Twist angle in degrees
         */
        twistAngle: number;
        /**
         * Number of twist steps
         */
        twistSteps: number;
        /**
         * Geometry to extrude
         */
        geometry: any | any[];
    }
    class HullDto {
        /**
         * Geometries to use in hull
         */
        geometry: any[];
    }
    class ExtrudeRectangularDto {
        /**
         * Height of linear extrude
         */
        height: number;
        /**
         * Size of the rectangle
         */
        size: number;
        /**
         * Geometry to extrude
         */
        geometry: any | any[];
    }
    class ExtrudeRectangularPointsDto {
        /**
         * Height of linear extrude
         */
        height: number;
        /**
         * Size of the rectangle
         */
        size: number;
        /**
         * Points for a path
         */
        points: number[][];
    }
    class ExtrudeRotateDto {
        /**
         * Angle in degrees
         */
        angle: number;
        /**
         * Start angle in degrees
         */
        startAngle: number;
        /**
         * Number of segments
         */
        segments: number;
        /**
         * Polygon to extrude
         */
        polygon: any;
    }
    class PathDto {
        /**
         * 2D path
         */
        path: any;
    }
    class PathFromPointsDto {
        /**
         * Points through which to create a path
         */
        points: number[][];
        /**
         * Indicates wether we want to create a closed path
         */
        closed: boolean;
    }
    class PathFromPolylineDto {
        /**
         * Polyline
         */
        polyline: Polyline.PolylinePropertiesDto;
        /**
         * Indicates wether we want to create a closed path
         */
        closed: boolean;
    }
    class PathFromCurveDto {
        /**
         * Verb Nurbs curve
         */
        curve: any;
        /**
         * Indicates wether we want to create a closed path
         */
        closed: boolean;
    }
    class PathAppendCurveDto {
        /**
         * Verb Nurbs curve
         */
        curve: any;
        /**
         * Path to append the curve to
         */
        path: any;
    }
    class PathAppendPointsDto {
        /**
         * Points to append
         */
        points: number[][];
        /**
         * Path to append the points to
         */
        path: any;
    }
    class PathAppendPolylineDto {
        /**
         * Polyline to append
         */
        polyline: Polyline.PolylinePropertiesDto;
        /**
         * Path to append the polyline to
         */
        path: any;
    }
    class PathAppendArcDto {
        /**
         * Path to append the arc to
         */
        path: any;
        /**
         * End point of an arc
         */
        endPoint: number[];
        /**
         * Rotation (degrees) of the X axis of the arc with respect to the X axis of the coordinate system
         */
        xAxisRotation: number;
        /**
         * Draw an arc clockwise with respect to the center point
         */
        clockwise: boolean;
        /**
         * Draw an arc longer than PI radians
         */
        large: boolean;
        /**
         * Number of segments for the arc
         */
        segments: number;
        /**
         * X radius of an arc
         */
        radiusX: number;
        /**
         * Y radius of an arc
         */
        radiusY: number;
    }
    class CircleDto {
        /**
         * Center of the circle
         */
        center: number[];
        /**
         * Radius of the circle
         */
        radius: number;
        /**
         * Segment number
         */
        segments: number;
    }
    class EllipseDto {
        /**
         * Center of the circle
         */
        center: number[];
        /**
         * Radius of the circle in [x, y] form
         */
        radius: number[];
        /**
         * Segment number
         */
        segments: number;
    }
    class SquareDto {
        /**
         * Center of the 2D square
         */
        center: number[];
        /**
         * Size of the square
         */
        size: number;
    }
    class RectangleDto {
        /**
         * Center of the 2D rectangle
         */
        center: number[];
        /**
         * Width of the rectangle
         */
        width: number;
        /**
         * Length of the rectangle
         */
        length: number;
    }
    class RoundedRectangleDto extends RectangleDto {
        /**
         * The radius to round the rectangle edge
         */
        roundRadius: number;
        /**
         * Number of segments for corners
         */
        segments: number;
    }
    class StarDto {
        /**
         * Center of the 2D star
         */
        center: number[];
        /**
         * Number of vertices on the star
         */
        vertices: number;
        /**
         * Density of the star
         */
        density: number;
        /**
         * Outer radius of the star
         */
        outerRadius: number;
        /**
         * Inner radius of the star
         */
        innerRadius: number;
        /**
         * Starting angle for first vertice, in degrees
         */
        startAngle: number;
    }
    class CubeDto {
        /**
         * Center coordinates of the cube
         */
        center: number[];
        /**
         * Size of the cube
         */
        size: number;
    }
    class CubeCentersDto {
        /**
         * Center coordinates of the cubes
         */
        centers: number[][];
        /**
         * Size of the cube
         */
        size: number;
    }
    class CuboidDto {
        /**
         * Center coordinates of the cubod
         */
        center: number[];
        /**
         * Width of the cuboid
         */
        width: number;
        /**
         * Length of the cuboid
         */
        length: number;
        /**
         * Height of the cuboid
         */
        height: number;
    }
    class CuboidCentersDto {
        /**
         * Center coordinates of the cuboids
         */
        centers: number[][];
        /**
         * Width of the cuboids
         */
        width: number;
        /**
         * Length of the cuboids
         */
        length: number;
        /**
         * Height of the cuboids
         */
        height: number;
    }
    class RoundedCuboidDto extends CuboidDto {
        /**
         * Radius for rounding edges
         */
        roundRadius: number;
        /**
         * Segments of rounded edges
         */
        segments: number;
    }
    class RoundedCuboidCentersDto extends CuboidCentersDto {
        /**
         * Radius for rounding edges
         */
        roundRadius: number;
        /**
         * Segments of rounded edges
         */
        segments: number;
    }
    class CylidnerEllipticDto {
        /**
         * Center of the cylinder
         */
        center: number[];
        /**
         * Height of the cylinder
         */
        height: number;
        /**
         * Start radius on X and Y directions
         */
        startRadius: number[];
        /**
         * End radius on X and Y directions
         */
        endRadius: number[];
        /**
         * Subdivision segments
         */
        segments: number;
    }
    class CylidnerCentersEllipticDto {
        /**
         * Centers of the cylinders
         */
        centers: number[][];
        /**
         * Height of the cylinders
         */
        height: number;
        /**
         * Start radius on X and Y directions
         */
        startRadius: number[];
        /**
         * End radius on X and Y directions
         */
        endRadius: number[];
        /**
         * Subdivision segments
         */
        segments: number;
    }
    class CylidnerDto {
        /**
         * Center of the cylinder
         */
        center: number[];
        /**
         * Height of the cylinder
         */
        height: number;
        /**
         * Radius of the cylinder
         */
        radius: number;
        /**
         * Subdivision segments
         */
        segments: number;
    }
    class RoundedCylidnerDto extends CylidnerDto {
        /**
         * Rounding radius
         */
        roundRadius: number;
        /**
         * Segment number
         */
        segments: number;
    }
    class EllipsoidDto {
        /**
         * Center coordinates
         */
        center: number[];
        /**
         * Radius of the ellipsoid in [x, y, z] form
         */
        radius: number[];
        /**
         * Segment count for ellipsoid
         */
        segments: number;
    }
    class EllipsoidCentersDto {
        /**
         * Center coordinates
         */
        centers: number[][];
        /**
         * Radius of the ellipsoid in [x, y, z] form
         */
        radius: number[];
        /**
         * Segment count for ellipsoid
         */
        segments: number;
    }
    class GeodesicSphereDto {
        /**
         * Radius of the sphere
         */
        radius: number;
        /**
         * Subdivision count
         */
        frequency: number;
        /**
         * Center coordinate of the geodesic sphere
         */
        center: number[];
    }
    class GeodesicSphereCentersDto {
        /**
         * Radius of the sphere
         */
        radius: number;
        /**
         * Subdivision count
         */
        frequency: number;
        /**
         * Center coordinates of the geodesic spheres
         */
        centers: number[][];
    }
    class CylidnerCentersDto {
        /**
         * Centers of the cylinders
         */
        centers: number[][];
        /**
         * Height of the cylinders
         */
        height: number;
        /**
         * Radius of the cylinders
         */
        radius: number;
        /**
         * Subdivision segmentss
         */
        segments: number;
    }
    class RoundedCylidnerCentersDto extends CylidnerCentersDto {
        /**
         * Rounding radius
         */
        roundRadius: number;
        /**
         * Segment number
         */
        segments: number;
    }
    class SphereDto {
        /**
         * Center point of the sphere
         */
        center: number[];
        /**
         * Radius of the sphere
         */
        radius: number;
        /**
         * Segment count
         */
        segments: number;
    }
    class SphereCentersDto {
        /**
         * Center points of the spheres
         */
        centers: number[][];
        /**
         * Radius of the spheres
         */
        radius: number;
        /**
         * Segment count
         */
        segments: number;
    }
    class TorusDto {
        /**
         * Center coordinate
         */
        center: number[];
        /**
         * Inner radius
         */
        innerRadius: number;
        /**
         * Outer radius
         */
        outerRadius: number;
        /**
         * Number of inner segments
         */
        innerSegments: number;
        /**
         * Number of outer segments
         */
        outerSegments: number;
        /**
         * Inner rotation in degrees
         */
        innerRotation: number;
        /**
         * Outer rotation in degrees
         */
        outerRotation: number;
        /**
         * Start angle in degrees
         */
        startAngle: number;
    }
    class TextDto {
        /**
         * Text to write
         */
        text: string;
        /**
         * Number of segments
         */
        /**
         * X offset of the text
         */
        xOffset: number;
        /**
         * Y offset of the text
         */
        yOffset: number;
        /**
         * Height of the text
         */
        height: number;
        /**
         * Space between lines
         */
        lineSpacing: number;
        /**
         * Space between letters
         */
        letterSpacing: number;
        /**
         * Align between left, center, right
         */
        align: SolidTextAlignEnum;
        /**
         * Offset the extrusion
         */
        extrudeOffset: boolean;
    }
    class CylinderTextDto extends TextDto {
        /**
         * Height of the cylinder
         */
        extrusionHeight: number;
        /**
         * Radius of the cylinder
         */
        extrusionSize: number;
        /**
         * Segment subdivision for cylinder
         */
        segments: number;
    }
    class SphereTextDto extends TextDto {
        /**
         * Radius of the spheres
         */
        radius: number;
        /**
         * Segment subdivision for sphere
         */
        segments: number;
    }
    enum SolidCornerTypeEnum {
        /**
         * Edges will meet at a corner
         */
        edge = "edge",
        /**
         * Edges will be rounded on the corner
         */
        round = "round",
        /**
         * Edges will be chamfered on the corner
         */
        chamfer = "chamfer"
    }
    enum SolidTextAlignEnum {
        /**
         * Aligns text to the left
         */
        left = "left",
        /**
         * Aligns text to the center
         */
        center = "center",
        /**
         * Aligns text to the right
         */
        right = "right"
    }
}

`);
