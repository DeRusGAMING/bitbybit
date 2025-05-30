import { Camera, Ray } from '@babylonjs/core';
import { Base } from './base-inputs';

// tslint:disable-next-line: no-namespace
export namespace BabylonScene {

    export class SceneBackgroundColourDto {
        /**
         * Provide options without default values
         */
        constructor(colour?: string) {
            this.colour = colour;
        }
        /**
         * Hex colour string for the scene background colour
         * @default #ffffff
         */
        colour: Base.Color = '#ffffff';
    }
    export class PointLightDto {
        /**
         * Position of the point light
         * @default [0, 0, 0]
         */
        position: Base.Point3 = [0, 0, 0];
        /**
         * Intensity of the point light, value between 0 and 1
         * @default 0.5
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        intensity = 0.5;
        /**
         * Diffuse colour of the point light
         * @default #ffffff
         */
        diffuse: Base.Color = '#ffffff';
        /**
         * Specular colour of the point light
         * @default #ffffff
         */
        specular: Base.Color = '#ffffff';
        /**
         * Radius of the sphere mesh representing the light bulb. If 0 light gets created without the mesh
         * @default 0.1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        radius = 0.1;
        /**
         * The map size for shadow generator texture if shadows are enabled
         * @default 1024
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        shadowGeneratorMapSize?= 1024;
        /**
         * Enables shadows
         * @default true
         */
        enableShadows?= true;
        /**
         * Shadow darkness
         * @default 0
         * @minimum 0
         * @maximum 1
         * @step 0.1
         */
        shadowDarkness?= 0;
    }
    export class ActiveCameraDto {
        /**
         * Camera to activate
         * @default undefined
         */
        camera: Camera;
    }
    export class UseRightHandedSystemDto {
        /** Indicates to use right handed system
         * @default true
         */
        use: boolean = true;
    }
    export class DirectionalLightDto {
        /**
         * Direction of the directional light
         * @default [-1, -1, -1]
         */
        direction: Base.Vector3 = [-1, -1, -1];
        /**
         * Intensity of the point light, value between 0 and 1
         * @default 0.5
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        intensity = 0.5;
        /**
         * Diffuse colour of the point light
         * @default #ffffff
         */
        diffuse: Base.Color = '#ffffff';
        /**
         * Specular colour of the point light
         * @default #ffffff
         */
        specular: Base.Color = '#ffffff';
        /**
         * The map size for shadow generator texture if shadows are enabled
         * @default 1024
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        shadowGeneratorMapSize?= 1024;
        /**
         * Enables shadows
         * @default true
         */
        enableShadows?= true;
        /**
         * Shadow darkness
         * @default 0
         * @minimum 0
         * @maximum 1
         * @step 0.1
         */
        shadowDarkness?= 0;
    }
    export class CameraConfigurationDto {
        /**
         * Position of the point light
         * @default [10, 10, 10]
         * 
         */
        position: Base.Point3 = [10, 10, 10];
        /**
         * Look at
         */
        lookAt: Base.Point3 = [0, 0, 0];
        /**
         * Lets configure how far the camera can see
         * @default 1000
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        maxZ = 1000;
        /**
         * Panning sensibility. If large units are used for the model, this number needs to get larger
         * @default 0.1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        panningSensibility = 0.1;
        /**
         * Zoom precision of the wheel. If large units are used, this number needs to get smaller
         * @default 0.1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        wheelPrecision = 0.1;
    }
    export class SkyboxDto {
        /**
         * Skybox type
         * @default clearSky
         */
        skybox: Base.skyboxEnum;
        /**
         * Skybox size
         * @default 1000
         * @minimum 0
         * @maximum Infinity
         * @step 10
         */
        size = 1000;
        /**
         * Identifies if skybox texture should affect scene environment
         * @default 0.1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        blur = 0.1;
        /**
         * Identifies if skybox texture should affect scene environment
         * @default 0.7
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        environmentIntensity = 0.7;
    }

    export class PointerDto {
        statement_update: () => void;
    }
    export class FogDto {
        /**
         * Fog mode
         * @default 0
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        mode: number;
        /**
         * Fog color
         * @default #ffffff
         */
         color: Base.Color = '#ffffff';
        /**
         * Fog density
         * @default 0.1
         * @minimum 0
         * @maximum Infinity
         * @step 0.1
         */
        density: number = 0.1;
        /**
         * Fog start
         * @default 0
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        start: number;
        /**
         * Fog end
         * @default 1000
         * @minimum 0
         * @maximum Infinity
         * @step 1
         */
        end: number;
    }
}
