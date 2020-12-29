import { simplifyDeclaration } from "./simplify-declaration";

export const vectorString = simplifyDeclaration(`
import { Context } from '../context';
import * as Inputs from '../inputs/inputs';
/**
 * Contains various methods for vector mathematics. Vector in bitbybit is simply an array, usually containing numbers.
 * In 3D [x, y, z] form describes space, where y is the up vector.
 * Because of this form Vector can be interchanged with Point, which also is an array in [x, y, z] form.
 * <div>
 *  <img src="../assets/images/blockly-images/vector/vector.png" alt="Blockly Image"/>
 * </div>
 */
export declare class Vector {
    private readonly context;
    constructor(context: Context);
    /**
     * Measures the angle between two vectors in degrees
     * <div>
     *  <img src="../assets/images/blockly-images/vector/angleBetween.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Contains two vectors represented as number arrays
     * @returns Number in degrees
     */
    angleBetween(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Measures the normalized 2d angle between two vectors in degrees
     * <div>
     *  <img src="../assets/images/blockly-images/vector/angleBetweenNormalized2d.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Contains two vectors represented as number arrays
     * @returns Number in degrees
     */
    angleBetweenNormalized2d(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Measures a positive angle between two vectors given the reference vector in degrees
     * <div>
     *  <img src="../assets/images/blockly-images/vector/positiveAngleBetween.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Contains information of two vectors and a reference vector
     * @returns Number in degrees
     */
    positiveAngleBetween(inputs: Inputs.Vector.TwoVectorsReferenceDto): number;
    /**
     * Adds all vector xyz values together and create a new vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/addAll.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vectors to be added
     * @returns New vector that has xyz values as sums of all the vectors
     */
    addAll(inputs: Inputs.Vector.VectorsDto): number[];
    /**
     * Adds two vectors together
     * <div>
     *  <img src="../assets/images/blockly-images/vector/add.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors to be added
     * @returns Number array representing vector
     */
    add(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Checks if the boolean array contains only true values, if there's a single false it will return false.
     * <div>
     *  <img src="../assets/images/blockly-images/vector/all.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vectors to be checked
     * @returns Boolean indicating if vector contains only true values
     */
    all(inputs: Inputs.Vector.VectorBoolDto): boolean;
    /**
     * Cross two vectors
     * <div>
     *  <img src="../assets/images/blockly-images/vector/cross.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors to be crossed
     * @returns Crossed vector
     */
    cross(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Squared distance between two vectors
     * <div>
     *  <img src="../assets/images/blockly-images/vector/distSquared.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors
     * @returns Number representing squared distance between two vectors
     */
    distSquared(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Distance between two vectors
     * <div>
     *  <img src="../assets/images/blockly-images/vector/dist.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors
     * @returns Number representing distance between two vectors
     */
    dist(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Divide the vector by a scalar value/
     * <div>
     *  <img src="../assets/images/blockly-images/vector/div.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Contains vector and a scalar
     * @returns Vector that is a result of division by a scalar
     */
    div(inputs: Inputs.Vector.VectorScalarDto): number[];
    /**
     * Computes the domain between minimum and maximum values of the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/domain.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector information
     * @returns Number representing distance between two vectors
     */
    domain(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Dot product between two vectors
     * <div>
     *  <img src="../assets/images/blockly-images/vector/dot.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors
     * @returns Number representing dot product of the vector
     */
    dot(inputs: Inputs.Vector.TwoVectorsDto): number;
    /**
     * Checks if vector is finite for each number and returns a boolean array
     * <div>
     *  <img src="../assets/images/blockly-images/vector/finite.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector with possibly infinite values
     * @returns Vector array that contains boolean values for each number in the input
     * vector that identifies if value is finite (true) or infinite (false)
     */
    finite(inputs: Inputs.Vector.VectorDto): boolean[];
    /**
     * Checks if the vector is zero length
     * <div>
     *  <img src="../assets/images/blockly-images/vector/isZero.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to be checked
     * @returns Boolean that identifies if vector is zero length
     */
    isZero(inputs: Inputs.Vector.VectorDto): boolean;
    /**
     * Finds in between vector between two vectors by providing a fracture
     * <div>
     *  <img src="../assets/images/blockly-images/vector/lerp.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Information for finding vector between two vectors using a fraction
     * @returns Vector that is in between two vectors
     */
    lerp(inputs: Inputs.Vector.FractionTwoVectorsDto): number[];
    /**
     * Finds the maximum value in the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/max.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to be checked
     * @returns Largest number in the vector
     */
    max(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Finds the minimum value in the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/min.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to be checked
     * @returns Lowest number in the vector
     */
    min(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Multiple vector with the scalar
     * <div>
     *  <img src="../assets/images/blockly-images/vector/mul.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector with a scalar
     * @returns Vector that results from multiplication
     */
    mul(inputs: Inputs.Vector.VectorScalarDto): number[];
    /**
     * Negates the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/neg.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to negate
     * @returns Negative vector
     */
    neg(inputs: Inputs.Vector.VectorDto): number[];
    /**
     * Compute squared norm
     * <div>
     *  <img src="../assets/images/blockly-images/vector/normSquared.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector for squared norm
     * @returns Number that is squared norm
     */
    normSquared(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Norm of the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/norm.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to compute the norm
     * @returns Number that is norm of the vector
     */
    norm(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Normalize the vector into a unit vector, that has a length of 1
     * <div>
     *  <img src="../assets/images/blockly-images/vector/normalized.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to normalize
     * @returns Unit vector that has length of 1
     */
    normalized(inputs: Inputs.Vector.VectorDto): number;
    /**
     * Finds a point coordinates on the given distance ray that spans between the point along the direction vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/onRay.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Provide a point, vector and a distance for finding a point
     * @returns Vector representing point on the ray
     */
    onRay(inputs: Inputs.Vector.RayPointDto): number[];
    /**
     * Creates a vector of integers between 0 and maximum ceiling integer
     * <div>
     *  <img src="../assets/images/blockly-images/vector/range.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Max value for the range
     * @returns Vector containing items from 0 to max
     */
    range(inputs: Inputs.Vector.RangeMaxDto): number[];
    /**
     * Computes signed angle between two vectors and a reference. This will always return a smaller angle between two possible angles.
     * <div>
     *  <img src="../assets/images/blockly-images/vector/signedAngleBetween.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Contains information of two vectors and a reference vector
     * @returns Signed angle in degrees
     */
    signedAngleBetween(inputs: Inputs.Vector.TwoVectorsReferenceDto): number;
    /**
     * Creates a vector that contains numbers spanning between minimum and maximum values at a given step
     * <div>
     *  <img src="../assets/images/blockly-images/vector/span.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Span information containing min, max and step values
     * @returns Vector containing number between min, max and increasing at a given step
     */
    span(inputs: Inputs.Vector.SpanDto): number[];
    /**
     * Subtract two vectors
     * <div>
     *  <img src="../assets/images/blockly-images/vector/sub.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Two vectors
     * @returns Vector that result by subtraction two vectors
     */
    sub(inputs: Inputs.Vector.TwoVectorsDto): number[];
    /**
     * Sums the values of the vector
     * <div>
     *  <img src="../assets/images/blockly-images/vector/sum.png" alt="Blockly Image"/>
     * </div>
     * @param inputs Vector to sum
     * @returns Number that results by adding up all values in the vector
     */
    sum(inputs: Inputs.Vector.VectorDto): number;
}
`);
