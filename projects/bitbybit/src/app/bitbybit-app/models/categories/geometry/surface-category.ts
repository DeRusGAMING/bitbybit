import { ResourcesService } from '../../../../../resources';

export function surfaceCategory() {
    const resources = ResourcesService.getResources();
    return `
    <category name="${resources.block_toolbox_category_geom_surface}"  categorystyle="geometry_category">
        <block type="babylon_draw_surface">
            <value name="Colour">
                <shadow type="colour_picker">
                    <field name="COLOUR">#555</field>
                </shadow>
            </value>
            <value name="Opacity">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="Updatable">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
        </block>
        <block type="babylon_draw_surfaces">
            <value name="Colour">
                <shadow type="colour_picker">
                    <field name="COLOUR">#555</field>
                </shadow>
            </value>
            <value name="Opacity">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="Updatable">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
        </block>
        <block type="babylon_draw_surfaces_colours">
            <value name="Opacity">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="Updatable">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
        </block>
        <category name="${resources.block_toolbox_category_create}"   categorystyle="geometry_category">
            <block type="verb_geometry_nurbs_surface_by_corners">
            </block>
            <block type="verb_geometry_nurbs_surface_by_lofting_curves">
            </block>
            <block type="verb_geometry_nurbs_surface_by_knots_control_points_weights">
            </block>
            <category name="${resources.block_toolbox_category_geom_sphere}" categorystyle="geometry_category">
                <block type="verb_geometry_spherical_surface">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_cone}" categorystyle="geometry_category">
                <block type="verb_geometry_conical_surface">
                </block>
                <block type="verb_geometry_conical_surface">
                    <value name="Axis">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="XAxis">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="Base">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="Height">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="Radius">
                        <shadow type="math_number">
                            <field name="NUM">0.5</field>
                        </shadow>
                    </value>
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_cylinder}" categorystyle="geometry_category">
                <block type="verb_geometry_cylindrical_surface">
                </block>
                <block type="verb_geometry_cylindrical_surface">
                    <value name="Axis">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="XAxis">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="Base">
                        <shadow type="base_geometry_point">
                            <value name="X">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Y">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                            <value name="Z">
                                <shadow type="math_number">
                                    <field name="NUM">0</field>
                                </shadow>
                            </value>
                        </shadow>
                    </value>
                    <value name="Height">
                        <shadow type="math_number">
                            <field name="NUM">2</field>
                        </shadow>
                    </value>
                    <value name="Radius">
                        <shadow type="math_number">
                            <field name="NUM">0.5</field>
                        </shadow>
                    </value>
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_extrusion}" categorystyle="geometry_category">
                <block type="verb_geometry_extruded_surface">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_revolution}" categorystyle="geometry_category">
                <block type="verb_geometry_revolved_surface">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_sweep}" categorystyle="geometry_category">
                <block type="verb_geometry_swept_surface">
                </block>
            </category>
        </category>
        <category name="${resources.block_toolbox_category_apply}"  categorystyle="geometry_category">
            <block type="verb_geometry_nurbs_surface_normal">
            </block>
            <block type="verb_geometry_nurbs_surface_point">
            </block>
            <block type="verb_geometry_nurbs_surface_closest_param">
            </block>
            <block type="verb_geometry_nurbs_surface_closest_point">
            </block>
            <block type="verb_geometry_nurbs_surface_boundaries">
            </block>
            <block type="verb_geometry_nurbs_surface_isocurve">
            </block>
            <block type="verb_geometry_nurbs_surface_isocurves">
            </block>
            <block type="verb_geometry_nurbs_surface_isocurves_subdivision">
                <value name="IsocurveSegments">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="IncludeLast">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
                <value name="UseV">
                    <shadow type="logic_boolean">
                        <field name="BOOL">FALSE</field>
                    </shadow>
                </value>
            </block>
            <block type="verb_geometry_nurbs_surface_reverse">
            </block>
            <block type="verb_geometry_nurbs_surface_split">
            </block>
            <block type="verb_geometry_nurbs_surface_transform">
            </block>
            <block type="verb_geometry_nurbs_surface_clone">
            </block>
            <block type="verb_geometry_nurbs_surface_control_points">
            </block>
            <block type="verb_geometry_nurbs_surface_weights">
            </block>
            <block type="verb_geometry_nurbs_surface_degree_u">
            </block>
            <block type="verb_geometry_nurbs_surface_degree_v">
            </block>
            <block type="verb_geometry_nurbs_surface_knots_u">
            </block>
            <block type="verb_geometry_nurbs_surface_knots_v">
            </block>
            <block type="verb_geometry_nurbs_surface_domain_u">
            </block>
            <block type="verb_geometry_nurbs_surface_domain_v">
            </block>
            <block type="verb_geometry_nurbs_surface_derivatives">
            </block>
            <category name="${resources.block_toolbox_category_geom_sphere}"  categorystyle="geometry_category">
                <block type="verb_geometry_spherical_surface_center">
                </block>
                <block type="verb_geometry_spherical_surface_radius">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_cone}"  categorystyle="geometry_category">
                <block type="verb_geometry_conical_surface_axis">
                </block>
                <block type="verb_geometry_conical_surface_x_axis">
                </block>
                <block type="verb_geometry_conical_surface_base">
                </block>
                <block type="verb_geometry_conical_surface_radius">
                </block>
                <block type="verb_geometry_conical_surface_height">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_cylinder}"  categorystyle="geometry_category">
                <block type="verb_geometry_cylindrical_surface_axis">
                </block>
                <block type="verb_geometry_cylindrical_surface_x_axis">
                </block>
                <block type="verb_geometry_cylindrical_surface_base">
                </block>
                <block type="verb_geometry_cylindrical_surface_radius">
                </block>
                <block type="verb_geometry_cylindrical_surface_height">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_extrusion}"  categorystyle="geometry_category">
                <block type="verb_geometry_extruded_surface_profile">
                </block>
                <block type="verb_geometry_extruded_surface_direction">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_revolution}"  categorystyle="geometry_category">
                <block type="verb_geometry_revolved_surface_profile">
                </block>
                <block type="verb_geometry_revolved_surface_axis">
                </block>
                <block type="verb_geometry_revolved_surface_center">
                </block>
                <block type="verb_geometry_revolved_surface_angle">
                </block>
            </category>
            <category name="${resources.block_toolbox_category_geom_sweep}" categorystyle="geometry_category">
                <block type="verb_geometry_swept_surface_profile">
                </block>
                <block type="verb_geometry_swept_surface_rail">
                </block>
            </category>
        </category>
    </category>
`;
}
