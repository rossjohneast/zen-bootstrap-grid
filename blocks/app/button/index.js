import block_icons from '../block-icons';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InspectorControls,
        RichText,
        URLInput         }          = wp.blockEditor;
const { Panel, PanelBody, 
        PanelRow, 
        Button,
        FormToggle,
        SelectControl  }            = wp.components;

import classnames from 'classnames';
import sharedAnimationsInspCnt from '../shared/animation/aos-insp-cnt.js';
registerBlockType( 'zenbsblocks/button', {
    title:                              __( 'Button', 'zenbsblocks' ),
    description:                        __( 'Button with support for multiple sizes, states, and more.', 'zenbsblocks' ),
    category:                           'zenbsblocks',
    icon:                               block_icons.button,
    attributes: {
        id:{
            type:   'number'
        },
        btnStyle:{
            type:               'string',
            default:            'btn-primary'
        },
        content:{
            type:               'array',
            source:             'children',
            selector:           '.btn',
            default:            'Button'
        },
        url:{
            type:               'string',
        },
        btnSize:{
            type:               'string',
        },
        btnWidth:{
            type:               'string',
        },
        href_target:{
            type:           'boolean',
            default:        false
        },
        href_rel:{
            type:           'boolean',
            default:        false
        },
        animation:{
            type:           'string',
        },
        animationOffset:{
            type:           'number',
            default: 120
        },
        animationDuration:{
            type:           'number',
            default: 400
        },
        animationDelay:{
            type:           'number',
        },
        animationEasing:{
            type:           'string',
        },
        animationOnce:{
            type:           'boolean',
        },
        animationMirror:{
            type:           'boolean',
        },
        animationPlacement:{
            type:           'string',
        },


    },
    edit: ( props, isSelected ) => {

        const toggle_btnlink_target = () => {
            props.setAttributes({
               href_target: !props.attributes.href_target,
               href_rel:!props.attributes.href_target
            })
        }

        return [
            <InspectorControls>
                    <Panel>
                        <PanelBody title={ __('Button Settings', 'zenbsblocks') }>

                        <PanelRow>
                            <div className="w-100">
                                <form
                                    className="URLInput-form w-100"
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <URLInput
                                        label={__('URL Search', 'zenbsblocks')}
                                        value={props.attributes.url}
                                        onChange={(new_val) =>
                                            props.setAttributes({ url: new_val })
                                        }
                                    />
                                    <Button type="submit" label={__('Add link', 'zenbsblocks')} isPrimary>Add link</Button>
                                </form>
                            </div>
                        </PanelRow>

                       

                        <PanelRow>
                            <div className="w-100">
                            <FormToggle id='zenbsblocks-card-target-toggle'
                                    checked={props.attributes.href_target}
                                    onChange={toggle_btnlink_target} /> &nbsp;
                                <label htmlFor="zenbsblocks-card-target-toggle">
                                    {__('Open link in new window?', 'zenbsblocks')}
                                </label>

                            </div>
                        </PanelRow>

                            <PanelRow  className={"components-panel-children-w-100"}>
                                <SelectControl
                                        label={ __('Button Style (Color)', 'zenbsblocks') }
                                        value={ props.attributes.btnStyle }  
                                        options={[
                                            {value: 'btn-primary', label: 'Default'},
                                            {value: 'btn-primary', label: 'Primary'},
                                            {value: 'btn-secondary', label: 'Secondary'},
                                            {value: 'btn-success', label: 'Success'},
                                            {value: 'btn-danger', label: 'Danger'},
                                            {value: 'btn-warning', label: 'Warning'},
                                            {value: 'btn-info', label: 'Info'},
                                            {value: 'btn-light', label: 'Light'},
                                            {value: 'btn-dark', label: 'Dark'},
                                            {value: 'btn-white', label: 'White'},
                                            {value: 'btn-outline-primary', label: 'Outline Primary'},
                                            {value: 'btn-outline-secondary', label: 'Outline Secondary'},
                                            {value: 'btn-outline-success', label: 'Outline Success'},
                                            {value: 'btn-outline-danger', label: 'Outline Danger'},
                                            {value: 'btn-outline-warning', label: 'Outline Warning'},
                                            {value: 'btn-outline-info', label: 'Outline Info'},
                                            {value: 'btn-outline-light', label: 'Outline Light'},
                                            {value: 'btn-outline-dark', label: 'Outline Dark'},
                                            {value: 'btn-outline-white', label: 'Outline White'},
                                        ]}
                                        onChange={ (new_val) => {
                                            props.setAttributes({ btnStyle: new_val})
                                        }} />
                            </PanelRow>

                            <PanelRow  className={"components-panel-children-w-100"}>
                                <SelectControl
                                        label={ __('Button Size', 'zenbsblocks') }
                                        value={ props.attributes.btnSize }  
                                        options={[
                                            {value: '', label: 'Default'},
                                            {value: 'btn-lg', label: 'Large'},
                                            {value: 'btn-sm', label: 'Small'},
                                        ]}
                                        onChange={ (new_val) => {
                                            props.setAttributes({ btnSize: new_val})
                                        }} />
                            </PanelRow>

                            <PanelRow  className={"components-panel-children-w-100"}>
                                <SelectControl
                                        label={ __('Button Width', 'zenbsblocks') }
                                        value={ props.attributes.btnWidth }  
                                        options={[
                                            {value: '', label: 'Default'},
                                            {value: 'btn-block', label: '100%'},
                                        ]}
                                        onChange={ (new_val) => {
                                            props.setAttributes({ btnWidth: new_val})
                                        }} />
                            </PanelRow>

                        </PanelBody>
                   
                   
                         </Panel>
            </InspectorControls>,
            
            <span className={ props.className }>
                    <RichText
                        className={
                            classnames(
                            'btn',
                                [`${props.attributes.btnStyle !== undefined ? `${props.attributes.btnStyle}` : ''}`],
                                [`${props.attributes.btnSize !== undefined ? `${props.attributes.btnSize}` : ''}`],
                                [`${props.attributes.btnWidth !== undefined ? `${props.attributes.btnWidth}` : ''}`],
                                )}

                        placeholder={ __(
                            'Add button text and link',
                            'zenbsblocks'
                        ) }
                        value={ props.attributes.content }
                        onChange={ ( new_val ) =>
                            props.setAttributes( { content: new_val } )
                        }
                        allowedFormats={ [] }
                        keepPlaceholderOnFocus

                    />
                    
            </span>
          
        ];
    },
    save: ( props ) => {

        return(
            <a 
            className={

                classnames(
                'btn',
                    [`${props.attributes.btnStyle !== undefined ? `${props.attributes.btnStyle}` : ''}`],
                    [`${props.attributes.btnSize !== undefined ? `${props.attributes.btnSize}` : ''}`],
                    [`${props.attributes.btnWidth !== undefined ? `${props.attributes.btnWidth}` : ''}`],
                    )}
            href={ props.attributes.url }
            target={ props.attributes.href_target ? '_blank' : null }
            rel={ props.attributes.href_rel ? 'noopener' : null }
            
            >
                { props.attributes.content }
            </a>
        );
    
    }
});