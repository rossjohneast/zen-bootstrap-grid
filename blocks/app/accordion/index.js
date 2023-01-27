import block_icons from '../block-icons';
import './parent.js';
const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InnerBlocks,
        InspectorControls,
        RichText }                  =   wp.blockEditor;
const { Panel, PanelBody, PanelRow,
        TextControl}                =   wp.components;

const attributes = {
    id: {
        type: 'string',
    },
    titleToggle:{
        type:               'string',
        source:             'text',
        default:            'Title text placeholder',
        selector:           '.accordion-button'
    }
}

registerBlockType( 'zenbsblocks/accordion-item', {
    title:                  __( 'Accordion item', 'zenbsblocks' ),
    description:            __( 'Accordion panel with any block content and clickable title text.', 'zenbsblocks' ),
    category:               'zenbsblocks',
    icon:                   block_icons.accordion,
    parent:                  ['zenbsblocks/accordion'],
    attributes,

    edit: ( props ) => {
        //Set the unique id of each element
        const { attributes, setAttributes, clientId } = props;
        const { id } = attributes;
        //const idTrimmed = props.attributes.id.substring(0, 6);
        if ( ! id ) {
            setAttributes( { id: clientId } );
        }
        return [
            <InspectorControls>
            <Panel>
                <PanelBody title={ __('Accordion panel', 'zenbsblocks') }>

                    <PanelRow>
                        <p>Configure the contents of the block here:</p>
                    </PanelRow>
               
                    <TextControl 
                        label={ __('Title text placeholder' , 'zenbsblocks') }
                        value={ props.attributes.titleToggle }    
                        onChange={ ( new_val ) => {
                            props.setAttributes({ titleToggle: new_val})
                        }} />

                </PanelBody>
            </Panel>

    </InspectorControls>,
        <div className="accordion-item">
            <h2 className="accordion-header"
                id={ "heading" + props.attributes.id }
            >
            <button 
            type="button"
                className="accordion-button" 
                data-bs-toggle="collapse" 
                data-bs-target={ "#panel-" + props.attributes.id }
                aria-expanded="false"
                aria-controls={ "panel-" + props.attributes.id }
                >

                        <RichText
                        placeholder={ __(
                            'Add button text and link',
                            'zenbsblocks'
                        ) }
                        value={ props.attributes.titleToggle }
                        onChange={ ( new_val ) =>
                            props.setAttributes( { titleToggle: new_val } )
                        }
                        allowedFormats={ [] }
                        keepPlaceholderOnFocus

                        />

                </button>  
            </h2>
            <div id={ "panel-" + props.attributes.id }
            className="accordion-collapse collapse" 
            data-parent=".wp-block-zenbsblocks-accordion"
            aria-labelledby={ "heading" + props.attributes.id } 
            >
                <div className="accordion-body">
                    <InnerBlocks 
                    />
                </div>
            </div>
        </div>
        ]
    },
    save: (  props ) => {
        //Save the unique block id from above
        const { attributes } = props;
        const { id } = attributes;
        return ( 
            <div className="accordion-item">
            <h2 className="accordion-header"
                id={ "heading" + props.attributes.id }
            >
                <button 
            type="button"
                className="accordion-button" 
                data-bs-toggle="collapse" 
                data-bs-target={ "#panel-" + props.attributes.id }
                aria-expanded="false"
                aria-controls={ "panel-" + props.attributes.id }
                >
 
                                    { props.attributes.titleToggle }

                        </button>  
           
                </h2>
                <div id={ "panel-" + props.attributes.id }
                className="accordion-collapse collapse" 
                data-parent=".wp-block-zenbsblocks-accordion"
                aria-labelledby={ "heading" + props.attributes.id } 
                >
                <div className="accordion-body">
                    <InnerBlocks.Content/>
                </div>
            </div>
        </div>
        
        )
    }
});